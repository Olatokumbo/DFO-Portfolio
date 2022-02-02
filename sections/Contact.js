import Fade from "react-reveal/Fade";
const Contact = () => {
  return (
    <div className="flex w-full bg-gray-900">
      <div className="flex-1 hidden sm:block">
        <img
          className="object-cover rounded-tr-myxl h-full shadow-2xl"
          src="wallpaper.jpg"
        />
      </div>
      <div className="flex-1 py-5 px-6 md:px-8 lg:px-9">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
          &lt; Contact me /&gt;
        </h1>
        <h1 className="text-gray-500  font-semibold">⚠️⚠️ Under Construction ⚠️⚠️</h1>
        <div className="w-full md:w-11/12 mx-auto">
          <Fade right duration={900} distance="100px" cascade>
            <form className="pr-0 md:pr-4 lg:pr-8 pt-6 pb-2 mt-8 mb-3">
              <div className="mb-4">
                <input
                  disabled
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Fullname"
                  autoComplete="off"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4">
                <input
                  disabled
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  autoComplete="off"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  disabled
                  rows="10"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  type="message"
                  placeholder="Message"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-md my-1 py-3 px-16 rounded-full shadow-lg"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </Fade>
          <hr className="bg-gray-700 h-px border-0" />
          <div className="flex w-full my-4">
            <div>
              <h1 className="text-white">EMAIL</h1>
              <h1 className="text-gray-400 text-sm">faithodesola@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
