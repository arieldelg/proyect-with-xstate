import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import './NavBar.css'

const NavBar = ({ state, send }) => {
    const toHome = () => {
        if(state.matches('editPassengers')) {
            send({ type: 'BACK' })
        } else {
            send({ type: 'CANCEL',  newValue: [] })
        }
    }
    return(
        <nav className='navbar-nav'>
            {
                (state.matches('passengers') || state.matches('tickets')) &&
                <ArrowUturnLeftIcon className='w-9 cursor-pointer' onClick={() => send({ type: 'BACK' })}/>
            }
            {
                state.matches('editPassengers') &&
                <h1 className='navbar-title'>Edita tu INFO</h1>
            }
            {
                !state.matches('editPassengers') &&
                <h1 className='navbar-title'>Reserva tu Viaje ✈️</h1>
            }
            {
                !state.matches('inicial') &&
                <button 
                className='navbar-button'
                onClick={toHome}
                >Cancelar</button>
            }
        </nav>
    )
}

export { NavBar }