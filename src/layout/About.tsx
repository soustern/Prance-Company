import {  useRef, type JSX } from "react"
import about from "../assets/about.webp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import PrimaryButton from "../components/PrimaryButton";
import aboutUiElement from "../assets/aboutUiElement.svg";
import logoAbout from "../assets/logoAbout.webp";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

interface aboutProps {
    fontsReady: boolean
}
// TODO: Make desktop version
// TODO: Discover why animation is not playing in production


const About = ({fontsReady}: aboutProps): JSX.Element => {
    const iconRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageBlurRef = useRef<HTMLImageElement>(null);
    const aboutHeading = useRef<HTMLHeadingElement>(null);
    const aboutParagraph = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [iconRef, logoRef, backgroundRef, imageRef, imageBlurRef, aboutHeading, aboutParagraph, buttonRef];
        if (refs.some(ref => !ref.current)) return;

        const split = SplitText.create(aboutHeading.current, {
            type: "lines"
        });

        let isInitialized = false;
        
        const initAnimation = () => {
            if (isInitialized) return;
            isInitialized = true;

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
                borderTopLeftRadius: 24, 
                borderTopRightRadius: 24, 
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
        }

        const initTimeout = setTimeout(initAnimation, 50);

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

        const handleLoad = () => ScrollTrigger.refresh();
        document.addEventListener("load", handleLoad);


        return () => {
            clearTimeout(timeoutId);
            clearTimeout(initTimeout);

            isInitialized = false;
            
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
            split.revert();
            document.removeEventListener("load", handleLoad);
        };

    }, {dependencies: [fontsReady]});

    return (
        <section id="about-section" className="bg-[var(--color-bg-primary)] flex flex-col items-center justify-center relative px-10 py-16 scroll-mt-15">
            <div className="absolute flex left-1/2 -top-16 transform -translate-x-1/2 translate-y-[1px] z-10 gap-0 ">
                <img src={aboutUiElement} alt="" className="w-22" />
                <i  ref={iconRef} className="[will-change: opacity] fa-solid fa-arrow-down text-2xl text-[var(--color-bg-primary)] animate-bounce absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                <img ref={logoRef} src={logoAbout} className="[will-change: opacity] w-8 absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
            </div>
            <div ref={backgroundRef} className="[will-change: transform] absolute z-0 inset-0 bg-slate-200 w-full h-full transform origin-center scale-x-80 rounded-t-4xl"></div>
            <div className="relative z-10 pb-8">
                <img  src={about} ref={imageRef} className="[will-change: transform, opacity] max-w-[280px] relative z-10" alt="" />
                <img  src={about} ref={imageBlurRef} className="[will-change: transform, opacity] max-w-[280px] absolute inset-0 z-10 blur-xs" alt="" />
            </div>
            <div>
                <h2 ref={aboutHeading} className="[will-change: transform, opacity] relative z-10 text-[var(--color-bg-primary)] font-medium text-2xl leading-tight pb-4">Mais que Agência, <br></br> sua Consultoria Estratégica!</h2>
                <p ref={aboutParagraph} className="[will-change: transform, opacity] relative z-10 font-light text-[var(--color-bg-primary)] pb-4">Consultoria de marketing digital e branding que transforma a autoridade de empresas em resultados reais através de planejamento, execução e acompanhamento estratégico.</p>
            </div>
            <div className="w-full [will-change: transform, opacity] relative z-50" ref={buttonRef}>
                <PrimaryButton text="Vamos conversar" link="https://wa.link/173tl9" className="pointer-events-auto" ></PrimaryButton>
            </div>
        </section>
    )
}

export default About;