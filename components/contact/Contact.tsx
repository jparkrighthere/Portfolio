import React from "react";

const Contact = () => {
    return (
        <section
        id='contact'
        className='container relative flex flex-col-reverse items-center justify-center h-screen gap-10 md:flex-row'>
            <h3 className='absolute text-2xl tracking-widest uppercase top-5 md:top-10'>Contact</h3>
        <div className="flex flex-col gap-0">
            <div>
            <h2>Let's Connect</h2>
            <p>
                I am currently looking for a new opportunity. If you are interested
                in my work, please feel free to contact me.
            </p>

            </div>
        </div>
    </section>
    );
}

export default Contact;

