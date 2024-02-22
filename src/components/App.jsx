import { useState, useEffect } from "react";

import "./App.css";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";
import Description from "./Description";

const feedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [obj, setObj] = useState(() => {
    return JSON.parse(window.localStorage.getItem("feedback")) || feedback;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(obj));
  }, [obj]);

  const updateFeedback = (key) => {
    setObj({
      ...obj,
      [key]: obj[key] + 1
    });
  };

  const reset = () => {
    setObj(feedback);
  }

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset}/>
      {(obj['good'] + obj['neutral'] + obj['bad'] == 0) ? <Notification /> : <Feedback feedback={obj}/>}
    </>
  );
};

export default App;
