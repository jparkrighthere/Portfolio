import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ROUTES } from "../../constants/routes";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

const Home = () => {
    const HandleDownload = () => {
        const resumeFileUrl = "/files/Jeonghyeon_Park_Resume.pdf";
        window.open(resumeFileUrl, "_blank");
    };

    return (
        <section id="home" className="container flex flex-col items-center justify-center h-screen">
            <div className="container flex flex-col items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-5xl mb-10"
                >
                    <Typewriter words={["Hello, I'm"]} />
                </motion.h1>
                <h1 className="text-8xl font-bold text-blue-500">
                    <Typewriter
                        words={[
                            "Jeonghyeon Park",
                            "Software Developer"
                        ]}
                        loop={0}
                        cursor
                    />
                </h1>
                <p className="text-l mt-10">An ambitious software developer eager to tackle challenges and continuously grow.</p>
                <button className="mt-8 text-gray-500"  onClick={HandleDownload}>
                        Download Resume
                </button>
            </div>

            <div className="flex flex-row gap-5 mt-4 text-xs font-bold md:text-base">
                <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                    <KeyboardDoubleArrowDown fontSize="large" />
                </motion.div>
            </div>
        </section>
    )
}

export default Home;

