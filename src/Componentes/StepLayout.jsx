import { Welcome } from "./Welcome"
import { SearchPlace } from "./SearchPlace"
import { EditPassengersPage } from "./EditPassengersPage"
import { PassengersPage } from "./PassengerPage"
import { TicketPage } from "./TicketPage"

const StepLayout = ({ state, send }) => {
    const renderComponent = () => {
        if(state.matches('inicial')) {
            return <Welcome send={send} state={state}/>
        } else if (state.matches('search')) {
            return <SearchPlace send={send} state={state}/>
        } else if (state.matches('passengers')) {
            return <PassengersPage send={send} state={state}/>
        } else if (state.matches('editPassengers')) {
            return <EditPassengersPage state={state} send={send}/>
        } else if (state.matches('tickets')) {
            return <TicketPage state={state} send={send} />
        }
    }
    return(
        <div className="w-full flex flex-col items-center px-4 pb-6 bg-white bg-opacity-70 rounded-b-lg">
          {renderComponent()}  
        </div>
    )
}

export { StepLayout }