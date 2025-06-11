import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  Smartphone,
  Palette,
  Users,
  Zap,
  Shield,
  Star,
  CheckCircle,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Header */}
      <Header isFixed={true} />
      <main className='flex-grow'>
        {/* Hero Section */}
        <section className='px-4 lg:px-8 py-20 lg:py-32'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-8'>
              <div className='space-y-6'>
                <h1 className='text-5xl lg:text-7xl font-bold text-gray-900 leading-tight'>
                  One Link,
                  <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                    {' '}
                    Infinite Possibilities
                  </span>
                </h1>
                <div className='w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto'></div>
              </div>

              <p className='text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Create a beautiful, editable link-in-bio page that highlights all of your key
                connections. Ideal for companies, artists, and everyone else who want to distribute
                several links with ease.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8'>
                <Button
                  asChild
                  size='lg'
                  className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 h-auto'
                >
                  <Link href='/dashboard' className='flex items-center gap-2'>
                    Start Building Free
                    <ArrowRight className='w-5 h-5' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-8 py-6 h-auto'
                >
                  <Link href='#features'>See How It Works</Link>
                </Button>
              </div>

              <div className='pt-12'>
                <p className='text-sm text-gray-500 mb-4'>Trusted by 10,000+ creators worldwide</p>
                <div className='flex justify-center items-center gap-8 opacity-60'>
                  <div className='text-2xl font-bold text-gray-400'>Creator</div>
                  <div className='text-2xl font-bold text-gray-400'>Business</div>
                  <div className='text-2xl font-bold text-gray-400'>Influencer</div>
                  <div className='text-2xl font-bold text-gray-400'>Artist</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='px-4 lg:px-8 py-20'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Everything You Need
              </h2>
              <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                Powerful features designed to help you share your content and grow your audience
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Palette className='w-8 h-8' />,
                  title: 'Fully Customizable',
                  description:
                    'Create a link page that is exclusively yours by using brand-consistent themes, colors, and layouts.',
                },
                {
                  icon: <BarChart3 className='w-8 h-8' />,
                  title: 'Advanced Analytics',
                  description:
                    'Use comprehensive insights and reports to track clicks, comprehend your audience, and improve your content.',
                },
                {
                  icon: <Smartphone className='w-8 h-8' />,
                  title: 'Mobile Optimized',
                  description:
                    'Every device, including smartphones and desktop PCs, displays your link page flawlessly.',
                },
                {
                  icon: <Zap className='w-8 h-8' />,
                  title: 'Lightning Fast',
                  description:
                    'Streamlined user experience and lightning-fast loading speeds thanks to speed optimization.',
                },
                {
                  icon: <Shield className='w-8 h-8' />,
                  title: 'Secure & Reliable',
                  description:
                    '99.9% uptime guarantee and enterprise-grade security to ensure your links are always available.',
                },
                {
                  icon: <Users className='w-8 h-8' />,
                  title: 'Team Collaboration',
                  description:
                    'Collaborate with your team to jointly maintain and improve your link pages.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300'
                >
                  <div className='text-purple-600 mb-4'>{feature.icon}</div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>{feature.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className='px-4 lg:px-8 py-20'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Loved by Creators
              </h2>
              <p className='text-xl text-gray-600'>See what our users are saying about Linkify</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Content Creator',
                  content:
                    'Linkify changed the way I distribute my stuff. I can learn more about my audiences favorite things thanks to the analytics!',
                  rating: 5,
                },
                {
                  name: 'Mike Chen',
                  role: 'Small Business Owner',
                  content:
                    'ideal for my company. Professional, tidy, and all of my key links are immediately accessible to my clients.',
                  rating: 5,
                },
                {
                  name: 'Emma Davis',
                  role: 'Artist',
                  content:
                    'The possibilities for customization are incredible. My link page is a fantastic fit for my style and artistic brand.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className='bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50'
                >
                  <div className='flex items-center gap-1 mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                    ))}
                  </div>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className='font-semibold text-gray-900'>{testimonial.name}</div>
                    <div className='text-sm text-gray-500'>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='px-4 lg:px-8 py-20'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl'>
              <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Ready to Get Started?</h2>
              <p className='text-xl mb-8 opacity-90'>
                Join thousands of creators who trust Linkify to showcase their content. Create your
                beautiful link page in minutes, not hours.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Button
                  asChild
                  size='lg'
                  className='bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold'
                >
                  <Link href='/dashboard' className='flex items-center gap-2'>
                    Create Your Linkify
                    <ArrowRight className='w-5 h-5' />
                  </Link>
                </Button>
              </div>

              <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4' />
                  Free to start
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4' />
                  No credit card required
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4' />
                  Setup in 15 seconds
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
