const Hero: React.FC = () => {
  return(
      <>
      <main className=''>
         <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-2 gap-5 place-items-center">
             {/* image  section */}
              <div className='order-1 sm:order-2 realative'>
                 <img src="./images/useimage of doctor.jpg" alt="" /> 
                 <div className='bg-white dark:grey-900 px-4 py-2  rounded-xl shadow-md absolute -bottom-5 -right-8'>
                  
                 </div>
              </div>
              {/* text content section */}
              <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                  <h1 className='text-4xl sm:text-5xl font-semibold'>Keep Your All Health Record In  <span className='text-primary'>KeepSafe</span>
                  </h1>
                  <p  className='text-xl'>
                   Transform your lifestyle with 
                   personalized health insights at your fingertips,
                   Take control of your well-being with our
                   inituitive health companion.
                  </p>
                  <button className='btn-primary'>Enter</button>
              </div>
          </div>
         </div>
      </main>
      </>
  )
}

export default Hero;