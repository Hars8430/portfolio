import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am Harsh Singh, Aspiring Data Scientist with a focus on Machine Learning
          and Generative AI. I recently graduated from Delhi Technological
          University with a Bachelor's Degree in Engineering, and I work
          across the full analytics lifecycle - data cleaning and EDA,
          statistical modeling, machine learning, and deployment. My stack
          centers on Python and SQL, with the scikit-learn, TensorFlow, and
          PyTorch ecosystem, plus additional depth in NLP, LLMs, and
          Generative AI - including RAG pipelines, embeddings, and LLM
          fine-tuning. I enjoy owning a problem end to end: framing the
          question, building and validating models, and turning the results
          into clear, decision-ready insight for cross-functional
          stakeholders.
        </p>
      </div>
    </div>
  );
};

export default About;
