import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white px-8 py-4 shadow-sm'>
        <nav className='w-full flex justify-between items-center'>
            <div>
                <Link href='/'><h1 className='text-2xl font-bold'>Issue Tracker</h1></Link>
            </div>
            <div className='flex space-x-4 items-center'>
            <input type="text" placeholder="Search" className="input input-bordered w-[320px] max-w-xs" />
                <ul className='flex space-x-4 items-center'>
                    <li className=' bg-slate-200 p-3 rounded-md'><Link href='/issueNew'>Create New</Link></li>
                    <li>Profile</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar