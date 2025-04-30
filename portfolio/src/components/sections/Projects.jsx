import { Reveal } from "../Reveal";
import { ProjectCard } from "./ProjectCard"; // adjust path if needed
 export const Projects = () => {
    const projects = [
        {
          title: "Matrix Decompositions in Python",
          description:
            "Developed custom Python modules to compute Eigenvalues, PCA, and SVD, and compared their runtime and accuracy against NumPy and Scikit-learn implementations.",
          techStack: ["Python", "NumPy", "Scikit-learn"],
          link:"Jupyter Notebooks/Comparative Analysis of Matrix Factorization Techniques in Python.html",
        },
        {
          title: "Forecasting Amazon Review Ratings",
          description:
            "Performed time series analysis on Amazon reviews (2002–2014) and forecasted ratings using ARIMA, Prophet, and LSTM models, with LSTM delivering the best predictive performance.",
          techStack: ["Python", "ARIMA", "Prophet", "LSTM"],
          link: "Jupyter Notebooks/Forecasting Amazon Review Ratings Time Series Analysis Using ARIMA, Prophet, and LSTM.html",
        },
        {
          title: "EDA on Customer Churn",
          description:
            "Performed detailed EDA on telecom customer churn data using Numpy and Pandas to identify key factors influencing churn, uncover data patterns, and support churn prediction strategies.",
          techStack: ["Pandas", "NumPy", "Matplotlib"],
          link: "Jupyter Notebooks/EDA - Telco Customer Churn Data.html",
        },
        {
          title: "EV Adoption in Washington",
          description:
            "Analyzed electric vehicle population data from Washington State to explore trends in EV adoption, electric range variations, and manufacturer distribution.",
          techStack: ["Python", "Pandas", "Seaborn"],
          link: "Jupyter Notebooks/Electric Vehicle Adoption Analysis in Washington State.html",
        },
        {
          title: "DT vs RF Model Comparison",
          description:
            "Performed EDA, model training, and hyperparameter tuning using GridSearchCV & RandomizedSearchCV. Evaluated using accuracy, MSE, R², and confusion matrices.",
          techStack: ["Scikit-learn", "Python", "Matplotlib"],
          link: "Jupyter Notebooks/Comparative Study of Decision Tree and Random Forest Models with Hyperparameter Optimization.html",
        },
        {
          title: "BioML: Disease Prediction System",
          description:
            "Designed a responsive Flask web app to predict diseases from user input using ML models and integrated Pickle-based APIs.",
          techStack: ["Flask", "Pandas", "Pickle", "HTML/CSS"],
          link: "https://github.com/Vibhav-Misra/BioML",
        },
        {
          title: "Depression Prediction Model",
          description:
            "Developed an ML-based prediction model for identifying depression in individuals with a focus on impactful features and accuracy.",
          techStack: ["Python", "Flask", "Pandas"],
          link: "https://github.com/Vibhav-Misra/Prediction-Model-for-Depression-using-Machine-Learning",
        },
        {
          title: "Depression Prediction EDA",
          description:
            "Conducted EDA to analyze distributions and correlations. Benchmarked classifiers to assess accuracy, precision, and recall.",
          techStack: ["Python", "Pandas", "Matplotlib"],
          link: "Jupyter Notebooks/Prediction Model for depression.html",
        },
        {
          title: "Phishing Website Detection",
          description:
            "Built a Flask app using Gradient Boosting to detect phishing websites with 30+ URL-based features and a real-time UI.",
          techStack: ["Flask", "Gradient Boosting", "HTML/CSS"],
          link: "https://github.com/Vibhav-Misra/Detecting-Phishing-Websites-using-Machine-Learning",
        },
        {
          title: "Forest Fire Prediction",
          description:
            "Trained a Logistic Regression model to predict forest fires based on environmental data. Deployed model with Pickle.",
          techStack: ["Scikit-learn", "Logistic Regression", "Flask"],
          link: "https://github.com/Vibhav-Misra/forest_fire_prediction",
        },
        {
          title: "Falcon 9 Landing Prediction",
          description:
            "Built an ML model to predict Falcon 9 landing success, involving web scraping, EDA, feature engineering, and classification.",
          techStack: ["SVM", "Logistic Regression", "Decision Trees"],
          link: "https://github.com/Vibhav-Misra/Falcon-9-Landing-Prediction-using-Machine-Learning",
        },
      ];
      

  return (
    <Reveal>
      <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
};
