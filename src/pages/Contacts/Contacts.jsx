import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:0.5}}
        >
        <h1>Contacts</h1>
        <h3>Get in touch for more infirmation</h3>
        </motion.div>
    )
}

export default Contacts;