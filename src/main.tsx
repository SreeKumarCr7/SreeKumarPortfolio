import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles.css'
import App from './App.tsx'

// Image protection wrapper component with improved implementation
const ProtectedApp = () => {
  useEffect(() => {
    // Function to protect images from right-click and drag
    const protectImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Make images non-draggable
        img.setAttribute('draggable', 'false');
        
        // Prevent context menu on images only (not the entire page)
        img.addEventListener('contextmenu', e => {
          e.preventDefault();
          return false;
        });
      });
    };

    // Initial protection
    protectImages();

    // Add protection for dynamically loaded images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          protectImages();
        }
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });

    // Add CSS to prevent image selection
    const style = document.createElement('style');
    style.innerHTML = `
      img {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }
    `;
    document.head.appendChild(style);

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>,
)
