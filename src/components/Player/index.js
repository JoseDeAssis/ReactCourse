import "./Player.css"

const Player = ({ name, role, image, primaryColor, secondaryColor, tertiaryColor }) => {
    return (
        <div className="player">
            <div className="playerHeader" style={{ backgroundColor: tertiaryColor }}>
                <img src={ image } alt={name} />
            </div>
            <div className="playerFooter">
                <h4>{ name }</h4>
                <h5>{ role }</h5>
            </div>
        </div>
    )
}

export default Player