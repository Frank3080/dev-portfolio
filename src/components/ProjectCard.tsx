import React from "react";

export default function ProjectCard(props) {
  const { project, index } = props;

  return (
    <div
      className={
        "flex flex-col " +
        (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
      }
    >
      <div className="flex-1">
        <img className="w-[1000px] h-[400px]" src={project.videoLink} />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <a
          className="duration-200 hover:opacity-60 p-4 sm:p-6"
          href={project.link}
          target="_blank"
        >
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            {project.name}
          </h2>
        </a>
        <p className="text-xs sm:text-sm text-justify pb-4 sm:pb-6 px-4 sm:px-6">
          {project.description}
        </p>
      </div>
    </div>
  );
}
