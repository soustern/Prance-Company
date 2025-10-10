import { useRef, type JSX } from "react"
import about from "../assets/about.png";
import { useGSAP } from "@gsap/react";
import logoAbout from "../assets/logoAbout.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// TODO: Make desktop version

const About = (): JSX.Element => {
    const iconRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageBlurRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.set(logoRef.current, { opacity: 0 });
        gsap.set(imageRef.current, { scale: 0.8 });
        gsap.set(imageBlurRef.current, { scale: 0.8 });

        gsap.to(iconRef.current, {opacity: 0, duration: 0.5, 
            scrollTrigger: {
                trigger: iconRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: true,
                toggleActions: "play none none reverse",
            }
        });

        gsap.to(logoRef.current, {opacity: 1, duration: 0.5,
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "bottom center",
                scrub: true,
                markers: true,
                toggleActions: "play none none reverse",
            }
        });

        gsap.to(backgroundRef.current, {scaleX: 1, borderRadius: 0, duration: 0.5,
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "+=100 center",
                scrub: true,
                markers: true,
                toggleActions: "play none none reverse",
            }
        });

        gsap.to(imageBlurRef.current, {scaleX: 1, opacity: 0, duration: 0.5,
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "+=100 center",
                scrub: true,
                markers: true,
                toggleActions: "play none none reverse",
            }
        });

        gsap.to(imageRef.current, {scale: 1, duration: 0.5,
            scrollTrigger: {
                trigger: iconRef.current,
                start: "center center",
                end: "+=100 center",
                scrub: true,
                markers: true,
                toggleActions: "play none none reverse",
            }
        });

    }, []);

    return (
        <section className="bg-[var(--color-bg-primary)] flex flex-col items-center justify-center relative px-4 pt-15">
            <div className="absolute flex left-1/2 -top-10 transform -translate-x-1/2 z-0 gap-0">
                <div className="bg-slate-50 z-10 h-10 w-10 relative transform translate-x-1.5">
                    <div className="bg-[var(--color-bg-primary)] h-full w-full rounded-br-full absolute inset-0"></div>
                </div>
                <div className="bg-slate-50 z-30 h-10 w-13 rounded-t-full relative">
                    <i ref={iconRef} className="fa-solid fa-arrow-down text-2xl text-slate-800 animate-bounce absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                    <img ref={logoRef} src={logoAbout} className="w-8 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
                </div>
                <div className="bg-slate-50 z-10 h-10 w-10 relative transform -translate-x-1.5">
                    <div className="bg-[var(--color-bg-primary)] h-full w-full rounded-bl-full absolute inset-0 "></div>
                </div>
                <div className="bg-[var(--color-bg-primary)] z-20 h-5 w-35 absolute inset-0"></div>
            </div>
            <div ref={backgroundRef} className="absolute z-0 inset-0 bg-slate-50 w-full h-full transform origin-center scale-x-80 rounded-xl"></div>
            <div className="relative z-10 pb-6">
                <img src={about} ref={imageRef} className="max-w-[250px] relative z-10" alt="" />
                <img src={about} ref={imageBlurRef} className="max-w-[250px] absolute inset-0 z-10 blur-xs" alt="" />
            </div>
            <h2 className="relative z-10 text-slate-800 text-normal text-center text-2xl leading-tight pb-4">Mais que Agência, <br></br> sua Consultoria Estratégica.</h2>
        </section>
    )
}

export default About;