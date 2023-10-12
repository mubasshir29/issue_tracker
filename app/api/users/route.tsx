import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function GET(){
    const allUsers = await prisma.

    if(!allIssues) return NextResponse.json({msg: "error in retrieving the data"},{status:401})

    return NextResponse.json(allIssues, {status:200})
}