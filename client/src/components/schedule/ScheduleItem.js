import React from 'react'
import PropTypes from 'prop-types'
import placeholder from '../assets/img_placeholder.jpg';

const ScheduleItem = ({ schedule}) => {
    return (
        <div>
            <div className="card card-font card-hover rounded p-0" > {/* first card */}
                <h5 className="card-header">{schedule.timeOfEvent} - {schedule.dateOfEvent}</h5>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={placeholder} alt="..." height="250px" width="275px"/>
                    </div>
                    <div className="col-md-9 col-12 pt-3">
                        <div className="card-body" align="center">
                            <h3 className="card-title">{schedule.speaker.name}</h3><br></br>
                            <h2 className="card-text">{schedule.title}</h2><br></br><br></br>
                            <p className="card-text text-muted">{schedule.location}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </div>
    )
}

ScheduleItem.propTypes = {
    schedule: PropTypes.object.isRequired,

}

export default ScheduleItem