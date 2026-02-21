// import Balatro from "@/components/Balatro";

const Home = () => {
    return (
      <div className=" w-full h-full min-h-screen pt-14 ">
        {/* <Balatro /> */}
        {/* Body */}
        <div className="max-w-[1100px] h-auto">
          {/* Body - heading*/}
          <h1 className="google-sans-flex-bold-round text-6xl pt-10"
          >Guy - Junior Full-Stack Dev</h1>
          {/* Body - intro*/}
          <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
          >Introduction</h2>
          <div className="h-auto p-2 flex flex-col gap-10 pt-5 " >

            <p>I'm a Full-Stack Developer based in London with two years of intensive self-driven learning and nine months of commercial experience at a PropTech startup.</p>
            <p>Recently, I've been focusing more on backend development, working with Node.js, Express, server architecture, authentication, and databases including SQLite and PostgreSQL.</p>
            {/* <p className="google-sans-flex rounded-soft flex items-center text-9xl font-semibold text-slate-800" >Github</p>
            <p className="google-sans-flex rounded-strong flex items-center text-9xl font-semibold text-slate-800" >Github</p>
            <p className="google-sans-flex grade-subtle flex items-center text-9xl font-semibold text-slate-800" >Github</p> */}
            {/* <p className="google-sans-flex-default flex items-center text-9xl" >Github</p>
            <p className="google-sans-flex-1 flex items-center text-9xl" >Github</p> */}

          </div>
          {/* Body - Projects */}
          <div className="text-left" >
            <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
            >Projects</h2>

            <div className=" w-full h-50 flex flex-col bg-green-300 p-3 m-3"
            >
              <h3 className="google-sans-flex-default text-3xl"
              >Mood Tracker</h3>
              <p>Mental Health Tracker CLI tool, record mood and review results. Uses Ink to create a full screen TUI, saves results in a SQLite database.</p>
            </div>

            <div className=" w-full h-50 flex flex-col bg-green-300 p-3 m-3"
            >
              <h3 className="google-sans-flex-default text-3xl"
              >Tap 'O' Matic</h3>
              <p>A React Native TypeScript random number generator app</p>
            </div>

            <div className=" w-full h-50 flex flex-col bg-green-300 p-3 m-3"
            >
              <h3 className="google-sans-flex-default text-3xl"
              >Super Connect</h3>
              <p>A two-player turn-based Connect 4–style game built in Unity 6 (URP). Get four in a row: horizontally, vertically, or diagonally to win. Full game with start scene, player naming, scoring, winning screen, music control, 3D background and animations</p>
            </div>
            
          </div>
          {/* Body - Learning */}
          <div className="text-left" >
            <h2 className="google-sans-flex-skinny text-3xl pt-5 text-left"
            >Learning</h2>
            <p>I have been putting in the effort to learn about many different areas</p>
            <p>So my learning certificates on my links here</p>

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