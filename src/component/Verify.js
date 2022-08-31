import React from "react";

const Verify = () => {
  return (
    <div class="login-page">
      <h2>Welcome to our gift's redemption counter</h2>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Staff Details</h1>
            <span>Required to redeem Gift</span>
            <input type="email" placeholder="Enter Staff ID" />
            <button>Verify</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello, Teams!</h1>
              <p>
                Christmas season begins. Connected with us and send your
                representative to redeem your Team gift's. Thanks you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
