import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Figma</span>
            <span className="chip">NextJs</span>
            <span className="chip">ReactJs</span>
            <span className="chip">NodeJs</span>
            <span className="chip">AWS</span>
            <span className="chip">Python</span>
            <span className="chip">Machine Learning</span>
            <span className="chip">Tensorflow</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">R</span>
            <span className="chip">TypeScript</span>
            <span className="chip">C++</span>
            <span className="chip">Jupyter</span>
            <span className="chip">Data Mining</span>
            <span className="chip">Ollama</span>
            <span className="chip">Amazon SageMaker</span>
            <span className="chip">Selenium</span>
            <span className="chip">Streamlit</span>
            <span className="chip">Kaggle</span>
            <span className="chip">Keras</span>
            <span className="chip">BeautifulSoup</span>
            <span className="chip">FastAPI</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
