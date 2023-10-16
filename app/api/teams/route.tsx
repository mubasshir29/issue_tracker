import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function GET(){
    const allTeams = await prisma.team.findMany()
    console.log("All teams" , allTeams )
    return NextResponse.json(allTeams, {status:200})
}

export async function POST(req:NextRequest){
    const reqBody = await req.json()
    console.log("Request received",reqBody)

    const newTeam = await prisma.team.create({
        data:{
            name : reqBody.name,
            description: reqBody.description
        }
    })

    if(newTeam){
        console.log("Team created")
        return NextResponse.json({msg: "Team created successfully"},{status:200})
    }

    
}
export async function DELETE(req:NextRequest){
    const reqBody = await req.json()

    console.log(reqBody)

    const deletedTeam = await prisma.team.delete({
        where:{
            id: reqBody.id
        }
    })

    if(deletedTeam){
        return NextResponse.json({deletedTeam},{status:200})
    }
}