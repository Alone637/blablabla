import React, {useState} from "react"
import { ProgressBar } from "../components/ProgressBar"
import { ImgAnswer } from "../components/ImgAnswer"
import { AppButton } from "../components/AppButton"

const StepThree = ({Next}) => {
  const [selectedAnswerId2, setSelectedAnswerId2] = useState()

  const answersData = [
    {
      id: 'variant-1',
      text: 'Ваш ответ 1',
      imgSrc: './img/laugh.png',
      alt:'laugh'
    },
    {
      id: 'variant-2',
      text: 'Ваш ответ 2',
      imgSrc: './img/hearts.png',
      alt:'hearts'
    },
    {
      id: 'variant-3',
      text: 'Ваш ответ 3',
      imgSrc: './img/smirk.png',
      alt:'smirk'
    },
    {
      id: 'variant-4',
      text: 'Ваш ответ 4',
      imgSrc: './img/fright.png',
      alt:'fright'
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="question">
          <ProgressBar />
            <ul className="emoji-variants">
              {
                answersData.map( answerItem => (
                  <ImgAnswer
                  key={answerItem.id}
                  id={answerItem.id} 
                  answerText={answerItem.text} 
                  isChecked={selectedAnswerId2 === answerItem.id}
                  imgSrc={answerItem.imgSrc}
                  onChange={() => setSelectedAnswerId2(answerItem.id)}
                  />
                ))
              }
            </ul>
            <AppButton 
               isDisabled={!selectedAnswerId2} 
               type="submit" 
               id="next-btn" 
               buttonText="Далее"
               onClick={() => (Next)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree;