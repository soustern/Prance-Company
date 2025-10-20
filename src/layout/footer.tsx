import type { JSX } from "react"
import PrimaryButton from "../components/PrimaryButton"
import { motion } from "motion/react"

// TODO: Add scrolltrigger animations

const Footer = (): JSX.Element => {
    return (
        <section id="footer-section" className="flex flex-col justify-center relative px-4 py-8 bg-[var(--color-bg-primary)]">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-4 pb-4">
                    <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="https://wa.link/173tl9" target="_blank" className="flex gap-2 items-baseline text-xl origin-left">
                        <i className="fa-brands fa-whatsapp [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                        <p className="[will-change: opacity, transform] text-center text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1">17 99155 2417</p>
                    </motion.a>
                    <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="mailto:contato@prancecompany.com?subject=Olá, gostaria de saber mais sobre a consultoria estratégica." target="_blank" className="flex gap-2 items-baseline text-xl origin-left">
                        <i className="fa-regular fa-envelope [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                        <p className="[will-change: opacity, transform] text-center text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 ">contato@prancecompany.com</p>
                    </motion.a>
                    <motion.a whileTap={{scale: 0.9}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} href="https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+do+Rio+Preto,+SP/@-20.8166124,-49.5474288,93777m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94bdad614c2df789:0x8f2fb0f070642c09!8m2!3d-20.8127115!4d-49.376521!16s%2Fg%2F1223kj90?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex gap-2 items-baseline text-xl origin-left">
                        <i className="fa-regular fa-map [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                        <p className="[will-change: opacity, transform] text-center text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 pb-2">São José do Rio Preto/SP</p>
                    </motion.a>
                </div>               
            </div>
            <div className="flex items-center gap-2">
                <PrimaryButton link="https://www.instagram.com/prancecompany/"><i className="fa-brands fa-instagram"></i></PrimaryButton>
                <PrimaryButton link="https://www.facebook.com/prancecompany"><i className="fa-brands fa-facebook-f"></i></PrimaryButton>
                <PrimaryButton link="https://www.linkedin.com/company/prance-company/?originalSubdomain=br"><i className="fa-brands fa-linkedin-in"></i></PrimaryButton>
            </div>
        </section>
    )
}

export default Footer