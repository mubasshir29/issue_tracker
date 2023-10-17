'use client'
import { createTeam, getAllTeams,deleteTeam } from '@/app/clientHelpers/teams'
import React, { useEffect, useState } from 'react'

const TeamsPage = () => {
  const initilValues = {
    name:"",
    description:""
  }
  const [team,setTeam] = useState(initilValues)
  const [allTeams,setAllTeams] = useState()
  const [addButton,setAddButton] = useState(true)

  const formChange = (e) => {
    setTeam((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    const response = await createTeam(team)
    if(response.status == 200){
      //console.log(team)
      setTeam(initilValues)
    } 
    getAllTeamsData()
    setAddButton(true)
  }

  const getAllTeamsData = async () => {
    const data = await getAllTeams()
    //console.log(data)
    setAllTeams(data)
  }
  const handleDelete = async (id) => {
    const res = await deleteTeam(id)
    if(res.status === 200){
      console.log("Team deleted")
      getAllTeamsData()
    }
    
  }

  const handleResetbutton = (e) => {
    e.preventDefault()
    setAddButton(true)
  }

  useEffect(()=>{
    getAllTeamsData()
  },[])
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='flex-1'>
        
        {allTeams && <div className='flex flex-col gap-3 w-full'>
          <h1 className='text-xl font-bold'>Teams</h1>
          <ul className='flex flex-col gap-2 w-full'>
            {allTeams.map(team => {
              return (<div className="collapse collapse-arrow bg-white shadow-md">
              <input type="radio" name="my-accordion-2" /> 
              <div className="collapse-title text-xl font-bold">
                {team.name}
              </div>
              <div className="collapse-content"> 
                <p className='pb-4 text-sm'>{team.description}</p>
                <div className='flex gap-2'>
                  <button className='btn btn-xs text-white btn-accent  rounded-md' onClick={() => handleDelete(team.id)}>Edit</button>
                  <button className='btn btn-xs text-white btn-error rounded-md' onClick={() => handleDelete(team.id)}>Delete</button>
                </div>
              </div>
            </div>)
              
              // <li className='group hover:cursor-pointer hover:bg-white py-2 pl-2 w-full flex justify-between items-center rounded-md' key={team.id}>{team.name} <button className='px-2 rounded-md hidden group-hover:block' onClick={() => handleDelete(team.id)}>Delete</button></li>
            })}
          </ul>
          </div>}
        
      </div>
      <div id="addTeam-form" className='flex-1'>
        {addButton ? 
        <button className='font-bold p-2 btn btn-sm btn-active' onClick={()=>{setAddButton(false)}}>Add new+</button> :
         <form onSubmit={(e)=>formSubmit(e)} onReset={(e)=>handleResetbutton(e)} className='flex flex-col justify-center space-y-4'>
          <input type="text" name="name" value={team.name} onChange={(e)=>formChange(e)} placeholder="Team Name" className="input input-bordered w-full max-w-md" />
          <textarea name="description" value={team.description} onChange={(e)=>formChange(e)} className="textarea textarea-bordered resize-none max-w-md" placeholder="Description"></textarea>
          <div className='flex space-x-2'>
            <button type='reset' onChange={(e)=>formChange(e)} className='w-[100px] text-white btn btn-error'>Cancel</button>
            <button type='submit' onChange={(e)=>formChange(e)} className='w-[100px] text-white btn btn-success'>Save</button>
          </div>
        </form>}
      </div>
    </div>
  )
}

export default TeamsPage