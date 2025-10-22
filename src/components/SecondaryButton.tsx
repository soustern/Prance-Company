import { motion } from "motion/react";
import type { JSX, ReactNode } from "react";

interface SecondaryButtonProps {
    text?: string;
    children?: ReactNode;
    className?: string;
    func?: () => void
}

const SecondaryButton = ({text, children, className, func}: SecondaryButtonProps): JSX.Element => {
    return (
        <motion.button onClick={func} whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className={`border rounded-4xl px-8 flex gap-3 items-center py-4 text-lg font-medium md:text-xl md:px-12 md:py-3 shadow-sm w-full flex items-center justify-center ${className ? className : "text-slate-200"}`}>{text}{children}</motion.button>
    )
}

export default SecondaryButton;