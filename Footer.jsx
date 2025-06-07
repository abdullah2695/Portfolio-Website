import { siteConfig } from '../../data/siteConfig';
import { personalInfo } from '../../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xl font-bold mr-3">
                A
              </div>
              <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            </div>
            <p className="text-sm opacity-80 max-w-md">{personalInfo.headline.split('|')[0].trim()}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {siteConfig.socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/20 hover:bg-accent text-primary-foreground p-2 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'linkedin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                </a>
              ))}
            </div>
            <p className="text-sm opacity-70">&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-accent/20 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

