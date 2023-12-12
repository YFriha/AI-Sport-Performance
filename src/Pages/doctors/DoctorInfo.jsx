// import React from 'react'

export default function DoctorInfo() {
  return (
    <div>
      <div>{props.info.fname}</div>
      <div>{props.info.lname}</div>
      {/* <div>{props.info.age}</div>
      <div>{props.info.height}</div>
      <div>{props.info.value}</div> */}
      <div>{props.info.email}</div>
      <div>{props.info.phone}</div>
    </div>
  )
}
