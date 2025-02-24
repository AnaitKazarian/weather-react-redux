import './App.css'
import Info from "./Components/info.jsx";
import Data from "./Components/data.jsx";

function App() {

    return (
        <div className={'wrapper'}>
            <div className={'main'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <Info/>
                        <Data/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
