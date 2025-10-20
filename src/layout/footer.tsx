import type { JSX } from "react"
import PrimaryButton from "../components/PrimaryButton"

// TODO: Add correct links

const Footer = (): JSX.Element => {
    return (
        <section className="flex flex-col justify-center relative px-4 py-8 bg-[var(--color-bg-primary)]">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-4 pb-4">
                    <a href="" className="flex gap-2 items-baseline text-xl">
                        <i className="fa-brands fa-whatsapp [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                        <p className="[will-change: opacity, transform] text-center text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1">17 99155 2417</p>
                    </a>
                    <a href="" className="flex gap-2 items-baseline text-xl">
                        <i className="fa-regular fa-envelope [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                        <p className="[will-change: opacity, transform] text-center text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 ">contato@prancecompany.com</p>
                    </a>
                    <a href="" className="flex gap-2 items-baseline text-xl">
                        <i className="fa-regular fa-map [will-change: opacity, transform] text-center font-light text-accent-primary relative z-10"></i>
                        <p className="[will-change: opacity, transform] text-center text-slate-300 relative z-10 underline decoration-accent-secondary decoration-1 pb-2">São José do Rio Preto/SP</p>
                    </a>
                </div>               
            </div>
            <div className="flex items-center gap-2">
                <PrimaryButton><i className="fa-brands fa-instagram"></i></PrimaryButton>
                <PrimaryButton><i className="fa-brands fa-facebook-f"></i></PrimaryButton>
                <PrimaryButton><i className="fa-brands fa-linkedin-in"></i></PrimaryButton>
            </div>
        </section>
    )
}

export default Footer