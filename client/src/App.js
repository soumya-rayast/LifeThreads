import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Profile from './Author/Profile';
import Dashboard from './Author/Dashboard';
import CreatePost from './Author/CreatePost';
import EditPost from './Author/EditPost';
import PostDetail from './Pages/PostDetail';
import Blogs from './Pages/Blogs';
import Categories from './Pages/Categories';
import UpdateProfile from './Author/UpdateProfile';
import AuthorBlogs from './Author/AuthorBlogs';
import Author from './Pages/Author';
import AuthPage from './auth/AuthPage';
import About from './Pages/About';
import GsapTransition from './GSAPTrasition/GsapTrasition';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <GsapTransition>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/postDetail' element={<PostDetail />} />
            <Route path='/author' element={<Author />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/about' element={<About />} />

            {/* Protected Routes */}
            <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path='/createpost' element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
            <Route path='/editpost' element={<ProtectedRoute><EditPost /></ProtectedRoute>} />
            <Route path='/updateProfile' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
            <Route path='/authorblogs' element={<ProtectedRoute><AuthorBlogs /></ProtectedRoute>} />
          </Routes>
        </GsapTransition>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
