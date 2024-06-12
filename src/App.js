import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [players, setPlayer] = useState([])

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "ATLANTA REIGN",
      primaryColor: "#C4C4C4",
      secondaryColor: "#910F1B",
      tertiaryColor: "#323232"
    },
    {
      id: uuidv4(),
      name: "BOSTON UPRISING",
      primaryColor: "#174B97",
      secondaryColor: "#EFDF00",
      tertiaryColor: "#000000"
    },
    {
      id: uuidv4(),
      name: "DALLAS FUEL",
      primaryColor: "#032340",
      secondaryColor: "#0072CE",
      tertiaryColor: "#FFFFFF"
    },
    {
      id: uuidv4(),
      name: "FLORIDA MAYHEM",
      primaryColor: "#cf4891",
      secondaryColor: "#3ab3e4",
      tertiaryColor: "#000000"
    },
    {
      id: uuidv4(),
      name: "GUANGZHOU CHARGE",
      primaryColor: "#0FEED9",
      secondaryColor: "#122D42",
      tertiaryColor: "#66A2B2"
    },
    {
      id: uuidv4(),
      name: "HANGZHOU SPARK",
      primaryColor: "#FB7299",
      secondaryColor: "#FFFFFF",
      tertiaryColor: "#5788CE"
    },
    {
      id: uuidv4(),
      name: "HOUSTON OUTLAWS",
      primaryColor: "#000000",
      secondaryColor: "#97D700",
      tertiaryColor: "#FFFFFF"
    },
    {
      id: uuidv4(),
      name: "LONDON SPITFIRE",
      primaryColor: "#59CBE8",
      secondaryColor: "#1C2B39",
      tertiaryColor: "#FF8200"
    },
    {
      id: uuidv4(),
      name: "LOS ANGELES GLADIATORS",
      primaryColor: "#3C1053",
      secondaryColor: "#FFFFFF",
      tertiaryColor: "#000000"
    },
    {
      id: uuidv4(),
      name: "LOS ANGELES VALIANT",
      primaryColor: "#3289C9",
      secondaryColor: "#FBD100",
      tertiaryColor: "#FFFFFF"
    },
    {
      id: uuidv4(),
      name: "NEW YORK EXCELSIOR",
      primaryColor: "#171C38",
      secondaryColor: "#0F57EA",
      tertiaryColor: "#FF1C26"
    },
    {
      id: uuidv4(),
      name: "SAN FRANCISCO SHOCK",
      primaryColor: "#000000",
      secondaryColor: "#A6AEB1",
      tertiaryColor: "#FC4B00"
    },
    {
      id: uuidv4(),
      name: "SEOUL DYNASTY",
      primaryColor: "#AA8A00",
      secondaryColor: "#000000",
      tertiaryColor: "#FFFFFF"
    },
    {
      id: uuidv4(),
      name: "SEOUL INFERNAL",
      primaryColor: "#E2012D",
      secondaryColor: "#BF9D7E",
      tertiaryColor: "#050603"
    },
    {
      id: uuidv4(),
      name: "SHANGHAI DRAGONS",
      primaryColor: "#D22630",
      secondaryColor: "#000000",
      tertiaryColor: "#FCE300"
    },
    {
      id: uuidv4(),
      name: "TORONTO DEFIANT",
      primaryColor: "#000000",
      secondaryColor: "#C10021",
      tertiaryColor: "#91A1AF"
    },
    {
      id: uuidv4(),
      name:"VANCOUVER TITANS",
      primaryColor: "#09226B",
      secondaryColor: "#2FB228",
      tertiaryColor: "#FFFFFF"
    },
    {
      id: uuidv4(),
      name: "VEGAS ETERNAL",
      primaryColor: "#FFFFFF",
      secondaryColor: "#9C182F",
      tertiaryColor: "#FFAA1D"
    },
    {
      id: uuidv4(),
      name: "WASHINGTON JUSTICE",
      primaryColor: "#990034",
      secondaryColor: "#FFFFFF",
      tertiaryColor: "#003768"
    },
  ])

  const playerRegistered = (player) => {
    setPlayer([...players, player])
  }

  const createTeam = (newTeam) => {
    setTeams([ ...teams, { ...newTeam, id: uuidv4()}]);
  }

  function deletePlayer(id) {
    setPlayer(players.filter(player => player.id !== id));
  }

  function updateTeamColor(id, color) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.tertiaryColor = color
      }
      return team;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={ teams.map(team => team.name) } 
        registeredPlayer={ player => playerRegistered(player) } 
        createTeam = { createTeam }
      />
      { teams.map((team, index) => {
          return (
            <Team 
              key = { index }
              team = { team }
              aoDeletar={ deletePlayer }
              players = { players.filter(player => player.time === team.name) }    
              changeColor = { updateTeamColor }     
              />
            )
        } )}
      <Footer />
    </div>
  );
}

export default App;
