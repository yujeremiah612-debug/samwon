import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col font-sans selection:bg-red-800 selection:text-white">
      <Navigation />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
