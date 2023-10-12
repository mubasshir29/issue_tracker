import React from 'react'

const DashboardCard = ({values}) => {
    console.log(values)
  return (
    <div className={`bg-white w-[240px] px-8 py-4 rounded-lg shadow-md flex flex-col space-y-4 items-center`}>
        <h1 className='font-bold text-lg'>{values.title}</h1>
        <p>{values.value}</p>
    </div>
  )
}

export default DashboardCard