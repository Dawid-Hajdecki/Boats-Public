import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../App.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ auth: { user} }) => {

  return (
    <div>
      <div className="row mt-5">
        <div className="card title-bg card-color col-sm-6 mx-auto" align="center">
          <div className="container">
            <h1 className="text-dark title mb-3">December 2020 Boats Conference</h1>
            <div className="row">
              <div className="col dash">
                <h4>Date and time</h4>
                <div className="row">
                  <div className="col">14/02/2021</div>
                  <div className="w-100"></div>
                  <div className="col">From: 08:30 To: 13:00</div>
                </div>
              </div>
              <div className="col dash">
              <h4>Speakers</h4>
                <div className="row">
                  <div className="col">Dawid Hajdecki</div>
                  <div className="w-100"></div>
                  <div className="col">Tom Dalgleish</div>
                  <div className="w-100"></div>
                  <div className="col">Janet Webster</div>
                </div>
              </div>
              <div className="w-100"></div>
              {user ? '' : <Link className="text-decoration-none ml-1" to='/register'>Click here to register for this conference</Link>}
              <Link className="text-decoration-none ml-1" to='/info'>Click here for more information</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="card title-bg card-color col-sm-6 mx-auto" align="center">
          <div className="container">
            <div className="row">
              <div className="col ">
                <form className="form">
                  <div className="row">
                    <input id="input" type="text" className="form-control border-bottom"></input>
                    <button id="button" type="submit" className="btn btn-primary ml-3">Submit</button>
                  </div>
                </form>
              </div>
              <div className="w-100"></div>
              <div className="col">
                Enter email and submit to receive latest notifications
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="card title-bg card-color col-sm-6 mx-auto" align="center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4>Sponsors:</h4>
              </div>
              <div className="col">
                <h4>Other Topics:</h4>
              </div>
              <div className="w-100">
              </div>
              <div className="col">
                Tom Dalgleish, Google, Unsplash
              </div>
              <div className="col">
                Future Events, Previous Event, Changes to Events
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);