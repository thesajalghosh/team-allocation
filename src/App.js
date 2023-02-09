import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import TeamNumber from './TeamNumber';
import NoFound from './NoFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GroupTeamMember from './GroupTeamMember';

function App() {

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('SelectedTeam')) || 'TeamB')

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [

        {
            id: 1, fullName: "Sajal Ghosh", designation: "Java Developer", gender: "male", teamName: "TeamA"
        },
        {
            id: 2, fullName: "Akash Ghosh", designation: "JavaScript Developer", gender: "male", teamName: "TeamB"
        },
        {
            id: 3, fullName: "Sathi pramanik", designation: "HTML Developer", gender: "female", teamName: "TeamD"
        },
        {
            id: 4, fullName: "Mike Handerson", designation: "vue Developer", gender: "male", teamName: "TeamC"
        },
        {
            id: 5, fullName: "Noyan DAS", designation: "Java Developer", gender: "male", teamName: "TeamD"
        },
        {
            id: 6, fullName: "Eleven Host", designation: "Python Developer", gender: "female", teamName: "TeamB"
        },
        {
            id: 7, fullName: "Nansy Hilar", designation: "React Developer", gender: "female", teamName: "TeamA"
        },
        {
            id: 8, fullName: "Kuntal Bauri", designation: "Java Developer", gender: "male", teamName: "TeamC"
        },
        {
            id: 9, fullName: "Arpita Chattrag", designation: "Reack Developer", gender: "female", teamName: "TeamD"
        },
        {
            id: 10, fullName: "Lukas Handerson", designation: "SQL Developer", gender: "female", teamName: "TeamA"
        },
        {
            id: 11, fullName: "Joyas Hopper", designation: "Angular Developer", gender: "female", teamName: "TeamB"
        },
        {
            id: 12, fullName: "Will Hopper", designation: "Frontend Developer", gender: "male", teamName: "TeamA"
        },
        {
            id: 13, fullName: "Milan Ghosh", designation: "Frontend Developer", gender: "male", teamName: "TeamD"
        },
        {
            id: 14, fullName: "payal Hopper", designation: "Frontend Developer", gender: "female", teamName: "TeamC"
        },
        {
            id: 15, fullName: "Tokyo Hopper", designation: "Frontend Developer", gender: "female", teamName: "TeamB"
        }

    ]);

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees]);

    useEffect(() => {
        localStorage.setItem('SelectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function handelTeamSelectChange(event) {
        setTeam(event.target.value)
    }
    function handelEmployeeCardClick(event) {


        const transformEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
            ? (employee.teamName === selectedTeam) ? { ...employee, teamName: " " } : { ...employee, teamName: selectedTeam }
            : employee)

        setEmployees(transformEmployees)
    }


    return (

        <div className="App">
           
            <BrowserRouter>
            <Header />

                <TeamNumber selectedTeam={selectedTeam}
                    numberOfMember={employees.filter((employee) => employee.teamName === selectedTeam).length}
                />

                <Routes>

                    <Route path="/" element={
                        <Employees employees={employees}
                            selectedTeam={selectedTeam}
                            handelTeamSelectChange={handelTeamSelectChange}
                            handelEmployeeCardClick={handelEmployeeCardClick}
                        />}></Route>
                    <Route path="/GroupTeamMember" element={<GroupTeamMember employees= {employees} selectedTeam={selectedTeam} setTeam={setTeam }/>}></Route>
                    <Route path="*" element={<NoFound />}></Route>



                </Routes>
                <Footer /> 
            </BrowserRouter>
        </div>

    );
}

export default App;
