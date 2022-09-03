import React, { useState, useEffect } from "react";
import { addRedemption, getRedemption } from "./../http/HttpService";

const GiftRedeem = ({ data }) => {
  const [staffId, setStaffId] = useState("");
  const [error, setError] = useState("");
  const [validStaff, setValidStaff] = useState(false);
  const [staffDetails, setStaffDetails] = useState([]);
  const [redemptionSuccess, setRedemptionSuccess] = useState(false);
  const [validRedemption, setValidRedemption] = useState(true);
  const [redemptionData, setRedemptionData] = useState([]);

  const message = {
    success:
      "You are Successfully redeem your team Gift. Thank you. Happy Christmas..!",
    available:
      "Christmas Gifts are available for your Team. Kindly show your staff id and collect your team gifts.",
    already:
      "Already one of your team representative collected your Team gifts. Thank you. Happy Christmas.!",
    season:
      "Christmas season begins. Connected with us and send your representative to redeem your Team gift's. Thanks you.",
  };

  useEffect(() => {
    setRedemptionData([...redemptionData, ...data.redemptionData]);
  }, [data]);

  const onClickVerifyHandler = (e) => {
    e.preventDefault();
    if (!staffId) {
      setError("Staff field empty. Enter valid staff ID");
    } else {
      const valid = data.staffData.find(
        (item) => item.staff_pass_id === staffId
      );

      if (valid) {
        setStaffDetails(valid);
        setValidStaff(true);
        setError("");
        const alreadyRedeemed = redemptionData.find(
          (team) => team.team_name === valid.team_name
        );

        if (alreadyRedeemed) {
          setValidRedemption(false);
        }
      } else {
        setError("Invalid Staff ID");
      }
    }
  };

  const onClickRedeemHandler = (teamName, staffPassId) => {
    const currentDateTime = Date.parse(Date());
    addRedemption({
      team_name: teamName,
      staff_pass_id: staffPassId,
      redeemed_at: currentDateTime,
    });

    getRedemption().then((redemptionData) => {
      console.log(data);
      setRedemptionData(redemptionData);
    });

    setRedemptionSuccess(true);
  };

  const onClickHomeHandler = () => {
    setValidStaff(false);
    setRedemptionSuccess(false);
    setValidRedemption(true);
    setStaffId("");
  };

  const messageBox = (title, message) => {
    return (
      <>
        <h1>Welcome, {title} </h1>
        <p>{message}</p>
      </>
    );
  };

  const form = () => {
    return (
      <form onSubmit={onClickVerifyHandler}>
        {validStaff ? (
          <>
            <input type="text" value={`ID : ${staffId}`} disabled />
            <input
              type="text"
              value={`Team : ${staffDetails.team_name}`}
              disabled
            />

            <span className="primary_color">
              {"Account Verified Successfully"}
            </span>
          </>
        ) : (
          <>
            <input
              type="text"
              value={staffId}
              placeholder="Enter Staff ID"
              onChange={(e) => setStaffId(e.target.value)}
            />
            {error ? <span className="error_message">{error}</span> : ""}
            <button>Verify</button>
          </>
        )}
      </form>
    );
  };

  return (
    <div className="login-page">
      <h2>Welcome to our gift's redemption counter</h2>
      <div className="container" id="container">
        <div className="form-container sign-in-container">{form()}</div>
        <div className="overlay-container">
          <div
            className={`overlay${
              validStaff && validRedemption ? "_green" : ""
            }`}
          >
            <div className="overlay-panel overlay-right">
              {validStaff && validRedemption
                ? redemptionSuccess
                  ? messageBox(staffDetails.team_name, message.success)
                  : messageBox(staffDetails.team_name, message.available)
                : validStaff && !validRedemption
                ? messageBox(staffDetails.team_name, message.already)
                : messageBox("Teams!", message.season)}

              {validStaff && !redemptionSuccess && validRedemption && (
                <button
                  className="success"
                  id="signUp"
                  onClick={() =>
                    onClickRedeemHandler(
                      staffDetails.team_name,
                      staffDetails.staff_pass_id
                    )
                  }
                >
                  Redeem Gift
                </button>
              )}

              {validStaff && redemptionSuccess && (
                <button
                  className="success"
                  id="signUp"
                  onClick={onClickHomeHandler}
                >
                  Serve New Team
                </button>
              )}

              {!validRedemption && (
                <button
                  className="success"
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
