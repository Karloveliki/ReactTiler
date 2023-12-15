import logo from './logo.svg';
import './App.css';
import MapTiler from './components/MapTiler'
import stations from './stations'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomStation(brojStanica, scatterLongitude,scatterLatitude){
  const rs=[];
  for(let i=0;i<brojStanica;i++){
    let frekv = 95 + getRandomArbitrary(1,5)
    frekv = Math.round(frekv *100 )/100 //zaokruži na 2 decimale
    frekv = frekv.toString()
    let randomLongitude=getRandomArbitrary(0,scatterLongitude*2)-scatterLongitude //
    let randomLatitude=getRandomArbitrary(0,scatterLatitude*2)-scatterLatitude
    const long=randomLongitude.toString()
    const lati=randomLatitude.toString()
    const stanica = {
      name: "stanixa" + i,
      id: "random"+i,
      frequency: frekv,
      lng: long,
      lat: lati,
      vrstaGlazbe:"pop"
      
    }
    rs.push(stanica)

  }
  return rs
}

function svjetskeStanice(){
  return(
    stations.map(stanica=>{
      return ({
        name:stanica.name,
        id: stanica.stationuuid,
        frekvencija: "97.2",
        lng:stanica.geo_long.toString(),
        lat:stanica.geo_lat.toString()
      })
    })
  )
}

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
  //const punoStanica=randomStation(300,179,89)
  const punoStanica=svjetskeStanice()
  return (
    <div className="App">
          <MapTiler lng="16.470369012927815" lat="43.51330933410279" zoom="1" radioStanice={punoStanica} apiKey="EyqY6iqRC1RKzlOnWTFD"/>
          {/*ako cete kroistiti komponentu morate joj dati ove atribute*/}
    </div>
  );
}

export default App;
