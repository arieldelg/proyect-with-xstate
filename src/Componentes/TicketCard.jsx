
const TicketCard = ({ data, state }) => {
    return (
        <div className="py-2">
            <h1 className="text-2xl font-bold">{data.name} {data.lastName}</h1>
            <div className="flex gap-4 text-lg">
                <p><strong>Flight to:</strong> {state.context.selectedCountry}</p>
                <p><strong>Departur Hour:</strong> 4:00 pm</p>
                <p><strong>Departur Day:</strong> example</p>
            </div>
            
        </div>
    )
}

export { TicketCard }