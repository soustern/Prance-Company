import {  useState, type JSX } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import PrimaryButton from "../components/PrimaryButton";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.webp";

const NavBar = (): JSX.Element => {
    const size = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    const navOptions = [["Home", "hero-section"], ["A Prance", "about-section"], ["Serviços", "services-section"], ["Clientes", "brands-section"], ["Contatos", "footer-section"]];


    // TODO: Create desktop version
    // TODO: Create links

    if (size <= 700)
    {
        return (
            
            <nav className="bg-[var(--color-bg-primary)]/60 backdrop-blur-3xl px-2 pointer-events-auto">
                <div className="flex items-center justify-between">
                    <div id="logo">
                        <img src={logo} className="max-w-[120px]" alt="" />
                    </div>
                    <div id="hamburger">
                        <motion.button aria-expanded={isOpen} aria-controls="menu" whileTap={{scale: 0.8}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className="cursor-pointer py-3" onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <i className="fa-solid fa-xmark text-slate-200 text-4xl"></i> : <i className="fa-solid fa-bars text-slate-200 text-4xl"></i>
                        }
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence mode="wait">{isOpen && <motion.div id="menu" initial={{height: 0}} animate={{height: "auto"}} transition={{duration: 0.2, ease: "easeOut"}} className=" w-full overflow-hidden will-change-transform" exit={{height: 0}} style={{contain: 'layout style paint'}}>
                    <div className={`px-4 pt-8 pb-30 h-screen overflow-y-auto  ${isOpen ? `pointer-events-auto` : `pointer-events-none`}`}>
                        <ul className="w-full flex flex-col items-start gap-8">
                            {
                                navOptions.map((option, index) => {
                                    return (
                                        <motion.li whileTap={{backgroundColor: "rgba(255, 255, 255, 0.3)"}} key={option[0]} className="py-4 w-full relative" onClick={() => setIsOpen(false)}>
                                            <motion.a href={`#${option[1]}`} className="flex items-center justify-between [will-change: transform, opacity]" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: index * 0.08}}>
                                                <p className="text-slate-200 text-2xl font-medium">{option[0]}</p>
                                                <i className="fa-solid fa-arrow-right text-slate-300 text-xl"></i>
                                            </motion.a>
                                            <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 0.2, delay: index * 0.08}}  className="h-[1px] bg-slate-300 left-0 top-full absolute"></motion.div>
                                        </motion.li>
                                    )
                                })
                            }
                            <motion.li className="w-full [will-change: transform, opacity]" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4}}>
                                <PrimaryButton link="https://wa.link/60n9e2" text="Vamos conversar"></PrimaryButton>
                            </motion.li>
                            <li className="flex items-center gap-2 w-full justify-center">
                                <motion.div className="pointer-events-none w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.5}}>
                                    <PrimaryButton link="https://www.instagram.com/prancecompany/" className="pointer-events-auto">
                                        <i className="fa-brands fa-instagram"></i>
                                    </PrimaryButton>
                                </motion.div>
                                <motion.div className="pointer-events-none w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.6}}>
                                    <PrimaryButton link="https://www.facebook.com/prancecompany" className="pointer-events-auto">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </PrimaryButton>
                                </motion.div>
                                
                                <motion.div className="pointer-events-none w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.7}}>
                                    <PrimaryButton link="https://www.linkedin.com/company/prance-company/?originalSubdomain=br" className="pointer-events-auto">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </PrimaryButton>
                                </motion.div>
                            </li>
                        </ul>
                    </div>
                </motion.div>}</AnimatePresence>
            </nav>
        )
    }
    else
    {
        return (
            <></>
        )
    }
}

export default NavBar;