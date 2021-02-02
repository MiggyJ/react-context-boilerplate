import { useContext } from 'react'

// Context
import { GlobalContext } from '../../context/GlobalState'

const Greeting = () => {
    const { greeting } = useContext(GlobalContext)
    return ( 
        <>
            { greeting }
        </>
    );
}
 
export default Greeting;