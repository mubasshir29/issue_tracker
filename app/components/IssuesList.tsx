'use client'
import React, { useEffect, useState } from 'react'
import {getAllIssues} from '@/app/clientHelpers/issues'
import IssueListCard from './IssueListCard'

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

const IssuesList = () => {

  const [issues,setIssues] = useState<IssueType[]>([])


  const gettingAllIssues = async ()=>{
    const allIssues = await getAllIssues()
    setIssues(allIssues!)
  }
  useEffect(()=>{
    gettingAllIssues()
  },[])
  return (
    <div>
          {issues && issues.map((issue,index)=>{
            return <div key={index}>
                      <IssueListCard issue={issue} />
                  </div>
          })}
    </div>
  )
}

export default IssuesList