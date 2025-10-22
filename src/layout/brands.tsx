import { useRef, type JSX } from "react"
import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand2.webp";
import brand3 from "../assets/brand3.webp";
import brand4 from "../assets/brand4.webp";
import brand5 from "../assets/brand5.webp";
import brand6 from "../assets/brand6.webp";
import gsap from "gsap"; 
import PrimaryButton from "../components/PrimaryButton";
import { useGSAP } from "@gsap/react";

interface brandsProps {
    fontsReady: boolean
}

const Brands = ({fontsReady}: brandsProps): JSX.Element => {
    const brandsHeading = useRef<HTMLHeadingElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [brandsHeading, marqueeRef];
        if (refs.some(ref => !ref.current)) return;

        const marquee = marqueeRef.current;
        if (!marquee) return;
        
        const images = marquee.querySelectorAll("img");;
        images.forEach(img => {
            const clone = img.cloneNode(true);
            marquee.appendChild(clone);
        });

        
        const allImages = marquee.querySelectorAll("img");
        gsap.set(allImages, {x: 0});
        const tl = gsap.timeline({repeat: -1});

        const imagePromises = [...allImages].map(img => 
            new Promise(resolve => {
                if (img.complete) {
                    resolve(true);
                } else {
                    img.onload = resolve;
                }
            })
        );

        Promise.all(imagePromises).then(() => {
            const marqueeWidth = marquee.scrollWidth / 2;
            tl.to(allImages, {
                x: -marqueeWidth,
                duration: 23,
                ease: "none",
            });
        });

    }, {dependencies: [fontsReady]});

    // TODO: Create ScrollTrigger Animations
    return (
        <section id="brands-section" className="bg-slate-200 flex flex-col items-center justify-center relative px-10 py-16 rounded-4xl overflow-hidden">
            <div>
                <h2 ref={brandsHeading} className="[will-change: opacity, transform] font-medium text-2xl leading-tight pb-12 text-[var(--color-bg-primary)] relative z-10">Quem já voou com a Prance:</h2>
            </div>
            <div className="w-[150%] overflow-x-hidden relative pb-12">
                <div ref={marqueeRef} className="flex [&>img]:w-70 [&>img]:h-70  gap-4 [&>*]:rounded-4xl [&>*]:shadow-xl justify-baseline">
                    <img loading="lazy" src={brand1} alt="" />
                    <img loading="lazy" src={brand2} alt="" />
                    <img loading="lazy" src={brand3} alt="" />
                    <img loading="lazy" src={brand4} alt="" />
                    <img loading="lazy" src={brand5} alt="" />
                    <img loading="lazy" src={brand6} alt="" />
                </div>
            </div>
            <PrimaryButton link="https://wa.link/173tl9" text="Vamos conversar"></PrimaryButton>
        </section>
    )
}

export default Brands 