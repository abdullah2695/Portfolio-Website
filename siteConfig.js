// Site configuration file
// This file contains general settings for the website
// Edit this file to update website settings

export const siteConfig = {
  // Website title (appears in browser tab)
  title: "Abdullah Ahmed Abdo | Portfolio",
  
  // Website description (for SEO)
  description: "Portfolio website of Abdullah Ahmed Abdo, Senior Operations & Integrations Specialist and aspiring Product Manager",
  
  // Theme colors (can be customized)
  theme: {
    primary: "#2C3E50", // Dark Blue
    secondary: "#34495E", // Medium Dark Blue
    accent: "#7F8C8D", // Grayish Blue
    background: "#ECF0F1", // Light Gray
    text: "#2C3E50", // Dark Blue
  },
  
  // Navigation links (if you want to add more pages in the future)
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Formspree endpoint for the contact form
  formspreeEndpoint: "https://formspree.io/f/manjqbeo",
  
  // Social media links (can be expanded)
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdullah-ahmed-abdo-297677166",
      icon: "linkedin", // This will be used to display the correct icon
    },
    // You can add more social links here
  ],
};

