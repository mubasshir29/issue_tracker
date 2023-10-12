import Link from 'next/link'
import React from 'react'

const SidebarAdmin = () => {
  return (
    <div className='bg-white w-[240px]'>
        <ul className='flex flex-col space-y-4'>
            <li><Link href='/admin/users'>Users</Link></li>
            <li><Link href='/admin/teams'>Teams</Link></li>
        </ul>
    </div>
  )
}

export default SidebarAdmin