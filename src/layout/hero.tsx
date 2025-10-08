import type { JSX } from "react"
import { useWindowSize } from "../hooks/useWindowSize"
import SecondaryButton from "../components/SecondaryButton";
import heroMobile from "../assets/heroMobile.webp";

// TODO: Make this responsive in web version
const Hero = (): JSX.Element => {

    const size = useWindowSize();

    return (
        <section className="relative z-0 min-h-[450px] flex flex-col items-center  bg-amber-300 px-4 pt-40">
            <div className="absolute z-0 inset-0 flex items-center justify-center h-full pt-20">
                { size <= 700 ?<img src={heroMobile} alt="" className="object-cover w-full h-full" /> : <img src="src\assets\heroDesktop.webp" alt="" /> }
                <div className="absolute z-0 inset-0 bg-[var(--color-bg-primary)]/98 backdrop-blur-sm mix-blend-multiply"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[var(--color-bg-primary)] from-10% to-transparent to-100%"></div>
            </div>
            <h1 className="relative z-10 text-3xl font-normal text-center text-slate-400 pb-6">Do <span className="text-slate-50 font-medium">conceito</span> ao <span className="text-slate-50 font-medium">lucro</span> <br></br> com <span className="text-slate-50 font-medium">expertise</span></h1>
            <p className="relative z-10 text-lg font-normal text-center text-slate-400 pb-4">Cresça com clareza e impacto.</p>
            <div className="relatice z-10">
                <SecondaryButton className="border-[var(--color-accent-secondary)] text-slate-200 text-5xl bg-[var(--color-bg-primary)]" text="Explore as possibilidades"><i className="fa-solid fa-star text-xl text-[var(--color-accent-secondary)]"></i></SecondaryButton>
            </div>
        </section>  
    )
}

export default Hero