import React from 'react'

const Tokenomics = () => {
  return (
<section id='tokenomics'
 className="bg-[#060A14] px-2 pt-20 w-full min-h-screen"
>
<h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
Tokenomics
      </h2>

<div className="tokenomics-container text-white flex flex-col w-full justify-center items-center gap-8 md:gap-6">
<div className="token-section flex flex-row w-full items-center p-2">
    <h4 className='w-3/4 text-center text-4xl text-[#59C09D] md:text-2xl w-3/4 sm:text-xl '>Total Suppy</h4>
    <p className='w-1/2 text-center text-2xl'>2000Cr </p>
</div>

<div className="token-section flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D] md:text-2xl w-3/4 sm:text-xl'>Every event</h4>
    <p className='w-1/2 text-center text-2xl'> 5% burn </p>
</div>

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D] md:text-2xl w-3/4 sm:text-xl'>Total Burn</h4>
    <p className='w-1/2 text-center text-2xl'> 60% </p>
</div>

{/* <div className="token-section  flex flex-row w-full">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D]'>Pre launching</h4>
    <p className='w-1/2 text-center text-2xl'>10%</p>
</div> */}

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D] md:text-2xl w-3/4 sm:text-xl'>Airdrop</h4>
    <p className='w-1/2 text-center text-2xl'>20%</p>
</div>

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D] md:text-2xl w-3/4 sm:text-xl'>Honor holding</h4>
    <p className='w-1/2 text-center text-2xl'>10%</p>
</div>

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D] md:text-2xl w-3/4 sm:text-xl'>Exchange</h4>
    <p className='w-1/2 text-center text-2xl'>10%</p>
</div>
</div>
  
</section>
  )
}

export default Tokenomics