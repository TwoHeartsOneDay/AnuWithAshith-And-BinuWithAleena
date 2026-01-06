# 🚀 Deployment Guide

## Option 1: GitHub Pages (Recommended)

### Automatic Deployment with GitHub Actions

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Twin wedding website"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it `MyWed` (or your preferred name)
   - Don't initialize with README (we already have one)

3. **Link and Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/MyWed.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

5. **Access Your Site**:
   - Your website will be live at: `https://YOUR_USERNAME.github.io/MyWed/`
   - It may take 2-3 minutes for the first deployment

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

This will:
1. Build the production files
2. Deploy to `gh-pages` branch
3. Make it available at your GitHub Pages URL

## Option 2: Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository for automatic deployments.

### Netlify Configuration

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Option 3: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

Or connect via [Vercel Dashboard](https://vercel.com) for automatic Git deployments.

## Option 4: Custom Hosting

### Build the project:
```bash
npm run build
```

### Upload contents of `dist/` folder to your hosting:
- Via FTP/SFTP
- Via cPanel File Manager
- Via hosting provider's deployment tools

### Important Notes:
- Make sure to upload all files from `dist/`
- The website should be served from the root or a subdirectory matching your `vite.config.js` base path
- If using a subdirectory, update `base` in `vite.config.js`:
  ```js
  export default defineConfig({
    plugins: [react()],
    base: '/your-subdirectory/',
  })
  ```

## Updating the Website

### For GitHub Pages (Automatic):
```bash
git add .
git commit -m "Update wedding details"
git push
```
The site will automatically rebuild and deploy.

### For Manual Deployment:
```bash
npm run build
npm run deploy
```

## Custom Domain Setup

### For GitHub Pages:

1. **Add CNAME file** in `public/` folder:
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `YOUR_USERNAME.github.io`

3. **Update Repository Settings**:
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check that `base` in `vite.config.js` matches your deployment path.

### Issue: Assets not loading
**Solution**: Ensure all asset paths are relative and the base path is correct.

### Issue: GitHub Actions failing
**Solution**: 
- Check that workflow file is in `.github/workflows/deploy.yml`
- Verify GitHub Pages is enabled in repository settings
- Check Actions tab for error details

### Issue: 404 on page refresh
**Solution**: Configure your hosting to redirect all routes to `index.html` (SPA configuration).

## Performance Optimization

Before deployment, consider:

1. **Image Optimization**: Compress any images you add
2. **Lazy Loading**: Already implemented for scroll animations
3. **Code Splitting**: Handled automatically by Vite
4. **Caching**: Configured in production build

## Testing Before Deployment

```bash
# Build production version
npm run build

# Preview production build locally
npm run preview
```

Visit the preview URL to test the production build before deploying.

## Need Help?

- Check the [README.md](README.md) for general information
- Review [Vite documentation](https://vitejs.dev/guide/static-deploy.html)
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)

---

**Happy Deploying! 🎉💕**
