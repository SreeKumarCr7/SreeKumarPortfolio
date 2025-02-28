import { Suspense, lazy, Component, ErrorInfo, ReactNode } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load components for better performance
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Interests = lazy(() => import('./components/Interests'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Error boundary component to catch rendering errors
class ErrorBoundary extends Component<{ children: ReactNode, fallback?: ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 m-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h2>
          <p className="text-red-600">The component couldn't be loaded. Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component for suspense fallback
const Loading = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Skills />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Achievements />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Interests />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        </Suspense>
      </main>
      
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

export default App
