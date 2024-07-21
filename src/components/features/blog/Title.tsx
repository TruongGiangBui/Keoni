import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import "../../../assets/BlogPostForm.css";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { FaTimes } from "react-icons/fa";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import emptyStateimg from "../../../assets/images/Keoni_Empty state 1.png";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
interface LengthOption {
  name: string;
  desc: string;
}
const Title: React.FC = () => {
  const dispatch = useDispatch();
  const topic = useSelector((state: RootState) => state.blog.topic);
  const [keyword, setKeyword] = useState("");
  const [audience, setAudience] = useState("");
  const [length, setLength] = useState("Short");
  const [articleReferences, setArticleReferences] = useState("");
  const [selectedKeyWord, setSelectedKeyWord] = useState<string[]>([]);
  const [collapseBusiness, setCollapseBusiness] = useState(false);
  const [emptyState, setEmptyState] = useState(false);
  const [slectedGeneratedContent, setSlectedGeneratedContent] = useState("");
  const onPressKeyword = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      if (!selectedKeyWord.includes(keyword)) {
        selectedKeyWord.push(keyword);
        setSelectedKeyWord(selectedKeyWord);
      }
      setKeyword("");
    }
  };
  const removeKeyword = (word: string) => {
    setSelectedKeyWord(selectedKeyWord.filter((el) => el != word));
  };
  const lengthOptions: LengthOption[] = [
    {
      name: "Short",
      desc: "450-700 words",
    },
    {
      name: "Medium",
      desc: "800-1,200 words",
    },
    {
      name: "Long",
      desc: "1,500-2,500 words",
    },
  ];
  const generatedOptions: string[] = [
    "Indulge in Deliciousness: A Guide to Baking the Perfect Brownie",
    "Brownie Bliss: Unleashing Your Inner Baker with BrownieYums",
    "Satisfy Your Sweet Tooth: The Ultimate Brownie Baking Guide for Home Bakers",
    "Bake Like a Pro: Elevate Your Brownie Game with BrownieYums",
    "Brownie Bonanza: A Flavorful Journey with Brownie Yums",
  ];
  return (
    <div className="step2-title">
      <div className="topic-name-box">
        Writing <div className="topic-name">{'"' + topic + '"'}</div>
      </div>
      <div className="gen-title-container">
        <div className="title-col">
          <div className="gen-title-input-box">
            <div className="gen-title-input-box-header">Article Input</div>
            <div className="gen-title-input-box-label">
              Primary Keyword(s)
              <div className="require-text">*</div>
              <FaInfoCircle
                data-tooltip-id="Primary-Keyword"
                data-tooltip-content="Keoni weaves primary keywords into your article with the correct keyword density for you to rank better"
                data-tooltip-place="top"
                className="suggestions-icon"
              />
            </div>
            <div className="gen-title-input-box-input-key">
              <div className="gen-title-input-box-input-selected">
                {selectedKeyWord.map((word) => {
                  return (
                    <div className="gen-title-input-selected-item">
                      {word}
                      <FaTimes
                        onClick={() => {
                          removeKeyword(word);
                        }}
                        className="gen-title-input-box-remove-icon"
                      />
                    </div>
                  );
                })}
              </div>

              <input
                type="text"
                placeholder="Press “Enter” to Add Keyword"
                value={keyword}
                className="gen-title-input-box-input"
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  onPressKeyword(e);
                }}
              />
            </div>
            <div className="gen-title-input-box-label">
              Target Audience
              <div className="require-text">*</div>
            </div>
            <div className="gen-title-input-box-input-key">
              <textarea
                placeholder="Target Audience"
                rows={3}
                value={audience}
                className="gen-title-input-box-input"
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>
            <div className="gen-title-input-box-label">Length</div>
            <div className="gen-title-input-length-options-box">
              {lengthOptions.map((option) => {
                return (
                  <div
                    onClick={() => setLength(option.name)}
                    className={
                      option.name == length
                        ? "gen-title-input-length-option gen-title-input-length-option-selected"
                        : "gen-title-input-length-option"
                    }
                  >
                    <div className="gen-title-input-length-option-check">
                      {option.name == length ? (
                        <MdOutlineRadioButtonChecked />
                      ) : (
                        <MdOutlineRadioButtonUnchecked />
                      )}
                    </div>
                    <div className="gen-title-input-length-option-content">
                      <div className="gen-title-input-length-option-content-name">
                        {option.name}
                      </div>
                      <div className="gen-title-input-length-option-content-desc">
                        {option.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="add-business-title-box">
            <div className="topic-name-box">
              Add business-specific references
            </div>
            {!collapseBusiness ? (
              <IoIosArrowUp
                onClick={() => setCollapseBusiness(true)}
                className="add-business-title-icon"
              />
            ) : (
              <IoIosArrowDown
                onClick={() => setCollapseBusiness(false)}
                className="add-business-title-icon"
              />
            )}
          </div>
          <div className="add-business-title-small">
            Improve your content’s quality by giving Keoni more to learn
          </div>
          {!collapseBusiness && (
            <div className="gen-title-input-box-red">
              <div className="gen-title-input-box-header">
                Business References
              </div>
              <div className="add-business-info-box">
                <div className="add-business-info-title">
                  Get more specific.
                </div>
                <div>
                  Keoni.ai considers proprietary knowledge shared and will weave
                  it into your content.
                </div>
              </div>
              <div className="gen-title-input-box-label">
                Choose knowledge base folder
              </div>
              <div className="gen-title-input-box-input-key">
                <select className="gen-title-input-box-input">
                  <option value="A">folder A</option>
                  <option value="B">folder B</option>
                </select>
              </div>
              <div className="add-business-manage">
                <div>Manage folder</div>
              </div>
              <div className="gen-title-input-box-label">
                Choose brand voice/tone
              </div>
              <div className="gen-title-input-box-input-key">
                <select className="gen-title-input-box-input">
                  <option value="Dreamikon">Dreamikon</option>
                </select>
              </div>
              <div className="add-business-manage">
                <div>Manage brand voice</div>
              </div>
            </div>
          )}
          {!collapseBusiness && (
            <div className="gen-title-input-box-yellow">
              <div className="gen-title-input-box-header">
                Article References
              </div>
              <div className="add-business-info-box">
                <div className="add-business-info-title">
                  Do you want Keoni.ai to refer to any article?
                </div>
                <div>
                  Keoni.ai will take reference to the title, primary keywords,
                  content structure and content.
                </div>
              </div>

              <div className="gen-title-input-box-input-key article-references">
                <div>https://</div>
                <input
                  type="text"
                  value={articleReferences}
                  className="gen-title-input-box-input"
                  onChange={(e) => setArticleReferences(e.target.value)}
                />
                <FaTimes
                  onClick={() => {
                    setArticleReferences("");
                  }}
                  className="gen-title-input-box-remove-icon"
                />
              </div>
              <div className="add-business-manage">
                <div>
                  <MdOutlineRemoveRedEye /> View article details
                </div>
              </div>
            </div>
          )}
          <button
            className={
              emptyState
                ? "generate-titles-btn "
                : "generate-titles-btn generate-titles-btn-disable"
            }
          >
            Generate Titles 🪄
          </button>
        </div>
        <Tooltip id="Primary-Keyword" />
        <div className="title-col left-col">
          {emptyState && (
            <div className="empty-state">
              <div className="empty-state-box">
                <img src={emptyStateimg} alt="" />
                <strong>No title generated</strong>
                <div>Fill out all the fields, we wil craft a title for you</div>
              </div>
            </div>
          )}
          {!emptyState && (
            <div className="generated-content">
              <div className="generated-content-header">
                <div className="topic-name-box">Select a Title</div>
                <div className="generated-content-gen-more">
                  <TfiReload />
                  <div>Generate more</div>
                </div>
              </div>
              <div className="generated-content-list">
                {generatedOptions.map((option) => {
                  return (
                    <div onClick={()=>{setSlectedGeneratedContent(option)}} className={slectedGeneratedContent==option?"generated-content-item generated-content-item-active":"generated-content-item"}>
                      <div className="generated-content-item-content">
                        {option}
                      </div>
                      <div className="generated-content-item-action ">
                        <AiOutlineDislike className="generated-content-item-action-icon" />
                        <AiOutlineLike className="generated-content-item-action-icon" />
                        <FaCheck className="generated-content-item-action-icon icon-slect-generated"></FaCheck>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="generate-titles-btn ">
                Generate Sub Headers 🪄
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
