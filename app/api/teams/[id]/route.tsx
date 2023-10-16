import prisma from "@/prisma/client"

export async function DELETE(req:NextRequest){


    const id = parseInt(params.id)

    const deletedTeam = await prisma.team.delete({
        where:{
            id: id
        }
    })
}