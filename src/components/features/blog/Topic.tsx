import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setTopic } from "./blogSlice";
import "../../../assets/BlogPostForm.css";
import { LuPencil } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

interface TopicProps {
  startWriting: () => void;
}
const Topic: React.FC<TopicProps> = ({ startWriting }) => {
  const dispatch = useDispatch();
  const topic = useSelector((state: RootState) => state.blog.topic);
  const [input, setInput] = useState("");

  const handleStartWriting = () => {
    dispatch(setTopic(input));
    startWriting();
  };
  const suggestions = [
    "10 ways to bake brownies",
    "Brownies vs Chocolate",
    "Best ingredients to put in brownies",
    "Why Bunny Brownies are so good",
    "How to make your brownie fudgy",
  ];

  return (
    <div className="topic">
      <div>
        <div className="topic-label">
          What do you want to write about today?
        </div>
        <div className="topic-input-box">
          <div className="col-md-9" style={{ paddingRight: "10px" }}>
            <input
              type="text"
              placeholder="Type your input"
              value={input}
              className="topic-input"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button className="topic-button" onClick={handleStartWriting}>
              <LuPencil className="topic-button-icon" />
              Start Writing
            </button>
          </div>
        </div>
      </div>
      <div className="suggestions">
        <h5 className="suggestions-label">
          Try writing
          <FaInfoCircle
            data-tooltip-id="try-writing"
            data-tooltip-content="Get started quick using one of our prompts!"
            data-tooltip-place="top"
            className="suggestions-icon"
          />
          
        </h5>
        <Tooltip  id="try-writing" />
        <div className="suggestions-list">
          {suggestions.map((suggestion) => {
            return (
              <div
                onClick={() => {
                  setInput(suggestion);
                }}
                className="suggestions-item"
              >
                {suggestion}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topic;
