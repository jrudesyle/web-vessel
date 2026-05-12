# web-vessel

A Progressive Web App (PWA) launcher that wraps any website with custom themes and styling.

## Features

- 🚀 **App Launcher** - Pre-configured popular apps (Telegram, WhatsApp, Discord, Notion, Gmail, Twitter)
- 🎨 **Multiple Themes** - Matrix, Dark, Discord-style, Notion-style, Gmail-style, Default
- 🌐 **Custom URLs** - Launch any website with any theme
- 🪟 **Multi-Window** - Open multiple apps simultaneously in separate windows
- 📱 **PWA Support** - Install as standalone app (no Electron/Tauri needed)
- ⚡ **Zero Client Installs** - Just a browser required

## Quick Start

```bash
cd ~/projects/web-vessel
npm install
npm run dev
```

Open: **http://localhost:3030**

## How to Use

### 1. Launch Pre-configured Apps

Click any app card on the launcher:
- 💬 Telegram (Matrix theme)
- 📱 WhatsApp (Dark theme)
- 🎮 Discord (Discord theme)
- 📝 Notion (Notion theme)
- ✉️ Gmail (Gmail theme)
- 🐦 Twitter/X (Dark theme)

### 2. Launch Custom URL

1. Enter any URL in the "Custom URL" section
2. Select a theme
3. Click "Launch"

### 3. Multi-Window Support

Each launch opens in a **new window**, so you can:
- Run Telegram + WhatsApp side-by-side
- Have multiple themed versions of the same app
- Keep work/personal accounts separate

## Themes

| Theme | Description | Best For |
|-------|-------------|----------|
| **Matrix** | Green glow, dark background, monospace | Telegram, terminal-style apps |
| **Dark** | Simple dark mode | Any app |
| **Discord** | Discord-style gray/blue | Chat apps |
| **Notion** | Clean white with subtle borders | Productivity apps |
| **Gmail** | Google Material Design | Google services |
| **Default** | Minimal, just better scrollbars | Respectful theming |

## Customization

### Add a New App

Edit `public/apps.js`:

```javascript
{
  id: 'slack',
  name: 'Slack',
  url: 'https://app.slack.com',
  icon: '💼',
  theme: 'dark',
  description: 'Slack workspace'
}
```

### Create a New Theme

1. Create `public/themes/mytheme.css`
2. Add your CSS (see existing themes for examples)
3. Add to `public/apps.js` themes object:

```javascript
export const themes = {
  // ...
  mytheme: '/themes/mytheme.css'
};
```

### Custom JavaScript

Edit `public/inject.js` to add behavior to all apps:

```javascript
// Auto-scroll, keyboard shortcuts, etc.
console.log('Custom JS loaded for', window.location.hostname);
```

## Deployment

Deploy to any static host (Vercel, Netlify, Cloudflare Pages):

1. Push to GitHub
2. Connect to your host
3. Build command: `npm install`
4. Publish directory: `public`
5. Start command: `npm start`

Access from anywhere: **https://vessel.yourdomain.com**

## Limitations

- Some sites block iframes/proxying (X-Frame-Options, CSP headers)
- Login sessions may not persist across reloads for some sites
- Full native features (dock badges, system notifications) require actual native wrappers

## Use Cases

- ✅ Telegram Web with Matrix theme
- ✅ Multiple WhatsApp/Telegram accounts
- ✅ Skinning web apps to match your aesthetic
- ✅ Quick access to web services without browser tabs
- ✅ Custom shortcuts and automation via inject.js

## License

MIT
