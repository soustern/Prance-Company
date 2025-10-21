import { useRef, type JSX } from "react"
import SecondaryButton from "../components/SecondaryButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import  heroMobile  from "../assets/heroMobile.webp";

// TODO: Make this responsive in web version
// TODO: Make web version

gsap.registerPlugin(SplitText)

interface heroProps {
    fontsReady: boolean
}

// TODO: Time the animations here better
// Trigger commit

const Hero = ({fontsReady}: heroProps): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [headingRef, paragraphRef, buttonRef];
        if (refs.some(ref => !ref.current)) return;

        const splitHeading = new SplitText(headingRef.current, {type: "lines"});

        let isInitialized = false;

        const initAnimations = () => {
            if (isInitialized) return;
            isInitialized = true;


            gsap.from(splitHeading.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.6,
                duration: 0.5,
                });

            gsap.from(paragraphRef.current, {
                opacity: 0,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.8,
                duration: 0.5,
                scale: 0.8,
                });

            gsap.from(buttonRef.current, {
                y: 20,
                opacity: 0,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 3.0,
                duration: 0.5,
                });
        }

        const initTimeout = setTimeout(initAnimations, 50);

        return () => {
            clearTimeout(initTimeout);
            isInitialized = false;
            splitHeading.revert();
        };
    }, {dependencies: [fontsReady]});

    return (
        <section id="hero-section" className="relative z-0 min-h-[480px] flex flex-col items-center  bg-bg-primary px-4 pt-40">
            <div className="absolute inset-0">
                <img src={heroMobile} alt="" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-primary from-30% to-bg-primary/60 bg-blend-hard-light"></div>
            </div>
            <h1 ref={headingRef} className="relative z-10 text-center text-3xl text-slate-400 pb-6">Do <span className="text-slate-50 font-medium">conceito</span> ao <span className="text-slate-50 font-medium">lucro</span> <br></br> com <span className="text-slate-50 font-medium">expertise.</span></h1>
            <p ref={paragraphRef} className="text-lg font-normal text-slate-400 pb-4 relative z-10">Cresça com clareza e impacto.</p>
            <div ref={buttonRef} className="relative z-10">
                <SecondaryButton func={() => document.getElementById(`about-section`)?.scrollIntoView({behavior: 'smooth'})} className="border-[var(--color-accent-secondary)] text-slate-200 text-5xl bg-gradient-to-t from-slate-900/40 from-5% to-60% to-bg-primary" text="Explore as possibilidades"><i className="fa-solid fa-star text-xl text-[var(--color-accent-secondary)]"></i></SecondaryButton>
            </div>
        </section>  
    )
}

export default Hero