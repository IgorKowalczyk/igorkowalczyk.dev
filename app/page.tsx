import { GitForkIcon, GitGraphIcon, StarIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonArrow } from "@/components/ui/Button";
import { Description, Header2 } from "@/components/ui/Headers";
import { Icons } from "@/components/ui/Icons";
import { header, meta, technologies, contact, projects } from "@/config";
import { GetUserData, getTotalContributionsForYears } from "@/lib/graphql";
import { convertNumber } from "@/lib/utils";

export default async function HomePage() {
  const userData = await GetUserData();
  const contributions = await getTotalContributionsForYears();

  return (
    <>
      <section className="mt-6 mb-16 md:mt-12 lg:mt-20">
        <h1 className="dark:color-black relative m-0 text-4xl font-black tracking-[-0.03em] text-neutral-800 duration-300 md:text-left dark:text-white">Hey, I’m {header.title}</h1>
        <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-400">{header.description}</p>
        <div className="mt-9 flex flex-row flex-wrap gap-4">
          <Button variant="primary" asChild>
            <Link href="/#contact">
              Contact me
              <ButtonArrow />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/#about">
              More about me
              <ButtonArrow />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mb-16 flex flex-wrap justify-between gap-4 text-center text-xs font-bold text-neutral-800/70 dark:text-white/70">
        <Link
          target="_blank"
          href={`https://github.com/${meta.accounts.github.username}`}
          className="flex items-center gap-2 text-center duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white"
        >
          <StarIcon className="size-4 stroke-2" /> <span>{userData && convertNumber(userData.userStars)} stars</span>
        </Link>

        <Link
          target="_blank"
          href={`https://github.com/${meta.accounts.github.username}`}
          className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white"
        >
          <GitGraphIcon className="size-4 stroke-2" /> <span>{userData && convertNumber(contributions.total)} commits</span>
        </Link>

        <Link
          target="_blank"
          href={`https://github.com/${meta.accounts.github.username}`}
          className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white"
        >
          <GitForkIcon className="size-4 stroke-2" /> <span>{userData && convertNumber(userData.userForks)} repositories forks</span>
        </Link>

        <Link
          target="_blank"
          href={`https://github.com/${meta.accounts.github.username}?tab=followers`}
          className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white"
        >
          <UsersIcon className="size-4 stroke-2" /> <span>{userData && convertNumber(userData.userFollowers)} Github followers</span>
        </Link>
      </section>

      <section className="mt-6 mb-16">
        <Header2 id="about">About me</Header2>

        <div className="prose-quoteless prose prose-neutral dark:prose-invert">
          <span>
            I have been coding for over {new Date().getFullYear() - 2018} years, beginning my journey in late 2018. Initially, I learned HTML, CSS, and basic JavaScript to build
            websites.
          </span>
          <p>My first project was a simple music player made with JavaScript (~January 2019).</p>
          <span>
            In March 2020, I began learning Node.js and Express.js, and created my first major project, Majo.exe. In April 2022, I started learning React.js, Next.js, and Tailwind
            CSS.
          </span>
        </div>

        <div className="mt-6 flex flex-row flex-wrap gap-4">
          <Button variant="primary" asChild>
            <Link href={`https://github.com/${meta.accounts.github.username}`} rel="noopener noreferrer">
              <Icons.Github className="size-5 fill-white stroke-2" />
              View my Github
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/#contact">
              Contact me <ButtonArrow />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mb-6">
        <Header2 id="projects">Recent Projects</Header2>
        <Description>Explore some of my recent projects below. For more, visit my GitHub profile.</Description>

        <div className="mt-6">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={`project-${project.name}`} project={project} />
          ))}
        </div>

        <div className="-mt-10 mb-10 flex flex-col items-center">
          <p className="mb-2 text-neutral-700 dark:text-neutral-400">Want to see more?</p>
          <Button variant="secondary" asChild>
            <Link href="/work">
              View all projects
              <ButtonArrow />
            </Link>
          </Button>
        </div>
      </section>

      <section className="my-6 mb-16">
        <Header2 id="tech">Technologies I use</Header2>
        <Description>Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</Description>
        <div className="mt-4 flex flex-wrap gap-4">
          {technologies.map((tech) => {
            return (
              <Badge key={`tech-link-${tech.name}`}>
                <Image src={tech.icon} alt={`${tech.name} logo`} width={20} height={20} className="size-5 rounded-sm" /> {tech.name}
              </Badge>
            );
          })}
        </div>
        <p className="mt-4 text-center text-neutral-700 dark:text-neutral-400">...and many more!</p>
      </section>

      <section className="mb-12">
        <Header2 id="contact">Contact me</Header2>
        <Description>
          I’m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
        </Description>

        <div className="my-6 flex w-full rounded-xl border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
          <ContactForm />
        </div>
        <Description>Or contact me with...</Description>
        <div className="mt-4 flex flex-wrap gap-4">
          {contact.links.map((element) => {
            const Icon = element.icon;

            return (
              <Button variant="tertiary" key={`contact-link-${element.href}`} className="gap-2" asChild>
                <Link href={element.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="size-5" />
                  {element.title}
                </Link>
              </Button>
            );
          })}
        </div>
      </section>
    </>
  );
}
