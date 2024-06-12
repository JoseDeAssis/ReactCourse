import { AiFillCloseCircle } from 'react-icons/ai';
import "./Player.css"

const Player = ({ player, primaryColor, secondaryColor, tertiaryColor, aoDeletar }) => {
    return (
        <div className="player">
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={ () => aoDeletar(player.id) } 
            />
            <div className="playerHeader" style={{ backgroundColor: tertiaryColor }}>
                <img src={ player.imagem } alt={player.nome} />
            </div>
            <div className="playerFooter">
                <h4>{ player.nome }</h4>
                <h5>{ player.cargo }</h5>
            </div>
        </div>
    )
}

export default Player