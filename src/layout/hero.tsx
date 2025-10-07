import type { JSX } from "react"
import { useWindowSize } from "../hooks/useWindowSize"
import SecondaryButton from "../components/SecondaryButton";

// TODO: Make this responsive in web version
const Hero = (): JSX.Element => {

    const size = useWindowSize();

    return (
        <section className="relative z-0 h-screen flex flex-col items-center justify-center bg-amber-300 px-8 py-12 gap-4">
            <div className="absolute z-0 inset-0 flex items-center justify-center h-full pt-20">
                { size <= 700 ?<img src="src\assets\heroMobile.webp" alt="" className="object-cover w-full h-full" /> : <img src="src\assets\heroDesktop.webp" alt="" /> }
                <div className="absolute z-0 inset-0 bg-[var(--color-bg-primary)]/98 backdrop-blur-sm mix-blend-multiply"></div>
            </div>
            <h1 className="relative z-10 text-4xl font-normal text-center text-slate-400">Do <span className="text-slate-50 font-medium"></span>conceito ao lucro <br></br> com <span className="text-slate-50 font-medium">expertise</span></h1>
            <p className="relative z-10 text-lg font-normal text-center text-slate-400">Soluções para negócios que querem crescer com clareza e impacto.</p>
            <div>
                <SecondaryButton className="border-slate-50 text-slate-200 text-5xl" text="Explore as possibilidades"></SecondaryButton>
            </div>
        </section>
    )
}

export default Hero