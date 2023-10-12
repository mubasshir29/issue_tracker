import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'

const AdminLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex space-x-8'>
        <SidebarAdmin/>
         {children}
    </div>
  )
}

export default AdminLayout