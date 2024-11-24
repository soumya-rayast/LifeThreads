import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux'
import AuthorRecentBlogs from './AuthorRecentBlogs';

const Profile = () => {
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <Helmet>
        <title>LifeThreads - Author Profile</title>
        <meta name="description" content="View the profile and recent blogs of the author on LifeThreads." />
      </Helmet>
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg mt-10 mb-10 p-8">
        {/* Profile Photo and Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <img
              src={user?.profilePhoto || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-500">{user?.name || "Anonymous User"}</h2>
              <p className="text-gray-600">{user?.email || "Not Provided"}</p>
              <p className="text-gray-600">{user?.phoneNumber || "Not provided"}</p>
            </div>
          </div>
          <button className="text-blue-500 md:flex hidden items-center" onClick={() => navigate('/updateProfile')} >
            <MdEditSquare size={24} />
          </button>
        </div>

        {/* Description Section */}
        <div className="mb-8 text-left px-4">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">About Me</h3>
          <p className="text-gray-600">
            {user?.bio || "Passionate blogger, travel enthusiast, and tech lover. Sharing my journey and insights with the world. Let’s connect and explore ideas together!"}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href={user?.socialLinks?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href={user?.socialLinks?.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href={user?.socialLinks?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href={user?.socialLinks?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className=' flex gap-2'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md' onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md' onClick={() => navigate('/authorblogs')}>Your Blogs</button>
        </div>
      </div>

      {/* User Blog */}
      <div className="w-full px-3 sm:px-10 mb-10">
        <h1 className="text-left text-3xl font-semibold mb-5">User's Recent Blogs</h1>
        <hr className="border-gray-300 my-4" />
        <div className="flex flex-wrap gap-4">
          <AuthorRecentBlogs />
        </div>
        <hr className="border-gray-300 my-4" />
      </div>
    </div>
  );

};

export default Profile;
