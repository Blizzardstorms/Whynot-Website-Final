import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About WhyNotBuild</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building dreams into reality with quality craftsmanship and exceptional service in KwaZulu-Natal.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015, WhyNotBuild began as a small team of passionate builders with a vision to transform the construction landscape in KwaZulu-Natal. What started as a modest operation has grown into a trusted name in the industry, known for our commitment to excellence and customer satisfaction.
                </p>
                <p>
                  Our journey has been marked by numerous successful projects, from residential renovations to commercial constructions, each one strengthening our reputation for quality and reliability.
                </p>
                <p>
                  Today, we continue to uphold the values that have guided us from the beginning: integrity, craftsmanship, and a relentless pursuit of customer satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-400">
                  [Team Photo]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Craftsmanship',
                description: 'We take pride in our attention to detail and commitment to delivering superior quality in every project we undertake.'
              },
              {
                title: 'Integrity',
                description: 'We believe in honesty, transparency, and ethical business practices in all our dealings with clients and partners.'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority. We listen to your needs and work closely with you to bring your vision to life.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Founder & CEO',
                bio: 'With over 15 years in the construction industry, John leads our team with expertise and vision.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Project Manager',
                bio: 'Sarah ensures every project runs smoothly, on time, and within budget with her exceptional organizational skills.'
              },
              {
                name: 'Mike Williams',
                role: 'Lead Architect',
                bio: 'Mike brings creative and practical design solutions to every project, balancing aesthetics with functionality.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Get in touch with us today to discuss your construction needs and let's build something amazing together.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary hover:bg-gray-100 inline-block"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
