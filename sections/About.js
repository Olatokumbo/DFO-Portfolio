import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div className="py-6 h-full w-full bg-gray-900 text-white">
      <div className="p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
          &lt; About me /&gt;
        </h1>
      </div>
      <div className="flex w-full h-full flex-col-reverse md:flex-row">
        <Fade top delay={300} duration={1000} distance="50px" cascade>
          <div className="flex-1 flex flex-col items-center p-5">
            <div className="p-8 flex flex-col justify-center items-center">
              <h1 className="w-auto md:w-96 text-xs md:text-sm leading-5 text-center">
                Learning and innovation go hand in hand. The arrogance of
                success is to think that what you did yesterday will be
                sufficient for tomorrow.
              </h1>
              <h1 className="text-center">WILLIAM POLLARD</h1>
            </div>
            <h1 className="text-xs md:text-sm leading-5 mx-auto w-auto md:w-96">
              Ever since I have always been so fascinated with technology. It
              has always been a goal of mine to develop something useful that
              would at some point reach various people all over the world.
              Furthermore, I have to say that this goal fueled my interests in the
              field of software engineering because nowadays almost everything
              that we interact with daily is running on some sort of software.
              However, I decided to focus my attention in the area of web
              development because that was something that I have always been so
              fascinated about. So now as a self-taught web developer with over
              2 years experience, it has always been a great privilege for me to
              work with clients on varying projects knowing that my projects are
              being used by others.
            </h1>
            <h1 className="mt-4 text-xs md:text-sm leading-5 mx-auto w-auto md:w-96">
              As a developer, I have worked with various web and mobile app
              technologies such as{" "}
              <span className="text-yellow-400">ReactJS</span>,{" "}
              <span className="text-yellow-400">ReactNative</span>,{" "}
              <span className="text-yellow-400">NodeJS</span>,{" "}
              <span className="text-yellow-400">TailwindCSS</span>,{" "}
              <span className="text-yellow-400">SCSS</span>,{" "}
              <span className="text-yellow-400">Firebase</span>,{" "}
              <span className="text-yellow-400">SQL</span>,{" "}
              <span className="text-yellow-400">MongoDB</span> and much more.
            </h1>
          </div>
        </Fade>
        <Fade right duration={800} distance="50px">
          <div className="flex-1 md:relative md:overflow-hidden p-0 md:p-5">
            <img
              className="rounded-lg -right-0 relative md:-right-36 md:absolute filter saturate-200 max-w-none md:max-w-md lg:max-w-2xl w-fill h-auto mx-5 shadow-lg"
              src="/me.jpg"
              alt=""
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default About;
