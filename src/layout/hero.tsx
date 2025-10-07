import { use } from "motion/react-client"
import type { JSX } from "react"
import { useWindowSize } from "../hooks/useWindowSize"

// TODO: Make this responsive in web version
const Hero = (): JSX.Element => {

    const size = useWindowSize();

    return (
        <section className="relative z-0 h-screen flex flex-col items-center justify-center bg-amber-300 px-8 py-12 gap-8">
            <div className="absolute z-0 inset-0 flex items-center justify-center h-full pt-20">
                { size <= 700 ?<img src="src\assets\heroMobile.webp" alt="" className="object-cover w-full h-full" /> : <img src="src\assets\heroDesktop.webp" alt="" /> }
                <div className="absolute z-0 inset-0 bg-[var(--color-bg-primary)]/80 backdrop-blur-[2px] mix-blend-multiply"></div>
                <div className="absolute z-10 inset-0 bg-[radial-gradient(circle_at_center,_transparent_70%,black)]"></div>
            </div>
            <div className="relative z-10">
                <img src="src\assets\heroPerson.webp" className="min-w-[320px] max-w-[500px]"  alt="" />
            </div>
            <h1 className="relative z-10 text-4xl font-extrabold text-center text-slate-50">Do conceito ao lucro <br></br> com <span className="text-[var(--color-accent-secondary)]">expertise</span></h1>
        </section>
    )
}

export default Hero