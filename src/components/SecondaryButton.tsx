import { motion } from "motion/react";
import type { JSX, ReactNode } from "react";

interface SecondaryButtonProps {
    text?: string;
    children?: ReactNode;
    className?: string;
    func?: () => void
    ariaLabel: string
}

const SecondaryButton = ({text, children, className, func, ariaLabel}: SecondaryButtonProps): JSX.Element => {
    return (
        <motion.button aria-label={ariaLabel} onClick={func} whileTap={{scale: 0.9}} whileHover={"hover"} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className={`border rounded-4xl px-8 flex gap-3 items-center py-4 text-xl font-medium shadow-sm w-full flex items-center cursor-pointer justify-center ${className ? className : "text-slate-200"}`}>{text}{children}</motion.button>
    )
}

export default SecondaryButton;