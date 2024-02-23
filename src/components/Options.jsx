const Options = ({updateFeedback, reset, totalFeedback}) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback !== 0 && <button onClick={reset}>Reset</button>}
    </>
  );
};

export default Options;
