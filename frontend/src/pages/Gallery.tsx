import { useState } from 'react';
import { Link } from 'react-router-dom';

// This would be replaced with actual image imports in a real project
const sampleImages = [
  { 
    id: 1, 
    before: '/images/placeholder-before.jpg', 
    after: '/images/placeholder-after.jpg', 
    title: 'Kitchen Remodel',
    category: 'kitchen',
    description: 'Complete kitchen renovation with modern appliances and custom cabinetry.'
  },
  { 
    id: 2, 
    before: '/images/placeholder-before.jpg', 
    after: '/images/placeholder-after.jpg', 
    title: 'Bathroom Renovation',
    category: 'bathroom',
    description: 'Luxury bathroom makeover with walk-in shower and premium fixtures.'
  },
  { 
    id: 3, 
    before: '/images/placeholder-before.jpg', 
    after: '/images/placeholder-after.jpg', 
    title: 'House Extension',
    category: 'extension',
    description: 'Two-story home extension adding valuable living space.'
  },
  { 
    id: 4, 
    before: '/images/placeholder-before.jpg', 
    after: '/images/placeholder-after.jpg', 
    title: 'Office Space',
    category: 'commercial',
    description: 'Modern office space renovation for improved workflow.'
  },
  { 
    id: 5, 
    before: '/images/placeholder-before.jpg', 
    after: '/images/placeholder-after.jpg', 
    title: 'Garden Makeover',
    category: 'outdoor',
    description: 'Complete outdoor transformation with landscaping and decking.'
  },
  { 
    id: 6, 
    before: '/images/placeholder-before.jpg', 
    after: '/images/placeholder-after.jpg', 
    title: 'Complete Home',
    category: 'full-renovation',
    description: 'Whole house renovation with modern design and energy efficiency.'
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const [sliderPosition, setSliderPosition] = useState(50);
  
  // In a real app, you would fetch images from an API
  const images = sampleImages;
  
  // Handle slider movement
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(e.target.value));
  };
  
  // Filter images based on active filter
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);
  
  // Get unique categories for filter
  const categories = ['all', ...new Set(images.map(img => img.category))];

  return (
    <div className="py-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of completed projects and see the transformation for yourself.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setActiveImage(image.id)}
            >
              <div className="relative pb-[75%] bg-gray-100">
                <img
                  src={image.before}
                  alt={`${image.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full h-full bg-gray-200 flex items-center justify-center text-gray-400';
                    placeholder.textContent = 'Before';
                    target.parentNode?.insertBefore(placeholder, target.nextSibling);
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">View Project</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Comparison Modal */}
        {activeImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setActiveImage(null)}>
            <div className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="relative w-full pb-[56.25%] bg-gray-900">
                <img 
                  src={images[activeImage - 1].before} 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div 
                  className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
                  style={{ width: `${100 - sliderPosition}%` }}
                >
                  <img 
                    src={images[activeImage - 1].after} 
                    alt="After" 
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{images[activeImage - 1].title}</h3>
                  <button 
                    onClick={() => setActiveImage(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600">{images[activeImage - 1].description}</p>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>Before</span>
                  <span>After</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss how we can transform your space. Contact us for a free consultation.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary hover:bg-gray-100 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;