import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { LinkButton } from "../components/LinkButton";
import { AppInput } from "../components/AppInput";

const Welcome = () => {
const [nameValue, setNameValue] = useState('')
const [phoneNumberValue, setPhoneNumberValue] = useState('')

const [nameError, setNameError] = useState(false)
const [phoneError, setPhoneError] = useState(false)

useEffect(() => {
  if (!nameValue) {
    setNameError(true)
  } else {
    setNameError(false)
  }
}, [nameValue])
useEffect(() => {
  if (!phoneNumberValue) {
    setPhoneError(true)
  } else {
    setPhoneError(false)
  }
}, [phoneNumberValue])

const isNextButtonDisabled = nameError || phoneError

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading text="Добро пожаловать в квиз от лучшего учебного центра" />
          {<form className="welcome__form">
          <AppInput 
            inputLabel="Ваше Имя"
            isRequired={true}
            inputType="text"
            inputName="username"
            inputId="username"
            inputPlaceholder="Ваш ответ"
            errorText="Введите номер в правильном формате например"
            inputValue={nameValue}
            onInputChange={(e) => setNameValue(e.target.value)}
            isError={nameError}
          />
          <AppInput 
            inputLabel="Ваше номер"
            isRequired={true}
            inputType="tel"
            inputName="phone"
            inputId="phone"
            inputPlaceholder="+998 9- --- -- -- "
            errorText="Введите номер в правильном формате например"
            inputValue={phoneNumberValue}
            onInputChange={(e) => setPhoneNumberValue(e.target.value)}
            isError={phoneError}
          />
          <LinkButton
            path='step-one'
            isDisabled={isNextButtonDisabled}
            type="subnmit" 
            buttonText="Далее" 
          />
          </form>}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
