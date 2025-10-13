import { useGSAP } from "@gsap/react";
import { useRef, type JSX } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Card from "../components/Card";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Services = (): JSX.Element => {
    const servicesHeading = useRef<HTMLHeadingElement>(null);
    const servicesParagraph = useRef<HTMLParagraphElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const firstCardRef = useRef<HTMLElement>(null);
    const secondCardRef = useRef<HTMLElement>(null);
    const thirdCardRef = useRef<HTMLElement>(null);

    useGSAP(() => {
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
                scrub: 1,
            }
        })

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
            yPercent: -90,
            duration: 0.3,
        }).to(thirdCardRef.current, {
            yPercent: -180,
            duration: 0.3,
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
    });

    return (
        <section ref={sectionRef} className="px-4 py-8 bg-slate-800">
            <h2 ref={servicesHeading} className="[will-change: opacity, transform] font-medium text-center text-2xl leading-tight pb-4 text-slate-200">3 pilares essenciais para <br></br> escalar sua marca</h2>
            <p ref={servicesParagraph} className="[will-change: opacity, transform] text-center font-light pb-8 text-slate-300">Não é sorte, é estratégia. Toda marca de sucesso segue uma base sólida. Nossos 3 pilares mostram o caminho para construir autoridade, gerar conexão real e escalar resultados no digital.</p>
            <div className="relative min-h-[200vh] cards flex flex-col items-center justify-baseline gap-4">
                <div className="card-wrapper h-full flex flex-col items-center justify-baseline gap-4">
                    <Card ref={firstCardRef} className="z-10 card" heading="Branding & Design" paragraph="O segredo para uma marca irresistível começa aqui. Identidade, posicionamento e estética pensados para gerar confiança imediata e conquistar espaço na mente do seu público." icon="pen-nib"></Card>
                    <Card ref={secondCardRef} className="z-20 card" heading="Conteúdo & Social Media" paragraph="O motor que mantém sua marca em movimento. Estratégias de crescimento aliadas a conteúdo estratégico que conecta, engaja e cria um público fiel." icon="photo-film"></Card>
                    <Card ref={thirdCardRef} className="z-30 card" heading="Mídia Paga & Performance" paragraph="Não basta ser visto, é preciso converter. Estruturamos campanhas inteligentes que transformam atenção em vendas, com métricas sólidas e foco total em resultados." icon="rocket"></Card>
                </div>
            </div>
        </section>
    )
}

export default Services;