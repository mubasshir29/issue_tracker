const server = 'http://localhost:3000'

export const getAllIssues = async () =>{
    const allIssues = await fetch('http://localhost:3000/api/issue')
    const data = await allIssues.json()
    // console.log(data)
    return data
    //console.log(await allIssues.json())
}

export const getOneIssue = async (id)=>{
    const response = await fetch(`http://localhost:3000/api/issue/${id}`)
    //console.log(response.json())
    return response.json()
}


export const createIssue = async (issue) =>  {
    console.log(issue)
    const response = await fetch('http://localhost:3000/api/issue',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(issue)
    })
    if(response.status == 200) {
        console.log("Issue created")
    }
}
