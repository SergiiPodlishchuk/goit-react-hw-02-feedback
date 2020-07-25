import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default class App extends Component {
  static defaultProps = { good: 0, neutral: 0, bad: 0 };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addReview = (e) => {
    if (e.target.id === "good") {
      this.setState((prevState) => {
        return { good: prevState.good + 1 };
      });
    } else if (e.target.id === "neutral") {
      this.setState((prevState) => {
        return { neutral: prevState.neutral + 1 };
      });
    } else if (e.target.id === "bad") {
      this.setState((prevState) => {
        return { bad: prevState.bad + 1 };
      });
    }
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return <p>Total: {total}</p>;
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
    // const persentage = Object.values(this.state).reduce(
    //   (acc, value) => this.state.good / (acc + value - this.state.neutral)*100,
    //   0
    // );

    return <p>Positive feedback: {persentage}%</p>;
  };

  render() {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addReview} />
        </Section>

        <Section title="Statistics">
          {total === 0 && <Notification message="No feedback given" />}
          {total > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={<this.countTotalFeedback />}
              positivePercentage={<this.countPositiveFeedbackPercentage />}
            />
          )}
        </Section>
      </div>
    );
  }
}
