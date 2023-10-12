import React from "react";

const UpdateIssueBox = ({issue}) => {
  //console.log(issue)
  return (
    <div
      id="editSection"
      className="w-[320px] text-sm bg-white shadow-md rounded-lg"
    >
      {issue && <form className="flex flex-col space-y-4 p-6">
        <div className="w-full flex flex-col space-y-1">
          <label>Team</label>
          <select
            name="team"
            defaultValue={issue.team}
            className="select select-bordered select-sm w-full max-w-lg"
          >
            <option disabled value="DEFAULT">
              None
            </option>
            <option value="Network">Network</option>
            <option value="System">System</option>
          </select>
        </div>
        <div className="w-full flex flex-col space-y-1">
          <label>Assignee</label>
          <select
            name="team"
            defaultValue={issue.member}
            className="select select-bordered select-sm w-full max-w-lg"
          >
            <option disabled value="DEFAULT">
              None
            </option>
            <option value="Mubasshir">Mubasshir</option>
            <option value="Zafar">Zafar</option>
          </select>
        </div>

        <div className="w-full flex flex-col space-y-1">
          <label>Priority</label>
          <select
            name="team"
            defaultValue={issue.priority}
            className="select select-bordered select-sm w-full max-w-lg"
          >
            <option disabled value="DEFAULT">
              None
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div className="w-full flex flex-col space-y-1">
          <label>Status</label>
          <select
            name="team"
            className="select select-bordered select-sm w-full max-w-lg"
          >
            <option disabled value="DEFAULT">
              None
            </option>
            <option value="New">New</option>
            <option value="Pending">Pending</option>
            <option value="Work in progress">Work in progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <label>Comment</label>
          <textarea
            name="comments"
            className="textarea textarea-bordered resize-none"
          ></textarea>
        </div>

        <button type="submit" className=" text-white btn btn-sm btn-success">
          Save
        </button>
      </form>}
    </div>
  );
};

export default UpdateIssueBox;
