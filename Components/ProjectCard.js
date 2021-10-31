const ProjectCard = ({ photo, title, description, url }) => {
  return (
    <div className="flex flex-col w-full bg-gray-800 rounded-2xl shadow-md">
      <div>
        <img className="rounded-t-lg h-40 w-full object-cover" src={photo} />
      </div>
      <div className=" flex-1 py-2 px-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl">{title}</h1>
          <h1 className="text-sm w-full my-1 leading-4 text-gray-400 pr-10">
            {description}
          </h1>
        </div>
        <button onClick={()=>window.open(url, "_blank")} className="w-min bg-yellow-500 hover:bg-yellow-400 text-white font-light border-4 border-yellow-600 text-sm my-3 py-1 px-4 rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
