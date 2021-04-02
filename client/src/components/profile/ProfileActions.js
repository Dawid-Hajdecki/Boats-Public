import React from 'react';
import { Link } from 'react-router-dom';


const ProfileActions = () => {
    return (
        <div className="dash-buttons">
        <Link to="/view-profile" className="btn btn-primary mx-2">
          <i className="fas fa-user-circle"></i>
          View Profile
        </Link>
        <Link to="/edit-profile" className="btn btn-primary mx-2">
          <i className="fas fa-pencil-alt"></i>
          Edit Profile
        </Link>
      </div>
    )
};

export default ProfileActions;
