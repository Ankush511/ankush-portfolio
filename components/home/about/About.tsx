import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Ankush, a passionate Software Engineer specializing in frontend development, machine learning, and data science. With expertise in Python, TensorFlow, and JavaScript/TypeScript, I bring a versatile skill set to the table. Proudly hailing from India, I'm dedicated to crafting innovative solutions and pushing the boundaries of technology.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work at Ascella Infosec, where I focus on developing and enhancing the frontend for the Ascella Groups. My role allows me to combine my technical skills with creativity to deliver seamless user experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love playing chess, watching anime, reading sci-fi novels, and traveling, traveling, and traveling! 🌍 (Yes, I really love to travel.)
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my love for code and making robust applications. If you think you&apos;ve got an opening that I might like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
