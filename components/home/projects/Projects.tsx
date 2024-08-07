import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Bike Sharing Demand Prediction",
    imgSrc: "project-imgs/bike.jpeg",
    code: "https://github.com/Ankush511/Bike-Sharing-Demand-Prediction",
    projectLink: "https://github.com/Ankush511/Bike-Sharing-Demand-Prediction",
    tech: ["Python", "ML Models", "EDA", "Kaggle"],
    description:
      "The Bike Sharing Demand Prediction project is a data-driven initiative designed to forecast bike rental demand in urban areas.",
    modalContent: (
      <>
        <p>
          The Bike Sharing Demand Prediction project is a data-driven initiative designed to forecast bike rental demand in urban areas. By analyzing historical data, this project provides actionable insights to optimize bike sharing operations and improve service availability.
        </p>
        <p>
          The model leverages a comprehensive dataset that includes various factors influencing bike demand, such as weather conditions, time of day, and special events. Using advanced machine learning algorithms and statistical analysis, the project predicts demand patterns with high accuracy.
        </p>
        <p>
          The tech stack includes Python for data processing and model development, along with powerful libraries for predictive analytics. Continuous refinement and validation of the model ensure that predictions are reliable and actionable.
        </p>
        <p>
          Enhance the efficiency of bike sharing systems with our Bike Sharing Demand Prediction project, where data and technology work together to optimize urban mobility.
        </p>

      </>
    ),
  },
  {
    title: "Traffic Sign Classification",
    imgSrc: "project-imgs/traffic.jpg",
    code: "https://github.com/Ankush511/Traffic-Sign-Classification",
    projectLink: "https://www.kaggle.com/code/kashyapankush/traffic-sign-classification-using-cnn",
    tech: ["Python", "Tensorflow", "Keras", "CNN"],
    description:
      "Traffic Sign Classification is a deep learning project aimed at enhancing road safety through automated recognition of traffic signs.",
    modalContent: (
      <>
        <p>
          Traffic Sign Classification is a deep learning project aimed at enhancing road safety through automated recognition of traffic signs. This project leverages Convolutional Neural Networks (CNNs) to accurately classify various traffic signs, aiding in the development of intelligent transportation systems.
        </p>
        <p>
          The project utilizes a powerful tech stack, including Python, TensorFlow, and Keras for building and training the CNN model. The dataset comprises thousands of labeled images of traffic signs, ensuring comprehensive training and high accuracy.
        </p>
        <p>
          By implementing this project, we can significantly improve driver assistance systems, contributing to safer and more efficient roadways. The model's performance is continually refined through rigorous testing and validation, making it a robust solution for real-world applications.
        </p>
        <p>
          Experience the future of transportation with our Traffic Sign Classification project, where technology and safety go hand in hand.
        </p>

      </>
    ),
  },
  {
    title: "Human Activity Recognition",
    imgSrc: "project-imgs/human.jpeg",
    code: "https://github.com/Ankush511/Human-Activity-Recognition",
    projectLink: "https://github.com/Ankush511/Human-Activity-Recognition",
    tech: ["Python", "Machine Learning", "Random Forest", "Sci-Kit Learn"],
    description:
      "The Human Activity Recognition project is an advanced application of machine learning designed to classify.",
    modalContent: (
      <>
        <p>
          The Human Activity Recognition project is an advanced application of machine learning designed to classify and interpret various human activities using data collected from smartphones. This project aims to enhance our understanding of everyday behaviors and activities through innovative data analysis.
        </p>
        <p>
          Utilizing smartphone sensors and data, the project employs machine learning techniques to accurately recognize and classify activities such as walking, running, sitting, and more. The tech stack includes Python for data processing and model development, with algorithms optimized to handle complex patterns in the sensor data.
        </p>
        <p>
          The model is trained on diverse datasets, ensuring robust performance across different activity scenarios and user profiles. Continuous improvements and validation ensure high accuracy and reliability in activity recognition.
        </p>
        <p>
          Explore the future of personal and behavioral analytics with our Human Activity Recognition project, where technology and data converge to offer deeper insights into daily life.
        </p>
      </>
    ),
  },
  {
    title: "Dalle-Verse",
    imgSrc: "project-imgs/dalle.png",
    code: "https://github.com/Ankush511/dalle-verse",
    projectLink: "https://dalle-verse.vercel.app/",
    tech: ["ReactJs", "OpenAI API", "Cloudinary", "NodeJs"],
    description:
      "Dalle-Verse is an innovative project inspired by the capabilities of advanced image generation models.",
    modalContent: (
      <>
        <p>
          Dalle-Verse is an innovative project inspired by the capabilities of advanced image generation models. This project replicates the functionality of OpenAI's Dalle-2, allowing users to create stunning images from textual descriptions using state-of-the-art AI technology.
        </p>
        <p>
          Built on a foundation of deep learning and natural language processing, Dalle-Verse leverages a powerful neural network architecture to generate high-quality images. The tech stack includes Python, PyTorch, and various machine learning libraries, ensuring a robust and scalable solution.
        </p>
        <p>
          With Dalle-Verse, users can input descriptive text prompts and watch as the AI brings their visions to life, producing images that range from realistic to fantastical. This project showcases the incredible potential of AI in creative applications, pushing the boundaries of what machines can generate.
        </p>
        <p>
          Dive into the world of AI-driven creativity with Dalle-Verse, where your imagination is the only limit.
        </p>

      </>
    ),
  },
  {
    title: "BGMI Game Prediction",
    imgSrc: "project-imgs/bgmi.jpg",
    code: "https://github.com/Ankush511/BGMI-Game-Prediction",
    projectLink: "https://www.kaggle.com/code/kashyapankush/bgmi-winning-percent-prediction",
    tech: ["Python", "Machine Learning", "CatBoost", "Sci-Kit Learn"],
    description:
      "The BGMI Game Prediction project is a sophisticated model designed to forecast the winning percentage of players.",
    modalContent: (
      <>
        <p>
          The BGMI Game Prediction project is a sophisticated model designed to forecast the winning percentage of players based on various match scenarios. By analyzing extensive datasets, this project aims to provide valuable insights and predictions for competitive gaming.
        </p>
        <p>
          Utilizing a dataset from Kaggle with over 4.4 million records, the model is built to handle large-scale data and deliver accurate predictions. The tech stack includes advanced machine learning techniques and statistical analysis to interpret the data and forecast player performance.
        </p>
        <p>
          This project leverages cutting-edge algorithms to evaluate match conditions and player statistics, offering predictive insights that can enhance strategic decisions and gaming outcomes. The model's accuracy and reliability are continuously refined through rigorous testing and validation.
        </p>
        <p>
          Dive into the world of predictive gaming with our BGMI Game Prediction project, where data-driven insights meet the excitement of competitive play.
        </p>
      </>
    ),
  },
  {
    title: "Pan Card Tampering Detection",
    imgSrc: "project-imgs/pan.webp",
    code: "https://github.com/Ankush511/PanCard-Tampering-Detection",
    projectLink: "https://www.kaggle.com/code/kashyapankush/pan-card-tampering-detector",
    tech: ["Python", "CNN", "Tensorflow", "Keras"],
    description:
      "Pan Card Tampering Detection is a cutting-edge project focused on enhancing security and authenticity in document verification.",
    modalContent: (
      <>
        <p>
          Pan Card Tampering Detection is a cutting-edge project focused on enhancing security and authenticity in document verification. This project employs Convolutional Neural Networks (CNNs) to accurately detect tampering in Pan Cards, providing a robust solution for fraud prevention.
        </p>
        <p>
          Utilizing a powerful tech stack that includes Python, TensorFlow, and Keras, the project builds and trains an advanced CNN model capable of identifying subtle alterations in document images. The dataset comprises authentic and tampered Pan Card images, ensuring comprehensive training and high detection accuracy.
        </p>
        <p>
          By implementing this project, we aim to streamline the verification process and enhance the security measures for Pan Card issuance and usage. The model's performance is continuously improved through rigorous testing and validation, making it a reliable tool for real-world applications.
        </p>
        <p>
          Experience the future of document security with our Pan Card Tampering Detection project, where technology meets trust.
        </p>

      </>
    ),
  },
  {
    title: "G-Connect",
    imgSrc: "project-imgs/social.webp",
    code: "https://github.com/Ankush511/g-connect",
    projectLink: "https://g-connect-ivory.vercel.app/",
    tech: ["ReactJs", "NodeJs", "MongoDB", "Cloudinary"],
    description:
      "G-Connect social media app is a dynamic platform designed to connect people and foster interactions.",
    modalContent: (
      <>
        <p>
          G-Connect social media app is a dynamic platform designed to connect people and foster interactions. This project enables users to create accounts, post images, comment on posts, and add friends, all while utilizing a robust tech stack.
        </p>
        <p>
          Built with React.js for a seamless and interactive frontend, Node.js for a scalable backend, and MongoDB for efficient data management, the app ensures a smooth user experience. Cloudinary is used for image storage and optimization, allowing for quick and reliable media handling.
        </p>
        <p>
          The app supports full CRUD operations, enabling users to manage their profiles, engage with content, and build their social network effortlessly. With features designed to enhance connectivity and interaction, this project demonstrates the power of modern web technologies in creating engaging social platforms.
        </p>
        <p>
          Explore the future of social networking with G-Connect, where every interaction is a step towards building meaningful connections.
        </p>
      </>
    ),
  },
  {
    title: "Guild-Chat",
    imgSrc: "project-imgs/Chat-img.png",
    code: "https://github.com/Ankush511/Guild-Chat",
    projectLink: "https://guild-chat-production-10cd.up.railway.app/",
    tech: ["NextJs", "Tailwind", "Planetscale", "Prisma"],
    description:
      "Guild-Chat is a real-time communication app designed to bring communities together.",
    modalContent: (
      <>
        <p>
          Guild-Chat is a real-time communication app designed to bring communities together. This project is my brainchild, meticulously designed and built from scratch to facilitate seamless interactions.
        </p>
        <p>
          The tech stack features a robust architecture with a NextJs frontend, Typescript & Prisma for backend, and data stored in Planetscale, all deployed on Railway for reliable performance.
        </p>
        <p>
          With Guild-Chat, users can create channels, send messages, and share media, making it the perfect platform for community building, team collaboration, and social interaction.
        </p>
        <p>
          Experience a new level of connectivity with features designed to keep conversations flowing smoothly and efficiently.
        </p>
        <p>
          Join Guild-Chat today and be a part of a vibrant community where communication is effortless and enjoyable.
        </p>
      </>
    ),
  },
];