# web-vessel

🚢 A Progressive Web App launcher that wraps websites with custom themes.

**Live Demo:** https://jrudesyle.github.io/web-vessel/

## Features

- 🚀 **App Launcher** - Pre-configured popular apps
- 🎨 **6 Themes** - Matrix, Dark, Discord, Notion, Gmail, Default
- 🌐 **Custom URLs** - Launch any website
- 🪟 **Multi-Window** - Open multiple apps simultaneously
- 📱 **PWA Support** - Install as standalone app

## Quick Start

### Option 1: Use Online (Limited)

Visit: **https://jrudesyle.github.io/web-vessel/**

⚠️ **Note:** Many sites block iframe embedding (CORS/CSP). For full functionality, run locally.

### Option 2: Run Locally (Full Features)

```bash
git clone https://github.com/jrudesyle/web-vessel.git
cd web-vessel
npm install
npm run dev
```

Open: **http://localhost:3030**

## Why Run Locally?

The **local server** includes a proxy that:
- ✅ Bypasses CORS/iframe restrictions
- ✅ Injects custom CSS/JS into any site
- ✅ Works with Telegram, WhatsApp, Discord, etc.

GitHub Pages **cannot proxy**, so many sites won't load there.

## Themes

| Theme | Description |
|-------|-------------|
| **Matrix** | Green glow, dark background, monospace |
| **Dark** | Simple dark mode |
| **Discord** | Discord-style gray/blue |
| **Notion** | Clean white with subtle borders |
| **Gmail** | Google Material Design |
| **Default** | Minimal improvements |

## Apps Included

- 💬 Telegram (Matrix theme)
- 📱 WhatsApp (Dark)
- 🎮 Discord (Discord)
- 📝 Notion (Notion)
- ✉️ Gmail (Gmail)
- 🐦 Twitter (Dark)

## Customization

See [full documentation](README.md) for:
- Adding new apps
- Creating custom themes
- JavaScript injection

## Deploy Your Own

1. Fork this repo
2. Enable GitHub Pages (Settings → Pages → Source: `main` branch → `/public` folder)
3. Visit `https://yourusername.github.io/web-vessel/`

Or deploy to Vercel/Netlify with the Express server for full proxy support.

## License

MIT
