import React from 'react';
import '../../App.css';
import '../css/info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import travel from '../assets/travelImage.png';

function App() {
  return (
    <div>
      <div className="container">
          <div className="row mt-5">
            <div className="rounded title-bg card-color col-sm-6 mx-auto" align="center">
              <div className="container">
                <h1 className="text-dark title">Event Information</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5"align="center">
            <div className="col-sm-12 mx-auto">
              <div className="card card-font card-hover card-padding mb-3 card-color rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title">Accommodation</h5>
                      <p className="card-text">There are many hotels to choose from less than a mile from the venue centre. </p>
                      <p className="card-text"><small className="text-muted link">View local accomodation here</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-3" align="center">
            <div className="col-sm-12 mx-auto">
            <div className="card card-font card-hover card-padding mb-3 nav-link-bg-50 rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-2 my-auto" >
                    <img src={travel} alt="..." width="170px" id="image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Travel</h5>
                      <p className="card-text">Best way of reaching the venue centre is taking the M8 to Glasgow. Inter-city directions can be found within our google maps API</p>
                      <p className="card-text"><small className="text-muted link">You can view us on google maps here</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3" align="center">
            <div className="col-sm-12 mx-auto">
              <div className="card card-font card-hover card-padding mb-3 nav-link-bg-50 rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title text-center">Event Parking</h5>
                      <p className="card-text">Parking is plentiful in Glasgow, you're never short of a place to park. The venue centre also has limited parking spaces. You can view nearby parking locations below.</p>
                      <p className="card-text"><small className="text-muted link">Click here to view event parking</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3" align="center">
            <div className="col-sm-12 mx-auto">
              <div className="card card-font card-hover card-padding mb-3 nav-link-bg-50 rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title">Restaurants & Bars</h5>
                      <p className="card-text">If you're looking to refresh, Glasgow provides a variety of popular chains and independent gems for you to discover</p>
                      <p className="card-text"><small className="text-muted link">Click here to view surrounding restaurants</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;