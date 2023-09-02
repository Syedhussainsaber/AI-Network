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
    <h4 className='w-1/2 text-center text-2xl text-[#59C09D] sm:text-4xl md:w-1/2'>Total Suppy</h4>
    <p className='w-1/2 text-center text-xl sm:text-2xl'>2000Cr </p>
</div>

<div className="token-section flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-2xl text-[#59C09D] sm:text-4xl md:w-1/2'>Every event</h4>
    <p className='w-1/2 text-center text-xl sm:text-2xl'> 5% burn </p>
</div>

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-2xl text-[#59C09D] sm:text-4xl md:w-1/2'>Total Burn</h4>
    <p className='w-1/2 text-center text-xl sm:text-2xl'> 60% </p>
</div>

{/* <div className="token-section  flex flex-row w-full">
    <h4 className='w-1/2 text-center text-4xl text-[#59C09D]'>Pre launching</h4>
    <p className='w-1/2 text-center text-2xl'>10%</p>
</div> */}

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-2xl text-[#59C09D] sm:text-4xl md:w-1/2'>Airdrop</h4>
    <p className='w-1/2 text-center text-xl sm:text-2xl'>20%</p>
</div>

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-2xl text-[#59C09D] sm:text-4xl md:w-1/2'>Honor holding</h4>
    <p className='w-1/2 text-center text-xl sm:text-2xl'>10%</p>
</div>

<div className="token-section  flex flex-row w-full items-center p-2">
    <h4 className='w-1/2 text-center text-2xl text-[#59C09D] sm:text-4xl  md:w-1/2'>Exchange</h4>
    <p className='w-1/2 text-center text-xl sm:text-2xl'>10%</p>
</div>
</div>
  
</section>
  )
}

export default Tokenomics