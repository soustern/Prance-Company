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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useWindowSize } from "../hooks/useWindowSize";

interface brandsProps {
    fontsReady: boolean
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Brands = ({fontsReady}: brandsProps): JSX.Element => {
    const size = useWindowSize();

    const marqueeRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const marqueeContainerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;

        const refs = [headingRef, marqueeRef];
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

        const split = SplitText.create(headingRef.current, {
            type: "lines"
        });

        let isInitialized = false;
        const initAnimations = () => {
            if (isInitialized) return;
            isInitialized = true;

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

            gsap.from(marqueeContainerRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "40% bottom",
                    end: "center center",
                    scrub: 1,
                }
            });

            gsap.from(buttonRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "center bottom",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });


        }

        const initTimeout = setTimeout(initAnimations, 50);

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

        const onload = () => {
            ScrollTrigger.refresh();
        }

        document.addEventListener("load", onload);

        Promise.all(imagePromises).then(() => {
            const marqueeWidth = marquee.scrollWidth / 2;
            tl.to(allImages, {
                x: -marqueeWidth,
                duration: 23,
                ease: "none",
            });
        });

        return () => {
            tl.kill();
            isInitialized = false;
            clearTimeout(initTimeout);
            split.revert();
            document.removeEventListener("load", onload);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, {dependencies: [fontsReady]});

    if (size < 975)
    {
        return (
            <section ref={sectionRef} id="brands-section" className="bg-slate-200 flex flex-col items-center justify-center relative px-10 py-16 overflow-hidden">
                <div>
                    <h2 ref={headingRef} className="[will-change: opacity, transform] font-medium text-2xl leading-tight pb-12 text-[var(--color-bg-primary)] relative z-10">Quem já voou com a Prance:</h2>
                </div>
                <div ref={marqueeContainerRef} className="w-[150%] overflow-x-hidden relative pb-16">
                    <div ref={marqueeRef} className="flex [&>img]:w-70 [&>img]:h-70  gap-4 [&>*]:rounded-4xl [&>*]:shadow-xl justify-baseline">
                        <img loading="lazy" src={brand1} alt="" />
                        <img loading="lazy" src={brand2} alt="" />
                        <img loading="lazy" src={brand3} alt="" />
                        <img loading="lazy" src={brand4} alt="" />
                        <img loading="lazy" src={brand5} alt="" />
                        <img loading="lazy" src={brand6} alt="" />
                    </div>
                </div>
                <div ref={buttonRef} className="relative z-10 w-full">
                    <PrimaryButton link="https://wa.link/173tl9" text="Vamos conversar"></PrimaryButton>
                </div>
            </section>
        )
    }
    else {
        return (
            <></>
        )
    }
}

export default Brands 