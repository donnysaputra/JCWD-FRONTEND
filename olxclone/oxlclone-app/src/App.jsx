import logo from './logo.svg';
import './App.css';
import './style.css'
import NavBar from './component/NavBar';
import ContentList from './component/ContentList';
import ContentList2 from './component/ContentList2';
import InputComponent from './component/InputComponent';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="container-content">
      <ContentList/>
      </div>
      
      <div id='container-content2'>
        <ContentList2/>
      </div>

      {/* <InputComponent/> */}
    </div>
  );
}

export default App;
