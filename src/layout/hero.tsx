import { useRef, type JSX } from "react"
import SecondaryButton from "../components/SecondaryButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import  heroMobile  from "../assets/heroMobile.webp";
import { useWindowSize } from "../hooks/useWindowSize";
import heroDesktop from "../assets/heroDesktop.webp";
import { motion } from "motion/react";

// TODO: Make this responsive in web version
// TODO: Make web version

gsap.registerPlugin(SplitText)

interface heroProps {
    fontsReady: boolean
}

// TODO: Time the animations here better
// Trigger commit

const Hero = ({fontsReady}: heroProps): JSX.Element => {
    const size = useWindowSize();

    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const headingDesktopRef = useRef<HTMLHeadingElement>(null);
    const paragraphDesktopRef = useRef<HTMLParagraphElement>(null);
    const buttonDesktopRef = useRef<HTMLDivElement>(null);

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
                stagger: 0.08,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.5,
                duration: 1.1,
                });

            gsap.from(paragraphRef.current, {
                opacity: 0,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.7,
                duration: 1.1,
                scale: 0.8,
                });

            gsap.from(buttonRef.current, {
                y: 20,
                opacity: 0,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.9,
                duration: 1.1,
                });
        }

        const initTimeout = setTimeout(initAnimations, 50);

        return () => {
            clearTimeout(initTimeout);
            isInitialized = false;
            splitHeading.revert();
        };
    }, {dependencies: [fontsReady]});

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [headingDesktopRef, paragraphDesktopRef, buttonDesktopRef];
        if (refs.some(ref => !ref.current)) return;

        const splitHeading = new SplitText(headingDesktopRef.current, {type: "lines"});

        let isInitialized = false;

        const initAnimations = () => {
            if (isInitialized) return;
            isInitialized = true;


            gsap.from(splitHeading.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.08,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.5,
                duration: 1.1,
                });

            gsap.from(paragraphDesktopRef.current, {
                opacity: 0,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.7,
                duration: 1.1,
                scale: 0.8,
                });

            gsap.from(buttonDesktopRef.current, {
                y: 20,
                opacity: 0,
                ease: "power4.out",
                willChange: "transform, opacity",
                delay: 2.9,
                duration: 1.1,
                });
        }

        const initTimeout = setTimeout(initAnimations, 50);

        return () => {
            clearTimeout(initTimeout);
            isInitialized = false;
            splitHeading.revert();
        };
    }, {dependencies: [fontsReady]});

    if (size <= 975)
    {
    return (
            <section id="hero-section" className="relative z-0 min-h-[480px] flex flex-col items-center  bg-bg-primary px-8 pt-25 pb-20">
                <div className="absolute inset-0">
                    <img src={heroMobile} alt="" />
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-primary from-30% to-bg-primary/85 bg-blend-hard-light"></div>
                </div>
                <div>
                    <h1 ref={headingRef} className="relative z-10 text-3xl text-slate-400 pb-4"><span className="text-slate-50 font-medium">Do conceito ao lucro:</span> expertise que prepara sua marca para voar alto.</h1>
                    <p ref={paragraphRef} className="text-lg font-normal text-slate-400 pb-8 relative z-10">Soluções em marketing digital, conteúdo estratégico, branding e soluções para negócios que querem crescer com clareza e impacto.</p>
                </div>
                <div ref={buttonRef} className="relative z-10 w-full">
                    <SecondaryButton func={() => window.open("https://wa.link/173tl9", "_blank")} className="border-[var(--color-accent-secondary)] text-slate-200 text-5xl bg-gradient-to-t from-slate-900/40 from-5% to-60% to-bg-primary" text="Vamos Conversar"><i className="fa-solid fa-star text-xl text-[var(--color-accent-secondary)]"></i></SecondaryButton>
                </div>
            </section>  
        )
    }
    else {
        return (
            <section id="hero-section" className="h-[90vh] z-0 flex items-center justify-center px-16 relative">
                <img src={heroDesktop} alt="" className="w-full h-full object-cover absolute inset-0 z-0" />
                <div className="w-full h-full absolute inset-0 z-10 bg-gradient-to-r from-bg-primary from-25% to-70% to-transparent mix-blend-multiply"></div>
                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-16">
                    <div className="relative z-20">
                        <h1 ref={headingDesktopRef} className="relative z-10 text-4xl text-slate-200 pb-8 font-light"><span className="text-accent-secondary font-medium">Do conceito ao lucro:</span> expertise que prepara sua marca para voar alto.</h1>
                        <p ref={paragraphDesktopRef} className=" text-slate-200 pb-12 relative z-10 text-xl font-extralight leading-relaxed">Soluções em marketing digital, conteúdo estratégico, branding e soluções para negócios que querem crescer com clareza e impacto.</p>
                        <div ref={buttonDesktopRef}>
                            <SecondaryButton func={() => window.open("https://wa.link/173tl9", "_blank")} className="border-[var(--color-accent-secondary)] text-slate-200 text-lg bg-gradient-to-t from-slate-900 from-5% to-60% to-bg-primary max-w-[300px] transform hover:scale-101 hover:shadow-2xl transition-all" text="Vamos Conversar">
                                <motion.i variants={{initial: {scale: 1, opacity: 0.7}, hover: {scale: 1.2, opacity: 1}}} transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}  className="fa-solid fa-star text-xl text-[var(--color-accent-secondary)]"></motion.i>
                            </SecondaryButton>
                        </div>
                    </div>
                    <div className="relative z-20">ola</div>
                </div>
            </section> 
        )
    }
    
}

export default Hero