# Abdullah Ahmed Abdo Portfolio Website Documentation

This documentation provides instructions for viewing, editing, and hosting the portfolio website.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Local Development](#local-development)
4. [Content Editing](#content-editing)
5. [Deployment Options](#deployment-options)
6. [Security Considerations](#security-considerations)

## Project Overview

This is a modern, responsive portfolio website built with React and Tailwind CSS. It features:

- Clean, minimal design
- Responsive layout for all devices
- Contact form with Formspree integration
- Easy content editing through data files
- Toggle functionality for the contact form

## Project Structure

```
portfolio-website/
├── public/               # Static assets served as-is
│   └── favicon.svg       # Website favicon
├── src/
│   ├── assets/           # Images and other assets
│   │   ├── images/       # Image files
│   │   └── icons/        # Icon files
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Section components
│   │   └── ui/           # UI components
│   ├── data/             # Data files for content
│   │   ├── personalInfo.js  # Personal information
│   │   ├── experience.js    # Work experience
│   │   └── siteConfig.js    # Site configuration
│   ├── App.css           # Main stylesheet
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── dist/                 # Production build output
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Local Development

### Prerequisites

- Node.js (v16 or later)
- pnpm, npm, or yarn package manager

### Running the Development Server

1. Install dependencies:
   ```bash
   cd portfolio-website
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
pnpm run build
```

This will generate optimized files in the `dist` directory.

## Content Editing

The website is designed for easy content editing without touching the React components. All content is stored in data files in the `src/data` directory.

### Personal Information

Edit `src/data/personalInfo.js` to update:

- Name
- Headline
- Bio
- Contact information
- Profile photo path
- Contact form toggle setting

Example:

```javascript
export const personalInfo = {
  name: "Abdullah Ahmed Abdo",
  headline: "Senior Operations & Integrations Specialist | Aspiring Product Manager",
  bio: "Results-driven Senior POS Operations & Integration Specialist...",
  contact: {
    email: "your-email@example.com",
    linkedin: "www.linkedin.com/in/your-profile",
  },
  profilePhoto: "/profile-photo.jpg", // Update this path when you add your photo
  enableContactForm: true, // Set to false to disable the contact form
};
```

### Work Experience

Edit `src/data/experience.js` to update your work history. Each job is an object in the array with the following structure:

```javascript
{
  id: 1, // Unique identifier
  title: "Job Title",
  company: "Company Name",
  location: "City, Country",
  period: "MM/YYYY – MM/YYYY",
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2",
    // Add more responsibilities as needed
  ]
}
```

### Site Configuration

Edit `src/data/siteConfig.js` to update:

- Website title and description
- Theme colors
- Navigation links
- Formspree endpoint
- Social media links

## Deployment Options

### Option 1: Netlify (Recommended)

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository or upload the `dist` folder
3. Configure the build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

### Option 2: Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. The default settings should work automatically

### Option 3: GitHub Pages

1. Install the gh-pages package:
   ```bash
   pnpm add -D gh-pages
   ```

2. Add these scripts to your package.json:
   ```json
   "predeploy": "pnpm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   pnpm run deploy
   ```

## Security Considerations

### Contact Form

The contact form uses Formspree, which handles the server-side logic for email sending. This approach:

- Prevents direct exposure of email credentials
- Includes built-in spam protection
- Implements rate limiting to prevent abuse

For additional security:

1. Consider adding a CAPTCHA to prevent automated submissions
2. Regularly check your Formspree dashboard for any suspicious activity
3. Keep your Formspree endpoint private and update it if you suspect it's been compromised

### Content Security

When adding external links or embedding content:

1. Use `rel="noopener noreferrer"` for external links
2. Be cautious about embedding third-party scripts
3. Regularly update dependencies to patch security vulnerabilities

