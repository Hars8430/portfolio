import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "DocuChat",
    category: "RAG Q&A Chatbot",
    tools: "LangChain, FAISS, OpenAI, Streamlit, Docker, PyTorch, HuggingFace",
    image: "/images/docuchat.png",
    link: "https://neduyw8dohjpru28tx2hms.streamlit.app/",
  },
  {
    title: "AI Research Agent",
    category: "Stateful Multi-Agent Research System",
    tools: "LangGraph, LangChain, Tavily, Streamlit",
    image: "/images/ai-research-agent.png",
    link: "https://ai-research-agent-009.streamlit.app/",
  },
  {
    title: "VulgarVeto",
    category: "Audio Profanity Detection & Censorship",
    tools: "OpenAI Whisper, pydub, gTTS, Streamlit",
    image: "/images/vulgarveto.png",
    link: "https://vulgarv2.streamlit.app/",
  },
  {
    title: "WordPredd",
    category: "Word Prediction Using NLP",
    tools: "Label Encoding, EDA, RNN, NLP, Streamlit",
    image: "/images/WORDPREDD.png",
    link: "https://your-wordpredd-live-link.com",
  },
  {
    title: "IPL Winner Prediction",
    category: "Predicts the winner based on previous records",
    tools: "Data Analysis, Machine Learning, EDA, Streamlit",
    image: "/images/IPL-WINNERS.png",
    link: "https://ipl2026wi.streamlit.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
