import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
// import auth from '../../reducers/auth';

const EditProfile = ({ profile: { profile, loading }, auth: { user }, createProfile, getCurrentProfile,  history }) => {
    const [formData, setFormData] = useState({
        location: '',
        company: ''
    });

    const {
        name,
        email,
        location, 
        company
    } = formData;

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            location: loading || !profile.location ? '' : profile.location,
            company: loading || !profile.company ? '' : profile.company,
        });
    }, [loading]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    }

    return (

    <div>
        <div className="div-centered mt-5">
            <div className="card card-hover mt-4">
                <div className="card-header">
                    <strong>Edit Profile</strong>
                </div>
                 <div className="card-body mx-5">
                    <form onSubmit={e => onSubmit(e)} className="form list-group list-group list-group-flush">
                        <input type="text" className="form-control" placeholder="Name" name='name' disabled value={name} onChange={e => onChange(e)} />
                        <input type="text" className="form-control" placeholder="Email" name='email' disabled value={email} onChange={e => onChange(e)} />
                        <input type="text" className="form-control" placeholder="Location" name='location' value={location} onChange={e => onChange(e)} />
                        <input type="text" className="form-control" placeholder="Company" name='company' value={company} onChange={e => onChange(e)} />
                        <input type="submit" className="btn btn-outline-primary mt-3" />
                        <Link className='btn btn-light my-1' to='/profile'>Go Back</Link>
                    </form>
                </div>
                <div className="card-footer">
                    Lets update some information
                </div>
            </div>
        </div>
    </div>
    )
};

EditProfile.propTypes = {
    EditProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth

});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));

