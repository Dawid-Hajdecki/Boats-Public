import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
// import ProfileTop from './ProfileTop';


const Profile = ({ getCurrentProfile, auth: { user },  profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);


    return (

    <div>
        <div className="div-centered mt-5">
            <div className="card card-hover mt-4">
                <div className="card-header">

                    <strong>Your Profile</strong>
                </div>
                <div className="card-body mx-5">
                    {/* <ProfileTop profile={profile} /> */}
                    <p><strong>Username: </strong>{user.name}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>Location: </strong>{profile.location}</p>
                    <p><strong>Company: </strong>{profile.company}</p> 
                </div>
                <div className="card-footer">
                <Link to='/edit-profile' className='btn btn-outline-primary float-left'>Edit Profile</Link>
                <Link to='/profile' className='btn btn-light float-right'>Back</Link>
                </div>
            </div>
        </div>
    </div>

    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);