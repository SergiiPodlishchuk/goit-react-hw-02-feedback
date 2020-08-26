import React from "react";

import Section from "../Section/Section";

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <Section title="Please leave feedback">
      <div>
        <button type="button" id="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button type="button" id="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" id="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </Section>
  );
}
