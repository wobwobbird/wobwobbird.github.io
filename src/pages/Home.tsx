import LightRays from "@/components/LightRays";

const Home = () => {
    return (
      <div className="fixed inset-0 w-full h-full">
        {/* Background */}
        <div className="absolute inset-0">
          <LightRays />
        </div>
        {/* Body - data-lenis-prevent stops Lenis from capturing scroll, allowing native overflow scroll */}
        <div
          className="relative z-10 w-full min-h-0 pt-14 overflow-y-auto overflow-x-hidden overscroll-contain"
          style={{ height: '100vh' }}
          data-lenis-prevent=""
        >
          <div className="max-w-[1100px] h-auto mx-auto px-4">
          {/* Body - heading*/}
          <h1 className="google-sans-flex-bold-round text-6xl pt-10"
          >Guy - Junior Full-Stack Dev</h1>
          {/* Body - intro*/}
          <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
          >Introduction</h2>
          <div className="h-auto p-2 flex flex-col gap-10 pt-5 " >
            <p>I'm a Full-Stack Developer based in London with two years of intensive self-driven learning and nine months of commercial experience at a PropTech startup.</p>
            <p>Recently, I've been focusing more on backend development, working with Node.js, Express, server architecture, authentication, and databases including SQLite and PostgreSQL.</p>
          </div>
          {/* Body - Projects */}
          <div className="text-left" >
            <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
            >Projects</h2>

            {/* FIRST */}
            <div
              className="relative w-full h-50 flex flex-col rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] p-3 m-3"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl"
              >Mood Tracker</h3>
              <p>Mental Health Tracker CLI tool, record mood and review results. Uses Ink to create a full screen TUI, saves results in a SQLite database.</p>

              <div className="flex flex-row gap-5 p-5">
                <button
                  // onClick={}
                  className="w-[200px]"
                >
                  <p
                    className="google-sans-flex-default text-black"
                  >Start Application</p>
                </button>
                <button
                  // onClick={}
                  className="w-[200px]"
                >
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://github.com/wobwobbird/Mood_Tracker")}
                  >Open on Github</p>
                </button>
              </div>
            </div>

            {/* SECOND */}
            <div
              className="relative w-full h-50 flex flex-col rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] p-3 m-3"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl"
              >Tap 'O' Matic</h3>
              <p>A React Native TypeScript random number generator app</p>
              <div className="flex flex-row gap-5 p-5">
                <button
                  // onClick={}
                  className="w-[200px]"
                >
                  <p
                    className="google-sans-flex-default text-black"
                  >Start Application</p>
                </button>
                <button
                  // onClick={}
                  className="w-[200px]"
                >
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://github.com/wobwobbird/Tap-O-Matic")}
                  >Open on Github</p>
                </button>
              </div>
            </div>


            {/* THIRD */}
            <div
              className="relative w-full h-50 flex flex-col rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] p-3 m-3"
              style={{ boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset' }}
            >
              <h3 className="google-sans-flex-default text-3xl"
              >Super Connect</h3>
              <p>A two-player turn-based Connect 4–style game built in Unity 6 (URP). Get four in a row: horizontally, vertically, or diagonally to win. Full game with start scene, player naming, scoring, winning screen, music control, 3D background and animations</p>
              <div className="flex flex-row gap-5 p-5">
                <button
                  // onClick={}
                  className="w-[200px]"
                >
                  <p
                    className="google-sans-flex-default text-black"
                  >Start Application</p>
                </button>
                <button
                  // onClick={}
                  className="w-[200px]"
                >
                  <p
                    className="google-sans-flex-default text-black"
                    onClick={() => window.open("https://github.com/wobwobbird/Super-Connect-Game")}
                  >Open on Github</p>
                </button>
              </div>
            </div>
            
          </div>
          {/* Body - Learning */}
          <div className="text-left" >
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

  {/* Footer */}
  {/* <div
    className="h-30 p-5 "
  >
    <div className="bg-amber-200 w-full h-full flex flex-row justify-between" >
      <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
        <p className=" google-sans-flex-skinny flex items-center text-3xl" >Github</p>
      </div>
      <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
        <p className=" google-sans-flex-skinny flex items-center text-3xl" >LinkedIn</p>
      </div>
      <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
        <p className=" google-sans-flex-skinny flex items-center text-4xl" >Github</p>
      </div>

    </div>

  </div> */}