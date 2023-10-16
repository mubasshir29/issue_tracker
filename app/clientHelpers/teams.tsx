export const createTeam = async (team) =>  {
    console.log(team)
    const response = await fetch('http://localhost:3000/api/teams',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(team)
    })
    return response
}

export const deleteTeam = async (id) => {
    console.log("id", id)
    const response = await fetch(`http://localhost:3000/api/teams`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id})
    })
    return response
}

export const getAllTeams = async ()=>{
    const data = await fetch('http://localhost:3000/api/teams')
    const allTeams = data.json()
    //console.log("All teams",allTeams)
    return allTeams
}