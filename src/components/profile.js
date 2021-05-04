import React from "react";

const Profile = (user) => {
  

  return (
    <div>
        <img alt="Perfil" width="100px" src={user.picture}/>
        <h1>
            {user.name}
        </h1>
    </div>
  );
};

export default Profile;
