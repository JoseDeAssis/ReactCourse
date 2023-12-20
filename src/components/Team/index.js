import Player from "../Player";
import "./Team.css"

const Team = (props) => {
    return (
        props.players.length > 0 && <section className="team" style={{ backgroundColor: props.primaryColor }}>
            <h3 style={{ borderColor: props.tertiaryColor, color: props.secondaryColor }}>{ props.team }</h3>
            <div className="players">
                { props.players.map(player => <Player 
                                                    key={ player.nome } 
                                                    name={ player.nome } 
                                                    role={ player.cargo } 
                                                    image={ player.imagem}
                                                    primaryColor={ props.primaryColor }
                                                    secondaryColor={ props.secondaryColor }
                                                    tertiaryColor={ props.tertiaryColor } />)}
            </div>
        </section>
    )
}

export default Team;