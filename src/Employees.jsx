import React from 'react'

import femaleProfile from './Images/girl.png';
import maleProfile from './Images/boy.jpg';
import '../src/CSSFile/Employees.css';

const Employees = ({employees, selectedTeam, handelTeamSelectChange, handelEmployeeCardClick}) => { 

    
  return (
    <>
  
    <div className='options_select'>
     <select className='options' value={selectedTeam} onChange={handelTeamSelectChange}>
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
    </select>
    </div>
    <main className="container">
   
        <div className="row">
            <div className="col">
            <div className="card-collection">
                    {
                    employees.map((employee) => (
                        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam) ? 'card2' : 'card'} onClick={handelEmployeeCardClick}>
                        <div className="profileImage"> 
                        {(employee.gender === 'male')?<img src={maleProfile} className="card-image-top" alt="profile_image"/>
                        :<img src={femaleProfile} className="card-image-top" alt="profile_image"/>}
                        
                        </div>
                        <div className="fulname">
                            FullName : {employee.fullName}
                       </div>
                       <div className='designation'>
                            Designation : {employee.designation}
                       </div>

                        </div>
                        
                    ))
                    
                    }
                    </div>
      </div>
      </div>
      </main>
    </>
  )
}

export default Employees
