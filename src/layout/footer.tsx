import { useRef, type JSX } from "react"
import PrimaryButton from "../components/PrimaryButton"
import { motion } from "motion/react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useWindowSize } from "../hooks/useWindowSize"

gsap.registerPlugin(ScrollTrigger);

interface footerProps {
    fontsReady: boolean
}

const Footer = ({fontsReady}: footerProps): JSX.Element => {
    const size = useWindowSize();

    const whatsappRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!fontsReady) return;
        
        const refs = [whatsappRef, emailRef, locationRef, buttonRef, sectionRef];
        if (refs.some(ref => !ref.current)) return;

        let isInitialized = false;
        const initAnimation = () => {
            if (isInitialized) return;
            isInitialized = true;

            gsap.from(whatsappRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "20% bottom",
                    end: "40% bottom",
                    scrub: 1,
                }
            });
            gsap.from(emailRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "40% bottom",
                    end: "60% bottom",
                    scrub: 1,
                }
            });
            gsap.from(locationRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                duration: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "60% bottom",
                    end: "80% bottom",
                    scrub: 1,
                }
            });

            gsap.from(buttonRef.current?.querySelectorAll(`div`) ?? [], {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                ease: "power4.out",
                force3D: true,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "80% bottom",
                    end: "100% bottom",
                    scrub: 1,
                }
            });
        }

        const initTimeout = setTimeout(initAnimation, 50);

        const onload = () => {
            ScrollTrigger.refresh();
        }

        document.addEventListener("load", onload);

        return () => {
            document.removeEventListener("load", onload);
            ScrollTrigger.killAll();
            isInitialized = false;
            clearTimeout(initTimeout);
        }
    }, {dependencies: [fontsReady]})

    if (size < 975)
    {
        return (
            <section ref={sectionRef} id="footer-section" style={{clipPath: `polygon(0 0%, 100% 15%, 100% 100%, 0% 100%)`}} className="flex flex-col justify-center items-center relative px-8 py-16 pt-26 bg-gradient-to-tl from-slate-900 to-bg-primary to-60% -mt-31">
                <div className="flex flex-col gap-4 pb-4 items-center">
                    <div className="w-full" ref={whatsappRef}>
                        <motion.a  whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="https://wa.link/173tl9" target="_blank" className="flex gap-2 items-baseline text-xl origin-left">
                            <i className="fa-brands fa-whatsapp [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                            <p className="[will-change: opacity, transform] text-light text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1">17 99155 2417</p>
                        </motion.a>
                    </div>
                    <div className="w-full" ref={emailRef}>
                        <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="mailto:contato@prancecompany.com?subject=Olá, gostaria de saber mais sobre a consultoria estratégica." target="_blank" className="flex gap-2 items-baseline text-xl origin-left">
                            <i className="fa-regular fa-envelope [will-change: opacity, transform] text-light font-light text-accent-primary relative z-10"></i>
                            <p className="[will-change: opacity, transform] text-light text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 ">contato@prancecompany.com</p>
                        </motion.a>
                    </div>
                    <div className="w-full" ref={locationRef}>
                        <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+do+Rio+Preto,+SP/@-20.8166124,-49.5474288,93777m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94bdad614c2df789:0x8f2fb0f070642c09!8m2!3d-20.8127115!4d-49.376521!16s%2Fg%2F1223kj90?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex gap-2 items-baseline text-xl origin-left">
                            <i className="fa-regular fa-map [will-change: opacity, transform] text-light font-light text-accent-primary relative z-10"></i>
                            <p className="[will-change: opacity, transform] text-light text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 pb-2">São José do Rio Preto/SP</p>
                        </motion.a>
                    </div>
                </div>               
                <div className="flex items-center gap-2 w-full" ref={buttonRef}>
                    <div className="w-full">
                        <PrimaryButton link="https://www.instagram.com/prancecompany/"><i className="fa-brands fa-instagram"></i></PrimaryButton>
                    </div>
                    <div className="w-full">
                        <PrimaryButton link="https://www.facebook.com/prancecompany"><i className="fa-brands fa-facebook-f"></i></PrimaryButton>
                    </div>
                    <div className="w-full">
                        <PrimaryButton link="https://www.linkedin.com/company/prance-company/?originalSubdomain=br"><i className="fa-brands fa-linkedin-in"></i></PrimaryButton>
                    </div>
                </div>
            </section>
        )
    }
    else
    {
        return(
            <section id="about-section" className="py-24 z-0 flex items-center justify-center px-16 relative bg-bg-primary">
                <div className="w-full max-w-[1200px] items-center justify-between gap-20 flex">
                    <div className="flex flex-col gap-4  items-baseline justify-center">
                        <div className="w-full" ref={whatsappRef}>
                            <motion.a  whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="https://wa.link/173tl9" target="_blank" className="flex gap-2 items-baseline text-2xl origin-left">
                                <i className="fa-brands fa-whatsapp [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                                <p className="[will-change: opacity, transform] text-light text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1">17 99155 2417</p>
                            </motion.a>
                        </div>
                        <div className="w-full" ref={emailRef}>
                            <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="mailto:contato@prancecompany.com?subject=Olá, gostaria de saber mais sobre a consultoria estratégica." target="_blank" className="flex gap-2 items-baseline text-2xl origin-left">
                                <i className="fa-regular fa-envelope [will-change: opacity, transform] text-light font-light text-accent-primary relative z-10"></i>
                                <p className="[will-change: opacity, transform] text-light text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 ">contato@prancecompany.com</p>
                            </motion.a>
                        </div>
                        <div className="w-full" ref={locationRef}>
                            <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+do+Rio+Preto,+SP/@-20.8166124,-49.5474288,93777m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94bdad614c2df789:0x8f2fb0f070642c09!8m2!3d-20.8127115!4d-49.376521!16s%2Fg%2F1223kj90?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex gap-2 items-baseline text-2xl origin-left">
                                <i className="fa-regular fa-map [will-change: opacity, transform] text-light font-light text-accent-primary relative z-10"></i>
                                <p className="[will-change: opacity, transform] text-light text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 ">São José do Rio Preto/SP</p>
                            </motion.a>
                        </div>
                    </div>               
                    <div className="flex flex-col items-end justify-center gap-2 w-full" ref={buttonRef}>
                            <PrimaryButton className="max-w-[250px]" link="https://www.instagram.com/prancecompany/"><i className="fa-brands fa-instagram"></i></PrimaryButton>
                            <PrimaryButton className="max-w-[250px]" link="https://www.facebook.com/prancecompany"><i className="fa-brands fa-facebook-f"></i></PrimaryButton>
                            <PrimaryButton className="max-w-[250px]" link="https://www.linkedin.com/company/prance-company/?originalSubdomain=br"><i className="fa-brands fa-linkedin-in"></i></PrimaryButton>
                    </div>
                </div>
            </section>
        )
    }    
}

export default Footer