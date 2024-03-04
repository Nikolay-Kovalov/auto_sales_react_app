import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:0.5}}
        >
    <h1>Welcome to auto-auction company</h1>   
    <h3>There you can find  car of your dream</h3>        
</motion.div>
    )
}

export default Home;