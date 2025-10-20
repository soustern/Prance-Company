import {  useRef, type JSX } from "react"
import about from "../assets/about.png";
import { useGSAP } from "@gsap/react";
import logoAbout from "../assets/logoAbout.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import PrimaryButton from "../components/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


// TODO: Make desktop version

const About = (): JSX.Element => {
    const iconRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageBlurRef = useRef<HTMLImageElement>(null);
    const aboutHeading = useRef<HTMLHeadingElement>(null);
    const aboutParagraph = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(logoRef.current, { opacity: 0});
        gsap.set(imageRef.current, { scale: 0.8, force3D: true });
        gsap.set(imageBlurRef.current, { scale: 0.8, force3D: true });

        gsap.to(iconRef.current, {opacity: 0, 
            duration: 0.5, 
            ease: "power4.out", 
            willChange: "opacity",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "top center",
                end: "+=100 center",
                scrub: 1,
            }
        });

        gsap.to(logoRef.current, {opacity: 1, 
            duration: 0.5,
            ease: "power4.out", 
            willChange: "opacity",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "+=50 center",
                end: "bottom center",
                scrub: 1,
            }
        });

        gsap.to(backgroundRef.current, {
            scaleX: 1, 
            borderRadius: 0, 
            duration: 0.5,
            ease: "power4.out",
            willChange: "transform, opacity",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "+=100 center",
                scrub: 1,
            }
        });

        gsap.to(imageBlurRef.current, {
            scaleX: 1, 
            opacity: 0, 
            duration: 0.5,
            willChange: "transform, opacity",
            ease: "power4.out",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "+=100 center",
                scrub: 1,
            }
        });

        gsap.to(imageRef.current, {
            scale: 1, 
            duration: 0.5, 
            ease: "power4.out",
            willChange: "transform",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "+=100 center",
                scrub: 1,                
            }
        });

        const split = SplitText.create(aboutHeading.current, {
            type: "lines"
        });

        gsap.from(split.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "power4.out",
            willChange: "transform, opacity",
            duration: 0.2,
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top center",
                end: "center center",
                scrub: 1,
            }
        })

        gsap.from(aboutParagraph.current, {
            opacity: 0,
            duration: 0.5,
            scale: 0.8,
            willChange: "transform, opacity",
            ease: "power4.out",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "center center",
                end: "bottom center",
                scrub: 1,
            }
        })

        gsap.from(buttonRef.current, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "power4.out",
            duration: 0.2,
            willChange: "transform, opacity",
            scrollTrigger: {
                trigger: aboutParagraph.current,
                start: "center bottom",
                end: "+=400 bottom",
                scrub: 1,
            }
        })

       if (document.readyState === "complete")
        {
            ScrollTrigger.refresh();
        }
        else {
            document.addEventListener("load", () => {
                ScrollTrigger.refresh();
            })
        }

        const timeoutId = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
            split.revert();

            window.removeEventListener("load", () => ScrollTrigger.refresh());
            clearTimeout(timeoutId);
        };

    }, []);

    return (
        <section className="bg-[var(--color-bg-primary)] flex flex-col items-center justify-center relative px-4 py-8">
            <div className="absolute flex left-1/2 -top-10 transform -translate-x-1/2 translate-y-[1px] z-0 gap-0">
                <div className="bg-slate-200 z-10 h-10 w-10 relative transform translate-x-1.5">
                    <div className="bg-[var(--color-bg-primary)] h-full w-full rounded-br-full absolute inset-0"></div>
                </div>
                <div className="bg-slate-200 z-30 h-10 w-13 rounded-t-full relative">
                    <i ref={iconRef} className="[will-change: opacity] fa-solid fa-arrow-down text-2xl text-[var(--color-bg-primary)] animate-bounce absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                    <img ref={logoRef} src={logoAbout} className="[will-change: opacity] w-8 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
                </div>
                <div className="bg-slate-200 z-10 h-10 w-10 relative transform -translate-x-1.5">
                    <div className="bg-[var(--color-bg-primary)] h-full w-full rounded-bl-full absolute inset-0 "></div>
                </div>
                <div style={{clipPath: 'polygon(4% 100%, 28% 50%, 60% 50%, 100% 100%, 99% 1%, 0% 0%, 0% 100%)'}} className="bg-[var(--color-bg-primary)] z-20 h-10 w-35 absolute inset-0"></div>
            </div>
            <div ref={backgroundRef} className="[will-change: transform] absolute z-0 inset-0 bg-slate-200 w-full h-full transform origin-center scale-x-80 rounded-4xl"></div>
            <div className="relative z-10 pb-8">
                <img loading="lazy" src={about} ref={imageRef} className="[will-change: transform, opacity] max-w-[280px] relative z-10" alt="" />
                <img loading="lazy" src={about} ref={imageBlurRef} className="[will-change: transform, opacity] max-w-[280px] absolute inset-0 z-10 blur-xs" alt="" />
            </div>
            <h2 ref={aboutHeading} className="[will-change: transform, opacity] relative z-10 text-[var(--color-bg-primary)] font-medium text-center text-2xl leading-tight pb-4">Mais que Agência, <br></br> sua Consultoria Estratégica!</h2>
            <p ref={aboutParagraph} className="[will-change: transform, opacity] relative z-10 text-center font-light text-[var(--color-bg-primary)] pb-4">Consultoria de marketing digital e branding que transforma a autoridade de empresas em resultados reais através de planejamento, execução e acompanhamento estratégico.</p>
            <div className="w-full [will-change: transform, opacity] relative z-50" ref={buttonRef}>
                <PrimaryButton text="Vamos conversar" className="pointer-events-auto" ></PrimaryButton>
            </div>
        </section>
    )
}

export default About;