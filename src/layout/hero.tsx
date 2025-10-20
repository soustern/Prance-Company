import { useRef, type JSX } from "react"
import SecondaryButton from "../components/SecondaryButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// TODO: Make this responsive in web version
// TODO: Make web version

gsap.registerPlugin(SplitText)

interface heroProps {
    fontsReady: boolean
}

const Hero = ({fontsReady}: heroProps): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const splitHeading = new SplitText(headingRef.current, {type: "lines"});

        gsap.from(splitHeading.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "power4.out",
            willChange: "transform, opacity",
            delay: 2.6,
            duration: 1,
            });

        gsap.from(paragraphRef.current, {
            opacity: 0,
            ease: "power4.out",
            willChange: "transform, opacity",
            delay: 2.9,
            duration: 1,
            scale: 0.8,
            });

        gsap.from(buttonRef.current, {
            y: 20,
            opacity: 0,
            ease: "power4.out",
            willChange: "transform, opacity",
            delay: 3.2,
            duration: 1,
            });

        return () => {
            splitHeading.revert();
        };
    }, {dependencies: [fontsReady]});

    return (
        <section id="hero-section" className="relative z-0 min-h-[480px] flex flex-col items-center  bg-bg-primary px-4 pt-40">
            <h1 ref={headingRef} className="relative z-10 text-3xl text-center text-slate-400 pb-6">Do <span className="text-slate-50 font-medium">conceito</span> ao <span className="text-slate-50 font-medium">lucro</span> <br></br> com <span className="text-slate-50 font-medium">expertise</span></h1>
            <p ref={paragraphRef} className="relative z-10 text-lg font-normal text-center text-slate-400 pb-4">Cresça com clareza e impacto.</p>
            <div ref={buttonRef} className="relatice z-10">
                <SecondaryButton func={() => document.getElementById(`about-section`)?.scrollIntoView({behavior: 'smooth'})} className="border-[var(--color-accent-secondary)] text-slate-200 text-5xl bg-[var(--color-bg-primary)]" text="Explore as possibilidades"><i className="fa-solid fa-star text-xl text-[var(--color-accent-secondary)]"></i></SecondaryButton>
            </div>
        </section>  
    )
}

export default Hero