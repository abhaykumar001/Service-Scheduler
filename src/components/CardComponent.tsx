import React from 'react'
import Image from 'next/image'

const CardComponent = () => {
    return (
        <main>
            <div className='bg-blue-200 p-6'>
                <h1 className='text-black text-3xl font-bold text-center my-8'>Choose from our services</h1>
                <p className='text-center text-gray-600 mb-8'>Stay updated with</p>
                <div className='flex flex-wrap justify-center gap-2 p-6'>
                    <div className="max-w-sm w-full mx-auto bg-white rounded-lg shadow-lg p-6 justify-items-center">
                        <div className="text-center justify-items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Core Essential</h2>
                            <Image src="/tech.webp" className='p-2' alt='ivon' width={200} height={150}/>  
                        </div>

                        <ul className="flex-row text-center text-gray-700 text-sm space-y-2">
                            <li>1 Website</li>
                            <li>Free SSL Certificate</li>
                            <li>Unmetered Website Storage</li>
                            <li>Unmetered Bandwidth</li>
                            <li>Unlimited E-Mail Accounts</li>
                            <li>Easy To Use Website Builder</li>
                            <li>5 MySQL Databases</li>
                            <li>200+ Ready To Go Applications</li>
                        </ul>

                        <div className="text-center mt-6">
                            <p className="text-3xl font-bold text-gray-800">$8.95 <span className="text-sm font-normal">/mo</span></p>
                            <div className="text-sm text-gray-500 mt-1 space-y-1">
                                <p>10% Off for 12 Months</p>
                                <p>20% Off for 24 Months</p>
                                <p>30% Off for 36 Months</p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <button className="flex gap-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-4 rounded-full transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className='pt-1'>ORDER CORE ESSENTIAL HOSTING</span>
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm w-full mx-auto bg-white rounded-lg shadow-lg p-6 justify-items-center">
                        <div className="text-center justify-items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Core Essential</h2>
                            <Image src="/tech.webp" className='p-2' alt='ivon' width={200} height={150}/>  
                        </div>

                        <ul className="flex-row text-center text-gray-700 text-sm space-y-2">
                            <li>1 Website</li>
                            <li>Free SSL Certificate</li>
                            <li>Unmetered Website Storage</li>
                            <li>Unmetered Bandwidth</li>
                            <li>Unlimited E-Mail Accounts</li>
                            <li>Easy To Use Website Builder</li>
                            <li>5 MySQL Databases</li>
                            <li>200+ Ready To Go Applications</li>
                        </ul>

                        <div className="text-center mt-6">
                            <p className="text-3xl font-bold text-gray-800">$8.95 <span className="text-sm font-normal">/mo</span></p>
                            <div className="text-sm text-gray-500 mt-1 space-y-1">
                                <p>10% Off for 12 Months</p>
                                <p>20% Off for 24 Months</p>
                                <p>30% Off for 36 Months</p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <button className="flex gap-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-4 rounded-full transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className='pt-1'>ORDER CORE ESSENTIAL HOSTING</span>
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm w-full mx-auto bg-white rounded-lg shadow-lg p-6 justify-items-center">
                        <div className="text-center justify-items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Core Essential</h2>
                            <Image src="/tech.webp" className='p-2' alt='ivon' width={200} height={150}/>  
                        </div>

                        <ul className="flex-row text-center text-gray-700 text-sm space-y-2">
                            <li>1 Website</li>
                            <li>Free SSL Certificate</li>
                            <li>Unmetered Website Storage</li>
                            <li>Unmetered Bandwidth</li>
                            <li>Unlimited E-Mail Accounts</li>
                            <li>Easy To Use Website Builder</li>
                            <li>5 MySQL Databases</li>
                            <li>200+ Ready To Go Applications</li>
                        </ul>

                        <div className="text-center mt-6">
                            <p className="text-3xl font-bold text-gray-800">$8.95 <span className="text-sm font-normal">/mo</span></p>
                            <div className="text-sm text-gray-500 mt-1 space-y-1">
                                <p>10% Off for 12 Months</p>
                                <p>20% Off for 24 Months</p>
                                <p>30% Off for 36 Months</p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <button className="flex gap-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-4 rounded-full transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className='pt-1'>ORDER CORE ESSENTIAL HOSTING</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CardComponent
