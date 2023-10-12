import { request } from "http"
import { NextRequest, NextResponse } from "next/server"
import schema from "./schema"
import prisma from "@/prisma/client"
import moment from "moment"


export async function GET(){
    const allIssues = await prisma.issue.findMany()

    if(!allIssues) return NextResponse.json({msg: "error in retrieving the data"},{status:401})

    return NextResponse.json(allIssues, {status:200})
}

export async function POST(req:NextRequest){
    const reqBody = await req.json()

    const validation = schema.safeParse(reqBody)

    if(!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    const newIssue = await prisma.issue.create({
        data: {
            title:reqBody.title,
            description:reqBody.description,
            team:reqBody.team,
            member:reqBody.member,
            comments:reqBody.comments,
            status:reqBody.status,
            createdAt : moment().format('D-MM-YYYY'),
            closeDate: moment().add(3,"days").format('D-MM-YYYY')
        }
    })

    if(!newIssue) return null

    return NextResponse.json({msg: "Issue created successfully"},{status:200})
}