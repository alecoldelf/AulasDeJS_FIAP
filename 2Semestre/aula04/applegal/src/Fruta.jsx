import Emoji from "./Emoji"

export default function Fruta({ nome, emoji }) {
    return (
        <>
            <div>
                <span className="bg-orange">
                    Eu sou
                </span>
                <Emoji nome={emoji}/> 
                e me chamo {nome}
            </div>
        </>

    )
}