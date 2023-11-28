
import './App.css'
import image_mobile from './images/illustration-sign-up-mobile.svg'
import image_desktop from './images/illustration-sign-up-desktop.svg'
import check from './images/icon-success.svg'
import { useState } from 'react'
import Modal from './components/modal'
function App() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email,setEmail] =useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleChange =(e) =>{
      const input = e.target.value;
      setEmail(input)
      setValidEmail(emailRegex.test(input) || input === "");
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      console.log("Form Submitted Successfully!");
      setIsModalOpen(true);
    } else {
      console.log("Error");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  return isModalOpen ? <Modal close={handleCloseModal} correo={email}/> : (
    <>
      <section className='flex h-screen sm:bg-dark-slate-grey  sm:justify-center sm:align-middle sm:items-center '>
        <article className='flex sm:rounded-[12px] sm:p-6 sm:bg-white flex-col sm:m-6 justify-center align-middle  sm:flex-row-reverse sm:items-center '>
          <img className='bg-contain  sm:hidden' src={image_mobile} alt="" />
          <img className='bg-contain hidden sm:flex sm:w-72 md:w-80 ' src={image_desktop} alt="" />
          <div className='mt-6 mx-4 md:px-4'>
            <h1 className='text-3xl md:text-6xl font-bold'>Stay updated!</h1>
            <p className='pt-4'>Join 60,000+ product
              managers receiving monthly
              updates on:
            </p>
            {/* Container of the requeriments for the email */}
            <div className='flex  mt-4 flex-col align-middle justify-center'>
              <div className='flex items-start md:pb-2'>
                <img className='w-[22px]' src={check} alt="" />
                <p className='pl-4'> Product discovery and building what matters</p>
              </div>
              <div className='flex items-start md:pb-2'>
                <img className='w-[22px]' src={check} alt="" />
                <p className='pl-4'>Measuring to ensure updates are a success</p>
              </div>
              <div className='flex items-start'>
                <img className='w-[22px]' src={check} alt="" />
                <p className='pl-4'>And much more!</p>
              </div>
            </div>
            {/* Container for the input email and the button  */}
            <div className='mt-6 '>
              <h2 className='flex text-[11px] justify-between font-bold mb-2'>Email address  {!validEmail && email !== "" && (
                <p className='text-red-600'>Valid email required</p>
              )} </h2>
              <input onChange={handleChange} className={`p-4 outline-none border rounded-md text-[15px] w-full ${ validEmail ? '' : 'border-rose-600 bg-rose-200'}`} value={email} type="text" placeholder='email@company.com' />
              <button disabled={!validEmail || email === ""} type="button" onClick={handleSubmit}  className='hover-text-white cursor-pointer p-4 mt-4 mb-6 rounded-md text-[15px] bg-slate-600 w-full hover:shadow-circle hover:bg-tomato relative font-bold text-white'>Subscribe to monthly newsletter</button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default App
