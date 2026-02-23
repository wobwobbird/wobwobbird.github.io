import LetterGlitch from "@/components/LetterGlitch";
import GlassSurface from '../components/GlassSurface';
import { Link } from "react-router-dom";
import PageHolder from "@/components/PageHolder";


const Entry = () => {

    return (
        <PageHolder 
            background={
                <LetterGlitch 
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                    glitchSpeed={100}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            } 
            className="items-center"
        >
            <h1 className="w-full max-xs:text-3xl! md:-mb-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Welcome to</h1>
            <h1 className="display w-full max-xs:text-4xl! drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Guy's Website</h1>
            <h1 className="w-full max-xs:text-2xl! max-md:pt-4 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Junior Full-Stack Software Developer</h1>
            {/* <h2 className="google-sans-flex-bold-round text-4xl md:text-6xl md:-mb-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Welcome to</h2>
            <h2 className="google-sans-flex-bold-round text-6xl md:text-8xl max-w-full text-center drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Guy's Website</h2>
            <h2 className="google-sans-flex-bold-round text-3xl md:text-4xl max-md:pt-4 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Junior Full-Stack Software Developer</h2> */}
            <Link to="/home" className="block w-[90%] sm:w-[600px] mt-10">
                <GlassSurface
                    className="cursor-pointer w-full"
                    width="100%"
                    height={70}
                    borderRadius={30}
                    displace={0.01}
                    distortionScale={0}
                    redOffset={0}
                    greenOffset={-50}
                    blueOffset={20}
                    brightness={50}
                    opacity={0}
                    borderWidth={0.2}
                    backgroundOpacity={0.4}
                    saturation={0.9}
                    mixBlendMode="screen"
                >
                    <p
                        className="google-sans-flex-contact text-5xl"
                    >Enter</p>
                </GlassSurface>
            </Link>

            <div>
                <div className="h-auto relative" >
                    {/* <GlassIcons items={items} className="custom-class" /> */}
                </div>
            </div>
        </PageHolder>
    )
}

export default Entry;