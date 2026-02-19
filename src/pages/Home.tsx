import Balatro from "@/components/Balatro";

const Home = () => {
    return (
      <div className="fixed inset-0 w-full h-full min-h-screen pt-14">
        {/* <Balatro /> */}
        <div className="bg-amber-300 border-8 h-128 p-2 flex flex-col gap-6" >
          <h2
            className="text-2xl font-bold"
          >Hi i-m Guy - Junior Full-Stack Dev</h2>
          <p>I'm a Full-Stack Developer based in London with two years of intensive self-driven learning and nine months of commercial experience at a PropTech startup.</p>
          <p>Recently, I've been focusing more on backend development, working with Node.js, Express, server architecture, authentication, and databases including SQLite and PostgreSQL.</p>

        </div>
        <div
          className="bg-lime-900 h-30 p-5 "
        >
          <div className="bg-amber-200 w-full h-full flex flex-row justify-between" >
            <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
              <p className="flex items-center text-4xl font-semibold text-slate-800" >Github</p>
            </div>
            <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
              <p>Github</p>
            </div>
            <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
              <p>Github</p>
            </div>
            <div className="bg-amber-500 w-40 h-full flex items-center justify-center" >
              <p>Github</p>
            </div>

          </div>

        </div>
      </div>
    );
  };

export default Home;