import React from "react";
import{useState} from "react";
const ChatForm = ({responseGenerate})=> {
    const[inputText,setInputText] =useState("");
return(

<div className="formdiv">
<textarea
rows="5"
className="textForm"
placeholder="Ask me Anything"
value={inputText}
onChange={(e)=>setInputText(e.target.value)}
></textarea>
<br/>

<button onClick={()=>responseGenerate(inputText,setInputText)} 
className="button">Generate Response</button>

</div>


)
}
export default ChatForm;