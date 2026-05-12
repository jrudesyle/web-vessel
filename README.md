# web-vessel

A Progressive Web App (PWA) that wraps websites with custom CSS/JS injection.

## Features

- 🌐 Wrap any website as a standalone PWA
- 🎨 Custom CSS injection (Matrix-style Telegram theme included)
- ⚡ JavaScript injection support
- 📱 Works on desktop and mobile
- 🔒 No client installs required (just a browser)

## Quick Start

```bash
cd ~/projects/web-vessel
npm install
npm run dev
```

Open: `http://localhost:3030`

## Install as PWA

1. Visit `http://localhost:3030` in Chrome/Edge
2. Click the install icon in the address bar
3. You now have a standalone "app" with Matrix theme!

## Customization

- **CSS Theme**: Edit `public/custom.css`
- **JavaScript**: Edit `public/inject.js`
- **Target Site**: Change URL in `public/index.html` iframe src

## How It Works

1. Express server proxies the target website (e.g., Telegram Web)
2. Injects custom CSS/JS into the proxied HTML
3. Serves as a PWA with offline support via service worker
4. User installs as standalone app (no Electron/Tauri needed)

## Limitations

- Some sites block being loaded in iframes (X-Frame-Options, CSP)
- Telegram Web may detect proxying and require login again
- Full native features (dock badges, touch bar) require actual native wrapper

## Deployment

Deploy to Vercel/Netlify/Cloudflare Pages for remote access:

```bash
# Add your domain
# Point to this repo
# Access from anywhere as https://vessel.yourdomain.com
```

## License

MIT
