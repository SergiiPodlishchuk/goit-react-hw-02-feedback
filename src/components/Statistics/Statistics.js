import React from "react";

import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const isShowNotification = total === 0;
  const isShowStatistics = total > 0;

  return (
    <Section title="Statistics">
      {isShowNotification && <Notification message="No feedback given" />}
      {isShowStatistics && (
        <div>
          <p>Good: {good} </p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>

          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      )}
    </Section>
  );
};

export default Statistics;
