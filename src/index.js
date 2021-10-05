import React, { Component } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";
import Header from "./MyComponents/Header";
import "./styles.css";


class App extends Component {
  state = {
    otp: '',
  };

  handleChange = otp => {
    this.setState({ otp });
  };

  render() {
    return (

      <div>
        <Header />
        <div >
          </div>
        <div className="d-flex justify-content-center align-items-center container">
          <div className="card py-5 px-3">
            
         <div className="col text-center">
        <h2>Verify OTP </h2>
            <p>Enter the Otp sent to phone number : +91 - XXXX - XXX- XXX</p>
          </div>   
            <OtpInput
              className="form-control "
              onChange={this.handleChange}
              numInputs={6}
              separator={<span> </span>}
              value={this.state.otp}
            />
            <br />

            <button
              className="btn btn-primary"
              onClick={e =>
                alert("Otp verified")
              }
            >
              Verify Otp
            </button>
          </div></div></div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
