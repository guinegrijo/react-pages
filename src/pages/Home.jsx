import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Bem-vindo ao sistema de eventos</h1>
            <Link to='/eventos' style={{cursor: 'pointer', textDecoration: 'none', color: '#000000', margin: '10px', fontSize: '25px', fontFamily:'monospace'}}> Eventos </Link>
            <Link to='/organizadores' style={{cursor: 'pointer', textDecoration: 'none', color: '#000000', margin: '10px', fontSize: '25px', fontFamily:'monospace'}}> Organizadores </Link>
            <Link to='/ingresso' style={{cursor: 'pointer',textDecoration: 'none', color: '#000000', margin: '10px', fontSize: '25px', fontFamily:'monospace'}}> Ingressos </Link>
        </div>
    )
}

export default Home