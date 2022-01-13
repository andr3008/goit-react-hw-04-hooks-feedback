import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Section from "./components/Section/Section.jsx";
import Container from "./components/Container/Container.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback) * 100);
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
