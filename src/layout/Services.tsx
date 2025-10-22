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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

interface servicesProps {
    fontsReady: boolean
}

const Services = ({fontsReady}: servicesProps): JSX.Element => {
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
                top: 42,
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
                    start: "65% center",
                    end: "75% center",
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
                    start: "65% center",
                    end: "75% center",
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
                    end: "bottom center",
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
                    <Card ref={thirdCardRef} className="z-30 card absolute top-110 opacity-0" heading="Mídia Paga & Performance" paragraph="Não basta ser visto, é preciso converter. Estruturamos campanhas inteligentes que transformam atenção em vendas, com métricas sólidas e foco total em resultados." image={card3}></Card>
                </div>
            </div>
            <div className="relative z-10 h-[220px]"></div>
            <div className="relative z-10 pb-8 flex items-center">
                <img src={servicesOwner} ref={imageRef} className="[will-change: transform, opacity] max-w-[300px] relative z-10" alt="" />
                <img src={servicesOwner} ref={imageBlurRef} className="[will-change: transform, opacity] max-w-[300px] absolute inset-0 z-10 blur-xs" alt="" />
            </div>
            <div className="relative">
                <h2 ref={servicesSecondHeading}  className="[will-change: opacity, transform] font-medium  text-2xl leading-tight pb-4 text-slate-200 relative z-10">Conheça nossa FUNDADORA</h2>
                <p ref={servicesSecondParagraph}  className="[will-change: opacity, transform]  font-light text-slate-300 relative z-10">Priscila Pavanette é publicitária especialista em campanhas digitais e gestão de mídia. <br></br>
                Liderou projetos para marcas como FAJ Empreendimentos, UNIRP, WebPic, Energy Field, Tyson Burger, Savannah Brand e Luzia Fazzolli, gerando resultados consistentes.<br></br>
                Fundou a Prance Company para transformar marcas em referências no mercado.</p>
                <div className="absolute inset-0 z-0 w-[120%] h-full bg-gradient-to-t from-[#0d1824] to-transparent"></div>
            </div>
        </section>
    )
}

export default Services;