import { useState } from "react"

const SearchPlace = ({ send, state }) => {
    const [flight, setFlight] = useState('')
    const toNextPage = () => {
        send({ type: 'CONTINUE', selectedCountry: flight})
    }
    const sort = () => {
        const map = state.context.countries.map(element => element.name.common)
        const toSort = map.sort()
        return toSort
    }
    
    return (
        <>
            <label htmlFor="destino" className="text-4xl font-bold py-5">Busca tu Destino</label>
            <select name="paises" id="destino" className="text-[20px] bottom-3 rounded-md px-2" value={flight} onChange={(event) => setFlight(event.target.value)}>
                <option value="" disabled>Escoge tu destino</option>
                {
                    sort().map(element => {
                        return <option value={element} key={element}>{element}</option>
                    })
                }
            </select>
            <button 
            className={`text-2xl  bg-opacity-60 px-6 py-1 mt-6 rounded-md ${flight === '' ? 'bg-gray-600' : 'bg-purple-600 hover:bg-purple-700'}`}
            onClick={toNextPage}
            disabled={flight === ''}
            >Siguiente</button>
        </>
    )
}

export { SearchPlace }