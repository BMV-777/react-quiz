function Options({ questions, dispatch, answer }) {
  const hansard = answer !== null;

  return (
    <div>
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hansard
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : " "
            } `}
            key={option}
            disabled={hansard}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
