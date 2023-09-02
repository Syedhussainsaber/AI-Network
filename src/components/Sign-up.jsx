import React from 'react'
import { motion, transform } from "framer-motion"
const SignUp = () => {
  return (
<section id='sign-up' className="bg-[#060A14] px-3 text-white pt-20 w-full min-h-screen">
<h2 className="text-center text-3xl uppercase pb-8 font-bold">
Sign Up Bonus
      </h2>
<Card title={""} description={"To welcome users into our ecosystem, we're offering a sign-up bonus of 100 coins, absolutely free! This is our way of saying thank you for joining us and getting started with our project."} imgPath={"/signupBonus.png"} altText={""} />
</section>
  )
}

 const Card = ({ title,description,altText,imgPath }) => {
    // const { level, earning, token } = item;
    return (
      <motion.div transition={{duration:0.8,delay:0.2}} initial={{translateX:300}} whileInView={{translateX:0}} className="hover:ring-2 ring-[#59C09D] rounded-lg p-6 bg-[#121320] max-w-[550px] md: max-w-[350px] w-full mx-auto">
        {/* <h4 className="text-3xl  font-bold font-Exo ">
          Level <span className="text-[#59C09D] text-5xl">{level}</span>
        </h4> */}
        <img src={imgPath} alt={altText} className='w-100 h-100' />
        <p className="font-Inter mt-2 text-center p-2 leading-8">{description}</p>
        <p className="font-Inter mt-2 text-center leading-8">When we launch the coin at $2, your 600 coins will be worth $1200! That's right, you've essentially turned your sign-up bonus and daily mining rewards into a value of $1200. It's a fantastic way for users to participate, engage with our project, and benefit from the growth of our cryptocurrency.</p>
      </motion.div>
    );
  };

export default SignUp