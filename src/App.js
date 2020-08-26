import React, { Component } from "react";

import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

const INITIAL_FEEDBACK = { good: 0, neutral: 0, bad: 0 };

export default class App extends Component {
  state = INITIAL_FEEDBACK;

  addReview = ({ target }) => {
    const { id } = target;
    if (id === "good") {
      this.setState((prevState) => {
        return { good: prevState.good + 1 };
      });
      return;
    }
    if (id === "neutral") {
      this.setState((prevState) => {
        return { neutral: prevState.neutral + 1 };
      });
      return;
    }
    if (id === "bad") {
      this.setState((prevState) => {
        return { bad: prevState.bad + 1 };
      });
      return;
    }
  };

  countPositiveFeedbackPercentage = () => {
    const arrFeedback = Object.values(this.state);
    let total = 0;
    let persentage = 0;
    for (let i = 0; i < arrFeedback.length; i++) {
      const element = arrFeedback[i];
      total += element;
      persentage = (this.state.good / (total - this.state.neutral)) * 100;
    }
    return persentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    const persentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <FeedbackOptions onLeaveFeedback={this.addReview} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={persentage}
        />
      </div>
    );
  }
}
