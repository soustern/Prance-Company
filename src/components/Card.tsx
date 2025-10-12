import type { JSX } from "react";
import PrimaryButton from "./PrimaryButton";

interface cardProps {
    heading: string,
    paragraph: string,
    icon?: string
}

const Card = ({heading, paragraph, icon}: cardProps): JSX.Element => {
    return (
        <article className="bg-slate-200 rounded-4xl px-8 py-8">
            <div className="flex gap-2 items-center justify-center pb-4">
                <h3 className="text-2xl leading-tight  font-medium text-center text-slate-800">{heading}</h3>
                <i className={`fa-solid fa-${icon} text-2xl text-[var(--color-accent-secondary)]`}></i>
            </div> 
            <p className="text-slate-700 text-center font-light pb-8">{paragraph}</p>
            <PrimaryButton className="" text="Saiba Mais"></PrimaryButton>
        </article> 
    )
}

export default Card;