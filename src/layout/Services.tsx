import { useGSAP } from "@gsap/react";
import { useRef, type JSX } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Card from "../components/Card";
import servicesOwner from "../assets/servicesOwner.webp";
import servicesBackground from "../assets/servicesBackground.webp";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Services = (): JSX.Element => {
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

        gsap.set(imageRef.current, { scale: 0.8, force3D: true });
        gsap.set(imageBlurRef.current, { scale: 0.8, force3D: true });

        const split = new SplitText(servicesHeading.current, {type: "lines"});

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
                scrub: true,
            }
        });

        // TODO: Make the timing of this animation better
        gsap.from(servicesParagraph.current, {
            opacity: 0,
            duration: 0.5,
            scale: 0.8,
            ease: "power4.out",
            delay: 0.2,
            scrollTrigger: {
                trigger: servicesHeading.current,
                start: "top 80%",
                end: "top 40%",
                scrub: false,
            }
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card-wrapper",
                start: "-=100px top",
                end: "bottom center",
                scrub: true,
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
                start: "80% center",
                end: "85% center",
                scrub: false,
            }
        });

        gsap.to(imageRef.current, {
            scale: 1,
            stagger: 0.05,
            ease: "power4.out",
            willChange: "transform",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "80% center",
                end: "85% center",
                scrub: false,
            }
        });

         gsap.from(servicesSecondHeading.current, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "power4.out",
            willChange: "transform, opacity",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "87% center",
                end: "91% center",
                scrub: false,
            }
        })

        gsap.from(servicesSecondParagraph.current, {
            opacity: 0,
            stagger: 0.05,
            scale: 0.8,
            willChange: "transform, opacity",
            ease: "power4.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "92% center",
                end: "95% center",
                scrub: false,
            }
        })

        const onLoad = () => {
            ScrollTrigger.refresh();
        };
        
        window.addEventListener("load", onLoad);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
            split?.revert();

            window.removeEventListener("load", onLoad);
        };
    }, {scope: sectionRef});


    // TODO: Fix card animation (I hate myself for having this idea)
    // TODO: Add Links to the cards buttons

    return (
    <section ref={sectionRef} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${servicesBackground})`}} className="  bg-bottom bg-no-repeat z-0 px-4 py-8 bg-slate-800 flex flex-col items-center relative">
            <h2 ref={servicesHeading} className="[will-change: opacity, transform] font-medium text-center text-2xl leading-tight pb-4 text-slate-200 relative z-10">3 pilares essenciais para <br></br> escalar sua marca</h2>
            <p ref={servicesParagraph} className="[will-change: opacity, transform] text-center font-light pb-8 text-slate-300 relative z-10">Não é sorte, é estratégia. Toda marca de sucesso segue uma base sólida. Nossos 3 pilares mostram o caminho para construir autoridade, gerar conexão real e escalar resultados no digital.</p>
            <div className="relative cards flex flex-col mb-8 z-10">
                <div className="card-wrapper flex flex-col h-[120vh] relative items-center">
                    <Card ref={firstCardRef} className="z-10 card" heading="Branding & Design" paragraph="O segredo para uma marca irresistível começa aqui. Identidade, posicionamento e estética pensados para gerar confiança imediata e conquistar espaço na mente do seu público." icon="pen-nib"></Card>
                    <Card ref={secondCardRef} className="z-20 card absolute top-100 opacity-0" heading="Conteúdo & Social Media" paragraph="O motor que mantém sua marca em movimento. Estratégias de crescimento aliadas a conteúdo estratégico que conecta, engaja e cria um público fiel." icon="photo-film"></Card>
                    <Card ref={thirdCardRef} className="z-30 card absolute top-110 opacity-0" heading="Mídia Paga & Performance" paragraph="Não basta ser visto, é preciso converter. Estruturamos campanhas inteligentes que transformam atenção em vendas, com métricas sólidas e foco total em resultados." icon="rocket"></Card>
                </div>
            </div>
            <div className="relative z-10 h-[220px]"></div>
            <div className="relative z-10 pb-8 flex items-center">
                <img loading="lazy" src={servicesOwner} ref={imageRef} className="[will-change: transform, opacity] max-w-[280px] relative z-10" alt="" />
                <img loading="lazy" src={servicesOwner} ref={imageBlurRef} className="[will-change: transform, opacity] max-w-[280px] absolute inset-0 z-10 blur-xs" alt="" />
            </div>
            <h2 ref={servicesSecondHeading}  className="[will-change: opacity, transform] font-medium text-center text-2xl leading-tight pb-4 text-slate-200 relative z-10">Conheça nossa FUNDADORA</h2>
            <p ref={servicesSecondParagraph}  className="[will-change: opacity, transform] text-center font-light pb-8 text-slate-300 relative z-10">Priscila Pavanette é publicitária especialista em campanhas digitais e gestão de mídia. <br></br>
            Liderou projetos para marcas como FAJ Empreendimentos, UNIRP, WebPic, Energy Field, Tyson Burger, Savannah Brand e Luzia Fazzolli, gerando resultados consistentes.<br></br>
            Fundou a Prance Company para transformar marcas em referências no mercado.</p>
        </section>
    )
}

export default Services;