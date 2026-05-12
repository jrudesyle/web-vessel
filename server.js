import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3030;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint for Telegram Web (to bypass CORS/CSP)
app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url || 'https://web.telegram.org/k';
  
  try {
    const response = await fetch(targetUrl);
    let html = await response.text();
    
    // Inject our custom CSS
    const cssInjection = `
      <link rel="stylesheet" href="/custom.css">
      <script src="/inject.js"></script>
    `;
    html = html.replace('</head>', `${cssInjection}</head>`);
    
    res.send(html);
  } catch (err) {
    res.status(500).send(`Error loading ${targetUrl}: ${err.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`🚢 web-vessel running at http://localhost:${PORT}`);
});
