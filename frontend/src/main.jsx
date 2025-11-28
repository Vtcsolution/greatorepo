import React, { StrictMode, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { initGA, trackPage } from './analytics'; // Analytics functions
import { AdminProvider } from './components/contexts/AdminContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

// ✅ Initialize Google Analytics
initGA();

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
          <HelmetProvider>

      <AdminProvider> {/* Wrap with AdminProvider for admin context */}
        <GAListener /> {/* Tracks page views on every route change */}
        <App />
      </AdminProvider>
            </HelmetProvider>

    </BrowserRouter>
  </StrictMode>,
);

// ✅ Listen for route changes and send page_view events
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname + location.search);
  }, [location]);

  return null;
}