import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{type:"spring", stiffness: 120}}
        >
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!</p>
        </motion.div>
    )
}

export default About;