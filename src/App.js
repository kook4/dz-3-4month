import './App.css';
import NamePage from "./pages/namePage/NamePage";
import AgePage from "./pages/agePage/AgePage";
import HelloPage from "./pages/helloPage/HelloPage";

function App (){


   const user = {name: "Anna", age: 19}
    return(
        <div className="App">
            <HelloPage/>
            <NamePage user={user}/>
            <AgePage user={user}/>


        </div>
  )
}

export default App;
