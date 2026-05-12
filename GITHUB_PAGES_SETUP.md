# Enable GitHub Pages

## Steps (Manual - One Time Setup)

1. Go to: https://github.com/jrudesyle/web-vessel/settings/pages

2. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   
3. Click "Save"

4. The GitHub Action will automatically deploy on push

5. Your site will be live at:
   **https://jrudesyle.github.io/web-vessel/**

## Status

Check deployment status:
https://github.com/jrudesyle/web-vessel/actions

Once the action completes (green checkmark), your site is live!

---

## Alternative: Deploy from /public folder

If you prefer classic Pages deployment:

1. Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main`
4. Folder: `/public`
5. Save

But GitHub Actions (current setup) is recommended for auto-deployment.
