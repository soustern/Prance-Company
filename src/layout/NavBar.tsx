import {  useState, type JSX } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import PrimaryButton from "../components/PrimaryButton";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.webp";
import { AiFillInstagram as FaInstagram } from 'react-icons/ai';
import { FaFacebookF as FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';

const NavBar = (): JSX.Element => {
    const size = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    const navOptions = [["Home", "hero-section"], ["A Prance", "about-section"], ["Serviços", "services-section"], ["Clientes", "brands-section"], ["Contatos", "footer-section"]];

    const variants = {
        initial: {scaleX: 0},
        hover: {scaleX: 1}
    }


    if (size <= 975)
    {
        return (
            
            <nav className="bg-[var(--color-bg-primary)]/60 backdrop-blur-3xl px-2 pointer-events-auto">
                <div className="flex items-center justify-between">
                    <div id="logo">
                        <img src={logo} className="max-w-[120px]" alt="" />
                    </div>
                    <div id="hamburger">
                        <motion.button aria-expanded={isOpen} aria-label="Abrir o menu" aria-controls="menu" whileTap={{scale: 0.8}} transition={{duration: 0.05, type: "spring", stiffness: 500, damping: 30}} className="cursor-pointer py-3" onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <FaXmark className="fa-solid fa-xmark text-slate-200 text-4xl"></FaXmark> : <FaBars className="fa-solid fa-bars text-slate-200 text-4xl"></FaBars>
                        }
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence mode="wait">{isOpen && <motion.div id="menu" initial={{height: 0}} animate={{height: "auto"}} transition={{duration: 0.2, ease: "easeOut"}} className=" w-full overflow-hidden will-change-transform" exit={{height: 0}} style={{contain: 'layout style paint'}}>
                    <div className={`px-8 pt-8 pb-30 h-screen overflow-y-auto  ${isOpen ? `pointer-events-auto` : `pointer-events-none`}`}>
                        <ul className="w-full flex flex-col items-start gap-8">
                            {
                                navOptions.map((option, index) => {
                                    return (
                                        <motion.li whileTap={{backgroundColor: "rgba(255, 255, 255, 0.3)"}} key={option[0]} className="py-4 w-full relative" onClick={() => setIsOpen(false)}>
                                            <motion.a href={`#${option[1]}`} className="flex items-center justify-between [will-change: transform, opacity]" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: index * 0.08}}>
                                                <p className="text-slate-200 text-2xl font-medium">{option[0]}</p>
                                                <FaArrowRight className="fa-solid fa-arrow-right text-slate-300 text-xl"></FaArrowRight>
                                            </motion.a>
                                            <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 0.2, delay: index * 0.08}}  className="h-[1px] bg-slate-300 left-0 top-full absolute"></motion.div>
                                        </motion.li>
                                    )
                                })
                            }
                            <motion.li className="w-full [will-change: transform, opacity]" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4}}>
                                <PrimaryButton ariaLabel="Abrir o WhatsApp da empresa" link="https://wa.link/60n9e2" text="Vamos conversar"></PrimaryButton>
                            </motion.li>
                            <li className="flex items-center gap-2 w-full justify-center">
                                <motion.div className="pointer-events-none w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.5}}>
                                    <PrimaryButton ariaLabel="Navegar ate o Instagram da empresa" link="https://www.instagram.com/prancecompany/" className="pointer-events-auto">
                                        <FaInstagram className="fa-brands fa-instagram"></FaInstagram>
                                    </PrimaryButton>
                                </motion.div>
                                <motion.div className="pointer-events-none w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.6}}>
                                    <PrimaryButton ariaLabel="Navegar ate o Facebook da empresa" link="https://www.facebook.com/prancecompany" className="pointer-events-auto">
                                        <FaFacebook className="fa-brands fa-facebook-f"></FaFacebook>
                                    </PrimaryButton>
                                </motion.div>
                                
                                <motion.div className="pointer-events-none w-full" initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.7}}>
                                    <PrimaryButton ariaLabel="Navegar ate o linkedin da empresa" link="https://www.linkedin.com/company/prance-company/?originalSubdomain=br" className="pointer-events-auto">
                                        <FaLinkedinIn className="fa-brands fa-linkedin-in"></FaLinkedinIn>
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
            <nav className="bg-[var(--color-bg-primary)]/60 backdrop-blur-3xl px-12 py-3 pointer-events-auto ">
                <div className="flex items-center justify-between gap-12">
                    <div id="logo">
                        <img alt="Imagem da logo da empresa contendo um passaro e os dizeres: prance" src={logo} className="max-w-[120px]" />
                    </div>
                    <ul className="flex flex-1 justify-center items-center max-w-[800px]">
                        {
                            navOptions.map((option) => {
                                return (
                                    <motion.li key={option[0]} whileTap={{scale: 0.9}} whileHover={"hover"} initial={"initial"} className="[flex:1_2_auto] flex flex-col items-center justify-center">
                                        <a href={`#${option[1]}`} className="flex items-center justify-between p-2">
                                            <p className="text-slate-300 font-light">{option[0]}</p>
                                        </a>
                                        <motion.div variants={variants} transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} className="bg-accent-secondary h-[1px] origin-center transform w-20 rounded-full"></motion.div>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                    {/* This -mt[130px] is used here to truly centralize the navOption on the screen due to the logo having 130px less in width when compared to the button */}
                    <PrimaryButton ariaLabel="Abrir o WhatsApp da empresa" link="https://wa.link/60n9e2" text="Vamos conversar" className="2xl:-ml-[130px] max-w-[250px]"></PrimaryButton>
                </div>
            </nav>
        )
    }
}

export default NavBar;