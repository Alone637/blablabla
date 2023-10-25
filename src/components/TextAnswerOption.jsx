import React from "react"

export const TextAnswerOption = ({
    id,
    textAswer,
    isAnswerChecked,
    onClick,
}) => {
    return (
        <li className="variant-wrapper" onClick={onClick}>
            <input required type="radio" name="variant" id={id} checked={isAnswerChecked} />
            <label htmlFor={id}>{textAswer}</label>
        </li>
    )
}