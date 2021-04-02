import React, { useEffect } from 'react';
import '../../App.css';
import '../css/schedule.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSchedules } from '../../actions/schedule';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ScheduleItem from './ScheduleItem';

const Schedule = ({ getSchedules, schedule: { schedules, loading } }) => {

  useEffect(() => {
      getSchedules();
  }, []);


  return loading ? (
    <Spinner />
     ) : (
    <div id="main">
      <div></div>
      <div className="container">
        <div className="row mt-5">
          <div className="rounded col-sm-8 mx-auto title-bg card-color" align="center">
            <div className="container">
              <h1 className="text-dark title">Conference Schedule</h1>
            </div>
          </div>
        </div>
    </div>
    
    <div className="container"> {/* container */}
      <div className="row mt-5"> {/* main row */}
        <div className="col-10 mx-auto pt-5 pb-5"> {/* main column */}
          <div>
            {schedules.length > 0 ? (
              schedules.map(schedule => (
                <ScheduleItem key={schedule._id} schedule={schedule} />
              ))
            ) : <h4>No Events found...</h4>
          }
          </div>
        </div> {/* main column */}
      </div> {/* main row */}
    </div> {/* container */}
  </div>
  );
}

Schedule.propTypes = {
  getSchedules: PropTypes.func.isRequired,
  schedule: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
  schedule: state.schedule
})

export default connect(mapStateToProps, { getSchedules })(Schedule);