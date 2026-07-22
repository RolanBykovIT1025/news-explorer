import "./About.css";
import avatar from "../../assets/avatar.svg";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <img className="about__image-avatar" src={avatar} alt="Elise — author of NewsExplorer" />
        </div>
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hi, I'm Elise! I'm a frontend developer with a passion for building clean,
            user-friendly web applications. I recently completed the Software Engineering
            program at TripleTen, where I gained hands-on experience with modern web
            technologies like React, JavaScript, CSS, and responsive design.
          </p>
          <p className="about__text">
            This News Explorer app is my final project — it integrates with the News API
            to let users search for articles, save their favorites, and manage a
            personalized reading list. I focused on creating a polished UI with thoughtful
            form validation, responsive layouts, and a smooth user experience across all
            screen sizes.
          </p>
          <p className="about__text">
            Outside of coding, I enjoy exploring new technologies, working on
            creative side projects, and sharing what I learn with the developer
            community. I'm excited to continue growing as a developer and take on
            new challenges!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
