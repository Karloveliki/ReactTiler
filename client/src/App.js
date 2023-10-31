import logo from './logo.svg';
import './App.css';
import MapTiler from './components/MapTiler'
function App() {
  const radioStanice=[
    {
      name: "radio marjan",
      id:"1",
      frekvencija:"80.1",
      lng:"16.476634653326453",
      lat:"43.521867504689745"
    },
    {
      name: "radio sunce",
      id:"2",
      frekvencija:"85.1",
      lng:"16.43560758331894",
      lat:"43.514274134035794"
    },
    {
      name: "radio bol",
      id:"3",
      frekvencija:"99.2",
      lng:"16.41560758331894",
      lat:"43.514274134035794"
    }
  ]
  return (
    <div className="App">
          <MapTiler lng="16.470369012927815" lat="43.51330933410279" zoom="10" radioStanice={radioStanice} apiKey="EyqY6iqRC1RKzlOnWTFD"/>
          {/*ako ce kroistiti komponentu moraju joj dati ove atribute*/}
    </div>
  );
}

export default App;
