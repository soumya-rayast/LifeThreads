import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import PostDetail from './Pages/PostDetail';
import Blogs from './Pages/Blogs';
import Categories from './Pages/Categories';
import UpdateProfile from './Pages/UpdateProfile';
import AuthorBlogs from './Pages/AuthorBlogs';
import Author from './Pages/Author';
import AuthPage from './auth/AuthPage';
import About from './Pages/About';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/postDetail' element={<PostDetail />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/editpost' element={<EditPost />} />
          <Route path='/updateProfile' element={<UpdateProfile />} />
          <Route path='/authorblogs' element={<AuthorBlogs />} />
          <Route path='/author' element={<Author />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;