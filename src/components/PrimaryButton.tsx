import { motion } from "motion/react";
import { type JSX, type ReactElement } from "react";

interface PrimaryButtonProps {
    text?: string;
    children?: ReactElement;
    className?: string;
}

// TODO: Add Prop for button onClick

// TODO: Add hover animation and on press animation
const PrimaryButton = ({text, children, className}: PrimaryButtonProps): JSX.Element => {

    return (
        <motion.button onClick={() => console.log(`click`)} whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className={`text-slate-200 px-8 py-4 w-full cursor-pointer relative z-0 overflow-hidden rounded-4xl font-medium text-2xl md:text-xl md:px-12 md:py-3 ${className} relative z-50`}>
            <motion.div whileHover={{filter: "brightness(0.8)"}} transition={{duration: 0.1}} className="pointer-events-none z-0 absolute inset-0 w-full h-full bg-[var(--color-accent-primary)]"></motion.div>
            <span className="relative z-10 pointer-events-none pointer-events-none">{text}{children}</span>
        </motion.button>
    )
}

export default PrimaryButton;