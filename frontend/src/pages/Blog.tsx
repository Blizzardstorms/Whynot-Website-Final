import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Building Materials',
    excerpt: 'Exploring innovative and eco-friendly materials that are shaping the future of construction.',
    category: 'Sustainability',
    readTime: '6 min read',
    date: 'June 5, 2023',
    image: '/images/blog/sustainable-materials.jpg',
    slug: 'future-of-sustainable-building-materials',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah-johnson.jpg'
    }
  },
  {
    id: 2,
    title: '10 Home Renovation Trends for 2023',
    excerpt: 'Discover the top home renovation trends that are dominating this year.',
    category: 'Trends',
    readTime: '8 min read',
    date: 'May 28, 2023',
    image: '/images/blog/renovation-trends.jpg',
    slug: 'home-renovation-trends-2023',
    author: {
      name: 'Mike Williams',
      avatar: '/images/authors/mike-williams.jpg'
    }
  },
  {
    id: 3,
    title: 'How to Choose the Right Contractor for Your Project',
    excerpt: 'Essential tips for finding and hiring the perfect contractor for your construction needs.',
    category: 'Tips',
    readTime: '10 min read',
    date: 'May 15, 2023',
    image: '/images/blog/choosing-contractor.jpg',
    slug: 'how-to-choose-right-contractor',
    author: {
      name: 'David Kim',
      avatar: '/images/authors/david-kim.jpg'
    },
    featured: true
  },
  {
    id: 4,
    title: 'The Benefits of Prefabricated Construction',
    excerpt: 'Why more builders are turning to prefabricated construction methods.',
    category: 'Innovation',
    readTime: '7 min read',
    date: 'May 5, 2023',
    image: '/images/blog/prefab-construction.jpg',
    slug: 'benefits-of-prefabricated-construction',
    author: {
      name: 'Emma Davis',
      avatar: '/images/authors/emma-davis.jpg'
    }
  },
  {
    id: 5,
    title: 'Maximizing Small Spaces: Clever Design Ideas',
    excerpt: 'Innovative ways to make the most of limited living spaces.',
    category: 'Design',
    readTime: '9 min read',
    date: 'April 25, 2023',
    image: '/images/blog/small-spaces.jpg',
    slug: 'maximizing-small-spaces-design-ideas',
    author: {
      name: 'James Wilson',
      avatar: '/images/authors/james-wilson.jpg'
    },
    featured: true
  },
  {
    id: 6,
    title: 'The Rise of Smart Homes: What You Need to Know',
    excerpt: 'How smart home technology is changing the way we live and build.',
    category: 'Technology',
    readTime: '11 min read',
    date: 'April 12, 2023',
    image: '/images/blog/smart-homes.jpg',
    slug: 'rise-of-smart-homes',
    author: {
      name: 'Lisa Chen',
      avatar: '/images/authors/lisa-chen.jpg'
    }
  }
];

const categories = ['All', 'Sustainability', 'Trends', 'Tips', 'Innovation', 'Design', 'Technology'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="py-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and expert advice on construction, design, and home improvement.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search blog posts"
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
        
        {/* Featured Post */}
        {featuredPost && !searchQuery && activeCategory === 'All' && (
          <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2 bg-gray-100 flex items-center justify-center min-h-64 md:min-h-full">
                <div className="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  [Featured Image]
                </div>
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">
                  Featured Post • {featuredPost.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  <Link to={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      [A]
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {featuredPost.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={new Date(featuredPost.date).toISOString().split('T')[0]}>
                        {featuredPost.date}
                      </time>
                      <span aria-hidden="true">•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  [Post Image]
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={new Date(post.date).toISOString().split('T')[0]}>
                      {post.date}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs mr-2">
                        {post.author.name.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-700">{post.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg 
              className="w-16 h-16 mx-auto text-gray-400 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No blog posts found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Newsletter CTA */}
        <div className="mt-16 bg-primary text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Post</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest construction and design insights delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Email address"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-white text-opacity-80 mt-3">
            We'll never share your email. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;