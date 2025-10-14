import React from "react";

const Profile = () => {
  return (
    <div className="rounded-full overflow-hidden w-full h-full">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReo5TNWOIHw03Z0zFpIdF_eoJBDbjmZBpZxNN5FrMq0rWmxcKUxhUnvrAt06Qi89mk7cUW&s"
        alt="Picture"
        className="w-full h-full object-cover"
        onError={(e) => {
          console.log("Image failed to load:", e.target.src);
        }}
      />
    </div>
  );
};

export default Profile;
