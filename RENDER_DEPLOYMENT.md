# Deploying Portfolio to Render

This guide will help you deploy your portfolio application to Render with both frontend and backend services.

## Prerequisites

1. GitHub account (already set up ✓)
2. Render account - Sign up at https://render.com
3. Your code pushed to GitHub (already done ✓)

## Deployment Steps

### Option 1: Using render.yaml (Blueprint - Recommended)

1. **Connect Repository to Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Blueprint"
   - Connect your GitHub account
   - Select the repository: `aravindant-005/Aravindan_Portfolio`
   - Render will automatically detect the `render.yaml` file

2. **Configure Environment Variables**
   
   For the **Backend Service** (portfolio-backend):
   - Add environment variable `GMAIL_USER`: `aravindant005@gmail.com`
   - Add environment variable `GMAIL_APP_PASSWORD`: `odkv bdcf dxmo lnmu`
   - Add environment variable `NODE_ENV`: `production`

3. **Deploy**
   - Click "Apply" to deploy both services
   - Wait for the build to complete (5-10 minutes)

### Option 2: Manual Deployment (Alternative)

#### Deploy Backend Service First:

1. **Create Backend Web Service**
   - Go to Render Dashboard → Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `portfolio-backend`
     - **Runtime**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `node server.cjs`
     - **Instance Type**: `Free`

2. **Add Environment Variables** (Backend):
   - `GMAIL_USER`: `aravindant005@gmail.com`
   - `GMAIL_APP_PASSWORD`: `odkv bdcf dxmo lnmu`
   - `NODE_ENV`: `production`

3. **Deploy Backend**
   - Click "Create Web Service"
   - Note the URL (e.g., `https://portfolio-backend-xxxx.onrender.com`)

#### Deploy Frontend Static Site:

1. **Create Static Site**
   - Go to Render Dashboard → Click "New +" → "Static Site"
   - Connect the same GitHub repository
   - Configure:
     - **Name**: `portfolio-frontend`
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`

2. **Update Frontend API URLs** (if needed):
   - If your frontend makes API calls to the backend, update the URLs to use the backend Render URL

3. **Deploy Frontend**
   - Click "Create Static Site"
   - Your site will be available at `https://portfolio-frontend-xxxx.onrender.com`

## Important Notes

### Security Considerations

⚠️ **IMPORTANT**: Your Gmail app password is currently hardcoded. For production:
1. In Render Dashboard, add these as **Environment Variables**
2. Never commit sensitive credentials to git
3. Remove hardcoded credentials from `server.cjs` after setting environment variables

### Free Tier Limitations

- Free tier services spin down after 15 minutes of inactivity
- First request after inactivity may take 30-50 seconds (cold start)
- Consider upgrading for production use

### Auto-Deploy

- Render will automatically redeploy when you push to the `main` branch
- You can disable auto-deploy in service settings if needed

## Testing Deployment

1. **Test Backend**:
   - Visit: `https://your-backend-url.onrender.com`
   - Should see server running or send a test email through the contact form

2. **Test Frontend**:
   - Visit: `https://your-frontend-url.onrender.com`
   - Navigate through all sections
   - Test contact form functionality

## Custom Domain (Optional)

1. Go to your Static Site settings in Render
2. Click "Custom Domains"
3. Follow instructions to add your domain
4. Update DNS records with your domain provider

## Troubleshooting

### Build Fails
- Check build logs in Render Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Backend API Not Working
- Check environment variables are set correctly
- Verify CORS settings allow your frontend domain
- Check backend service logs

### Frontend Not Loading
- Verify build command completed successfully
- Check that `dist` folder is being published
- Verify all asset paths are correct

## Support

For issues, check:
- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com

---

**Your Repository**: https://github.com/aravindant-005/Aravindan_Portfolio.git
