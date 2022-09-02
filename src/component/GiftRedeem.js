import React, { useState } from "react";

const GiftRedeem = (props) => {
  const [staffid, setStaffid] = useState("");
  const [teamName, setTeamName] = useState("");
  const [error, setError] = useState("");
  const [validStaff, setValidStaff] = useState(false);
  const [staffdetails, setStaffdetails] = useState([]);
  const [redemption, setRedemption] = useState([]);
  const [redemptionSuccess, setRedemptionSucess] = useState(false);
  const [validRedemtion, setValidRedemtion] = useState(true);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(staffid);
    if (!staffid) {
      setError("Staff field empty. Enter valid staff ID");
    } else {
      console.log(props.data);
      const valid = props.data.find((item) => item.staff_pass_id === staffid);
      if (valid) {
        setStaffdetails(valid);
        setValidStaff(true);
        setError("");
        const alreadyRedeemed = redemption.find(
          (team) => team.team_name === valid.team_name
        );
        if (alreadyRedeemed) {
          setValidRedemtion(false);
        }

        console.log("Valid Redemption : ", alreadyRedeemed);
      } else {
        setError("Invalid Staff ID");
      }
    }
  };

  const onClickRedeemHandler = (teamName, staffPassId) => {
    console.log(teamName);
    console.log(staffPassId);
    const currentDateTime = new Date().toLocaleString();

    const newredemtion = {
      staff_pass_id: staffPassId,
      team_name: teamName,
      created_at: currentDateTime,
    };
    setRedemption([...redemption, newredemtion]);
    setRedemptionSucess(true);
  };

  const onClickHomeHandler = () => {
    setValidStaff(false);
    setRedemptionSucess(false);
    setValidRedemtion(true);
    setStaffid("");
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

            {validStaff ? (
              <>
                <input type="text" value={`ID : ${staffid}`} disabled />
                <input
                  type="text"
                  value={`Team : ${staffdetails.team_name}`}
                  disabled
                />

                <button className="green" disabled>
                  Account Verified
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={staffid}
                  placeholder="Enter Staff ID"
                  onChange={(e) => setStaffid(e.target.value)}
                />
                {error ? <span className="error_message">{error}</span> : ""}
                <button>Verify</button>
              </>
            )}
          </form>
        </div>
        <div className="overlay-container">
          <div
            className={`overlay${validStaff && validRedemtion ? "_green" : ""}`}
          >
            <div className="overlay-panel overlay-right">
              {validStaff && validRedemtion ? (
                <>
                  <h1>Welcome, {staffdetails.team_name} </h1>
                  {redemptionSuccess ? (
                    <p>
                      You are Successfully redeem your team Gift. Thank you.{" "}
                      Happy Christmas..!
                    </p>
                  ) : (
                    <p>
                      Christmas Gifts are avaible for your Team. Please come and
                      collect.
                    </p>
                  )}
                </>
              ) : validStaff && !validRedemtion ? (
                <>
                  <h1>Welcome, {staffdetails.team_name} </h1>
                  <p>
                    Already one of your team representative collected your Team
                    gifts. Thank you. Happy Christmas.!
                  </p>
                </>
              ) : (
                <>
                  <h1>Hello, Teams! </h1>
                  <p>
                    Christmas season begins. Connected with us and send your
                    representative to redeem your Team gift's. Thanks you.
                  </p>
                </>
              )}

              {validStaff && !redemptionSuccess && validRedemtion && (
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
              )}

              {validStaff && redemptionSuccess && (
                <button
                  className="ghost"
                  id="signUp"
                  onClick={onClickHomeHandler}
                >
                  Serve Another Team
                </button>
              )}

              {!validRedemtion && (
                <button
                  className="ghost"
                  id="signUp"
                  onClick={onClickHomeHandler}
                >
                  Serve New Team
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftRedeem;

// STAFF_H123804820G
// MANAGER_T999888420B
// BOSS_T000000001P
