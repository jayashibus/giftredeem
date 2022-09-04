import React, { useState, useEffect } from "react";
import { addRedemption, getRedemption } from "../http/HttpService";
import { CONSTANTS } from '../constants'

type IStaffDetails = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: string;
}


const GiftRedeem = ({ data }: any) => {
  const [staffId, setStaffId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [validStaff, setValidStaff] = useState<boolean>(false);
  const [staffDetails, setStaffDetails] = useState<IStaffDetails>({} as any);
  const [redemptionSuccess, setRedemptionSuccess] = useState<boolean>(false);
  const [validRedemption, setValidRedemption] = useState<boolean>(true);
  const [redemptionData, setRedemptionData] = useState<Array<any>>([]);

  useEffect(() => {
    setRedemptionData([...redemptionData, ...data.redemptionData]);
  }, [data]);

  const onClickVerifyHandler = (e: any) => {
    e.preventDefault();
    if (!staffId) {
      setError(CONSTANTS.giftRedeemScreen.validationMsg.emptyFied);
    } else {
      const valid = data?.staffData.find(
        (item: any) => item.staff_pass_id === staffId
      );

      if (valid) {
        setStaffDetails(valid);
        setValidStaff(true);
        setError("");
        const alreadyRedeemed = redemptionData.find(
          (team: any) => team.team_name === valid.team_name
        );

        if (alreadyRedeemed) {
          setValidRedemption(false);
        }
      } else {
        setError(CONSTANTS.giftRedeemScreen.validationMsg.invalidStaffId);
      }
    }
  };

  const onClickRedeemHandler = (teamName: string, staffPassId: string) => {
    const currentDateTime = Date.parse(Date());
    addRedemption({
      team_name: teamName,
      staff_pass_id: staffPassId,
      redeemed_at: currentDateTime,
    });

    getRedemption().then((redemptionData: any) => {
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

  type IMessageBox = {
    title: string;
    message: string;
  }

  const MessageBox = ({ title, message }: IMessageBox) => {
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
      <h2>{CONSTANTS.giftRedeemScreen.title}</h2>
      <div className="container" id="container">
        <div className="form-container sign-in-container">{form()}</div>
        <div className="overlay-container">
          <div
            className={`overlay${validStaff && validRedemption ? "_green" : ""
              }`}
          >
            <div className="overlay-panel overlay-right">
              {validStaff && validRedemption
                ? redemptionSuccess
                  ? (
                    <MessageBox title={staffDetails.team_name} message={CONSTANTS.giftRedeemScreen.message.success} />
                  )
                  : <MessageBox title={staffDetails.team_name} message={CONSTANTS.giftRedeemScreen.message.available} />
                : validStaff && !validRedemption
                  ? <MessageBox title={staffDetails.team_name} message={CONSTANTS.giftRedeemScreen.message.already} />
                  : <MessageBox title={CONSTANTS.giftRedeemScreen.messageTitle} message={CONSTANTS.giftRedeemScreen.message.season} />}

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
                  {CONSTANTS.giftRedeemScreen.button.redeemGift}
                </button>
              )}

              {validStaff && redemptionSuccess && (
                <button
                  className="success"
                  id="signUp"
                  onClick={onClickHomeHandler}
                >
                  {CONSTANTS.giftRedeemScreen.button.serveNewteam}
                </button>
              )}

              {!validRedemption && (
                <button
                  className="success"
                  id="signUp"
                  onClick={onClickHomeHandler}
                >
                 {CONSTANTS.giftRedeemScreen.button.serveNewteam}
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
