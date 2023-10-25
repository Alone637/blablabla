import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";


const StepOne = ({onGoNextPage}) => {
const [userAnswer,setUserAnswer] = useState(null)

const isNext1ButtonDisabled = !userAnswer

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="question">
            <Heading type="h2" headerText="1. Занимательный вопрос"/>
            <AppInput  
                isRequired={true}
                name="answer"
                type="text"
                placeholderText="Ваш ответ"
                errorText=" Введите номер в правильном формате например"
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <AppButton 
               isDisabled={isNext1ButtonDisabled} 
               type="submit" 
               id="next-btn" 
               buttonText="Далее"
               onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;