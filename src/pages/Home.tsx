// import Balatro from "@/components/Balatro";

const Home = () => {
    return (
      <div className=" w-full h-full min-h-screen pt-14 ">
        {/* <Balatro /> */}
        {/* Body */}
        <div className="h-auto p-2 flex flex-col gap-10 pt-10 pb-20" >
          <h2
            className="google-sans-flex-bold-round text-6xl"
          >Guy - Junior Full-Stack Dev</h2>
          <h2
            className="google-sans-flex-bold-round text-6xl"
          >LordMarshy</h2>
          <p>I'm a Full-Stack Developer based in London with two years of intensive self-driven learning and nine months of commercial experience at a PropTech startup.</p>
          <p>Recently, I've been focusing more on backend development, working with Node.js, Express, server architecture, authentication, and databases including SQLite and PostgreSQL.</p>
          {/* <p className="google-sans-flex rounded-soft flex items-center text-9xl font-semibold text-slate-800" >Github</p>
          <p className="google-sans-flex rounded-strong flex items-center text-9xl font-semibold text-slate-800" >Github</p>
          <p className="google-sans-flex grade-subtle flex items-center text-9xl font-semibold text-slate-800" >Github</p> */}
          {/* <p className="google-sans-flex-default flex items-center text-9xl" >Github</p>
          <p className="google-sans-flex-1 flex items-center text-9xl" >Github</p> */}

        </div>
        {/* Projects */}
        <div>
          <div
            className=" w-full h-50 flex flex-row justify-between"
          >
            <p>project 1</p>
          </div>
          <div
            className=" w-full h-50 flex flex-row justify-between"
          >
            <p>project 1</p>
          </div>
          <div
            className=" w-full h-50 flex flex-row justify-between"
          >
            <p>project 1</p>
          </div>
        </div>
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
      </div>
    );
  };

export default Home;