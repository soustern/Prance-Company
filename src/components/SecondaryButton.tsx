import type { JSX, ReactNode } from "react";

interface SecondaryButtonProps {
    text?: string;
    children?: ReactNode;
    className?: string;
}

const SecondaryButton = ({text, children, className}: SecondaryButtonProps): JSX.Element => {
    return (
        <button className={`border rounded-4xl px-8 flex gap-3 items-center py-4 text-lg font-medium md:text-xl md:px-12 md:py-3 ${className ? className : "text-slate-200"}`}>{text}{children}</button>
    )
}

export default SecondaryButton;