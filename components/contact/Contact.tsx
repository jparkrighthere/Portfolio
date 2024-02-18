import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id='contact' className='relative flex flex-col items-center border-b-2 justify-center h-screen md:flex-row'>
            <h3 className='absolute text-2xl tracking-widest uppercase top-5 md:top-10'>Contact</h3>
            <div className="flex flex-col gap-10 items-center">
                <motion.div // ... (Your motion setup)
                    className='flex flex-col items-center'>
                    <a href="mailto:youremail@example.com"><EmailIcon style={{ fontSize: 60 }}/></a>
                    <h4>Email</h4>
                    <h4>fishbox0923@gmail.com</h4>
                </motion.div>
                <motion.div // ... (Your motion setup)
                    className='flex flex-col items-center'>
                    <a href="callto:6085561614" ><PhoneIcon style={{ fontSize: 60 }}/></a>
                    <h4>Phone</h4>
                    <span>(608) 556-1614</span>
                </motion.div>
                <motion.div // ... (Your motion setup)
                    className='flex flex-col items-center'>
                    <a href="https://www.linkedin.com/in/pjeonghyeon/"><LinkedInIcon style={{ fontSize: 60 }}/></a>
                    <h4>LinkedIn</h4>
                </motion.div>
                <motion.div // ... (Your motion setup)
                    className='flex flex-col items-center'>
                    <a href="https://github.com/jparkrighthere"><GitHubIcon style={{ fontSize: 60 }}/></a>
                    <h4>GitHub</h4>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
