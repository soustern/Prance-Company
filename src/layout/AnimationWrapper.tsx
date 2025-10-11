import { useRef, type JSX } from "react"
import logo from "../assets/logo.webp"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const AnimationWrapper = (): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.to(wrapperRef.current, {scaleY: 0, transformOrigin: "bottom", delay: 2.5, duration: 0.5, ease: "power4.out"});
        const tl = gsap.timeline();

        tl.from(logoRef.current, {opacity: 0, scale: 0.5, duration: 1, ease: "power4.out"}).to(logoRef.current, {opacity: 1, scale: 1, duration: 1.2, ease: "power4.out"}).to(logoRef.current, {opacity: 0, scale: 0.5, duration: 0.5, ease: "power4.out"});
    });

    return (
        <div ref={wrapperRef} className="z-100 fixed inset-0 h-screen w-screen bg-[var(--color-bg-primary)] flex items-center justify-center pointer-events-none">
            <img ref={logoRef} src={logo} alt="Prance Logo" />
        </div>
    )
}

export default AnimationWrapper