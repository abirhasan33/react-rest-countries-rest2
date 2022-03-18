import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer =[
  {name: 'Md Abir hasan', job: 'singers'},
  {name: 'Basha hasan', job: 'Musig'},
  {name: 'IMG ment', job: 'Gaikmen'},
  {name: 'Shumon das', job: 'cating'},
];

const singerStyle = {
  color: 'black',
  backgroundColor: 'white',
  padding: '10px',
}

function App() {
  const nayoks = ['Rubel', 'Abir hasa', 'Kobir', 'joshim', 'salman', 'riyas'];
  return (
    <div className="App">
      {
        nayoks.map(nayoks => <li>{nayoks}</li>)
      }
      {/* {
        nayoks.map(nayoks => <Person name={nayoks}></Person>)
      } */}
      {
        singer.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} naiyka="Mosshumi"></Person>
      <Person name={nayoks[1]} naiyka="Tisha"></Person>
      <Person name={nayoks[2]} naiyka="Omor shani"></Person> */}
      <h5>New Comeint viya</h5>
      <p>New Comeint Mama</p>
      <Frends phone="01608889768" move="KGF"></Frends>
      <Frends phone="01608889768"></Frends>
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
    <div className='person'>
      {/* <h1>{props.name} abir hasan</h1> */}
      <h1>{props.name}</h1>
      {/* <p>Profession: Crice</p> */}
      <p>Naiyla: {props.naiyka}</p>
    </div>
  )
}

function Frends(props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Nmae: {props.move}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
