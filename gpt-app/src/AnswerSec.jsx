import React from "react";
const AnswerSec=({messages})=>{
    return(
<div className="answerdiv">
<div className="answerSubDiv">
    <hr className="hrLine"/>
    <div className="answerContainer">
        {messages.map((value,index)=>{
            return(
<div className="answersection" key={index}>
    <p className="question">{value.question}</p>
    <p className="answer">{value.answer}</p>
</div>




            );
        })}
</div>
</div>
</div>
    )
}
export default AnswerSec;