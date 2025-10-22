import { motion } from "motion/react";
import { type JSX, type ReactElement } from "react";

interface PrimaryButtonProps {
    text?: string;
    children?: ReactElement;
    className?: string;
    link?: string
}

// TODO: Add hover animation
const PrimaryButton = ({text, children, className, link}: PrimaryButtonProps): JSX.Element => {

    const variants = {
        initial: {filter: "brightness(1)"},
        hover: {filter: "brightness(0.85)"}
    }

    return (
        <motion.button whileHover={"hover"} onClick={() => window.open(link, "_blank")} whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className={`text-slate-200 px-8 py-4 w-full cursor-pointer relative z-0 overflow-hidden rounded-4xl font-medium text-2xl md:text-xl md:px-12 md:py-3 ${className} relative z-50 shadow-sm max-w-[250px] cursor-pointer`}>
            <motion.div variants={variants} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className="pointer-events-none z-0 absolute inset-0 w-full h-full bg-gradient-to-t from-[#12704d] from-5% to-60% to-accent-primary"></motion.div>
            <span className="relative z-10 pointer-events-none pointer-events-none flex gap-2 w-full items-baseline justify-center">{text}{children}</span>
        </motion.button>
    )
}

export default PrimaryButton;