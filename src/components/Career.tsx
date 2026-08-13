import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Industrial Trainee</h4>
                <h5>Data Analytics · NTPC, Dadri</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Analyzed operational and performance data from regenerative feed
              heating systems as part of a team project forecasting electricity
              consumption, applying structured data cleaning and EDA. Studied
              real-time SCADA monitoring pipelines end-to-end, building an
              understanding of sensor data quality, reliability, and governance
              for predictive-maintenance analytics. Collaborated with a
              cross-functional trainee team to prepare, validate, and document
              datasets used in the group's prediction model.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Public Relations</h4>
                <h5>TEDxDTU — "AI Boom or Bane"</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed outreach and stakeholder coordination for a 500+
              attendee event, building working relationships across multiple
              teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Logistics Head</h4>
                <h5>ENGIFEST, DTU</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Directed logistics for DTU's annual festival, coordinating a
              30+ member volunteer team and multiple stakeholders under time
              pressure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Volunteer</h4>
                <h5>RobinHood Army, Delhi-NCR</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Taught and mentored underprivileged children, contributing 40+
              hours of community service; developed strong communication
              skills for simplifying concepts to varied audiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
