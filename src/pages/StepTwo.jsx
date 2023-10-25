import React, {useState} from "react";
import { ProgressBar } from "../components/ProgressBar"
import { TextAnswerOption } from "../components/TextAnswerOption";

const StepTwo = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState()

  const answersData = [
    {
      id: 'variant-1',
      TextAnswer: 'Ваш ответ 1'
    },
    {
      id: 'variant-2',
      TextAnswer: 'Ваш ответ 2'
    },
    {
      id: 'variant-3',
      TextAnswer: 'Ваш ответ 3'
    },
    {
      id: 'variant-4',
      TextAnswer: 'Ваш ответ 4'
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {
                answersData.map(answer => (
                  <TextAnswerOption
                  key={answer.id}
                  id={answer.id}
                  textAswer={answer.TextAnswer}
                  isAnswerChecked={answer.id === selectedAnswerId}
                  onClick={() => setSelectedAnswerId(answer.id)}
                  />
                ))
              }
            </ul>
            <button disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
