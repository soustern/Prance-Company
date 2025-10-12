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

    useGSAP(() => {
        const split = SplitText.create(servicesHeading.current, {type: "lines"});
        gsap.from(split.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "power4.out",
            duration: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "top center",
                scrub: true,
            }
        })


        // TODO: Make the timing of this animation better
        gsap.from(servicesParagraph.current, {
            opacity: 0,
            duration: 0.5,
            scale: 0.8,
            ease: "power4.out",
            scrollTrigger: {
                trigger: servicesHeading.current,
                start: "top bottom",
                end: "+=700 bottom",
                scrub: true,
            }
        })
    });

    return (
        <section ref={sectionRef} className="px-4 py-8 bg-slate-800">
            <h2 ref={servicesHeading} className="font-medium text-center text-2xl leading-tight pb-4 text-slate-200">3 pilares essenciais para <br></br> escalar sua marca</h2>
            <p ref={servicesParagraph} className="text-center font-light pb-8 text-slate-300">Não é sorte, é estratégia. Toda marca de sucesso segue uma base sólida. Nossos 3 pilares mostram o caminho para construir autoridade, gerar conexão real e escalar resultados no digital.</p>
            <div>
                <Card heading="Branding & Design" paragraph="O segredo para uma marca irresistível começa aqui. Identidade, posicionamento e estética pensados para gerar confiança imediata e conquistar espaço na mente do seu público." icon="pen-nib"></Card>
            </div>
        </section>
    )
}

export default Services;