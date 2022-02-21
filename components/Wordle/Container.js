import React from 'react'
import Letter from './Letter'
import {v4 as uuidv4} from 'uuid';

const WORDS = ["QUERTY","ASDFGH", "TINHGS", "THINGS"];
const Container = () => {
  const [word, setWords] = React.useState(WORDS[0]);
  React.useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index < WORDS.length) {
        setWords(WORDS[index]);
        index++;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [])
  return (
    <>
    <div>
      {word.split("").map((letter, index) => <Letter letter={letter} index={index} key={uuidv4()}/>)}
    </div>
    <style jsx>{` div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      align-self: center;
    }`}</style>
    </>
  )
}

export default Container