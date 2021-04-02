import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../App.css';
import '../css/speakers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSpeakers } from '../../actions/speakers';
import SpeakerItem from './Speakeritem';
import Spinner from '../layout/Spinner';

/*const Speakers = ({ getSpeakers, speakers: { speaker, loading }}) => {
  useEffect(() => {
      getSpeakers();
  }, []);*/
const Speakers = ({ getSpeakers, speakers: { speakers, loading }  }) => {

  useEffect(() => {
    getSpeakers();
  }, []);

    return loading ? (
      <Spinner />
      ) : (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="rounded title-bg card-color col-sm-6 mx-auto" align="center">
              <div className="container">
                <h1 className="text-dark">Speakers</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container"> 
          <div className="row mt-5"> 
            <div className="col-11 mx-auto pt-5 pb-5"> {/* container for speakers */}
              <div className="card-group">
                <div className="row mb-2"> {/* row containing all speaker cards*/}
                    {speakers.length > 0 ? (
                      speakers.map(speaker => (
                        <SpeakerItem key={speaker._id} speaker={speaker} />
                      ))
                    ) : <h4>No Speakers found...</h4>
                    }
                </div> {/*end speaker row*/}
              </div>  {/*end card-group*/}
            </div> {/*end main column*/}
          </div> {/*end main row*/}
        </div> {/*end main container*/}
        
      </div>
  );
}

Speakers.propTypes = {
  getSpeakers: PropTypes.func.isRequired,
  speakers: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  speakers: state.speakers
});

export default connect(mapStateToProps, { getSpeakers })(Speakers);