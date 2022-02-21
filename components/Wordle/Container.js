import React from 'react'
import Letter from './Letter'
import {v4 as uuidv4} from 'uuid';


const Container = ({words, word}) => {
  const [current, setCurrent] = React.useState(words[0]);
  React.useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index < words.length) {
        setCurrent(words[index]);
        index++;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  React.useEffect(() => {
    setCurrent(words[0])
  }, [words, word])
  
  return (
    <>
    <div>
      {current.split("").map((letter, index) => <Letter letter={letter} index={index} key={uuidv4()} word={word}/>)}
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