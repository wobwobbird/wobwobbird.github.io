import LightRays from "@/components/LightRays";
import PageHolder from "@/components/PageHolder";
import IconSet, { devicon } from "@/components/IconSet";
import type { IconSetItem } from "@/components/IconSet";
import inkLogo from '../assets/ink_logo.png'
import ProfileCard from "@/components/ProfileCard";
import profilePic_nobg from '../assets/profile_pic_nobg.png';
// import lordMarshy from '../assets/lord_marshy_logo.png'
import lordMarshy_s from '../assets/Lord_Marshy_Logo_small2.png'

interface StartAppAction {
  label: string;
}

interface WebsiteLinkAction {
  label: string;
  url: string;
}

interface ProjectBoardData {
  title: string;
  description: string;
  techStack: IconSetItem[];
  startApp?: StartAppAction;
  websiteLink?: WebsiteLinkAction;
}

const PROJECTS: ProjectBoardData[] = [
  {
    title: "Mood Tracker",
    description: "Mental Health Tracker CLI tool, record mood and review results. Uses Ink to create a full screen TUI, saves results in a SQLite database.",
    techStack: [
      { src: devicon("javascript"), label: "JavaScript" },
      { src: devicon("nodejs"), label: "Node.js" },
      { src: devicon("react"), label: "React" },
      { src: inkLogo, label: "Ink (TUI)" },
      { src: devicon("sqlite"), label: "SQLite" },
    ],
    startApp: { label: "Start App" },
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/Mood_Tracker" },
  },
  {
    title: "Tap 'O' Matic",
    description: "A React Native TypeScript random number generator app",
    techStack: [
      { src: devicon("typescript"), label: "TypeScript" },
      { src: devicon("react"), label: "React" },
      { src: "https://cdn.simpleicons.org/react/000020", label: "React Native" },
      { src: "https://cdn.simpleicons.org/expo/000020", label: "Expo" },
    ],
    startApp: { label: "Start App" },
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/Tap-O-Matic" },
  },
  {
    title: "Super Connect",
    description: "A two-player turn-based Connect 4–style game built in Unity 6 (URP). Get four in a row: horizontally, vertically, or diagonally to win. Full game with start scene, player naming, scoring, winning screen, music control, 3D background and animations",
    techStack: [
      { src: devicon("unity"), label: "Unity" },
      { src: devicon("csharp"), label: "C#" },
    ],
    startApp: { label: "Start App" },
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/Super-Connect-Game" },
  },
];

const COMMERCIAL_PROJECTS: ProjectBoardData[] = [
  {
    title: "iRealty PropTech",
    description: "Worked as a Junior Front-End Developer at the PropTech startup Converted the customer facing CRM to tablet and mobile responsive, and built a customer support pannel available across the app Built property filtering, comparison tools, and multilingual support (Catalan/French) ",
    techStack: [
      { src: devicon("javascript"), label: "JavaScript" },
      { src: devicon("typescript"), label: "TypeScript" },
      { src: devicon("react"), label: "React" },
      { src: devicon("redux"), label: "Redux" },
      { src: devicon("css3"), label: "CSS" },
      { src: devicon("sass"), label: "SASS" },
      { src: devicon("tailwindcss"), label: "Tailwind" },
    ],
    websiteLink: { label: "Visit Site", url: "https://irealty.app/" },
  },
];

const StartAppButton = ({ label }: StartAppAction) => (
  <button className="w-[200px]">
    <p className="google-sans-flex-default text-black">{label}</p>
  </button>
);

const WebsiteLinkButton = ({ label, url }: WebsiteLinkAction) => (
  <button className="w-[200px]" onClick={() => window.open(url)}>
    <p className="google-sans-flex-default text-black">{label}</p>
  </button>
);

interface BoardProps {
  title: string;
  description: string;
  techStack: IconSetItem[];
  startApp?: StartAppAction;
  websiteLink?: WebsiteLinkAction;
}

const Board = ({ title, description, techStack, startApp, websiteLink }: BoardProps) => {
  const hasActions = startApp || websiteLink;

  return (
    <div
      className="relative w-full min-h-50 flex flex-col gap-4 p-5 md:m-3 rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)]"
      style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      {hasActions && (
        <div className="flex flex-row gap-5 py-5">
          {startApp && <StartAppButton label={startApp.label} />}
          {websiteLink && <WebsiteLinkButton label={websiteLink.label} url={websiteLink.url} />}
        </div>
      )}
      <IconSet items={techStack} />
    </div>
  );
};

const Home = () => {



    return (
        <PageHolder
            background={<LightRays />}
            scrollable
        >
          {/* Body - heading*/}
          <h1 className="pt-14">Guy - Junior Full-Stack Dev</h1>
          {/* Body - intro*/}
          <h2 className="pt-5 text-left">Introduction</h2>
          <div className="flex flex-col sm:flex-row md:p-5 gap-4 ">
            <div className="h-auto p-0 flex flex-col gap-4 pt-5 flex-1" >
              <p>I'm a Full-Stack Developer based in London with two years of intensive self-driven learning and nine months of commercial experience at a PropTech startup.</p>
              <p>Recently, I've been focusing more on backend development, working with Node.js, Express, server architecture, authentication, and databases including SQLite and PostgreSQL.</p>
            </div>
            <div className="origin-top-left w-full flex-1 flex justify-center">
              <ProfileCard
                name="Guy Marshman"
                title="Junior Full-Stack Developer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl={profilePic_nobg}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl={lordMarshy_s}
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                cardHeight='40svh'
                nameTextSize='min(5svh, 2em)'
                roleTextSize='16px'
                iconSize='50%'
              />
            </div>
          </div>
          {/* Body - Projects */}

          <div className="flex flex-col gap-4 text-left">
            <h2 className="pt-5 text-left">Projects</h2>
            {PROJECTS.map((project) => (
              <Board
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                startApp={project.startApp}
                websiteLink={project.websiteLink}
              />
            ))}
          </div>
          
          {/* Body - Commercial */}
          <div className="text-left flex flex-col gap-4 pt-4">
            <h2 className="pt-5 text-left">Commercial Experiance</h2>
            {COMMERCIAL_PROJECTS.map((project) => (
              <Board
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                startApp={project.startApp}
                websiteLink={project.websiteLink}
              />
            ))}
          </div>
          {/* Body - Learning */}
          <div className="text-left pb-[150px]" >
            <h2 className="pt-5 text-left">Learning</h2>
            <p>I have been putting in the effort to learn about many different areas</p>
            <div className="flex flex-row gap-2">
              <p>So my learning certificates on my linkedIn:</p>
              <p
                className="cursor-pointer text-blue-600 underline hover:text-blue-800 hover:underline"
                onClick={() => window.open("https://www.linkedin.com/in/guymarshman/details/certifications/")}
              >here</p>
            </div>
          </div>
        </PageHolder>
    );
};
  
  export default Home;