import { useState } from "react";
import "./App.css";
import LogoPaq from "./assets/img/logo_paq.png";
import Arrow from "./assets/img/arrow.svg";
import Lock_icon from "./assets/img/lock.svg";
import Mala from "./assets/img/mala.svg";
import Hands from "./assets/img/hands.svg";

function App() {
  const [showPix, setShowPix] = useState(false);

  const pixCode =
    "00020126580014BR.GOV.BCB.PIX013643.213.521/0001-305204000053039865802BR5925PROTOTIPANDO A QUEBRADA6012FLORIANOPOLIS62070503***63041D3D";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado!");
  };

  return (
    <div className="landing-container">
      <div className="hero-background-wrapper">
        {/* HEADER */}
        <header>
          <div className="container paq-header-container">
            <div className="paq-logo">
              <img src={LogoPaq} alt="Logo PAQ" />
            </div>
            <nav className="paq-nav">
              <a href="#sobre">Sobre Nós</a>
              <a href="#impacto">Impacto</a>
              <a href="#impacto">Depoimentos</a>
            </nav>

            <a href="#doacao" className="btn-apoie">
              APOIE O PAQ
            </a>

          </div>
        </header>

        {/* CAMPANHA */}
        <section className="sobre-campanha" id="sobre">
          <div className="container-sobre-campanha">
            <h2 className="titulo-destaque">PIX DAY PAQ: <br /> <span>O Futuro Não Pode Esperar.</span></h2>
            <p className="texto-intro">
              O PAQ preparou 24 horas de solidariedade intensa para manter
              nossas portas abertas e transformar vidas.
            </p>

            <div className="cards-impacto">
              {/*<div className="card">
                <div className="icon-box"><img src={Lock_icon} alt="" /></div>{" "}
                
                <h3>R$ 30,00</h3>
                <p>
                  Abrem as portas para o <strong>primeiro contato</strong> com a
                  tecnologia.
                </p>
              </div>

              <div className="card">
                <div className="icon-box"><img src={Mala} alt="" /></div> 
                <h3>R$ 50,00</h3>
                <p>
                  Preparam um jovem talento para o{" "}
                  <strong>mercado de trabalho</strong>.
                </p>
              </div>
                      */}
              <div className="card">
                <div className="icon-box"><img src={Hands} alt="" /></div> {/* Ícone Globo/Mundo */}
                <h3>Qualquer valor</h3>
                <p>
                  Transforma um futuro através do{" "}
                  <strong>código e da educação</strong>.
                </p>
              </div>
            </div>

            <div className="paq-footer-text">
              Sua doação é a continuidade do nosso trabalho.
            </div>

            <a href="#doacao"><img className="arrow" src={Arrow} alt="" /></a>
          </div>
        </section>
      </div>

      {/* DOAÇÃO */}
      <section id="doacao" className="donation-section">
        <div className="donation-box">
          {!showPix ? (
            <>
              <h3>Faça Parte</h3>
              <button onClick={() => setShowPix(true)} className="btn-apoie">
                Liberar PIX
              </button>
            </>
          ) : (
            <>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${pixCode}`}
                alt="PIX"
              />
              <button onClick={handleCopyPix} className="btn-apoie">
                Copiar código
              </button>
            </>
          )}
        </div>
      </section>

      <footer className="footer">PAQ. Prototipando a Quebrada © 2024</footer>
    </div>
  );
}

export default App;
