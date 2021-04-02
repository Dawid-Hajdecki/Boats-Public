import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        location: '',
        company: '',
    });

    const {
        location, 
        company
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    }

    return (
    <div>
        <div className="div-centered mt-5">
            <div className="card card-hover mt-4">
                <div className="card-header">
                    <strong>Create Profile</strong>
                </div>
                <div className="card-body mx-5">
                    <form onSubmit={e => onSubmit(e)} className="form list-group list-group list-group-flush">
                        <input type="text" className="form-control" placeholder="Location" name='location' value={location} onChange={e => onChange(e)} />
                        <input type="text" className="form-control" placeholder="Company" name='company' value={company} onChange={e => onChange(e)} />
                        <input type="submit" className="btn btn-outline-primary mt-3" />
                        <Link className='btn btn-light my-1' to='/profile'>Go Back</Link>
                    </form>
                </div>
                <div className="card-footer">
                    Lets get some information to make your profile stand out
                </div>
            </div>
        </div>
    </div>
    )
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));

