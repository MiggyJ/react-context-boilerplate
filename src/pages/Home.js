
// Component
import Greeting from "../components/Home/Greeting";

// style
const style = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3em'
}

const Home = () => {


    return (
        <div style={style}>
           <Greeting /> 
        </div>
    )
}

export default Home
