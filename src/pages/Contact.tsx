// import Balatro from "@/components/Balatro";
import { GridScan } from "@/components/GridScan";
import GlassIcons from "@/components/GlassIcons";
import { FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi';
import { LiaLinkedin } from "react-icons/lia";


const Contact = () => {
    // update with your own icons and colors
    const items = [
        { icon: <LiaLinkedin />, color: 'blue', label: 'LinkedIn' },
        { icon: <FiGithub />, color: 'purple', label: 'GitHub' },
        { icon: <FiFileText />, color: 'purple', label: 'CV' },
    ];

    return (
        <div className="fixed inset-0 w-full h-full">
            {/* <Balatro mouseInteraction={false} spinRotation={-1.0} spinSpeed={3.0} /> */}
            <div className="absolute inset-0" >
                <GridScan 
                    sensitivity={0.1}
                    lineThickness={1}
                    linesColor="rgba(44, 81, 36, 0.87);"
                    gridScale={0.03}
                    scanColor="rgba(3, 196, 51, 0.87);"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.05} //0.01
                    // scanOnClick={true}
                    // scanDelay={6}
                    scanDuration={6}
                />
            </div>
            <div
                className=" relative z-10 contact-page"
            
            >
                <h2 className="google-sans-flex-bold-round text-6xl -mb-5" >Get in</h2>
                <h2 className="google-sans-flex-bold-round text-8xl" >Contact</h2>
                <h2 className="google-sans-flex-skinny text-5xl pt-0" >I don't bite</h2>
                <h4></h4>
                <div>

                    <div style={{ height: '600px', position: 'relative' }}>
                        <GlassIcons items={items} className="custom-class" iconSize="2em" />
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
        // <div className="w-full min-h-screen pt-24">
        // </div>
    )
}

export default Contact;


// spinRotation = -2.0,
// spinSpeed = 7.0,
