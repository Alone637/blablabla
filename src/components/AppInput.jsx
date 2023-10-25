import React from "react";

export const AppInput = ({
    inputLabel,
    isRequired,
    inputType,
    inputName,
    inputId,
    inputPlaceholder,
    errorText,
    isError,
    inputValue,
    onInputChange,
}) => {
    return (
    <label className={isError ? "input-wrapper _error" : "input_wrapper"} htmlFor="inputName">
        {inputLabel}
        <input
            required={isRequired}
            type={inputType}
            name={inputName}
            id={inputId}
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={onInputChange}
        />
        <span id="error-message">
           {errorText}
        </span>
    </label>
    )
}