# Abdullah Ahmed Abdo Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with a dark blue color scheme
- **Responsive Layout**: Looks great on all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Integrated with Formspree for easy email communication
- **Easy Content Editing**: All content is stored in separate data files for easy updates
- **Toggle Functionality**: Option to enable/disable the contact form

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

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm, npm, or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
pnpm run build
```

This will generate optimized files in the `dist` directory.

## Deployment

The website can be deployed to various platforms:

### Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository or upload the `dist` folder
3. Configure the build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

### Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. The default settings should work automatically

### GitHub Pages

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

## Customization

### Updating Personal Information

Edit `src/data/personalInfo.js` to update your personal information, bio, and contact details.

### Updating Work Experience

Edit `src/data/experience.js` to update your work history.

### Changing Site Configuration

Edit `src/data/siteConfig.js` to update website settings, colors, and Formspree endpoint.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide Icons](https://lucide.dev/)
- Contact form powered by [Formspree](https://formspree.io/)

