import React from 'react'

const IssueNew = () => {
  return (
    <div className='px-12 py-8 bg-white rounded-xl shadow-md'>

    
    <div className='w-[640px] max-w-[640px] '>
      <h1 className='text-2xl font-semibold text-slate-600'>New Issue</h1>
      <form className='flex flex-col space-y-4 mt-4'>
        <div className='flex flex-col space-y-1'>
          <label>Title</label>
          <input name='title' type="text" className="input input-bordered w-full" />
        </div>
        <div className='flex flex-col space-y-1'>
          <label>Description</label>
          <textarea name='description' className="textarea textarea-bordered resize-none"></textarea>
        </div>
        <div className='flex space-x-4'>
        <div className='w-[50%] flex flex-col space-y-1'>
          <label>Team</label>
          <select name='team' className="select select-bordered w-full max-w-xs">
            <option disabled selected></option>
            <option>Network</option>
            <option>System</option>
          </select>
        </div>
        <div className='w-[50%] flex flex-col space-y-1'>
          <label>Assignee</label>
          <select name='member' className="select select-bordered w-full max-w-xs">
            <option disabled selected></option>
            <option>Mubasshir</option>
            <option>Zafar</option>
          </select>
        </div>
        </div>
        
        <div className='flex flex-col space-y-1'>
          <label>Status</label>
          <select name='status' className="select select-bordered w-full max-w-xs">
            <option disabled selected>Current status</option>
            <option>Pending</option>
            <option>Work in progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div className='flex flex-col space-y-1'>
          <label>Comments</label>
          <textarea className="textarea textarea-bordered resize-none"></textarea>
        </div>
        <div className='flex space-x-2 justify-start'>
        <button className='w-[100px] text-white btn btn-success'>Save</button>

          <button className='w-[100px] text-white btn btn-error'>Cancel</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default IssueNew