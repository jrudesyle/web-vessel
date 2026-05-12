import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3030;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint for any website with theme injection
app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url || 'https://web.telegram.org/k';
  const theme = req.query.theme || 'default';
  
  try {
    const response = await fetch(targetUrl);
    let html = await response.text();
    
    // Load the selected theme CSS
    const themePath = path.join(__dirname, 'public', 'themes', `${theme}.css`);
    let themeCSS = '';
    
    if (fs.existsSync(themePath)) {
      themeCSS = `<link rel="stylesheet" href="/themes/${theme}.css">`;
    }
    
    // Inject theme CSS and custom JS
    const injection = `
      ${themeCSS}
      <script src="/inject.js"></script>
    `;
    
    // Try to inject before </head>, fallback to before </body>
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${injection}</head>`);
    } else if (html.includes('</body>')) {
      html = html.replace('</body>', `${injection}</body>`);
    } else {
      html = html + injection;
    }
    
    res.send(html);
  } catch (err) {
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error - web-vessel</title>
        <style>
          body {
            font-family: monospace;
            background: #0D0D0D;
            color: #00ff00;
            padding: 2rem;
            text-align: center;
          }
          h1 { margin-bottom: 1rem; }
          .error { 
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid #ff0000;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem auto;
            max-width: 600px;
          }
          a {
            color: #00ff00;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <h1>🚢 web-vessel - Error Loading App</h1>
        <div class="error">
          <p><strong>Failed to load:</strong> ${targetUrl}</p>
          <p><strong>Error:</strong> ${err.message}</p>
          <p style="margin-top: 1rem; color: #888;">
            Some sites block being loaded in proxies/iframes.
            Try adding this site to your allowlist or use a browser extension instead.
          </p>
        </div>
        <p><a href="/">← Back to Launcher</a></p>
      </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`🚢 web-vessel running at http://localhost:${PORT}`);
  console.log(`   Open http://localhost:${PORT} to launch apps`);
});
