import { Reveal } from "../Reveal"

export const Home = () => {
  return (
    <>
    <Reveal>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-blue-400 bg-clip-text text-transparent leading-right">
            Hey, I'm Vibhav Misra
          </h1>
          <p className="tex-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I explore the unseen through data — uncovering patterns, predicting
            possibilities, and transforming raw numbers into meaningful
            insights.
          </p>
          <div className="flex justify-center space-x-4">
          <a
              href="#projects"
              className="bg-blue-300 text-black py-3 px-6 rounded font-mmedium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:border hover:bg-black hover:border-blue-300/50 hover:text-blue-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-300/50 text-blue-300 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-300 hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      </Reveal>
    </>
  );
};
