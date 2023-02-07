import React from 'react'
import '../src/CSSFile/TeamNumber.css'

const TeamNumber = ({selectedTeam, numberOfMember}) => {
  return (
    <>
    <div className='main1'>
    {selectedTeam} Has {numberOfMember} Members
    </div>
      
    </>
  )
}

export default TeamNumber
