import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPostView from './pages/BlogPostView';
import AdminBlogCreate from './pages/admin/AdminBlogCreate';
import AdminBlogList from './pages/admin/AdminBlogList';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import Offers from './pages/Offers';
import HairPage from './pages/services/Hair';
import NailPage from './pages/services/Nail';
import SkinPage from './pages/services/Skin';
import Haircolor from './pages/services/Haircolor';
import Texture from './pages/services/Texture';
// import GroomingPage from './pages/services/Grooming';
import SPMUPage from './pages/services/SPMU';
import Makeup from './pages/services/Makeup';
import Menshair from './pages/services/Menshair';
import Makup from './pages/services/make';
import Bedit from './pages/services/edit';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPostView />} />
        <Route path="offers" element={<Offers />} />
        <Route path="services/hair" element={<HairPage />} />
        <Route path="services/nail" element={<NailPage />} />
        <Route path="services/skin" element={<SkinPage />} />
        <Route path="services/Menshair" element={<Menshair />} />
        <Route path="services/Haircolor" element={<Haircolor />} />
        <Route path="services/Texture" element={<Texture />} />
        {/* <Route path="services/grooming" element={<GroomingPage />} /> */}
        <Route path="services/spmu" element={<SPMUPage />} />
        <Route path="services/makeup" element={<Makeup />} />
        <Route path="services/makup" element={<Makup />} />
        <Route path="services/edit" element={<Bedit />} />


      </Route>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminBlogList />} />
        <Route path="blog" element={<AdminBlogList />} />
        <Route path="blog/new" element={<AdminBlogCreate />} />
        <Route path="blog/edit/:id" element={<AdminBlogCreate />} />
      </Route>
    </Routes>
  );
}

export default App;
