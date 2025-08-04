import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Page not found
            </h2>
          </div>
          <p className="mt-16 text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="rounded-md shadow-sm">
            <Link
              to="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Return to Homepage
            </Link>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Here are some helpful links:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/about" 
                className="px-4 py-3 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-3 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
              >
                Our Services
              </Link>
              <Link 
                to="/gallery" 
                className="px-4 py-3 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
              >
                Project Gallery
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-3 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <a 
                href="mailto:support@whynotbuild.co.za" 
                className="font-medium text-primary hover:text-primary-dark transition-colors duration-200"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;