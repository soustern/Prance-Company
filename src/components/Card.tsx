import { forwardRef, type JSX } from "react";
import PrimaryButton from "./PrimaryButton";

interface cardProps {
    heading: string,
    paragraph: string,
    icon?: string,
    className?: string
}

// TODO: Fix Icon Positioning

const Card = forwardRef<HTMLElement, cardProps>(({heading, paragraph, icon, className}, ref): JSX.Element => {
    return (
        <article ref={ref} className={`overflow-hidden bg-slate-200 rounded-4xl pb-8 shadow-xl border border-slate-200 max-w-[320px] ${className} pointer-events-auto`}>
            <div className="flex flex-col gap-8 items-center justify-center pb-4">
                <div className="bg-bg-primary w-full h-full py-6 flex items center justify-center">
                    {icon && <i className={`fa-solid fa-${icon} text-4xl text-accent-secondary`}></i>}
                </div>
                <h3 className="text-2xl leading-tight  font-medium text-center text-slate-800">{heading}</h3>
            </div> 
            <div className="px-8">
                <p className="text-slate-700 text-center font-light pb-8">{paragraph}</p>
                <PrimaryButton link="https://wa.link/173tl9" className="pointer-events-auto relative z-50" text="Saiba Mais"></PrimaryButton>
            </div>
        </article> 
    )
})

Card.displayName = "Card";

export default Card;