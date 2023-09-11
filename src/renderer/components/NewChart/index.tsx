import React from 'react'

type Props = {}

const  NewChart= (props: Props) => {
  return (
    <div>
      <div style={{width:"40px",border:"solid 1px black"}}>
      </div>
      <div>
        <div style={{width:"100%",border:"solid 1px black"}}></div>
        <div style={{width:"100%",height:50,border:"solid 1px black"}}></div>
      </div>
    </div>
  )
}

export default NewChart
