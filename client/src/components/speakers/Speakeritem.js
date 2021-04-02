import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/img_placeholder.jpg';
import '../css/speakers.css';

const SpeakerItem = ({ speaker }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-7 mx-auto mb-5">
            <div className="card card-hover card-font p-0">
                <img src={image} className="card-img-top" alt='speaker' height="175px"/>
                <div className="card-body" align="center">
                    <p className="card-text" id="speakerName">{speaker.speaker.name}</p>
                    {/* <small className="text-faded" id="speakerBio">{speaker.speaker.bio}</small><br></br> */}
                    <small className="text-faded" id="speakerInterests"></small>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Interests:</strong> {speaker.speaker.interests}</li>
                    <li className="list-group-item"><strong>Bio:</strong> {speaker.speaker.bio}</li>
                </ul>
            </div> {/* name,bio,interests */}
        </div>
                  
    )
}

SpeakerItem.propTypes = {
    speaker: PropTypes.object.isRequired,

}

export default SpeakerItem