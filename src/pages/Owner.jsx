import React from 'react';

const Owner = () => {
  return (
    <div className="owner-container">
      <h1>14_F-Kumphon GroupGenmate : A / JSD8</h1>
      
      <div className="profile-image-container">
        <img 
          src="/src/assets/IMG_3472_Original.jpg" 
          alt="kumphon story" 
          className="profile-image" 
        />
      </div>

      <h2>Short Biography:</h2>
      
      <p className="biography-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, suscipit? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque consectetur qui temporibus consequatur similique fuga molestias architecto! <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, optio! <br />
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}

export default Owner;