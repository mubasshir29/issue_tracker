'use client'
import React, { useState } from 'react'
import { VscRefresh } from "react-icons/vsc";
import moment from 'moment';
import { createIssue } from '../clientHelpers/issues';


const defaultIssue = {
  title :"",
  description :"",
  team :"",
  member :"",
  status:"New",
  comments:"",
  createdAt:moment().format('LLLL'),
  closeDate:moment().add(3,'days').format('LLLL')
}

const IssueNew = () => {

  const [newIssue,setNewIssue] = useState(defaultIssue) 

  const onValueChange = (e : React.SyntheticEvent) =>{
    setNewIssue({...newIssue, [e.target.name]:e.target.value})
  }
  const setMissing = () => {
      console.log(newIssue)
      createIssue(newIssue)
      setNewIssue(defaultIssue)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setTimeout(()=>{
      console.log("Setting Values")
      setNewIssue({...newIssue, status:"New"})
    },1000)
    
    //, createdAt: moment().format('LLLL'), closeDate: moment().add(3,'days').format('LLLL')
    
    setTimeout(()=>{
      setMissing()
    },2000)
    
  }

  const handleReset = (e) => {
    console.log(newIssue)
  }

  return (
    <div className='relative px-12 py-8 bg-white rounded-xl shadow-md'>

    
    <div className='w-[640px] max-w-[640px] '>
      <h1 className='text-2xl font-semibold text-slate-600'>New Issue</h1>
      <form onSubmit={(e)=>handleSubmit(e)} onReset={(e)=>handleReset(e)} className='flex flex-col space-y-4 mt-4'>
      <button className='absolute top-8 right-8 text-slate-400 bg-slate-100 p-2 rounded-lg hover:text-slate-600'><VscRefresh/></button>
        <div className='flex flex-col space-y-1'>
          <label>Title</label>
          <input name='title' onChange= {(e)=>onValueChange(e)} value={newIssue.title} type="text" className="input input-bordered w-full" />
        </div>
        <div className='flex flex-col space-y-1'>
          <label>Description</label>
          <textarea name='description' onChange= {(e)=>onValueChange(e)} value={newIssue.description} className="textarea textarea-bordered resize-none"></textarea>
        </div>
        <div className='flex space-x-4'>
        <div className='w-[50%] flex flex-col space-y-1'>
          <label>Team</label>
          <select name='team' onChange= {(e)=>onValueChange(e)} value={newIssue.team} className="select select-bordered w-full max-w-xs">
            <option disabled value='DEFAULT'>Select Team</option>
            <option value='Network'>Network</option>
            <option value='System'>System</option>
          </select>
        </div>
        <div className='w-[50%] flex flex-col space-y-1'>
          <label>Assignee</label>
          <select name='member' onChange= {(e)=>onValueChange(e)} value={newIssue.member} className="select select-bordered w-full max-w-xs">
            <option disabled value='DEFAULT'>Assign to</option>
            <option value='Mubasshir'>Mubasshir</option>
            <option value='Zafar'>Zafar</option>
          </select>
        </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <label>Comments</label>
          <textarea name="comments" onChange= {(e)=>onValueChange(e)} value={newIssue.comments} className="textarea textarea-bordered resize-none"></textarea>
        </div>
        <div className='flex space-x-2 justify-start'>
        <button type='submit' className='w-[100px] text-white btn btn-success'>Save</button>

          <button type='reset' className='w-[100px] text-white btn btn-error'>Cancel</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default IssueNew