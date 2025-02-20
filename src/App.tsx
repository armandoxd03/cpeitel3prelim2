import { useState } from 'react';
import { skillList } from './data.tsx';
import './App.css';
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < skillList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(skillList.length - 1);
    }
  }


  let skill = skillList[index];
  return (
    <>
    <h1>10 Things that Require Zero Talent</h1>
    <h3>John Roy C. Ducut</h3>
      <img
        src={skill.url}
        alt={skill.alt}
      />
            <div>
            <h2>
        <i>{skill.name} </i>
      </h2>
      <p><i>{skill.detail}</i></p>
      <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      </div>
    </>
  );
}
