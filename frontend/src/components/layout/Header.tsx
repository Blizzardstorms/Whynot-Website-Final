import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/images/logo-300x80.png" 
            alt="WhyNotBuild Logo" 
            className="h-12 w-auto"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextSibling?.remove();
              const text = document.createElement('span');
              text.className = 'text-2xl font-bold text-primary';
              text.textContent = 'WhyNotBuild';
              target.parentNode?.insertBefore(text, target.nextSibling);
            }}
          />
          <span className="sr-only">WhyNotBuild</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link to="/tutorials" className="text-gray-700 hover:text-primary transition-colors">
            Tutorials
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="btn btn-primary"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden hidden bg-white shadow-lg">
        <div className="px-4 py-2 space-y-1">
          <Link 
            to="/" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            About Us
          </Link>
          <Link 
            to="/gallery" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Gallery
          </Link>
          <Link 
            to="/tutorials" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Tutorials
          </Link>
          <Link 
            to="/blog" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="block px-4 py-2 text-center text-white bg-primary hover:bg-primary-dark rounded-md my-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
