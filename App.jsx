import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import './App.css';

// Import data
import { personalInfo } from './data/personalInfo';
import { experience } from './data/experience';
import { siteConfig } from './data/siteConfig';

function App() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // State for form submission
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // State for showing the message field in the contact form
  const [showMessageField, setShowMessageField] = useState(personalInfo.enableContactForm);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Oops! Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });
    }
  };
  
  // Reset form status after 5 seconds
  useEffect(() => {
    if (formStatus.submitted) {
      const timer = setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [formStatus.submitted]);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-block px-6 py-2 bg-accent/20 rounded-full text-sm font-medium mb-6">
                Senior Operations & Integrations Specialist
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Hello, I'm</span>
                <span className="block text-accent mt-2">{personalInfo.name}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-lg opacity-90">
                {personalInfo.headline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn btn-accent">
                  Contact Me
                </a>
                <a href="#about" className="btn border border-accent/50 text-primary-foreground hover:bg-accent/20">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/20 flex items-center justify-center border-4 border-accent overflow-hidden">
                  {/* Profile image will go here */}
                  <span className="text-8xl font-bold text-accent">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-2 rounded-lg shadow-lg">
                  <span className="font-medium">Aspiring Product Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-full aspect-square bg-primary/5 rounded-2xl p-1">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-5xl font-bold">
                      A
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-medium">Lean Six Sigma - Green Belt</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Professional Background</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Integration Expert</h3>
                    </div>
                    <p>Specialized in end-to-end POS system integrations with extensive experience in streamlining operations.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Process Optimizer</h3>
                    </div>
                    <p>Certified Lean Six Sigma Green Belt with proven track record of streamlining workflows and driving operational excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              My Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of success in operations, integration, and customer success roles.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={job.id} className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-auto md:right-0 top-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 md:translate-x-1/2"></div>
                  
                  <div className="ml-8 md:ml-0 p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary mb-4">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-1">{job.title}</h3>
                    <div className="flex items-center mb-4">
                      <span className="font-medium">{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-muted-foreground">{job.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-accent">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contact Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-80 mb-1">Email</p>
                      <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-accent transition-colors">
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-80 mb-1">LinkedIn</p>
                      <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-accent/20">
                  <p className="text-lg font-medium mb-4">Follow me on social media</p>
                  <div className="flex space-x-4">
                    {siteConfig.socialLinks.map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent/20 hover:bg-accent text-primary-foreground p-3 rounded-full transition-colors"
                        aria-label={link.name}
                      >
                        {link.icon === 'linkedin' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showMessageField}
                    onChange={() => setShowMessageField(!showMessageField)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary transition-colors">
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {showMessageField ? 'Enabled' : 'Disabled'}
                  </span>
                </label>
              </div>
              
              {showMessageField ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="contact-input"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="contact-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="contact-input"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="contact-input"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                      Send Message
                    </button>
                    
                    {formStatus.submitted && (
                      <div className={`mt-4 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {formStatus.message}
                      </div>
                    )}
                  </div>
                </form>
              ) : (
                <div className="p-8 bg-muted rounded-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-muted-foreground">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <p className="text-lg font-medium mb-2">Contact form is currently disabled</p>
                  <p className="text-muted-foreground">Toggle the switch above to enable the contact form.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;

