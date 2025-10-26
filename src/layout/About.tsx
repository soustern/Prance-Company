import {  useRef, type JSX } from "react"
import about from "../assets/about.webp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import PrimaryButton from "../components/PrimaryButton";
import aboutUiElement from "../assets/aboutUiElement.svg";
import logoAbout from "../assets/logoAbout.webp";
import { useWindowSize } from "../hooks/useWindowSize";
import { FaArrowDown } from 'react-icons/fa';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

interface aboutProps {
    fontsReady: boolean
}


const About = ({fontsReady}: aboutProps): JSX.Element => {
    const size = useWindowSize();

    const iconRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageBlurRef = useRef<HTMLImageElement>(null);
    const aboutHeading = useRef<HTMLHeadingElement>(null);
    const aboutParagraph = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const headingDesktopRef = useRef<HTMLHeadingElement>(null);
    const paragraphDesktopRef = useRef<HTMLParagraphElement>(null);
    const buttonDesktopRef = useRef<HTMLDivElement>(null);
    const imageDesktopRef = useRef<HTMLImageElement>(null);
    const sectionDesktopRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [iconRef, logoRef, backgroundRef, imageRef, imageBlurRef, aboutHeading, aboutParagraph, buttonRef];
        if (refs.some(ref => !ref.current)) return;

        const split = SplitText.create(aboutHeading.current, {
            type: "lines"
        });

        const splitParagraph = SplitText.create(aboutParagraph.current, {
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
                    scrub: 0.5,
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
                    scrub: 0.5,
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
                    scrub: 0.5,
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
                    scrub: 0.5,
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
                    scrub: 0.5,                
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
                    scrub: 0.5,
                }
            })

            gsap.from(splitParagraph.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                willChange: "transform, opacity",
                duration: 0.2,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "center center",
                    end: "bottom center",
                    scrub: 0.5,
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
                    trigger: backgroundRef.current,
                    start: "90% bottom",
                    end: "100% bottom",
                    scrub: 0.5,
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
            splitParagraph.revert();
            document.removeEventListener("load", handleLoad);
        };

    }, {dependencies: [fontsReady]});

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [headingDesktopRef, paragraphDesktopRef, buttonDesktopRef, imageDesktopRef, sectionDesktopRef];
        if (refs.some(ref => !ref.current)) return;

        const splitHeading = SplitText.create(headingDesktopRef.current, {
            type: "lines"
        });

        const splitParagraph = SplitText.create(paragraphDesktopRef.current, {
            type: "lines"
        });

        let isInitialized = false;
        const initAnimations = () => {
            if (isInitialized) return;
            isInitialized = true;

            gsap.from(splitHeading.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    start: "40% bottom",
                    end: "60% bottom",
                    scrub: 0.5,
                }
            });

            gsap.from(splitParagraph.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    start: "50% bottom",
                    end: "90% bottom",
                    scrub: 0.5,
                }
            });

            gsap.from(buttonDesktopRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    start: "80% bottom",
                    end: "100% bottom",
                    scrub: 0.5,
                }
            });

            gsap.from(imageDesktopRef.current, {
                x: -100,
                opacity: 0,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    start: "40% bottom",
                    end: "60% center",
                    scrub: 0.5,
                }
            });
        }

        const initTimeout = setTimeout(initAnimations, 50);

        const onload = () => ScrollTrigger.refresh();
        window.addEventListener("load", onload);

        return () => {
            splitHeading.revert();
            splitParagraph.revert();
            isInitialized = false;
            clearTimeout(initTimeout);
            window.removeEventListener("load", onload);
            ScrollTrigger.killAll();
        };

    }, {dependencies: [fontsReady]});

    if (size <= 975)
    {
        return (
            <section id="about-section" className="bg-[var(--color-bg-primary)] flex flex-col items-center justify-center relative px-10 py-16 scroll-mt-15">
                <div className="absolute flex left-1/2 -top-16 transform -translate-x-1/2 translate-y-[1px] z-10 gap-0 ">
                    <img fetchPriority="high"  alt="elemento decorativo" src={aboutUiElement} className="w-22" />
                    <div ref={iconRef}>
                        <FaArrowDown className="[will-change: opacity] fa-solid fa-arrow-down text-2xl text-[var(--color-bg-primary)] animate-bounce absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </div>
                    <img fetchPriority="high"  alt="logo da empresa" ref={logoRef} src={logoAbout} className="[will-change: opacity] w-8 absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
                </div>
                <div ref={backgroundRef} className="[will-change: transform] absolute z-0 inset-0 bg-slate-200 w-full h-full transform origin-center scale-x-80 rounded-t-4xl"></div>
                <div className="relative z-10 pb-8">
                    <img fetchPriority="high" alt="Imagem de um passaro voando com os dizeres: Parceria de alto Nivel. Seus Voos mais altos."  src={about} ref={imageRef} className="[will-change: transform, opacity] max-w-[300px] relative z-10"  />
                    <img fetchPriority="high"  alt="Imagem borrada de um passaro voando com os dizeres: Parceria de alto Nivel. Seus Voos mais altos."  src={about} ref={imageBlurRef} className="[will-change: transform, opacity] max-w-[300px] absolute inset-0 z-10 blur-xs"  />
                </div>
                <div>
                    <h2 ref={aboutHeading} className="[will-change: transform, opacity] relative z-10 text-slate-800 font-medium text-2xl leading-tight pb-4">Mais que Agência, <br></br> sua Consultoria Estratégica!</h2>
                    <p ref={aboutParagraph} className="[will-change: transform, opacity] relative z-10 font-light text-slate-700 pb-8">Consultoria de marketing digital e branding que transforma a autoridade de empresas em resultados reais através de planejamento, execução e acompanhamento estratégico.</p>
                </div>
                <div className="w-full [will-change: transform, opacity] relative z-50" ref={buttonRef}>
                    <PrimaryButton ariaLabel="Abrir o WhatsApp da empresa" text="Vamos conversar" link="https://wa.link/173tl9" className="pointer-events-auto" ></PrimaryButton>
                </div>
            </section>
        )
    }
    else {
        return (
            <section id="about-section" ref={sectionDesktopRef} className="py-24 z-0 flex items-center justify-center px-16 relative bg-slate-200 scroll-mt-50">
                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-16 items-center">
                    <div className="relative z-20 flex items-center justify-baseline">
                        <img alt="Imagem de um passaro voando com os dizeres: Parceria de alto Nivel. Seus Voos mais altos." loading="lazy" decoding="async" ref={imageDesktopRef} src={about}  className="w-[500px]" />
                    </div>
                    <div className="relative z-20">
                        <h1 ref={headingDesktopRef} className="relative z-10 text-4xl text-slate-800 pb-8 font-light">Mais que Agência, <br></br> sua
                        Consultoria Estratégica.</h1>
                        <p ref={paragraphDesktopRef} className=" text-slate-700 pb-12 relative z-10 text-xl font-extralight leading-relaxed">Somos uma consultoria especializada em fornecer serviços de alto nível em marketing digital e branding para empresas que visam melhorar seu posicionamento e alcançar novos voos.
                        <br></br><br></br>Planejamento completo, execução inteligente e acompanhamento contínuo para transformar autoridade em resultados reais.</p>
                        <div ref={buttonDesktopRef} className="w-full">
                            <PrimaryButton ariaLabel="Abrir o WhatsApp da empresa" text="Vamos conversar" link="https://wa.link/173tl9" className="max-w-[250px]" ></PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default About;