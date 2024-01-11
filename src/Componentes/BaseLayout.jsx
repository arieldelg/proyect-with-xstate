import { useMachine } from "@xstate/react";
import { bookingMachine } from "../Machines/bookingMachine";
import { NavBar } from "./NavBar";
import { StepLayout } from "./StepLayout";
import './BaseLayout.css'

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine)
    
    return(
        <main className="baselayout-main">
            <NavBar state={state} send={send}/>
            <StepLayout state={state} send={send}/>
        </main>
    );
}

export { BaseLayout }