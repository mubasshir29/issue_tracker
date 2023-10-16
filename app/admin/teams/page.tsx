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

  useEffect(()=>{
    getAllTeamsData()
  },[])
  return (
    <div className='w-full flex justify-between space-x-6'>
      <div className='flex-1'>
        
        {allTeams && <div className='flex flex-col gap-3 w-full'>
          <h1 className='text-xl font-bold'>Teams</h1>
          <ul className='flex flex-col gap-4 w-full'>
            {allTeams.map(team => {
              return <li className='group hover:cursor-pointer w-full flex justify-between items-center' key={team.id}>{team.name} <button className='bg-slate-200 px-2 rounded-md hidden group-hover:block' onClick={() => handleDelete(team.id)}>Delete</button></li>
            })}
          </ul>
          </div>}
        
      </div>
      <div id="addTeam-form" className='flex-1'>
        <form onSubmit={(e)=>formSubmit(e)} className='flex flex-col justify-center space-y-4'>
          <input type="text" name="name" value={team.name} onChange={(e)=>formChange(e)} placeholder="Team Name" className="input input-bordered w-full max-w-md" />
          <textarea name="description" value={team.description} onChange={(e)=>formChange(e)} className="textarea textarea-bordered resize-none max-w-md" placeholder="Description"></textarea>
          <button type='submit' onChange={(e)=>formChange(e)} className='w-[100px] text-white btn btn-success'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default TeamsPage