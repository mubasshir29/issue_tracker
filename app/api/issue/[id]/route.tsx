import { request } from "http"
import { NextRequest, NextResponse } from "next/server"
import schema from "./../schema"
import prisma from "@/prisma/client"
import moment from "moment"

interface Props{
    params : {
        id: string
    }
}

export async function GET(req:NextRequest, {params} : Props){
    const id = parseInt(params.id)

    const issue = await prisma.issue.findUnique({
        where:{
            id: id
        }
    })

    return NextResponse.json(issue,{status:200})
}

export async function PUT(req:NextRequest, {params} : Props){
    const id = parseInt(params.id)

    const issue = await prisma.issue.findUnique({
        where:{
            id: id
        }
    })

    return NextResponse.json(issue,{status:200})
}