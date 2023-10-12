import Link from 'next/link'
import React from 'react'

interface IssueType{
  id:string,
  title: string,
  description : string,
  team : string,
  member : string,
  status : string,
  createdAt : string,
  closeDate : string
}

const IssueListCard = ({issue}) => {
  return (
    <Link href={`/issues/${issue.id}`}><div className='bg-white p-4 rounded-lg flex flex-col space-y-4 drop-shadow-md'>
      <div className='flex flex-col space-y-1'>
        <p className='font-bold'>{issue.title}</p>
        <p className='text-sm'>{issue.description}</p>
      </div>
    <div className='flex  '>
      <div className='w-full flex flex-col space-y-1 justify-between text-xs'>
        <p><span className='font-bold'>Date:</span> {issue.createdAt}</p>
        <p><span className='font-bold'>Status:</span> {issue.status}</p>
      </div>
      <div className='w-full flex flex-col space-y-1 justify-between items-end text-xs'>
        <p><span className='font-bold'>Team:</span> {issue.team}</p>
        <p><span className='font-bold'>Assignee:</span> {issue.member}</p>
      </div>
    </div>
      
      
    </div></Link>
  ) 
}

export default IssueListCard