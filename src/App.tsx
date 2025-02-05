import React, { useEffect, useState } from 'react';
import {
  MessageCircle,
  Star,
  Menu,
  X,
  ChevronRight,
  Send,
  Instagram,
  Twitter,
  Facebook,
  CheckCircle,
  Zap,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Components
const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-950">Trendify</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'blog', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item
                    ? 'text-blue-600'
                    : 'text-blue-950 hover:text-blue-600'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-blue-950"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'blog', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item
                      ? 'text-blue-600'
                      : 'text-blue-950 hover:text-blue-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 bg-gradient-to-b from-blue-50 to-white transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            About Trendify
          </h2>
          <p className="text-blue-800 mb-8 leading-relaxed">
            Welcome to Trendifydp, your go-to destination for high-quality
            digital downloads! We specialize in creating beautifully designed
            planners, journals, eBooks, storybooks, greeting cards, and more—all
            crafted to inspire, organize, and simplify your life.
          </p>
          <p className="text-blue-800 mb-8 leading-relaxed">
            Our Mission: At Trendifydp, we believe in the power of creativity
            and organization. Our digital products help you stay inspired,
            productive, and connected—all with just a click.
          </p>
          <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="blog"
      ref={ref}
      className={`py-24 transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Digital Planning Tips for 2024',
              excerpt:
                'Discover how to make the most of your digital planner with these expert tips.',
              image:
                'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600',
            },
            {
              title: 'Boost Your Productivity',
              excerpt:
                'Learn the secrets to maximizing your daily productivity with our digital tools.',
              image:
                'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
            },
            {
              title: 'Organization Made Simple',
              excerpt:
                'Simple strategies for keeping your digital life organized and stress-free.',
              image:
                'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600',
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-950 mb-2">
                  {post.title}
                </h3>
                <p className="text-blue-800 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      name: 'High-Quality Products',
      description:
        'Our digital products are crafted with attention to detail and designed for maximum usability.',
      icon: CheckCircle,
    },
    {
      name: 'Instant Download',
      description:
        'Get immediate access to your purchased products and start using them right away.',
      icon: Zap,
    },
    {
      name: 'Customer Satisfaction',
      description:
        'We prioritize customer happiness and offer a 30-day money-back guarantee.',
      icon: Heart,
    },
    {
      name: 'Regular Updates',
      description:
        'Our products are constantly improved and updated to stay current with the latest trends.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Digital Products?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the advantages of using our premium digital products for
            your personal and professional needs.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {benefit.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2000)',
      }}
    >
      <div className="absolute inset-0 bg-blue-950/90 backdrop-blur-sm"></div>
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              rating: 5,
              comment:
                'The digital planner has completely transformed how I organize my work and life.',
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
            },
            {
              name: 'Michael Chen',
              rating: 5,
              comment:
                'Excellent quality and beautiful designs. Worth every penny!',
              image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
            },
            {
              name: 'Emma Davis',
              rating: 5,
              comment:
                'The productivity cards have helped me stay focused and achieve my goals.',
              image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-blue-950">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-blue-50 transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-800 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-800 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-800 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const LiveChatButton = () => (
  <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 z-50">
    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
    <span className="hidden md:inline text-sm md:text-base">Coming Soon</span>
  </button>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-64px 0px 0px 0px', // Accounts for header height
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="pt-16" id="home">
        <About />
        <Benefits />
        <Blog />
        <Reviews />
        <Contact />
      </main>
      <LiveChatButton />
    </div>
  );
}

export default App;
