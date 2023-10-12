import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function GET(){
    const allUsers = await prisma.team.findMany()
    return NextResponse.json(allUsers, {status:200})
}

export async function POST(req:NextRequest){
    const reqBody = await req.json()

    const newTeam = await prisma.team.create(reqBody)

    return NextResponse.json({msg: "Team created successfully"},{status:200})
}