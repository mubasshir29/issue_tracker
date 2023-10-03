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
    <div className='bg-white p-4 rounded-lg flex flex-col space-y-3'>
      <div className='flex flex-col space-y-1'>
        <p className='font-bold'>{issue.title}</p>
        <p className='text-sm'>{issue.description}</p>
      </div>
      
      <div className='w-full flex justify-between'>
        <p><span className='font-bold'>Team:</span> {issue.team}</p>
        <p><span className='font-bold'>Assignee:</span> {issue.member}</p>
      </div>
      
    </div>
  ) 
}

export default IssueListCard