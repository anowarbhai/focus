import { fadeInOnScoll } from "@/motion/motionVariants";
import { motion } from "framer-motion";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const testimonial = [
    {
        name: "John Doe",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
    {
        name: "Smith Doe",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
    {
        name: "Shemuil Smith",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
    {
        name: "Emily White",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
    {
        name: "Michael Brown",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
    {
        name: "Sophia Lee",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
    {
        name: "Olivia Matinez",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quisquam, tenetur ullam corrupti, sapiente fugit enim repellendus."
    },
]
export default function Testimonial() {
  return (
    <section className="w-full mb-24 xl:mb-32 flex justify-center items-center">
        <div className=" overflow-x-hidden">
            <motion.div variants={fadeInOnScoll(0.2, 0.6)} initial="hidden" whileInView="visible">
                <h2 className="h2 mb-4 text-center">What People Are Saying</h2>
                <p className="lead text-center mb-24">Hear directly from those who have omproved their efficiency and organization.</p>
            </motion.div>
            <div>
                <motion.div variants={fadeInOnScoll(0.2, 0.6)} initial="hidden" whileInView="visible"  className="flex">
                    <motion.div 
                        initial={{x: 0}}
                        animate={{x: "-100%"}}
                        transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                        className="flex"
                    >
                        {testimonial.map((item, index) => {
                            return <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                <BiSolidQuoteAltLeft className="text-accent text-3xl mb-3" />
                                <p className="mb-4 text-lg text-white/80">{item.description}</p>
                                <p className="text-xl">{item.name}</p>
                            </div>
                        })}
                    </motion.div>
                    <motion.div 
                        initial={{x: 0}}
                        animate={{x: "-100%"}}
                        transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                        className="flex"
                    >
                        {testimonial.map((item, index) => {
                            return <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                <BiSolidQuoteAltLeft className="text-accent text-3xl mb-3" />
                                <p className="mb-4 text-lg text-white/80">{item.description}</p>
                                <p className="text-xl">{item.name}</p>
                            </div>
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
