import type { JSX } from "react"
import about from "../assets/about.png";

const About = (): JSX.Element => {
    return (
        <section className="bg-[var(--color-bg-primary)] flex flex-col items-center justify-center relative px-4 pt-20">
            <div className="absolute flex left-1/2 -top-10 transform -translate-x-1/2 z-0 gap-0">
                <div className="bg-slate-50 z-10 h-10 w-10 relative transform translate-x-1.5">
                    <div className="bg-[var(--color-bg-primary)] h-full w-full rounded-br-full absolute inset-0"></div>
                </div>
                <div className="bg-slate-50 z-30 h-10 w-13 rounded-t-full relative"></div>
                <div className="bg-slate-50 z-10 h-10 w-10 relative transform -translate-x-1.5">
                    <div className="bg-[var(--color-bg-primary)] h-full w-full rounded-bl-full absolute inset-0 "></div>
                </div>
                <div className="bg-[var(--color-bg-primary)] z-20 h-5 w-35 absolute inset-0"></div>
            </div>
            <div className="absolute z-0 inset-0 bg-slate-50 w-full h-full transform origin-center scale-x-80 rounded-2xl"></div>
            <div className="relative z-10 pb-6">
                <img src={about} className="max-w-[250px] relative z-10" alt="" />
                <img src={about} className="max-w-[250px] absolute inset-0 z-10 blur-xs" alt="" />
            </div>
            <h2 className="relative z-10 text-slate-800 text-normal text-center text-2xl leading-tight pb-4">Mais que Agência, <br></br> sua Consultoria Estratégica.</h2>
        </section>
    )
}

export default About;