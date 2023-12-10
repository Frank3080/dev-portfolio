import DescriptionMap from "@/components/DescriptionMap";
import Image from "next/image";
import Link from "next/link";

function SectionHeaderText(props) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-medium">{children}</h4>;
}

export default function Home() {
  const links = [
    {
      name: "Email",
      link: "emailto:frankortizcarballo@gmail.com",
      content: "frankortizcarballo@gmail.com",
    },
    {
      name: "Github",
      link: "https://github.com/Frank3080",
      content: "Frank3080",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/frank-ortiz-1180a0295/",
      content: "Frank Ortiz",
    },
  ];

  const skills = [
    { name: "JavaScript", content: ["React", "SvelteKit", "Nextjs"] },
    { name: "Python", content: ["Data Analysis", "Django", "Flask"] },
    {
      name: "Web",
      content: [
        "Sass",
        "TailwindCSS",
        "Firebase",
        "SQL",
        "GCP",
        "GIT",
        "Netlify",
      ],
    },
  ];

  const hobbies = [
    {
      name: "Gym, Basketball & Running",
      content: "Balancing strength, teamwork, and endurance",
    },
    {
      name: "Mathematics student",
      content:
        "Passionate about equations and problem-solving, finding beauty in the logic of numbers",
    },
    {
      name: "Aviation",
      content:
        "Fueled by a passion for flight and the ambition to become a skilled pilot",
    },
  ];

  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
        Digital Resume
      </h2>
      <section>
        <SectionHeaderText className="">
          Frank Ortiz - Web developer
        </SectionHeaderText>
        <DescriptionMap list={links} type={"links"} />
      </section>
      <section>
        <SectionHeaderText className="">Skills</SectionHeaderText>
        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeaderText className="">Projects</SectionHeaderText>
        <p className="text-xs sm:text-sm">
          Checkout my latest{" "}
          <Link href={"/projects"} className="text-sky-400">
            projects
          </Link>
        </p>
      </section>
      <section>
        <SectionHeaderText className="">Just for fun</SectionHeaderText>
        <DescriptionMap list={hobbies} type={"hobbies"} />
      </section>
    </main>
  );
}
