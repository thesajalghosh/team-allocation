import React, { useState } from 'react';
import './CSSFile/GroupTeamMember.css'

const GroupTeamMember = ({ employees, selectedTeam, setTeam }) => {

  const [groupedEmployees, setGroupData] = useState(groupTeamMember());
  var teamAMembersA
  var teamBMembersB
  var teamCMembersC
  var teamDMembersD

  function groupTeamMember() {
    var teams = [];

     teamAMembersA = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', member: 'teamAMember', collapsed: selectedTeam === 'TeamA' ? true : false };
    teams.push(teamA);

     teamBMembersB = employees.filter((employee) => employee.teamName === 'TeamB');
    var teamB = { team: 'TeamB', member: 'teamBMember', collapsed: selectedTeam === 'TeamB' ? true : false };
    teams.push(teamB);

     teamCMembersC = employees.filter((employee) => employee.teamName === 'TeamC');
    var teamC = { team: 'TeamC', member: 'teamCMember', collapsed: selectedTeam === 'TeamC' ? true : false };
    teams.push(teamC);

     teamDMembersD = employees.filter((employee) => employee.teamName === 'TeamD');
    var teamD = { team: 'TeamD', member: 'teamDMember', collapsed: selectedTeam === 'TeamD' ? true : false };
    teams.push(teamD);

    return teams;
  }
  // console.log("sajla")

  console.log(teamAMembersA);

  const [isCollapsedA, setIsCollapsedA] = useState(true);
  const [isCollapsedB, setIsCollapsedB] = useState(true);
  const [isCollapsedC, setIsCollapsedC] = useState(true);
  const [isCollapsedD, setIsCollapsedD] = useState(true);

  return (
    <main className="container">

      <div className="divA" onClick={() => setIsCollapsedA(!isCollapsedA)}>
        <button className='buttondiv'>
          TeamA
        </button>
        {!isCollapsedA && (
        <div className='outerdata'>
          {
                    teamAMembersA.map((employee) => (
                        <div key={employee.id} id={employee.id} className="innerdata" >
                        
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
      )}
      </div>

      <div className="divB ">
        <button className='buttondiv' onClick={() => setIsCollapsedB(!isCollapsedB)}>
          TeamB
        </button>
        {!isCollapsedB && (
        <div className='outerdata'>
        {
          teamBMembersB.map((employee) => (
                        <div key={employee.id} id={employee.id} className="innerdata">
                        
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
      )}
      </div>

      <div className="divC ">
        <button className='buttondiv' onClick={() => setIsCollapsedC(!isCollapsedC)}>
          TeamC
        </button>
        {!isCollapsedC && (
        <div className='outerdata'>
        {
                    teamCMembersC.map((employee) => (
                        <div key={employee.id} id={employee.id} className="innerdata" >
                        
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
      )}
      </div>


      <div className="divD">
        <button className='buttondiv' onClick={() => setIsCollapsedD(!isCollapsedD)}>
          TeamD
        </button>
        {!isCollapsedD && (
        <div className='outerdata'>
        {
                    teamDMembersD.map((employee) => (
                        <div key={employee.id} id={employee.id} className="innerdata" >
                        
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
      )}


      </div>




    </main>

  )
}

export default GroupTeamMember
