import React, { useState } from "react";

const Verify = (props) => {
  const [staffid, setStaffid] = useState("");
  const [error, setError] = useState("");
  const [validStaff, setValidStaff] = useState(false);
  const [staffdetails, setStaffdetails] = useState([]);
  const [redemption, setRedemption] = useState([]);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(staffid);
    if (!staffid) {
      setError("Staff field empty. Enter valid staff id");
    } else {
      console.log(props.data);
      const valid = props.data.find((item) => item.staff_pass_id === staffid);
      if (valid) {
        setStaffdetails(valid);
        setValidStaff(true);
        setError("");
      } else {
        setError("Invalid Staff ID");
      }
    }
  };

  const onClickRedeemHandler = (teamName, staffPassId) => {
    console.log(teamName);
    console.log(staffPassId);
    const currentDateTime = new Date();

    const newredemtion = {
      staff_pass_id: staffPassId,
      team_name: teamName,
      created_at: currentDateTime,
    };
    setRedemption([...redemption, newredemtion]);
  };

  console.log(redemption);
  return (
    <div className="login-page">
      <h2>Welcome to our gift's redemption counter</h2>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={onClickHandler}>
            <h1>Staff Details</h1>
            <span>Required to redeem Gift</span>
            <input
              type="text"
              value={staffid}
              placeholder="Enter Staff ID"
              onChange={(e) => setStaffid(e.target.value)}
            />
            {error ? <span className="error_message">{error}</span> : ""}
            <button className={`${validStaff ? "green" : ""}`}>
              {validStaff ? "Verified" : "Verify"}{" "}
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className={`overlay${validStaff ? "_green" : ""}`}>
            <div className="overlay-panel overlay-right">
              {validStaff ? (
                <h1>Welcome, {staffdetails.team_name} </h1>
              ) : (
                <h1>Hello, Teams! </h1>
              )}
              <p>
                Christmas season begins. Connected with us and send your
                representative to redeem your Team gift's. Thanks you.
              </p>
              {validStaff ? (
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() =>
                    onClickRedeemHandler(
                      staffdetails.team_name,
                      staffdetails.staff_pass_id
                    )
                  }
                >
                  Redeem Gift
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;

// STAFF_H123804820G
// MANAGER_T999888420B
// BOSS_T000000001P
