# Deployment Guide for Anvaya

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### 3. Build for Production
```bash
npm run build
npm run start
```

## Deployment to Vercel

Anvaya is optimized for deployment on Vercel. Here are the options:

### Option A: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

Vercel will automatically redeploy whenever you push changes to your main branch.

### Option B: Deploy from v0

1. In v0, click the three dots menu → "Download ZIP"
2. Extract the ZIP file
3. In Vercel dashboard, select "New Project"
4. Upload the project folder
5. Click "Deploy"

### Option C: Command Line Deployment

1. Install the Vercel CLI:
```bash
npm i -g vercel
```

2. Run the deploy command:
```bash
vercel
```

3. Follow the prompts to link your Vercel account and deploy

## Environment Variables

Anvaya doesn't require any environment variables for basic functionality. If you plan to add features like email signup or analytics, you may need to add:

- `NEXT_PUBLIC_ANALYTICS_ID` — for analytics tracking
- `CONTACT_EMAIL` — for pre-order inquiries (if implemented)

Add these in Vercel Settings → Environment Variables.

## Build and Performance

### Build Output

The project builds to `/vercel/share/v0-project/.next`:
- Static HTML for all product pages (pre-rendered at build time)
- Optimized images with Next.js Image component
- CSS bundled with Tailwind CSS

### Performance Optimization

✓ All product pages are pre-rendered (static generation)  
✓ Images are optimized and lazy-loaded  
✓ CSS is minimal and tree-shaken  
✓ JavaScript is minimal — mostly server components  
✓ No third-party scripts affecting load time  

### Expected Performance Metrics

- **First Contentful Paint**: < 0.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## Post-Deployment

### 1. Verify Deployment

- Check that all pages load correctly
- Test responsive design on mobile and tablet
- Verify images load properly
- Click through all product cards and detail pages

### 2. Monitor Performance

- Use [Web Vitals](https://web.dev/vitals/) to monitor performance
- Vercel provides Analytics dashboard for deployment metrics
- Monitor Core Web Vitals in Google Search Console

### 3. Set Up Analytics (Optional)

To track user behavior:

1. Add your analytics ID in Vercel Settings
2. Uncomment or add analytics tracking in `app/layout.tsx`
3. Integration options:
   - Vercel Analytics (built-in, no configuration needed)
   - Google Analytics
   - Plausible
   - Other privacy-focused options

### 4. Domain Configuration

To use a custom domain:

1. In Vercel project settings, go to "Domains"
2. Add your domain name
3. Update your domain registrar's DNS settings with Vercel's nameservers
4. Vercel automatically handles SSL certificates

## Updating Content

### Adding a New Product

1. Edit `/lib/products.ts`
2. Add a new product object to the `products` array
3. Create two images:
   - `/public/images/products/[product-id].jpg`
   - `/public/images/portraits/[product-id].jpg`
4. Commit and push changes
5. Vercel automatically redeploys

### Updating Product Information

1. Edit `/lib/products.ts`
2. Modify the product details you want to change
3. Push to GitHub
4. Vercel automatically rebuilds and redeploys

### Updating Colors or Typography

1. Edit `/app/globals.css` for colors or base styles
2. Edit `/app/layout.tsx` for typography imports
3. Push changes
4. Vercel automatically rebuilds

## Troubleshooting

### Images Not Loading

- Check that images exist in `/public/images/products/` and `/public/images/portraits/`
- Verify filenames match product IDs exactly
- Clear browser cache and rebuild

### Build Fails

```bash
# Clear build cache
rm -rf .next

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

### Styling Issues

- Clear `.next` folder
- Ensure Tailwind config is correct
- Check that CSS custom properties are defined in globals.css

## Environment Setup Checklist

- [ ] GitHub repository created and code pushed
- [ ] Vercel account created
- [ ] Repository connected to Vercel
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate enabled
- [ ] Analytics configured (optional)
- [ ] Email forwarding set up for inquiries (if needed)
- [ ] Backup strategy defined

## Monitoring and Maintenance

### Weekly
- Check for any error logs in Vercel dashboard
- Verify all product pages load correctly

### Monthly
- Monitor performance metrics
- Update dependencies if needed (`npm update`)
- Review analytics data

### Quarterly
- Audit product information for accuracy
- Update images if needed
- Review and update testimonials or reviews

## Rollback Procedure

If something goes wrong after deployment:

1. In Vercel dashboard, go to "Deployments"
2. Find the last stable deployment
3. Click the three dots menu
4. Select "Promote to Production"

Your site will roll back to the previous working version instantly.

## Getting Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org](https://nextjs.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vercel Support**: [vercel.com/help](https://vercel.com/help)

---

**Last Updated**: March 20, 2026
