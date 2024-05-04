function NextQuestions({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestions" })}
    >
      Next
    </button>
  );
}

export default NextQuestions;
