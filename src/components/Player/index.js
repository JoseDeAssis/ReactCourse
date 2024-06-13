import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./Player.css"

const Player = ({ player, primaryColor, secondaryColor, tertiaryColor, aoDeletar, aoFavoritar }) => {

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    function favorite() {
        aoFavoritar(player.id);
    }

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
                <div className='favorite'>
                    {player.favorite ? 
                        <AiFillHeart { ...propsFavorite } color='#ff0000'/> : 
                        <AiOutlineHeart { ...propsFavorite }/>}
                </div>
            </div>
        </div>
    )
}

export default Player