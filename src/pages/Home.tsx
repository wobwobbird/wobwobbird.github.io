import LightRays from "@/components/LightRays";
import IconSet, { devicon } from "@/components/IconSet";
import inkLogo from '../assets/ink_logo.png'
import ProfileCard from "@/components/ProfileCard";
import profilePic_nobg from '../assets/profile_pic_nobg.png';
// import lordMarshy from '../assets/lord_marshy_logo.png'
import lordMarshy_s from '../assets/Lord_Marshy_Logo_small2.png'

const Home = () => {



    return (
      <div className="fixed inset-0 w-full h-full">
        {/* Background */}
        <div className="absolute inset-0">
          <LightRays />
        </div>
        {/* Body */}
        <div
          className="relative z-10 w-full min-h-0 pt-14 overflow-y-auto overflow-x-hidden overscroll-contain"
          style={{ height: '100vh' }}
          data-lenis-prevent=""
        >
          <div className="max-w-[1100px] h-auto mx-auto px-4">
          {/* Body - heading*/}
          {/* <h1 className="google-sans-flex-bold-round text-4xl pt-10"
          >🚧🚧🚧</h1>
          <h1 className="google-sans-flex-bold-round text-4xl pt-10"
          >NOTE WEBSITE STILL UNDER CONSTRUCTION</h1>
          <h1 className="google-sans-flex-bold-round text-4xl pt-10"
          >🚧🚧🚧</h1> */}
          <p className="google-sans-flex-bold-round text-4xl md:text-6xl pt-14"
          >Guy - Junior Full-Stack Dev</p>
          {/* Body - intro*/}
          <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
          >Introduction</h2>
          <div className="flex flex-col sm:flex-row md:p-5 gap-4 ">
            <div className="h-auto p-2 flex flex-col gap-4 pt-5 flex-1" >
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
            <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left">Projects</h2>

            {/* FIRST */}
            <div
              className="relative w-full min-h-50 flex flex-col gap-4 p-5 md:m-3 rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)]"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl">Mood Tracker</h3>
              <p>Mental Health Tracker CLI tool, record mood and review results. Uses Ink to create a full screen TUI, saves results in a SQLite database.</p>

              <div className="flex flex-row gap-5 py-5">
                <button className="w-[200px]">
                  <p className="google-sans-flex-default text-black">Start App</p>
                </button>
                <button className="w-[200px]">
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://github.com/wobwobbird/Mood_Tracker")}
                  >Open on Github</p>
                </button>
              </div>
              <IconSet
                items={[
                  { src: devicon("javascript"), label: "JavaScript" },
                  { src: devicon("nodejs"), label: "Node.js" },
                  { src: devicon("react"), label: "React" },
                  { src: inkLogo, label: "Ink (TUI)" },
                  { src: devicon("sqlite"), label: "SQLite" },
                ]}
              />

            </div>

            {/* SECOND */}
            <div
              className="relative w-full min-h-50 flex flex-col gap-4 rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] p-5 md:m-3"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl">Tap 'O' Matic</h3>
              <p>A React Native TypeScript random number generator app</p>
              <div className="flex flex-row gap-5 py-5">
                <button className="w-[200px]">
                  <p className="google-sans-flex-default text-black">Start App</p>
                </button>
                <button className="w-[200px]">
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://github.com/wobwobbird/Tap-O-Matic")}
                  >Open on Github</p>
                </button>
              </div>
              <IconSet
                items={[
                  { src: devicon("typescript"), label: "TypeScript" },
                  { src: devicon("react"), label: "React" },
                  { src: "https://cdn.simpleicons.org/react/000020", label: "React Native" },
                  { src: "https://cdn.simpleicons.org/expo/000020", label: "Expo" },
                ]}
              />
            </div>

            {/* THIRD */}
            <div
              className="relative w-full min-h-50 flex flex-col gap-4 rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] p-5 md:m-3"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl">Super Connect</h3>
              <p>A two-player turn-based Connect 4–style game built in Unity 6 (URP). Get four in a row: horizontally, vertically, or diagonally to win. Full game with start scene, player naming, scoring, winning screen, music control, 3D background and animations</p>
              <div className="flex flex-row gap-5 py-5">
                <button className="w-[200px]">
                  <p className="google-sans-flex-default text-black">Start App</p>
                </button>
                <button className="w-[200px]">
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://github.com/wobwobbird/Super-Connect-Game")}
                  >Open on Github</p>
                </button>
              </div>
              <IconSet
                items={[
                  { src: devicon("unity"), label: "Unity" },
                  { src: devicon("csharp"), label: "C#" },
                ]}
              />
            </div>
          </div>
          
          {/* Body - Commercial */}
          <div className="text-left flex flex-col gap-4 pt-4">
            <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left">Commercial Experiance</h2>

            {/* FIRST */}
            <div
              className="relative w-full min-h-50 flex flex-col gap-4 rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] p-5 md:m-3"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl">iRealty PropTech</h3>
              <p>Worked as a Junior Front-End Developer at the PropTech startup Converted the customer facing CRM to tablet and mobile responsive, and built a customer support pannel available across the app Built property filtering, comparison tools, and multilingual support (Catalan/French) </p>

              <div className="flex flex-row gap-5 py-5">
                <button className="w-[200px]">
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://irealty.app/")}
                  >Visit Site</p>
                </button>
              </div>
              <IconSet
                items={[
                  { src: devicon("javascript"), label: "JavaScript" },
                  { src: devicon("typescript"), label: "TypeScript" },
                  { src: devicon("react"), label: "React" },
                  { src: devicon("redux"), label: "Redux" },
                  { src: devicon("css3"), label: "CSS" },
                  { src: devicon("sass"), label: "SASS" },
                  { src: devicon("tailwindcss"), label: "Tailwind" },
                ]}
              />
            </div>
          </div>
          {/* Body - Learning */}
          <div className="text-left pb-[150px]" >
            <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
            >Learning</h2>
            <p>I have been putting in the effort to learn about many different areas</p>
            <div className="flex flex-row gap-2">
              <p>So my learning certificates on my linkedIn:</p>
              <p
                className="cursor-pointer text-blue-600 underline hover:text-blue-800 hover:underline"
                onClick={() => window.open("https://www.linkedin.com/in/guymarshman/details/certifications/")}
              >here</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Home;