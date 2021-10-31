import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";
const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-20 w-full h-screen flex flex-col md:flex-row">
        <Fade top duration={500} distance="50px" cascade>
          <div className="py-20 px-6 sm:px-10 text-white h-full flex-1">
            <h1 className="mt-8 md:mt-2 text-3xl md:text-7xl font-semibold my-3">
              &lt;
              {
                <ReactTypingEffect
                  text={[
                    "Hello",
                    "Hola",
                    "Salve",
                    "Olá",
                    "Konnichiwa",
                    "Nǐ hǎo",
                  ]}
                  speed={50}
                  eraseDelay={300}
                  eraseSpeed={50}
                  typingDelay={100}
                />
              }
              /&gt;
            </h1>
            <h1 className="text-3xl md:text-6xl font-semibold my-3">
              I'm David Odesola
            </h1>
            <p className="w-full text-sm md:text-base leading-4 sm:leading-5">
              I’m a passionate Full-Stack Web developer, music producer, and a
              tech enthusiast. Personally, I believe that anything is achievable
              as long as you put your mind into it. Start scrolling and get to
              know much more about me.
            </p>
            <Fade forever top>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </div>
            </Fade>
          </div>
        </Fade>
        <div className="flex-1 flex flex-col justify-end h-60 md:h-auto">
          <img className="h-auto w-auto" src="/striangles.png" />
        </div>
      </div>
      <div className="bg-black absolute h-screen w-full z-10 opacity-50"></div>
      <img className="absolute h-screen w-full object-cover" src="/bg.png" />
    </div>
  );
};

export default Header;
