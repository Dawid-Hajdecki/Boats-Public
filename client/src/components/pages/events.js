import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/events.css';
import placeholder from '../assets/img_placeholder.jpg';

function App() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="rounded title-bg card-color col-sm-6 mx-auto" align="center">
              <div className="container">
                <h1 className="text-dark title">Previous Events</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-12 mx-auto">
              <div className="card card-hover card-font mb-3 card-color rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-3 col-sm-2 col-1">
                    <img className="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div className="col-md-7 col-sm-8 col-9">
                    <div className="card-body">
                      <h5 className="card-title">Boats Conference 2020</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-12 mx-auto">
            <div className="card card-hover card-font mb-3 nav-link-bg-50 rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-3 col-sm-2 col-1">
                    <img className="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div className="col-md-7 col-sm-8 col-9">
                    <div className="card-body">
                      <h5 className="card-title">Boats Conference 2019</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 mx-auto">
              <div className="card card-hover card-font mb-3 nav-link-bg-50 rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img className="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Boats Conference 2018</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-12 mx-auto">
              <div className="card card-hover card-font mb-3 nav-link-bg-50 rounded border border-dark">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img className="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Boats Conference 2017</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
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