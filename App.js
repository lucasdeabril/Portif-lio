import perfil from './imagens/perfil.png'

function App() {
  return (
    <div className="container">
      <div className="perfil">
        <div className="perfiltxt">
          <h1 className="nome">Lucas Passos</h1>
          <h3 className="dev">Desenvolvedor Front-End</h3>

        </div>
        <div className="perfil foto">
          <img src={perfil} alt="imagem de perfil" ></img>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
