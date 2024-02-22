import React, { useState } from "react";

const Question = (props) => {

    const qnNumber = props.question.id;
    const qn = props.question.question;

    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { id: 'A', value: '25' },
        { id: 'B', value: '42' },
        { id: 'C', value: '17' },
        { id: 'D', value: '31' },
    ];
    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
    };


  return (
      <div style={{ maxWidth: "1000px", margin: "0 auto", marginTop: "80px" }}>
        <p
          style={{ textAlign: "center", color: "white", fontFamily: "Outfit" }}
        >
          {qnNumber} | 30
        </p>
        <p
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            textAlign: "center",
            color: "white",
            fontFamily: "Poppins",
          }}
        >
          {qn}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          {options.map((option) => (
            <button
              className="optionbar"
              for={`option${option.id}`}
              key={option.id}
            >
              <input
                type="radio"
                id={`option${option.id}`}
                name="options"
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
              />
              <label
                style={{ fontFamily: "Outfit", fontSize: "20px" }}
                htmlFor={`option${option.id}`}
              >{` ${option.value}`}</label>
            </button>
          ))}
        </div>
      </div>
  );
};

export default Question;
