import { useGSAP } from "@gsap/react";
import { useRef, type JSX } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Card from "../components/Card";
import servicesOwner from "../assets/servicesOwner.webp";
import servicesBackground from "../assets/servicesBackground.webp";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import { useWindowSize } from "../hooks/useWindowSize";
import PrimaryButton from "../components/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

interface servicesProps {
    fontsReady: boolean
}

const Services = ({fontsReady}: servicesProps): JSX.Element => {
    const size = useWindowSize();

    const servicesHeading = useRef<HTMLHeadingElement>(null);
    const servicesParagraph = useRef<HTMLParagraphElement>(null);
    const servicesSecondHeading = useRef<HTMLHeadingElement>(null);
    const servicesSecondParagraph = useRef<HTMLParagraphElement>(null);
    
    const sectionRef = useRef<HTMLElement>(null);
    const firstCardRef = useRef<HTMLElement>(null);
    const secondCardRef = useRef<HTMLElement>(null);
    const thirdCardRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageBlurRef = useRef<HTMLImageElement>(null);
    const buttonMobileRef = useRef<HTMLDivElement>(null);

    const buttonDesktopRef = useRef<HTMLDivElement>(null);
    const headingDesktopRef = useRef<HTMLHeadingElement>(null);
    const paragraphDesktopRef = useRef<HTMLParagraphElement>(null);
    
    const secondHeadingDesktopRef = useRef<HTMLHeadingElement>(null);
    const secondFirstHalfParagraphDesktopRef = useRef<HTMLParagraphElement>(null);
    const secondSecondHalfParagraphDesktopRef = useRef<HTMLParagraphElement>(null);
  
    const sectionDesktopRef = useRef<HTMLElement>(null);
    
    const firstCardDesktopRef = useRef<HTMLElement>(null);
    const secondCardDesktopRef = useRef<HTMLElement>(null);
    const thirdCardDesktopRef = useRef<HTMLElement>(null);
    
    const imageDesktopRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [servicesHeading, servicesParagraph, servicesSecondHeading, servicesSecondParagraph, sectionRef, firstCardRef, secondCardRef, thirdCardRef, imageRef, imageBlurRef];
        if (refs.some(ref => !ref.current)) return;

        const split = new SplitText(servicesHeading.current, {type: "lines"});
        const splitParagraph = new SplitText(servicesParagraph.current, {type: "lines"});
        const secondHeadingSplit = new SplitText(servicesSecondHeading.current, {type: "lines"});
        const secondParagraphSplit = new SplitText(servicesSecondParagraph.current, {type: "lines"});

        let isInitialized = false;

        const initAnimations = () => {
            if (isInitialized) return;
            isInitialized = true;

            gsap.set(imageRef.current, { scale: 0.8, force3D: true });
            gsap.set(imageBlurRef.current, { scale: 0.8, force3D: true });

            gsap.from(split.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1,
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
                    trigger: servicesHeading.current,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 1,
                }
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".card-wrapper",
                    start: "-=100px top",
                    end: "bottom center",
                    scrub: 1,
                    pin: true,
                }
            });

            tl.to(secondCardRef.current, {
                willChange: "transform, opacity",
                top: 20,
                duration: 0.2,
                opacity: 1
            }).to(thirdCardRef.current, {
                willChange: "transform, opacity",
                top: 40,
                duration: 0.2,
                opacity: 1
            })

            gsap.to(imageBlurRef.current, {
                scaleX: 1, 
                opacity: 0, 
                stagger: 0.05,
                willChange: "transform, opacity",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "55% center",
                    end: "65% center",
                    scrub: 1,
                }
            });

            gsap.to(imageRef.current, {
                scale: 1,
                stagger: 0.05,
                ease: "power4.out",
                willChange: "transform",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "55% center",
                    end: "65% center",
                    scrub: 1,
                }
            });

            gsap.from(secondHeadingSplit.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top center",
                    end: "center center",
                    scrub: 1,
                }
            })

            gsap.from(secondParagraphSplit.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "center center",
                    end: "150% center",
                    scrub: 1,
                }
            })

            gsap.from(buttonMobileRef.current, {
                y: 100,
                opacity: 0,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "95% bottom",
                    end: "110% bottom",
                    scrub: 1,
                }
            })
        }

        const initTimeout = setTimeout(initAnimations, 50);

        const onLoad = () => {
            ScrollTrigger.refresh();
        };
        
        window.addEventListener("load", onLoad);

        return () => {
            clearTimeout(initTimeout);
            isInitialized = false;

            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
            
            split.revert();
            splitParagraph.revert();
            secondHeadingSplit.revert();
            secondParagraphSplit.revert();

            window.removeEventListener("load", onLoad);
        };
    }, {scope: sectionRef, dependencies: [fontsReady]});

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [buttonDesktopRef, headingDesktopRef, paragraphDesktopRef, secondHeadingDesktopRef, secondFirstHalfParagraphDesktopRef, secondSecondHalfParagraphDesktopRef, sectionDesktopRef, firstCardDesktopRef, secondCardDesktopRef, thirdCardDesktopRef];
        if (refs.some(ref => !ref.current)) return;

        const splitHeading = new SplitText(headingDesktopRef.current, {type: "lines"});
        const splitParagraph = new SplitText(paragraphDesktopRef.current, {type: "lines"});
        const splitSecondHeading = new SplitText(secondHeadingDesktopRef.current, {type: "lines"});
        const splitSecondParagraphFirstHalf = new SplitText(secondFirstHalfParagraphDesktopRef.current, {type: "lines"});
        const splitSecondParagraphSecondHalf = new SplitText(secondSecondHalfParagraphDesktopRef.current, {type: "lines"});

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
                    start: "top bottom",
                    end: "25% bottom",
                    scrub: 1,
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
                    start: "10% bottom",
                    end: "30% bottom",
                    scrub: 1,
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    scrub: 1,
                    start: "20% bottom",
                    end: "65% bottom",
                }
            })

            tl.from(firstCardDesktopRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
            }).from(secondCardDesktopRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
            }).from(thirdCardDesktopRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
            });

            gsap.from(splitSecondHeading.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    scrub: 1,
                    start: "60% bottom",
                    end: "70% bottom",
                }
            });

            gsap.from(splitSecondParagraphFirstHalf.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    scrub: 1,
                    start: "65% bottom",
                    end: "80% bottom",
                }
            });

            gsap.from(splitSecondParagraphSecondHalf.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    scrub: 1,
                    start: "75% bottom",
                    end: "100% bottom",
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
                    scrub: 1,
                    start: "90% bottom",
                    end: "100% bottom",
                }
            });

            gsap.from(imageDesktopRef.current, {
                x: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionDesktopRef.current,
                    scrub: 1,
                    start: "70% bottom",
                    end: "130% bottom",
                }
            });

        }

        const initTimeout = setTimeout(initAnimations, 50);

        const onLoad = () => {
            ScrollTrigger.refresh();
        };
        
        window.addEventListener("load", onLoad);

        return () => {
            splitHeading.revert();
            splitParagraph.revert();
            splitSecondHeading.revert();
            splitSecondParagraphFirstHalf.revert();
            splitSecondParagraphSecondHalf.revert();

            ScrollTrigger.killAll();

            clearTimeout(initTimeout);
            window.removeEventListener("load", onLoad);

            isInitialized = false;
        };
    }, {dependencies: [fontsReady]});


    if (size < 975)
    {
        return (
            <section id="services-section" ref={sectionRef} style={{backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.7), rgba(15, 23, 43, 0.6)), url(${servicesBackground})`}} className="  bg-bottom bg-no-repeat z-0 px-10 py-16  flex flex-col items-center relative scroll-mt-20 overflow-hidden">
                <div>
                    <h2 ref={servicesHeading} className="[will-change: opacity, transform] font-medium text-2xl leading-tight pb-4 text-slate-200 relative z-10">3 pilares essenciais para <br></br> escalar sua marca</h2>
                    <p ref={servicesParagraph} className="[will-change: opacity, transform] font-light pb-8 text-slate-300 relative z-10">Não é sorte, é estratégia. Toda marca de sucesso segue uma base sólida. Nossos 3 pilares mostram o caminho para construir autoridade, gerar conexão real e escalar resultados no digital.</p>
                </div>
                <div className="relative cards flex flex-col mb-23 z-10">
                    <div className="card-wrapper flex flex-col h-[120vh] relative items-center pointer-events-none">
                        <Card ref={firstCardRef} className="z-10 card" heading="Branding & Design" paragraph="O segredo para uma marca irresistível começa aqui. Identidade, posicionamento e estética pensados para gerar confiança imediata e conquistar espaço na mente do seu público." image={card1}></Card>
                        <Card ref={secondCardRef} className="z-20 card absolute top-100 opacity-0" heading="Conteúdo & Social Media" paragraph="O motor que mantém sua marca em movimento. Estratégias de crescimento aliadas a conteúdo estratégico que conecta, engaja e cria um público fiel." image={card2}></Card>
                        <Card ref={thirdCardRef} className="z-30 card absolute top-120 opacity-0" heading="Mídia Paga & Performance" paragraph="Não basta ser visto, é preciso converter. Estruturamos campanhas inteligentes que transformam atenção em vendas, com métricas sólidas e foco total em resultados." image={card3}></Card>
                    </div>
                </div>
                <div className="relative z-10 h-[220px]"></div>
                <div className="relative z-10 pb-8 flex items-center">
                    <img src={servicesOwner} ref={imageRef} className="[will-change: transform, opacity] max-w-[300px] relative z-10" alt="" />
                    <img src={servicesOwner} ref={imageBlurRef} className="[will-change: transform, opacity] max-w-[300px] absolute inset-0 z-10 blur-xs" alt="" />
                </div>
                <div className="relative">
                    <h2 ref={servicesSecondHeading}  className="[will-change: opacity, transform] font-medium  text-2xl leading-tight pb-4 text-slate-200 relative z-10">Conheça nossa FUNDADORA</h2>
                    <p ref={servicesSecondParagraph}  className="[will-change: opacity, transform]  font-light text-slate-300 relative z-10 pb-8">Priscila Pavanette é publicitária especialista em campanhas digitais e gestão de mídia. <br></br>
                    Liderou projetos para marcas como FAJ Empreendimentos, UNIRP, WebPic, Energy Field, Tyson Burger, Savannah Brand e Luzia Fazzolli, gerando resultados consistentes.<br></br>
                    Fundou a Prance Company para transformar marcas em referências no mercado.</p>
                    <div className="absolute inset-0 z-0 w-[120%] h-full bg-gradient-to-t from-[#0d1824] to-transparent"></div>
                    <div className="w-full [will-change: transform, opacity] relative z-50" ref={buttonMobileRef}>
                        <PrimaryButton text="Vamos conversar" link="https://wa.link/173tl9" className="pointer-events-auto" ></PrimaryButton>
                    </div>
                </div>
            </section>
        )
    
    }
    else {
        return (
            <section ref={sectionDesktopRef} id="hero-section" style={{backgroundImage: `linear-gradient(to top,rgba(15, 23, 43, 0.7), rgba(15, 23, 43, 0.6)), url(${servicesBackground})`}} className="py-24 z-0 flex flex-col items-center justify-center px-16 relative object-fill bg-no-repeat bg-fit bg-center bg-[#0b1516] gap-20">
                <div className="relative z-20 w-full max-w-[1200px] flex items-center justify-center flex-col">
                    <h1 ref={headingDesktopRef} className="relative z-10 text-4xl text-slate-300 pb-8 font-light text-center">3 pilares essenciais para escalar sua marca</h1>
                    <p ref={paragraphDesktopRef}  className=" text-slate-400 relative z-10 text-xl font-extralight leading-relaxed text-center">Não é sorte, é estratégia. Toda marca de sucesso segue uma base sólida. Nossos 3 pilares mostram o caminho para construir autoridade, gerar conexão real e escalar resultados no digital.</p>
                </div>
                <div className="flex justify-between w-full max-w-[1200px]">
                    <Card ref={firstCardDesktopRef} className="z-10 card" heading="Branding & Design" paragraph="O segredo para uma marca irresistível começa aqui. Identidade, posicionamento e estética pensados para gerar confiança imediata e conquistar espaço na mente do seu público." image={card1}></Card>
                    <Card ref={secondCardDesktopRef} className="z-20 card" heading="Conteúdo & Social Media" paragraph="O motor que mantém sua marca em movimento. Estratégias de crescimento aliadas a conteúdo estratégico que conecta, engaja e cria um público fiel." image={card2}></Card>
                    <Card ref={thirdCardDesktopRef} className="z-30 card" heading="Mídia Paga & Performance" paragraph="Não basta ser visto, é preciso converter. Estruturamos campanhas inteligentes que transformam atenção em vendas, com métricas sólidas e foco total em resultados." image={card3}></Card>
                </div>
                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-16 items-center mt-20">
                    <div className="relative z-20">
                        <h1 ref={secondHeadingDesktopRef} className="relative z-10 text-4xl text-slate-300 pb-8 font-light">Conheça nossa FUNDADORA.</h1>
                        <p ref={secondFirstHalfParagraphDesktopRef} className=" text-slate-400 relative z-10 text-xl font-extralight leading-relaxed">
                            Priscila Pavanette é publicitária, especialista em campanhas digitais, gestão de mídia paga e orgânica. Já liderou projetos que geraram resultados concretos e crescimento consistente para diversas marcas.
                        </p>
                        <p ref={secondSecondHalfParagraphDesktopRef} className=" text-slate-400 pb-12 relative z-10 text-xl font-extralight leading-relaxed mt-4">
                            Atua com estratégias de marketing digital, branding e produção de conteúdo de alto impacto para empresas de diferentes segmentos.
                            Ao longo da carreira, colaborou com empresas como FAJ Empreendimentos, UNIRP, WebPic, Energy Field, Tyson Burger, Savannah Brand e Luzia Fazzolli. Mais tarde, fundou a Prance Company, unindo toda sua expertise para transformar marcas em referências no mercado.
                        </p>
                        <div ref={buttonDesktopRef}>
                            <PrimaryButton text="Vamos conversar" link="https://wa.link/173tl9" className="max-w-[250px]" ></PrimaryButton>
                        </div>
                    </div>
                    <div ref={imageDesktopRef} className="relative z-20 flex items-center justify-end">
                        <img src={servicesOwner} alt="" className="w-[500px]" />
                    </div>
                </div>
            </section> 
        )
    }   
    
}

export default Services;