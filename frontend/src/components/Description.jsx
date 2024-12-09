import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={true}
            className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
                Create AI Images
            </h1>
            <p className='text-gray-500 mb-8 '>Turn your imagination into visuals </p>

            <div className='flex flex-col gap-5 md:gap-14 md:flex-row max-w-4xl items-center'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl-:w-96 rounded-lg' />
                <div>
                    <h2 className='text-3xl font-medium max-w-lg mb-4 text-gray-600'>Introducing the AI-powered Text to Image Generator</h2>
                    <p className='text-sm text-gray-500 mt-4'>
                        Bring your vision to reality effortlessly with our free AI image generator.
                        Create breathtaking visuals and one-of-a-kind imagery by simply describing your ideas.
                        Imagine it, type it, and watch your concept transform into stunning visuals in moments!
                    </p>
                    <p className='text-sm text-gray-500 mt-4'>
                        Just type in a text prompt, and our state-of-the-art AI will craft high-quality images in an instant.
                        Whether it’s product designs, character concepts, portraits, or entirely new ideas, you can bring them to life with ease. Harnessing advanced AI technology,
                        your creative potential knows no bounds!
                    </p>
                </div>
            </div>

        </motion.div>
    )
}

export default Description