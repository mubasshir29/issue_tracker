"use client";
import { getOneIssue } from "@/app/clientHelpers/issues";
import UpdateIssueBox from "@/app/components/UpdateIssueBox";
import React, { useEffect, useState } from "react";

interface Issue {
  id: number;
  title: string;
  description: string;
  priority: String;
  team: string;
  member: string;
  status: string;
  comments: string;
  createdAt: string;
  closeDate: string;
}

interface Params {
  params: {
    id: number;
  };
}

const page = ({ params }: Params) => {
  //console.log(params.id)
  const { id } = params;
  const [issue, setIssue] = useState<Issue>();

  const getIssueDetails = async () => {
    const data = await getOneIssue(id);
    //console.log(data)
    setIssue(data!);
  };
  useEffect(() => {
    getIssueDetails();
  }, []);
  return (
    <div className="">
      {issue && (
        <div className="flex items-start justify-between">
          <div className="w-[840px]  flex flex-col space-y-8">
            <div className="flex flex-col p-8 bg-white shadow-md rounded-lg space-y-6">
              <div>
                <h1 className="text-base font-semibold">Title</h1>
                <h1>{issue && issue.title}</h1>
              </div>
              <div>
                <h1 className="text-base font-semibold">Description</h1>
                <h1>{issue.description}</h1>
              </div>
              <div className="flex">
                <div className="flex-1">
                  <h1 className="text-base font-semibold">Team</h1>
                  <h1>{issue.team}</h1>
                </div>
                <div className="flex-1">
                  <h1 className="text-base font-semibold">Assignee</h1>
                  <h1>{issue.member}</h1>
                </div>
              </div>

              <div className="flex">
                <div className="flex-1">
                  <h1 className="text-base font-semibold">Priority</h1>
                  <h1>{issue.priority}</h1>
                </div>
                <div className="flex-1">
                  <h1 className="text-base font-semibold">Status</h1>
                  <h1>{issue.status}</h1>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-base font-semibold">Close Date</h1>
                <h1>{issue.closeDate}</h1>
              </div>
            </div>

            <div id="Comments" >
            {!issue.comments ? 
              <h1>No comments</h1> : 
              <div>
                <h1>Comments</h1>
              </div> }
            </div>

          </div>

          <UpdateIssueBox issue={issue}/>

        </div>
      )}
    </div>
  );
};

export default page;
