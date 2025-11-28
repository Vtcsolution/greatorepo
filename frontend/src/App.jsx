// src/App.jsx
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();

  // Hide Navbar & Footer on ALL admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Show Navbar & Footer only on non-admin pages */}
        {!isAdminRoute && <Navbar />}
        <main className="flex-grow">
          <AppRoutes />
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;