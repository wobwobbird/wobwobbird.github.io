import LetterGlitch from "@/components/LetterGlitch";
import { Link } from "react-router-dom";
import PageHolder from "@/components/PageHolder";
import { Button } from "@/components/ui/button"
import { GrCodeSandbox } from "react-icons/gr";
import Cubes from '../components/Cubes';
import { useState } from "react";
import { useMediaQuery } from '../hooks/windowWidth';

const CubeHolder = () => {
    const isSm = useMediaQuery("(min-width: 640px)");
    return (
        // <div className="h-[320px] w-[320px] mx-4 my-10 bg-[rgba(0,0,0,1)] rounded-2xl flex items-center justify-center shadow-[0_0_50px_15px_rgba(0,0,0,1)]">
        <div className="size-[320px] max-sm:size-[280px] mx-4 bg-[rgba(0,0,0,0.6)] rounded-2xl flex items-center justify-center shadow-[0_0_50px_15px_rgba(0,0,0,0.6)]">
            <div className="size-full">
                <Cubes
                    gridSize={isSm ? 7 : 6}
                    maxAngle={150}
                    radius={3}
                    borderStyle="2px dashed #61b3dc"
                    faceColor="rgb(0, 0, 0)" 
                    rippleColor="rgba(97, 220, 163, 0.3)"
                    // rippleColor="#ff6b6b"
                    rippleSpeed={1.5}
                    autoAnimate
                    rippleOnClick
                />
            </div>
        </div>
    );
};

const Entry = () => {
    const [tagLineRandomNumber, setTagLineRandomNumber] = useState(Math.floor(Math.random() * 6));
    // const [oneLinerRandomNumber, setOneLinerRandomNumber] = useState(Math.floor(Math.random() * 3));

    const tagLine = [
        "Full-Stack Developer · React, Node & beyond",
        "Building apps from idea to deployment",
        "Full-Stack Developer · Problem solver & builder",
        "Portfolio · Projects · Contact",
        "See what I've been building",
        "Projects, experience & how to get in touch"
    ]

    const oneLiner = [
    ]

    return (
        <PageHolder 
            background={
                <LetterGlitch 
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                    glitchSpeed={200}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            } 
            className="items-center gap-4 !w-[600px]"
            // className="items-center gap-4 !w-[600px] bg-amber-200"
        >
            {/* <h1 className="select-none w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
            >Welcome to</h1>
            <h1 className="display select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
            >Guy's Website</h1> */}
            {/* <h1 className=" select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
            >{tagLine[oneLinerRandomNumber]}</h1> */}


            <h1 className="
                w-[320px] max-sm:w-[280px] text-3xl! max-sm:text-2.5xl! text-[#61b3dc] select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61b3dc] border-2 border-dashed
                "
            >Welcome to</h1>
            <h1 className="
                w-[320px] max-sm:w-[280px] text-5xl! max-sm:text-4xl! text-[#61b3dc] select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61b3dc] border-2 border-dashed
                "
            >Guy's Website</h1>
            <h1 className="
                w-[320px] max-sm:w-[280px] text-xl! max-sm:text-md! text-[#61b3dc] select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61b3dc] border-2 border-dashed
                "
            >{tagLine[tagLineRandomNumber]}</h1>

            {/* cube spacing: (320 - ((28+4)*7)) /6 = 16 */}
            <CubeHolder/>

            {/* <h1 className="select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
            >{oneLiner[tagLineRandomNumber]}</h1> */}
            {/* <h1 className="
                w-[320px] !text-2xl select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61b3dc] border-2 border-dashed
                "
            >{oneLiner[tagLineRandomNumber]}</h1> */}
            <Button className="
                w-[320px] max-sm:w-[280px] h-[40px] drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                rounded-xs  border-[#61b3dc] border-2 border-dashed" 
                variant="outline"
            >
                <Link to="/home" className="flex flex-row items-center gap-4 ">
                    <p className="p2 text-2xl! text-[#61b3dc]">Explore</p>
                    <GrCodeSandbox className="size-7 text-[#61b3dc] stroke-[2]"/>
                </Link>
            </Button>
        </PageHolder>
    )
}

export default Entry;