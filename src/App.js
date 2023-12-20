import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  const [players, setPlayer] = useState([])

  const teams = [
    {
      name: "ATLANTA REIGN",
      primaryColor: "#C4C4C4",
      secondaryColor: "#910F1B",
      tertiaryColor: "#323232"
    },
    {
      name: "BOSTON UPRISING",
      primaryColor: "#174B97",
      secondaryColor: "#EFDF00",
      tertiaryColor: "#000000"
    },
    {
      name: "DALLAS FUEL",
      primaryColor: "#032340",
      secondaryColor: "#0072CE",
      tertiaryColor: "#FFFFFF"
    },
    {
      name: "FLORIDA MAYHEM",
      primaryColor: "#cf4891",
      secondaryColor: "#3ab3e4",
      tertiaryColor: "#000000"
    },
    {
      name: "GUANGZHOU CHARGE",
      primaryColor: "#0FEED9",
      secondaryColor: "#122D42",
      tertiaryColor: "#66A2B2"
    },
    {
      name: "HANGZHOU SPARK",
      primaryColor: "#FB7299",
      secondaryColor: "#FFFFFF",
      tertiaryColor: "#5788CE"
    },
    {
      name: "HOUSTON OUTLAWS",
      primaryColor: "#000000",
      secondaryColor: "#97D700",
      tertiaryColor: "#FFFFFF"
    },
    {
      name: "LONDON SPITFIRE",
      primaryColor: "#59CBE8",
      secondaryColor: "#1C2B39",
      tertiaryColor: "#FF8200"
    },
    {
      name: "LOS ANGELES GLADIATORS",
      primaryColor: "#3C1053",
      secondaryColor: "#FFFFFF",
      tertiaryColor: "#000000"
    },
    {
      name: "LOS ANGELES VALIANT",
      primaryColor: "#3289C9",
      secondaryColor: "#FBD100",
      tertiaryColor: "#FFFFFF"
    },
    {
      name: "NEW YORK EXCELSIOR",
      primaryColor: "#171C38",
      secondaryColor: "#0F57EA",
      tertiaryColor: "#FF1C26"
    },
    {
      name: "SAN FRANCISCO SHOCK",
      primaryColor: "#000000",
      secondaryColor: "#A6AEB1",
      tertiaryColor: "#FC4B00"
    },
    {
      name: "SEOUL DYNASTY",
      primaryColor: "#AA8A00",
      secondaryColor: "#000000",
      tertiaryColor: "#FFFFFF"
    },
    {
      name: "SEOUL INFERNAL",
      primaryColor: "#E2012D",
      secondaryColor: "#BF9D7E",
      tertiaryColor: "#050603"
    },
    {
      name: "SHANGHAI DRAGONS",
      primaryColor: "#D22630",
      secondaryColor: "#000000",
      tertiaryColor: "#FCE300"
    },
    {
      name: "TORONTO DEFIANT",
      primaryColor: "#000000",
      secondaryColor: "#C10021",
      tertiaryColor: "#91A1AF"
    },
    {
      name:"VANCOUVER TITANS",
      primaryColor: "#09226B",
      secondaryColor: "#2FB228",
      tertiaryColor: "#FFFFFF"
    },
    {
      name: "VEGAS ETERNAL",
      primaryColor: "#FFFFFF",
      secondaryColor: "#9C182F",
      tertiaryColor: "#FFAA1D"
    },
    {
      name: "WASHINGTON JUSTICE",
      primaryColor: "#990034",
      secondaryColor: "#FFFFFF",
      tertiaryColor: "#003768"
    },
  ]

  const playerRegistered = (player) => {
    console.log(player)
    setPlayer([...players, player])
    console.log(players)
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={ teams.map(team => team.name) } registeredPlayer={ player => playerRegistered(player) } />
      { teams.map(team => {
          return (
            <Team 
              key = { team.name }
              team = { team.name } 
              primaryColor = { team.primaryColor }
              secondaryColor = { team.secondaryColor }
              tertiaryColor = { team.tertiaryColor }   
              players = { players.filter(player => player.time === team.name) }         
              />
            )
        } )}
      <Footer />
    </div>
  );
}

export default App;
