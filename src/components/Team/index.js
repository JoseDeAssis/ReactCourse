import Player from "../Player";
import "./Team.css"

const Team = ({team, players, aoDeletar, changeColor, aoFavoritar}) => {
    return (
        players.length > 0 && <section className="team" style={{ backgroundColor: team.primaryColor }}>
            <input value={team.tertiaryColor} onChange={ event => changeColor(team.id, event.target.value) } type="color" className="input-cor" />
            <h3 style={{ borderColor: team.tertiaryColor, color: team.secondaryColor }}>{ team.name }</h3>
            <div className="players">
                { players.map((player, index) => <Player 
                                                    key={ index } 
                                                    name={ player.nome } 
                                                    role={ player.cargo } 
                                                    image={ player.imagem}
                                                    player={ player }
                                                    primaryColor={ team.primaryColor }
                                                    secondaryColor={ team.secondaryColor }
                                                    tertiaryColor={ team.tertiaryColor }
                                                    aoDeletar={ aoDeletar }
                                                    aoFavoritar={ aoFavoritar } />)}
            </div>
        </section>
    )
}

export default Team;