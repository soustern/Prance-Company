import {  useState, type JSX } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import PrimaryButton from "../components/PrimaryButton";
import { AnimatePresence, motion } from "motion/react";

const NavBar = (): JSX.Element => {
    const size = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    const navOptions = ["Home", "A Prance", "Serviços", "Clientes", "Contatos"];


    // TODO: Create mobile logic where the nav options work and have animations

    if (size <= 700)
    {
        return (
            
            <nav className="bg-[var(--color-bg-primary)] py-3 px-2">
                <div className="flex items-center justify-between">
                    <div id="logo">
                        <img src="public\logo.webp" alt="" />
                    </div>
                    <div id="hamburger">
                        <motion.button whileTap={{scale: 0.8}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? <i className="fa-solid fa-xmark text-slate-50 text-4xl"></i> : <i className="fa-solid fa-bars text-slate-50 text-4xl"></i>
                            }
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence>{isOpen && <motion.div id="menu" initial={{height: 0}} animate={{height: "100vh"}} transition={{duration: 0.15, ease: "easeInOut"}} className="bg-[var(--color-bg-primary)] px-8 py-8 w-full overflow-y-auto" exit={{height: 0}}>
                    <ul className="w-full flex flex-col items-start gap-8">
                        {
                            navOptions.map((option, index) => {
                                return (
                                    <li className="py-4 w-full relative" onClick={() => setIsOpen(false)}>
                                        <motion.div className="flex items-center justify-between" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: index * 0.08}}>
                                            <p className="text-slate-50 text-2xl font-medium">{option}</p>
                                            <i className="fa-solid fa-arrow-right text-slate-300 text-xl"></i>
                                        </motion.div>
                                        <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 0.2, delay: index * 0.08}}  className="h-[1px] bg-slate-300 left-0 top-full absolute"></motion.div>
                                    </li>
                                )
                            })
                        }
                        <motion.li className="w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4}}>
                            <PrimaryButton text="Vamos conversar"></PrimaryButton>
                        </motion.li>
                        <li className="flex items-center gap-4 w-full">
                            <motion.div className="w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.5}}>
                                <PrimaryButton>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </PrimaryButton>
                            </motion.div>
                            <motion.div className="w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.6}}>
                                <PrimaryButton>
                                    <i className="fa-brands fa-instagram"></i>                                    
                                </PrimaryButton>
                            </motion.div>
                        </li>
                    </ul>
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