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
      lat:"43.521867504689745",
      // ovo gore je obavezno, a mogu se dodati i drugi atributi koje zelite, kao npr vrstaGlazbe, svi atributi ce biti poslani ukomponentu DetaljiStanice
      vrstaGlazbe:"pop"
    },
    {
      name: "radio sunce",
      id:"2",
      frekvencija:"85.1",
      lng:"16.43560758331894",
      lat:"43.514274134035794",
      vrstaGlazbe:"rock"
    },
    {
      name: "radio bol",
      id:"3",
      frekvencija:"99.2",
      lng:"16.41560758331894",
      lat:"43.514274134035794",
      vrstaGlazbe:"punk"
    }
  ]
  return (
    <div className="App">
          <MapTiler lng="16.470369012927815" lat="43.51330933410279" zoom="10" radioStanice={radioStanice} apiKey="EyqY6iqRC1RKzlOnWTFD"/>
          {/*ako cete kroistiti komponentu morate joj dati ove atribute*/}
    </div>
  );
}

export default App;
