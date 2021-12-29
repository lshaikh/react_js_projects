import Pokemon from "./Pokemon";
const DisplayPokemon = ({pokemon}) => {

    return (
        <div className="outer_wrapper">
            { pokemon.map((val, idx) => 
                <Pokemon key={idx} thisPokemon={val} />
            )}
        </div>
    )
}

export default DisplayPokemon;