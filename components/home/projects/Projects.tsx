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
    title: "Financial AI Agent",
    imgSrc: "project-imgs/finance.png",
    code: "https://github.com/Ankush511/Financial-AI-Agent-using-LangGraph/blob/main/LangGraph%20AI%20Agent.ipynb",
    projectLink: "https://www.kaggle.com/code/kashyapankush/financial-ai-agent-using-langgraph/notebook",
    tech: ["Python", "ML", "Llama 3.1 LLM", "LangChain", "LangGraph"],
    description:
      "The Smart Finance Assistant project is an AI-driven solution designed to provide real-time financial data and insights for businesses and investors.",
    modalContent: (
      <>
        <p>
          The Smart Finance Assistant project is an AI-driven solution designed to provide real-time financial data and insights for businesses and investors. By integrating advanced language models and financial tools, the assistant can retrieve and analyze key financial metrics with precision.
        </p>
        <p>
          The assistant leverages APIs to access live financial data such as EBITDA, total revenue, and debt-to-equity ratio. Utilizing a state-of-the-art natural language processing model and dynamic tool binding, the project ensures accurate responses for complex financial queries.
        </p>
        <p>
          The tech stack includes Llama 3.1 for language understanding, Python, yfinance for financial data extraction, and langchain for managing tools and API calls. The project also employs graph-based state management to optimize tool interactions and response times.
        </p>
        <p>
          Enhance decision-making with our Smart Finance Assistant project, where cutting-edge AI technology meets real-time financial data to drive business insights.
        </p>
      </>
    ),
  },
  {
    title: "AI Web Scraping Tool",
    imgSrc: "project-imgs/scrape.svg",
    code: "https://github.com/Ankush511/AI-Scraper-Tool",
    projectLink: "https://drive.google.com/file/d/19YYg9WDBVqf2sCY9NjTM91SU9f_MYP-o/view?usp=sharing",
    tech: ["Python", "ML", "Llama 3.1 LLM", "LangChain", "Selenium", "Beautiful Soup"],
    description:
      "The AI Web Scraper Tool is an advanced solution designed to automate the extraction and processing of web data from complex websites.",
    modalContent: (
      <>
        <p>
          The AI Web Scraper Tool is an advanced solution designed to automate the extraction and processing of web data from complex websites. By leveraging cutting-edge AI models and automation techniques, the tool efficiently handles tasks like CAPTCHA solving and large-scale data retrieval.
        </p>
        <p>
          The tool uses Selenium with Chromium Remote WebDriver to scrape websites and extract content. Additionally, it employs the LLaMA 3.1 language model to intelligently split large DOM content into smaller, manageable chunks according to user-defined prompts, ensuring precise data extraction.
        </p>
        <p>
          The tech stack includes LLaMA 3.1 for natural language processing, Selenium for web automation, BeautifulSoup for HTML parsing and cleaning, and Python for orchestrating the scraping workflow. The project is designed to manage complex web structures and enhance data retrieval efficiency.
        </p>
        <p>
          Streamline web scraping with the AI Web Scraper Tool, where innovative AI meets robust automation to deliver accurate and timely data for real-world applications.
        </p>

      </>
    ),
  },
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
          By implementing this project, we can significantly improve driver assistance systems, contributing to safer and more efficient roadways. The model&apos;s performance is continually refined through rigorous testing and validation, making it a robust solution for real-world applications.
        </p>
        <p>
          Experience the future of transportation with our Traffic Sign Classification project, where technology and safety go hand in hand.
        </p>

      </>
    ),
  },
  {
    title: "Malarial Cell Classification",
    imgSrc: "project-imgs/malaria.webp",
    code: "https://github.com/Ankush511/Malarial-Cell-Detection",
    projectLink: "https://malarial.streamlit.app/",
    tech: ["Python", "Machine Learning", "CNN", "OpenCV"],
    description:
      "The Malaria Cell Classification project is an innovative application of deep learning aimed at accurately identifying malaria-infected cells through microscopic images",
    modalContent: (
      <>
        <p>
          The Malaria Cell Classification project is an innovative application of deep learning aimed at accurately identifying malaria-infected cells through microscopic images. This project seeks to contribute to the fight against malaria by enhancing diagnostic capabilities using advanced image analysis.
        </p>
        <p>
          Leveraging convolutional neural networks (CNNs), the project processes microscopic images to classify cells as either infected or uninfected. The tech stack includes Python, TensorFlow, and Keras, with CNN models optimized for image recognition and pattern detection in complex biological data.
        </p>
        <p>
          The model is trained on a comprehensive dataset of cell images, ensuring high accuracy and reliability in diverse diagnostic scenarios. Continuous model optimization and validation are integral to maintaining robust performance across different sample types.
        </p>
        <p>
          Discover the potential of AI in healthcare with our Malaria Cell Classification project, where cutting-edge technology meets medical diagnostics to improve patient outcomes.
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
          Dalle-Verse is an innovative project inspired by the capabilities of advanced image generation models. This project replicates the functionality of OpenAI&apos;s Dalle-2, allowing users to create stunning images from textual descriptions using state-of-the-art AI technology.
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
          This project leverages cutting-edge algorithms to evaluate match conditions and player statistics, offering predictive insights that can enhance strategic decisions and gaming outcomes. The model&apos;s accuracy and reliability are continuously refined through rigorous testing and validation.
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
          By implementing this project, we aim to streamline the verification process and enhance the security measures for Pan Card issuance and usage. The model&apos;s performance is continuously improved through rigorous testing and validation, making it a reliable tool for real-world applications.
        </p>
        <p>
          Experience the future of document security with our Pan Card Tampering Detection project, where technology meets trust.
        </p>

      </>
    ),
  },
];