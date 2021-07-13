import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Styles from "./CourseInput.module.css"
// import Styled from "styled-components";

// const FormControl = Styled.div`

//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (!props.isValid ? 'red': '#ccc') };
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length === 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={Styles['form-control']}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{ borderColor: !isValid ? "red" : ""}}
        />
        {!isValid && (
          <label style={{ color: "red" }}>Please enter your goal</label>
        )}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
