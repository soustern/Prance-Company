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

        gsap.set(firstCardRef.current, {position: "absolute"});
        gsap.set(secondCardRef.current, {position: "absolute"});
        gsap.set(thirdCardRef.current, {position: "absolute"});

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

        return () => {ScrollTrigger.getAll().forEach(trigger => trigger.kill()); split.revert()};
    });

    return (
        <section ref={sectionRef} className="px-4 py-8 bg-slate-800">
            <h2 ref={servicesHeading} className="[will-change: opacity, transform] font-medium text-center text-2xl leading-tight pb-4 text-slate-200">3 pilares essenciais para <br></br> escalar sua marca</h2>
            <p ref={servicesParagraph} className="[will-change: opacity, transform] text-center font-light pb-8 text-slate-300">Não é sorte, é estratégia. Toda marca de sucesso segue uma base sólida. Nossos 3 pilares mostram o caminho para construir autoridade, gerar conexão real e escalar resultados no digital.</p>
            <div className="relative">
                <Card ref={firstCardRef} className="" heading="Branding & Design" paragraph="O segredo para uma marca irresistível começa aqui. Identidade, posicionamento e estética pensados para gerar confiança imediata e conquistar espaço na mente do seu público." icon="pen-nib"></Card>
                <Card ref={secondCardRef} className=" top-10" heading="Conteúdo & Social Media" paragraph="O motor que mantém sua marca em movimento. Estratégias de crescimento aliadas a conteúdo estratégico que conecta, engaja e cria um público fiel." icon="photo-film"></Card>
                <Card ref={thirdCardRef} className=" top-20" heading="Mídia Paga & Performance" paragraph="Não basta ser visto, é preciso converter. Estruturamos campanhas inteligentes que transformam atenção em vendas, com métricas sólidas e foco total em resultados." icon="rocket"></Card>
            </div>
        </section>
    )
}

export default Services;