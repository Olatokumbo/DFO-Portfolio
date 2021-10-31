import ProjectCard from "../Components/ProjectCard";

const Project = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
        &lt; Projects /&gt;
      </h1>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProjectCard
          photo="cloakio.png"
          url="https://cloak-io.vercel.app"
          title="Cloak.io"
          description="Cloak.io freelancing platform specifically aimed at Nigerian youths and young
entrepreneurs."
        />
        <ProjectCard
          photo="lifenaturals.png"
          url="https://life-naturals.web.app"
          title="Life Naturals"
          description="Life Naturals is a fully functional E-commerce website that was developed to both advertise
and sell various health products to consumers"
        />
        <ProjectCard
          photo="covid.png"
          title="COVID-19 Tracker"
          url="https://covid-19-tracers.web.app"
          description="This app shows some information regarding the number of people being affected by the
COVID-19 pandemic. It also includes various charts and maps to well visualize the data.
"
        />
        <ProjectCard
          photo="thumbshare.png"
          url="https://thumbshare-2020.web.app"
          title="Thumbshare"
          description="ThumbShare is a web app that lets its users share various photos with family and friends
online"
        />
      </div>
    </div>
  );
};

export default Project;
