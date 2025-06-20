import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white/80 backdrop-blur-sm border-t border-white/20 px-4 lg:px-8 py-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <div className='text-2xl font-bold text-gray-900'>Linkify</div>
            <p className='text-gray-600'>
              The easiest way to share all your important links in one beautiful page.
            </p>
          </div>

          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Product</h4>
            <div className='space-y-2 text-gray-600'>
              <div>Features</div>
              <div>Pricing</div>
              <div>Analytics</div>
              <div>Integrations</div>
            </div>
          </div>

          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Company</h4>
            <div className='space-y-2 text-gray-600'>
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>

          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Support</h4>
            <div className='space-y-2 text-gray-600'>
              <div>Help Center</div>
              <div>Documentation</div>
              <div>Community</div>
              <div>Status</div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 mt-12 pt-8 text-center text-gray-500'>
          <p>&copy; 2024 Abdulsamet Dursun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
