import React, { useState } from 'react';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [facebookLink, setFacebookLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [linkedinLink, setLinkedinLink] = useState('');

    const handleUpdate = () => {
        console.log('Profile updated:', {
            name,
            email,
            phone,
            profilePhoto,
            description,
            facebookLink,
            twitterLink,
            instagramLink,
            linkedinLink,
        });
    };

    return (
        <div className="flex  flex-col items-center justify-center bg-gray-100 py-5 px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-blue-500 mb-4">Update Profile</h2>

                {/* User Name  and Email */}
                <div className="flex flex-row justify-between items-center flex-wrap gap-2 mb-4">
                    <div className="">
                        <label className="block text-blue-500 pl-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-500 pl-2">Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-blue-500 pl-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-500 pl-2">Profile Photo</label>
                    <input
                        type="file"
                        required
                        onChange={(e) => setProfilePhoto(e.target.files[0])}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-blue-500 pl-2">Bio</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us something about yourself"
                        className="w-full px-3 py-2 border rounded-lg resize-none"
                    />
                </div>

                {/* Social media Links */}
                <div className="flex justify-between items-center gap-4 mb-4">
                    <div className="w-full">
                        <label className="block text-blue-500 pl-2">Facebook Link</label>
                        <input
                            type="text"
                            value={facebookLink}
                            onChange={(e) => setFacebookLink(e.target.value)}
                            placeholder="Enter your Facebook link"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-blue-500 pl-2">Twitter Link</label>
                        <input
                            type="text"
                            value={twitterLink}
                            onChange={(e) => setTwitterLink(e.target.value)}
                            placeholder="Enter your Twitter link"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4 mb-4">
                    <div className="w-full">
                        <label className="block text-blue-500 pl-2">Instagram Link</label>
                        <input
                            type="text"
                            value={instagramLink}
                            onChange={(e) => setInstagramLink(e.target.value)}
                            placeholder="Enter your Instagram link"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-blue-500 pl-2">LinkedIn Link</label>
                        <input
                            type="text"
                            value={linkedinLink}
                            onChange={(e) => setLinkedinLink(e.target.value)}
                            placeholder="Enter your LinkedIn link"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                </div>

                <button onClick={handleUpdate} className="w-full bg-blue-500 text-white py-2 rounded-lg">
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default UpdateProfile;
