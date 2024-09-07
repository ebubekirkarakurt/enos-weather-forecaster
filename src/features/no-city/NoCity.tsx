import React from 'react'
import Navbar from '../../components/Navbar'
import '../../styles/navbar.styles.css'

type Props = {}

export default function NoCity({}: Props) {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
    </div>
  )
}