import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ROUTES } from "../../constants/routes";
import Image from "next/image";

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
                    <Typewriter words={['WELCOME !']} loop={0} cursor />
                </motion.h1>
                <h1 className="text-9xl font-bold"> <span className="text-blue-500">Jeonghyeon Park</span></h1>
                <p className="text-l mt-10">An ambitious software developer eager to tackle challenges and continuously grow.</p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center mt-10"
            >
                <div className="flex flex-row gap-5 mt-4 text-xs text-gray-500 font-bold md:text-base">
                    <button onClick={HandleDownload}>
                        Download Resume
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Home;