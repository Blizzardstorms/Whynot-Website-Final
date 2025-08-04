import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-[#1E3A8A] text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              If Not Y-NOT, Then Who?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional construction and renovation services in KwaZulu-Natal.
              Quality workmanship you can trust.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn btn-primary inline-block"
              >
                Get a Free Consultation
              </Link>
              <Link 
                to="/gallery" 
                className="btn bg-[#F97316] text-white hover:bg-orange-500"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'New Construction',
                description: 'From foundation to finish, we handle all aspects of new building projects with precision and care.'
              },
              {
                title: 'Renovations',
                description: 'Transform your existing space with our expert renovation services, tailored to your needs.'
              },
              {
                title: 'Kitchen & Bathroom',
                description: 'Specialized remodeling services to create your dream kitchen or bathroom.'
              },
              {
                title: 'Plumbing',
                description: 'Professional plumbing services for both residential and commercial properties.'
              },
              {
                title: 'Tiling',
                description: 'High-quality tiling services for floors, walls, and backsplashes.'
              },
              {
                title: 'Painting',
                description: 'Interior and exterior painting services with a focus on quality and durability.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John D.',
                role: 'Homeowner',
                content: 'WhyNotBuild transformed our outdated kitchen into a modern, functional space. Their attention to detail was impressive!',
                rating: 5
              },
              {
                name: 'Sarah M.',
                role: 'Business Owner',
                content: 'Professional, reliable, and high-quality work. We\'ve used their services for multiple projects and have never been disappointed.',
                rating: 5
              },
              {
                name: 'Robert K.',
                role: 'Property Developer',
                content: 'Outstanding craftsmanship and excellent communication throughout our project. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary hover:bg-gray-100 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
