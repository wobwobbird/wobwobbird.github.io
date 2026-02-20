// import Balatro from "@/components/Balatro";
import { GridScan } from "@/components/GridScan";
import GlassIcons from "@/components/GlassIcons";
import { FiGithub, FiFileText } from 'react-icons/fi';
import { LiaLinkedin } from "react-icons/lia";
import cvPdf from '@/assets/Guy_Marshman_Full-Stack_Software_Dev_CV.pdf';

const Contact = () => {
    // update with your own icons and colors
    const items = [
        { icon: <FiGithub />, color: '#24292e', label: 'GitHub', onClick: () => window.open("https://github.com/wobwobbird") },
        { icon: <LiaLinkedin />, color: '#0A66C2', label: 'LinkedIn', onClick: () => window.open("https://linkedin.com/in/guymarshman")},
        { 
            icon: <FiFileText />,
            color: '#059669',
            label: 'Download CV',
            onClick: () => {
                const link = document.createElement('a');
                link.href = cvPdf;
                link.download = 'Guy_Marshman_Full-Stack_Software_Dev_CV.pdf';
                link.click();
            }
        },
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
                className="relative z-10 flex flex-col items-center justify-center w-full h-full"
            
            >
                <div>
                    <h2 className="google-sans-flex-bold-round text-6xl -mb-5" >Get in</h2>
                    <h2 className="google-sans-flex-bold-round text-8xl" >Contact</h2>
                    <h2 className="google-sans-flex-skinny text-5xl pt-0" >I don't bite</h2>
                    <h4></h4>
                    <div>
                        <div className="h-auto relative" >
                            <GlassIcons items={items} className="custom-class" />
                        </div>
                    </div>
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
