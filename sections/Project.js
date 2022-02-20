import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
        &lt; Projects /&gt;
      </h1>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProjectCard
          photo="/cloakio.png"
          url="https://cloak-io.vercel.app"
          title="Cloak.io"
          description="Cloak.io freelancing platform specifically aimed at Nigerian youths and young
entrepreneurs."
        />
        <ProjectCard
          photo="/lifenaturals.png"
          url="https://life-naturals.web.app"
          title="Life Naturals"
          description="Life Naturals is a fully functional E-commerce website that was developed to both advertise
and sell various health products to consumers"
        />
        <ProjectCard
          photo="/covid.png"
          title="COVID-19 Tracker"
          url="https://covid-19-tracers.web.app"
          description="This app shows some information regarding the number of people being affected by the
COVID-19 pandemic. It also includes various charts and maps to well visualize the data.
"
        />
        <ProjectCard
          photo="/thumbshare.png"
          url="https://thumbshare-2020.web.app"
          title="Thumbshare"
          description="ThumbShare is a web app that lets its users share various photos with family and friends
online"
        />
        <ProjectCard
          photo="/jfo.png"
          url="https://www.jfodesola.com"
          title="JfOdesola"
          description="The Official site for Pastor Johnson Funso Odesola"
        />
        <ProjectCard
          photo="/rccg-map.png"
          url="https://rccg-lp8.vercel.app"
          title="RCCG LP8 Map"
          description="This site displays all the RCCG parishes under Lagos Province 8 including their corresponding info and location"
        />
        <ProjectCard
          photo="/gameflix.png"
          url="https://github.com/Olatokumbo/Gameflix"
          title="Gameflix"
          description="Gameflix is a video game review mobile app where users can review various games of different genres"
        />
      </div>
    </div>
  );
};

export default Project;
