import React from "react";

export default function DescriptionMap(props) {
  const { list, type } = props;

  const contentDisplay = {
    hobbies: (obj) => <p>{obj.content}</p>,
    skills: (obj) => <p>{obj.content.join(", ")}</p>,
    links: (obj) => (
      <a
        className="text-sky-400 cursor-pointer"
        href={obj.link}
        target="_blank"
      >
        {obj.content}
      </a>
    ),
  };

  return (
    <div className="flex flex-col gap-3">
      {list.map((listItem, listIndex) => {
        return (
          <div
            key={listIndex}
            className=" relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
          >
            <div className="bg-emerald-500 h-[2px] w-full absolute right-full bottom-0 duration-[800ms] group-hover:translate-x-full"></div>
            <p>
              <b>{listItem.name}</b>
            </p>
            {contentDisplay[type](listItem)}
          </div>
        );
      })}
    </div>
  );
}
