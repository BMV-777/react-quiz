// import DateCounter from "./DateCounter";
import { useEffect } from "react";
import { useReducer } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import StartScreen from "./StartScreen/StartScreen";
import Question from "./Question/Question";

const initialState = {
  questions: [],

  //loading, reade, error, active , finished
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dadaFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unkonwn");
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestion = questions.length;

  useEffect(function () {
    fetch("http://localhost:7000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dadaFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {/* <p>1/15</p>
        <p>Question?</p> */}
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "active" && <Question questions={questions[index]} />}
        {/* {questions.questions} */}
      </Main>
    </div>
  );
}

export default App;

//16/194
