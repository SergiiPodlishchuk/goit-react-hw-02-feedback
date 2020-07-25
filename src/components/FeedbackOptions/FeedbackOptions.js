import React from "react";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
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
  );
}
