const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive: {Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)}%
      </p>
    </>
  );
};

export default Feedback;
