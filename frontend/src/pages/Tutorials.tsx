import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample tutorial data - in a real app, this would come from an API
const tutorials = [
  {
    id: 1,
    title: 'DIY Home Renovation: Where to Start',
    excerpt: 'Learn the essential first steps for planning your home renovation project.',
    category: 'Beginner',
    readTime: '8 min read',
    date: 'May 15, 2023',
    image: '/images/tutorials/renovation-starter.jpg',
    slug: 'diy-home-renovation-where-to-start'
  },
  {
    id: 2,
    title: 'Choosing the Right Materials for Your Bathroom',
    excerpt: 'A comprehensive guide to selecting durable and beautiful materials for your bathroom renovation.',
    category: 'Intermediate',
    readTime: '12 min read',
    date: 'April 28, 2023',
    image: '/images/tutorials/bathroom-materials.jpg',
    slug: 'choosing-right-materials-bathroom'
  },
  {
    id: 3,
    title: 'Kitchen Layouts: Pros and Cons',
    excerpt: 'Compare different kitchen layouts to find the perfect one for your space and lifestyle.',
    category: 'Beginner',
    readTime: '10 min read',
    date: 'April 15, 2023',
    image: '/images/tutorials/kitchen-layouts.jpg',
    slug: 'kitchen-layouts-pros-and-cons'
  },
  {
    id: 4,
    title: 'Energy-Efficient Home Upgrades',
    excerpt: 'Discover the best upgrades to make your home more energy efficient and reduce utility bills.',
    category: 'Advanced',
    readTime: '15 min read',
    date: 'March 30, 2023',
    image: '/images/tutorials/energy-upgrades.jpg',
    slug: 'energy-efficient-home-upgrades'
  },
  {
    id: 5,
    title: 'Outdoor Living Spaces: Design Ideas',
    excerpt: 'Transform your backyard into a beautiful and functional outdoor living space.',
    category: 'Intermediate',
    readTime: '14 min read',
    date: 'March 22, 2023',
    image: '/images/tutorials/outdoor-spaces.jpg',
    slug: 'outdoor-living-spaces-design-ideas'
  },
  {
    id: 6,
    title: 'Smart Home Technology for Beginners',
    excerpt: 'An introduction to smart home devices and how they can enhance your living space.',
    category: 'Beginner',
    readTime: '9 min read',
    date: 'March 10, 2023',
    image: '/images/tutorials/smart-home.jpg',
    slug: 'smart-home-technology-beginners'
  }
];

const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Tutorials = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = activeCategory === 'All' || tutorial.category === activeCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tutorial.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutorials & Guides</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn valuable tips and tricks for your next home improvement project with our expert guides.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search tutorials"
                />
                <svg 
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tutorials Grid */}
        {filteredTutorials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                    [Tutorial Image]
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {tutorial.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{tutorial.date}</span>
                    <span className="mx-2">•</span>
                    <span>{tutorial.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    <Link to={`/tutorials/${tutorial.slug}`} className="hover:text-primary transition-colors">
                      {tutorial.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{tutorial.excerpt}</p>
                  <Link 
                    to={`/tutorials/${tutorial.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg 
              className="w-16 h-16 mx-auto text-gray-400 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tutorials found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Newsletter CTA */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the Latest Tutorials</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive new tutorials and home improvement tips directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Email address"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
