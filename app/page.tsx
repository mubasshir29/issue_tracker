import Image from 'next/image'
import IssuesList from './components/IssuesList'
import DashboardCard from './components/DashboardCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='flex space-x-4'>
        <Link href='/issues'><DashboardCard values={{title:"All Issues" , value:12 ,color:'critical' }} /></Link>
        <DashboardCard values={{title:"Pending Issues" , value:12,color:'critical'}} />
        <DashboardCard values={{title:"Critical Issues" , value:12, color:'critical'}} />
        <DashboardCard values={{title:"My Issues" , value:12, color:'critical'}} />
      </div>
    </main>
  )
}
