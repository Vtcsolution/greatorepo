// src/routes/AppRoutes.jsx
// No changes needed - your provided file is already correct and ready
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home.jsx'
import About from '../pages/About/about.jsx';
import CaseStudies from '../pages/CaseStudy/casestudies.jsx';
import Insight from '../pages/Insight/insight.jsx';
import Contact from '../pages/contact.jsx';
import CustomSoftware from '../pages/Solutions/CustomSoftware.jsx';
// import Banking from '../pages/focus-areas/banking.jsx';
import Estimate from '../pages/Estimate/estimate.jsx';
import WebApps from '../pages/Solutions/WebApps.jsx';
import MobileAppDevelopment from '../pages/Solutions/MobileAppDevelopment.jsx';
import ApiDevelopment from '../pages/Solutions/ApiDevelopment.jsx';
import UiUxDesign from '../pages/Solutions/UiUxDesign.jsx';
import SoftwareTesting from '../pages/Solutions/SoftwareTesting.jsx';
import ItInfrastructureServices from '../pages/Solutions/ItInfrastructureServices.jsx';
import MachineLearningAI from '../pages/Solutions/MachineLearningAI.jsx';
import IndustriesWeCover from '../pages/focus-areas/BankingITServices.jsx';
import EducationITServices from '../pages/focus-areas/EducationITServices.jsx';
import InvestmentITServices from '../pages/focus-areas/InvestmentITServices.jsx';
import OilGasITServices from '../pages/focus-areas/OilGasITServices.jsx';
import PublicSectorITServices from '../pages/focus-areas/PublicSectorITServices.jsx';
import Banking from '../pages/focus-areas/banking.jsx';
import SupplyChainItservices from '../pages/focus-areas/SupplyChainItservices.jsx';
import ConstructionItservices from '../pages/focus-areas/ConstructionItservices.jsx';
import EcommerceItservices from '../pages/focus-areas/EcommerceItservices.jsx';
import HowWeWork from '../pages/Solutions/HowWeWork.jsx';
import AiSaasPlatform from '../pages/Solutions/AiSaasPlatform.jsx';
import ReplyForm from '../components/admin/ReplyForm.jsx';
import AdminDashboard from '../components/admin/AdminDashboard.jsx';
import AdminLogin from '../components/admin/AdminLogin.jsx';
import AddBlog from '../components/admin/AddBlog.jsx';
import ManageBlogs from '../components/admin/ManageBlogs.jsx';
import UpdateBlog from '../components/admin/UpdateBlog.jsx';
import BlogDetails from '../pages/Insight/BlogDetails.jsx';
import Services from '../pages/Solutions/Services.jsx';
import Industries from '../pages/focus-areas/Industries.jsx';
import GetChatHistory from '../components/admin/Getchathistory.jsx';
import AdminProfile from '../components/admin/AdminProfile.jsx';
import ProtectedAdminRoute from '../components/contexts/ProtectedAdminRoute.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/howwork" element={<HowWeWork/>}/>
      <Route path="/casestudies" element={<CaseStudies />} />
      <Route path="/blogs" element={<Insight />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />

      
      <Route path="/solutions/webapps" element={<WebApps/>}/>
      <Route path="/solutions/mobileapps" element={<MobileAppDevelopment/>}/>
      <Route path="/solutions/api_development" element={<ApiDevelopment/>}/>
      <Route path="/solutions/uiux" element={<UiUxDesign/>}/>
      <Route path="/solutions/custom_software" element={<SoftwareTesting/>}/>
      <Route path="/solutions/infrastructure" element={<ItInfrastructureServices/>}/>
      <Route path="/solutions/machine_learning" element={<MachineLearningAI/>}/>
      <Route path="/solutions/saasplatform" element={<AiSaasPlatform/>}/>
      <Route path="/blog/:id" element={<BlogDetails />} />

      <Route path="/focus-areas/banking" element={<Banking/>}/>
      <Route path="/focus-areas/education" element={<EducationITServices/>}/>
      <Route path="/focus-areas/investment" element={<InvestmentITServices/>}/>
      <Route path="/focus-areas/oil-gas" element={<OilGasITServices/>}/>
      <Route path="/focus-areas/public-sector" element={<PublicSectorITServices/>}/>
      <Route path="/focus-areas/logistics" element={<SupplyChainItservices/>}/>
      <Route path="/focus-areas/construction" element={<ConstructionItservices/>}/>
      <Route path="/focus-areas/ecommerce" element={<EcommerceItservices/>}/> 

      {/* <Route path="/focus-areas/banking" element={<Banking />} /> */}
      <Route path="estimate" element={<Estimate />} />
          <Route path="/admin/login" element={<AdminLogin />} />

<Route
  path="/admin-dashboard"
  element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin-dashboard/add-blog"
  element={
    <ProtectedAdminRoute>
      <AddBlog />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin-dashboard/manage-blogs"
  element={
    <ProtectedAdminRoute>
      <ManageBlogs />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin-dashboard/edit-blog/:id"
  element={
    <ProtectedAdminRoute>
      <UpdateBlog />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin-dashboard/chats"
  element={
    <ProtectedAdminRoute>
      <GetChatHistory />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin-dashboard/emails"
  element={
    <ProtectedAdminRoute>
      <ReplyForm />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin-dashboard/update-profile"
  element={
    <ProtectedAdminRoute>
      <AdminProfile />
    </ProtectedAdminRoute>
  }
/>


    </Routes>
  );
};

export default AppRoutes;