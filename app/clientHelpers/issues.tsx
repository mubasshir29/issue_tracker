const server = 'http://localhost:3000'

export const getAllIssues = async () =>{
    const allIssues = await fetch('http://localhost:3000/api/issue')
    const data = await allIssues.json()
    // console.log(data)
    return data
    //console.log(await allIssues.json())
}

export const getOneIssue = async ()=>{

}
