import { forwardRef, type JSX } from "react";
import PrimaryButton from "./PrimaryButton";

interface cardProps {
    heading: string,
    paragraph: string,
    icon?: string,
    className?: string
}

// TODO: Add Prop for button onClick
// TODO: Fix Icon Positioning

const Card = forwardRef<HTMLElement, cardProps>(({heading, paragraph, icon, className}, ref): JSX.Element => {
    return (
        <article ref={ref} className={`bg-slate-200 rounded-4xl px-8 py-8 shadow-xl border border-[var(--color-accent-secondary)] ${className}`}>
            <div className="flex gap-2 items-center justify-center pb-4">
                <h3 className="text-2xl leading-tight  font-medium text-center text-slate-800">{heading}</h3>
                {icon && <i className={`fa-solid fa-${icon} text-2xl text-[var(--color-accent-secondary)]`}></i>}
            </div> 
            <p className="text-slate-700 text-center font-light pb-8">{paragraph}</p>
            <PrimaryButton className="" text="Saiba Mais"></PrimaryButton>
        </article> 
    )
})

Card.displayName = "Card";

export default Card;