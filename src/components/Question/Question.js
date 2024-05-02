import Options from "../Options/Options";

function Question({ questions }) {
  // console.log(questions);
  // console.log(step);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} />
    </div>
  );
}

export default Question;
{
  /* <ul>
        {questions.map((sta) => (
          <li>
            <p>{sta.question}</p>
            <p>{sta.options}</p>
          </li>
        ))}
      </ul> */
}
