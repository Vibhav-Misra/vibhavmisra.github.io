export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 leading-relaxed space-y-4">
            <span className="block">
              Hi, I'm{" "}
              <span className="text-white font-semibold">Vibhav Misra</span>{" "}
              (he/him) — a passionate Data Scientist with a strong foundation in
              data analytics, machine learning, and artificial intelligence.
            </span>

            <span className="block">
              I specialize in building predictive models, analyzing complex
              datasets, and developing end-to-end data-driven applications. I
              thrive on solving real-world problems through innovative,
              data-powered solutions.
            </span>

            <span className="block">
              I hold a{" "}
              <span className="text-white font-medium">
                Master’s degree in Data Science
              </span>{" "}
              from Pace University, New York, and a{" "}
              <span className="text-white font-medium">
                Bachelor’s in Computer Science (AI & ML specialization)
              </span>{" "}
              from Chandigarh University.
            </span>

            <span className="block">
              My technical toolkit includes{" "}
              <span className="text-white">Python, SQL, R</span>, and tools such
              as{" "}
              <span className="text-white">
                TensorFlow, Scikit-learn, Tableau, and Apache Spark
              </span>
              .
            </span>

            <span className="block">
              I've worked on diverse projects — from forecasting Amazon review
              trends and analyzing electric vehicle adoption patterns, to
              developing web apps for disease prediction and phishing detection
              — delivering results that merge statistical depth with real-world
              value.
            </span>

            <span className="block">
              I enjoy collaborating with cross-functional teams, continuously
              learning, and turning data into meaningful, actionable insights.
              Whether it’s designing ML models or visualizing data stories, I
              bring{" "}
              <span className="text-white">
                curiosity, clarity, and commitment
              </span>{" "}
              to every project.
            </span>

            <span className="block">
              Let’s connect and explore how we can create impactful, data-driven
              solutions together.
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                      "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                      "
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
                <strong>Master of Science (MS) in Data Science</strong> – Pace
                University, Seidenberg School of Computer Science and
                Information Systems, New York, NY
                <span className="block text-sm text-gray-400">
                  Expected May 2026
                </span>
              </li>
              <li>
                <strong>
                  Bachelor of Engineering (BE) in Computer Science
                </strong>{" "}
                – Chandigarh University, Apex Institute of Technology, India
                <span className="block text-sm text-gray-400">
                  Graduated June 2024
                </span>
              </li>
              <li>
                Specialization: Artificial Intelligence and Machine Learning
              </li>
              <li>
                Relevant Coursework: Machine Learning Techniques, Business
                Analytics & Tools, Business Data Management, NLP, Statistical
                Analysis
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Software Engineer at ABC Corp (2020 - Present){" "}
                </h4>
                <p>
                  Developed and maintained microservices for cloud-based
                  applications.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  {" "}
                  Intern at DEF Startups (2019){" "}
                </h4>
                <p>
                  Assisted in building front-end components and integration REST
                  APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
