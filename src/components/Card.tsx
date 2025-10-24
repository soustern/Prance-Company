import { forwardRef, type JSX } from "react";
import PrimaryButton from "./PrimaryButton";

interface cardProps {
    heading: string,
    paragraph: string,
    icon?: string,
    className?: string
    image?: string
}


const Card = forwardRef<HTMLElement, cardProps>(({heading, paragraph, icon, className, image}, ref): JSX.Element => {
    return (
        <article ref={ref} className={`flex flex-col overflow-hidden bg-slate-200 rounded-4xl pb-8 shadow-xl border h-[470px] border-slate-200 max-w-[320px] ${className} pointer-events-auto`}>
            <div className="flex flex-col gap-8 items-center justify-center pb-4">
                <div className=" w-full h-[95px] flex items center justify-center relative">
                    {icon && <i className={`fa-solid fa-${icon} text-4xl text-accent-secondary`}></i>}
                    {image  && <img src={image} alt="" className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 from-5% to-60% to-bg-primary/30 mix-blend-hard-light"></div>
                </div>
                <div className="px-8 w-full">
                    <h3 className="text-2xl leading-tight font-medium text-slate-800">{heading}</h3>
                </div>
            </div> 
            <div className="px-8 flex flex-col justify-between flex-1">
                <p className="text-slate-700 font-light">{paragraph}</p>
                <PrimaryButton link="https://wa.link/173tl9" className="pointer-events-auto relative z-50" text="Saiba Mais">
                </PrimaryButton>
            </div>
        </article> 
    )
})

Card.displayName = "Card";

export default Card;