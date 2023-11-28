import React from 'react'
import flag from '../images/icon-success.svg'

function modal(props) {
  return (
    <div className='h-screen w-screen flex align-middle justify-center items-center bg-dark-slate-grey'>
      <article className='sm:w-[300px]  '>
        <section className='px-6 flex flex-col justify-center py-6 sm:rounded-[16px] h-screen bg-white sm:h-auto'>
          <img className='w-10' src={flag} alt="" />
          <h1 className='text-3xl font-bold my-4'>Thanks for subscribing!</h1>
          <p className='pb-2 text-xs'>A confirmation email has been
            sent to <b>{props.correo}</b> Please
            open it and click the button inside to
            confirm your subscription.
          </p>
          <button onClick={props.close} className='hover:shadow-circle hover:bg-tomato cursor-pointer buttom  p-4 mt-4 mb-6 rounded-md text-[15px] bg-slate-600 w-full relative font-bold text-white'>Dismis message</button>
        </section>
      </article>
    </div>
  )
}

export default modal