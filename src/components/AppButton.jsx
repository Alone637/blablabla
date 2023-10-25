import React from "react";

export const AppButton = ({ isDisabled, type, buttonText }) => {
  return <button disabled={isDisabled} type={type}>{buttonText}</button>;
};
