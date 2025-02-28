import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate subject
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      // IMPORTANT: Replace this URL with your new Google Apps Script deployment URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzNDJjvDi0ThcbkIzsTfE70J2obPAMo-HzGZkw-mnCFhlIoVtXvhj2E5oCVSRxtlgw/exec';
      
      // Create form data object that matches the expected format in Apps Script
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phone: '', // Add empty phone field to match your sheet structure
        subject: formData.subject,
        message: formData.message
      };
      
      // Use fetch API to send data as JSON
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
        mode: 'no-cors' // This is important for cross-origin requests to Google Apps Script
      });
      
      // Since no-cors mode doesn't return readable response, we assume success
      console.log('Form submitted successfully');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact directly via email at srikumarpride@gmail.com');
    }
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 7993793171',
      link: 'tel:+917993793171',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: HiMail,
      title: 'Email',
      value: 'srikumarpride@gmail.com',
      link: 'mailto:srikumarpride@gmail.com',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Bengaluru, India',
      link: 'https://maps.google.com/?q=Bengaluru,India',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative balls */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 opacity-60 blur-xl animate-blob"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 opacity-60 blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-green-100 to-teal-100 opacity-60 blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 opacity-60 blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 right-1/4 w-52 h-52 rounded-full bg-gradient-to-r from-red-100 to-rose-100 opacity-60 blur-xl animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get In <span className="text-indigo-600 bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm bg-opacity-80 relative overflow-hidden">
              {/* Decorative elements inside the container */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-50"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-100 to-teal-100 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b pb-3 border-gray-100 flex items-center">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <HiMail className="h-4 w-4 text-white" />
                  </span>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 group hover:shadow-md"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white mr-4 group-hover:scale-90 transition-all duration-300 shadow-md group-hover:shadow-lg`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                        <p className="text-gray-600 mt-1">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4 text-gray-900 border-b pb-2 border-gray-100 flex items-center">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 w-7 h-7 rounded-full flex items-center justify-center mr-2">
                      <HiMail className="h-3 w-3 text-white" />
                    </span>
                    Contact Methods
                  </h4>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      Feel free to reach out via phone or email. I'm always available to discuss new opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm italic">
                      "I'm excited to collaborate on innovative projects and bring your ideas to life!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm bg-opacity-80">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b pb-3 border-gray-100">
                Send Me a Message
              </h3>
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} bg-white text-gray-900 transition-colors duration-300`}
                      placeholder="Your Name"
                      disabled={status === 'submitting'}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} bg-white text-gray-900 transition-colors duration-300`}
                      placeholder="Your Email Address"
                      disabled={status === 'submitting'}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.subject ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} bg-white text-gray-900 transition-colors duration-300`}
                    placeholder="Subject"
                    disabled={status === 'submitting'}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.subject}</p>
                  )}
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} bg-white text-gray-900 transition-colors duration-300`}
                    placeholder="Your Message"
                    disabled={status === 'submitting'}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </div>

                {status === 'submitting' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting your message...</span>
                    </div>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                    <p className="mt-2 text-sm">
                      I'll get back to you as soon as possible. 
                    </p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                    <p className="mt-2 text-sm">
                      Please try again later or contact me directly via email at srikumarpride@gmail.com.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 