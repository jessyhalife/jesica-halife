import React from 'react'

const Letter = ({ letter, index }) => {
  const word = ["T", "H", "I", "N", "G", "S"];
  const [flip, setFlip] = React.useState(false)

  function getLetterState() {
    if (letter === word[index]) {
      return 'correct'
    } else if (word.includes(letter)) {
      return 'present'
    } else {
      return 'missing'
    }

  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFlip(true)
    }, 500 + 100 * index);
    return () => clearTimeout(timer)
  }, [word])
  return (
    <><div className={`letter-card`}>
      <div className={`letter-card-inner  ${flip ? 'flipping' : ''}`}>
        <div className={`letter-card-front`}>
          {letter}
        </div>
        <div className={`letter-card-back  ${getLetterState()}`}>
          {letter}
        </div>
      </div>
    </div>
      <style jsx>{`
        .letter-card {
          background-color: transparent;
          width: 32px;
          max-width: 32px;
          height: 32px;
          font-size: 1.2rem;
          font-weight: bold;
          perspective: 1000px; /* Remove this if you don't want the 3D effect */
        }
        
        /* This container is needed to position the front and back side */
        .letter-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        /* Do an horizontal flip when you move the mouse over the flip box container */
        .flipping{
          transform: rotateX(-180deg);
        }
        
        /* Position the front and back side */
        .letter-card-front, .letter-card-back {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
        }
        
        /* Style the front side (fallback if image is missing) */
        .letter-card-front {
          background-color: white;
          color: black;
          border: 1px solid black;
        }
        
        /* Style the back side */
        .letter-card-back {
          color: white;
          transform: rotateX(180deg);
          
        }
        .correct {
          background-color: rgb(90,160,93);
        }

        .present {
          background-color: rgb(197, 171, 85);
        }
        
        .missing {
          background-color: rgb(108, 113, 114);
        }
    `}</style></>
  )
}

export default Letter