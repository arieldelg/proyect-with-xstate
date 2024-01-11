import { TicketCard } from "./TicketCard"

const TicketPage = ({ state, send }) => {
    console.log(state.context)
    return(
        <div className="w-full">
            <div className="py-2">
                {
                    state.context.toPassengers.map(element => {
                        return <TicketCard data={element} key={element.id} state={state}/>
                    })
                }
            </div>
        </div>
    )
}

export { TicketPage }