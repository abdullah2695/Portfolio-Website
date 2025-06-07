# Deployment Guide for Portfolio Website

This guide provides detailed instructions for deploying your portfolio website to various hosting platforms.

## Table of Contents

1. [Preparing for Deployment](#preparing-for-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [Vercel Deployment](#vercel-deployment)
4. [GitHub Pages Deployment](#github-pages-deployment)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Post-Deployment Checks](#post-deployment-checks)

## Preparing for Deployment

Before deploying your website, ensure you have:

1. Generated a production build:
   ```bash
   cd /path/to/portfolio-website
   pnpm run build
   ```

2. Tested the build locally:
   ```bash
   cd /path/to/portfolio-website
   pnpm run preview
   ```

3. Updated all content in the data files:
   - `src/data/personalInfo.js`
   - `src/data/experience.js`
   - `src/data/siteConfig.js`

4. Verified that the Formspree endpoint in `siteConfig.js` is correct.

## Netlify Deployment

Netlify offers a straightforward deployment process with continuous deployment from Git.

### Option 1: Deploy via Netlify UI

1. Create an account on [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub/GitLab/Bitbucket account
4. Select your portfolio website repository
5. Configure build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - (Optional) Add environment variables if needed
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   cd /path/to/portfolio-website
   netlify init
   ```

4. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

### Netlify Configuration File

Create a `netlify.toml` file in the root of your project:

```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Vercel Deployment

Vercel is optimized for React applications and offers a seamless deployment experience.

### Option 1: Deploy via Vercel UI

1. Create an account on [Vercel](https://vercel.com/)
2. Click "New Project"
3. Import your Git repository
4. Configure project:
   - Framework Preset: Vite
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - (Optional) Add environment variables if needed
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your site:
   ```bash
   cd /path/to/portfolio-website
   vercel --prod
   ```

### Vercel Configuration File

Create a `vercel.json` file in the root of your project:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## GitHub Pages Deployment

GitHub Pages is a free hosting service provided by GitHub.

### Setup for GitHub Pages

1. Install the gh-pages package:
   ```bash
   cd /path/to/portfolio-website
   pnpm add -D gh-pages
   ```

2. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "pnpm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update the `vite.config.js` file to include the base path:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // other config options...
   });
   ```

4. Deploy to GitHub Pages:
   ```bash
   pnpm run deploy
   ```

5. Configure GitHub repository:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set the source to the gh-pages branch

## Custom Domain Setup

### Netlify Custom Domain

1. Go to your site dashboard on Netlify
2. Navigate to "Domain settings"
3. Click "Add custom domain"
4. Enter your domain name and follow the verification steps
5. Update your DNS settings with your domain registrar:
   - Add a CNAME record pointing to your Netlify site URL
   - Or set up Netlify DNS for complete management

### Vercel Custom Domain

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" > "Domains"
3. Add your domain and follow the verification steps
4. Update your DNS settings with your domain registrar:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or set up Vercel DNS for complete management

### GitHub Pages Custom Domain

1. Create a file named `CNAME` in the `public` directory with your domain:
   ```
   yourdomain.com
   ```

2. Update your DNS settings with your domain registrar:
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to `yourusername.github.io`

3. Deploy your site again:
   ```bash
   pnpm run deploy
   ```

4. Verify in your repository settings under GitHub Pages

## Post-Deployment Checks

After deploying your website, perform these checks:

1. **Functionality Testing**:
   - Test all navigation links
   - Verify the contact form works correctly
   - Check that the form toggle functionality works
   - Test responsiveness on different devices

2. **Performance Testing**:
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/) to check performance
   - Optimize images if needed
   - Verify loading times are acceptable

3. **SEO Verification**:
   - Check that meta tags are correctly set
   - Verify that the site is indexable by search engines
   - Test social media preview cards

4. **Security Checks**:
   - Ensure HTTPS is enabled
   - Verify that the Formspree integration is secure
   - Check for any exposed sensitive information

## Troubleshooting

### Common Issues and Solutions

1. **Blank Page After Deployment**:
   - Check if the base path is correctly set in `vite.config.js`
   - Verify that all assets are being loaded correctly

2. **Styling Issues**:
   - Ensure that all CSS files are being properly bundled
   - Check for any missing assets or fonts

3. **Form Not Working**:
   - Verify the Formspree endpoint is correct
   - Check browser console for any CORS errors

4. **Routing Problems**:
   - Ensure redirect rules are properly configured
   - Check that the hosting platform supports SPA routing

For additional help, refer to the documentation of your chosen hosting platform or create an issue in the project repository.

