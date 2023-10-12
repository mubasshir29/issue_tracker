import {z} from 'zod'

const schema = z.object({
    "title":z.string(),
    "description":z.string(),
    "team":z.string(),
    "member":z.string(),
    "status":z.string(),
    "comments":z.string(),
    "createdAt":z.string(),
    "closeDate":z.string(),
})

export default schema