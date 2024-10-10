import { fadeInOnScoll } from "@/motion/motionVariants";
import { motion } from "framer-motion";
import ButtonTertiary from "./ButtonTertiary";


export default function Trial() {
  return (
    <section className="xl:mb-32 w-full">
        <motion.div variants={fadeInOnScoll(0.2, 0.6)} initial="hidden" whileInView="visible" className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondary to-accent h-full flex items-center xl:rounded-2xl">
            <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:px-24">
                <div>
                    <div className="text-center mb-12 xl:text-left xl:mb-0">
                        <h2 className="text-[40px] leading-tight mb-2 font-bold">Strart your 30-day free trial</h2>
                        <p className="lead max-w-[400px] xl:max-w-[560px] mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quod aperiam ipsa commodi rerum reprehenderit.</p>
                    </div>
                </div>
                <div>
                    <ButtonTertiary btnText={"Get Started"} />
                </div>
            </div>
        </motion.div>
    </section>
  )
}
