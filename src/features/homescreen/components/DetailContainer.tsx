import React from 'react'

type Props = {
    title: string,
    description: string
}

export default function DetailContainer({title, description}: Props) {
  return (
    <div style={{textAlign:'center'}} >
        <h1 id='header-txt'>{title}</h1>
        <p id='body-txt'>{description}</p>
    </div>
  )
}