import React from "react";
import { CONSTANTS } from "../constants";

type IFormProps = {
  validStaff: any;
  staffId: string;
  team_name: string;
  error: string;
  onSubmit: any;
  onChange: (e: any) => void;
};

const Form = ({
  validStaff,
  staffId,
  team_name,
  error,
  onSubmit,
  onChange,
}: IFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {validStaff ? (
        <>
          <input type="text" value={`ID : ${staffId}`} disabled />
          <input type="text" value={`Team : ${team_name}`} disabled />

          <span className="primary-color">
            {CONSTANTS.giftRedeemScreen.validationMsg.accountVerifiedMsg}
          </span>
        </>
      ) : (
        <>
          <input
            type="text"
            value={staffId}
            placeholder="Enter Staff ID"
            onChange={onChange}
          />
          {error ? <span className="error-message">{error}</span> : ""}
          <button>{CONSTANTS.giftRedeemScreen.button.verify}</button>
        </>
      )}
    </form>
  );
};

export default Form;
