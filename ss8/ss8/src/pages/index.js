import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <table className='table table-primary'>
        <thead className='table-danger'>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th>time</th>
          <th>actions</th>
        </tr>
        </thead>
        <tr>

        </tr>
      </table>
    </>
  )
}
