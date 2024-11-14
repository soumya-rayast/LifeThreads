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
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/postDetail' element={<PostDetail/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/editpost' element={<EditPost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;