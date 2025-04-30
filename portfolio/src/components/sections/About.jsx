import { Reveal } from "../Reveal";

export const About = () => {
  const frontendSkills = ["JavaScript", "HTML", "CSS"];
  const backendSkills = [
    "Python",
    "SQL",
    "R",
    "SAS",
    "C++",
    "Flask",
    "TensorFlow",
    "Scikit-Learn",
    "MongoDB",
    "HDFS",
    "MapReduce",
  ];

  return (
   <Reveal>
     <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm <strong>Vibhav Misra</strong>, a data scientist with a strong foundation in data analysis, machine learning, and artificial intelligence. I specialize in designing and deploying predictive models and working with complex datasets to deliver data-driven insights. Proficient in Python, SQL, and tools like TensorFlow, Scikit-Learn, Tableau, and Power BI, I enjoy solving real-world challenges through innovative and scalable solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Technical Skills </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                      hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>MS in Data Science</strong> – Pace University, NY (May 2026)
              </li>
              <li>
                <strong>BE in Computer Science (AI & ML)</strong> – Chandigarh University (June 2024)
              </li>
              <li>
                Completed foundational and diploma-level coursework in Data Science from <strong>IIT Madras</strong>.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Experience & Projects </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Data Science Job Simulation – British Airways (Nov 2024)</h4>
                <p>
                  Performed sentiment analysis on customer reviews and built a Random Forest model to predict booking behavior with 85% accuracy.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Forecasting Amazon Review Ratings (Oct – Dec 2024)</h4>
                <p>
                  Used ARIMA, Prophet, and LSTM models for time series forecasting. Prophet achieved the lowest RMSE of 0.55.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">BioML – Disease Prediction App (Jan – Apr 2024)</h4>
                <p>
                  Built a Flask web app for disease prediction using Scikit-Learn and symptom-based ML models with 90% validation accuracy.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Detecting Phishing Websites (Aug – Nov 2023)</h4>
                <p>
                  Developed a Gradient Boosting model to detect phishing websites and deployed it via Flask with 85% accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </Reveal>
  );
};
