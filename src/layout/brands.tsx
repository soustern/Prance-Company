import { useEffect, useRef, type JSX } from "react"
import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand2.webp";
import brand3 from "../assets/brand3.webp";
import brand4 from "../assets/brand4.webp";
import brand5 from "../assets/brand5.webp";
import brand6 from "../assets/brand6.webp";
import gsap from "gsap"; 
import PrimaryButton from "../components/PrimaryButton";

const Brands = (): JSX.Element => {
    const brandsHeading = useRef<HTMLHeadingElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;
        
        const images = marquee.querySelectorAll("img");;

        images.forEach(img => {
            const clone = img.cloneNode(true);
            marquee.appendChild(clone);
        });

        const allImages = marquee.querySelectorAll("img");
        const marqueeWidth = marquee.scrollWidth / 2;

        gsap.set(allImages, {x: 0});

        const tl = gsap.timeline({repeat: -1});
        tl.to(allImages, {
            x: -marqueeWidth,
            duration: 40,
            ease: "none",
        });

    }, []);

    // TODO: Create ScrollTrigger Animations
    return (
        <section id="brands-section" className="bg-slate-200 flex flex-col items-center justify-center relative px-4 py-8">
            <h2 ref={brandsHeading} className="[will-change: opacity, transform] font-medium text-center text-2xl leading-tight pb-12 text-[var(--color-bg-primary)] relative z-10">Quem já voou com a Prance:</h2>
            <div className="w-[110%] overflow-x-hidden relative pb-12">
                <div ref={marqueeRef} className="flex [&>img]:w-70 [&>img]:h-70  gap-4 [&>*]:rounded-4xl [&>*]:shadow-xl justify-baseline">
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                    <img src={brand6} alt="" />
                </div>
            </div>
            <PrimaryButton link="https://wa.link/173tl9" text="Vamos conversar"></PrimaryButton>
        </section>
    )
}

export default Brands 