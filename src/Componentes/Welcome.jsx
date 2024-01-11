
const Welcome = ({ send }) => {
    const toNextComponent = () => {
        send({type: 'CONTINUE'})
    }
    return(
        <>
            <p className="text-3xl py-8 font-base text-center">Es hora de que empiezes tu nueva aventura, animate a esta nueva experiencia!!!</p>
            <button 
            className="text-3xl bg-purple-500 px-4 py-1 rounded-lg"
            onClick={toNextComponent}
            >Comenzar 😍</button>
        </>
    )
}

export { Welcome }