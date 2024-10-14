import './App.css';
import Header from './Header';
import ChatForm from './ChatForm';
import AnswerSec from './AnswerSec';
import OpenAI from 'openai';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  
  const responseGenerate = async (inputText, setInputText) => {
    let options = {
      prompt: `Complete this sentence: "${inputText}"`,
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 50,
      n: 1,
      stop: ".",
    };
    let completeOptions = {
      ...options,
      prompt: inputText,
    };

    const response = await openai.completions.create(completeOptions);
    if (response.choices.length) {
      setMessages([
        {
          question: inputText,
          answer: response.choices[0].text,
        },
        ...messages,
      ]);
      setInputText("");
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatForm responseGenerate={responseGenerate} />
      <AnswerSec messages={messages} />
    </div>
  );
}

export default App;