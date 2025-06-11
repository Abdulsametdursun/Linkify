import ManageLinks from '@/components/ManageLinks';
import UsernameForm from '@/components/UsernameForm';
import CustomizationForm from '@/components/CustomizationForm';
import DashboardMetrics from '@/components/DashboardMetrics';
import Footer from '@/components/Footer';
import { api } from '@/convex/_generated/api';
import { currentUser } from '@clerk/nextjs/server';
import { preloadQuery } from 'convex/nextjs';
import { fetchAnalytics } from '@/lib/analytics-server';
// import { Protect } from "@clerk/nextjs";
// import { Lock } from "lucide-react";

async function Dashboard() {
  const user = await currentUser();

  const preloadedLinks = await preloadQuery(api.lib.links.getLinksByUserId, {
    userId: user!.id,
  });

  const analytics = await fetchAnalytics(user!.id);

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <main className='flex-grow'>
        {/* Analytics Metrics — temporarily showing directly, Pro restriction disabled */}
        <DashboardMetrics analytics={analytics} />

        {/* Username customization */}
        <div className='p-4 lg:p-8 mb-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50'>
              <UsernameForm />
            </div>
          </div>
        </div>

        {/* Page Customization */}
        <div className='p-4 lg:p-8 mb-8'>
          <div className='max-w-7xl mx-auto'>
            <CustomizationForm />
          </div>
        </div>

        {/* Manage Links Section */}
        <div className='p-4 lg:p-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16'>
              {/* Left */}
              <div className='lg:w-2/5 lg:sticky lg:top-8'>
                <div className='space-y-6'>
                  <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                    Manage Your Links
                  </h1>
                  <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4'></div>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    Organize and customize your link-in-bio page. Drag and drop to reorder, edit
                    details, or remove links that are no longer needed.
                  </p>
                  <div className='space-y-4 pt-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                      <span className='text-gray-600'>Drag & drop to reorder</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                      <span className='text-gray-600'>Real-time updates</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-600'>Click tracking analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className='lg:w-3/5'>
                <div className='bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50'>
                  <h2 className='text-xl font-semibold text-gray-900 mb-2'>Your Links</h2>
                  <p className='text-gray-500 mb-6'>
                    Drag to reorder, click to edit, or delete unwanted links.
                  </p>
                  <ManageLinks preloadedLinks={preloadedLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
