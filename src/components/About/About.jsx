import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <div className="about__image-placeholder">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#999" strokeWidth="2" />
              <circle cx="24" cy="16" r="6" stroke="#999" strokeWidth="2" />
              <path d="M12 38C12 31.3726 17.3726 26 24 26C30.6274 26 36 31.3726 36 38" stroke="#999" strokeWidth="2" />
            </svg>
            <p className="about__image-text">Placeholder image. Put an image of yourself here.</p>
          </div>
        </div>
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            This block describes the project author. Here you can indicate your name,
            what you do, what technologies you know, and what skills you have.
          </p>
          <p className="about__text">
            You can also talk about your experience with TripleTen, what you learned,
            and what your next goals are.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
