import { useState } from "react";
import "./App.css";
import LogoPaq from "./assets/img/logo_paq.png";
import Arrow from "./assets/img/arrow.svg";
import Lock_icon from "./assets/img/lock.svg";
import Mala from "./assets/img/mala.svg";
import Hands from "./assets/img/hands.svg";

function App() {
  const [showPix, setShowPix] = useState(false);
  const [copied, setCopied] = useState(false); // Novo estado para o feedback

  const pixCode =
    "00020126580014BR.GOV.BCB.PIX013643.213.521/0001-305204000053039865802BR5925PROTOTIPANDO A QUEBRADA6012FLORIANOPOLIS62070503***63041D3D";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true); // Muda o texto para "COPIADO!"

    // Volta ao texto original após 3 segundos
    setTimeout(() => {
      setCopied(false);
    }, 3000);
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
          </div>
        </header>

        {/* CAMPANHA */}
        <section className="sobre-campanha" id="sobre">
          <div className="container-sobre-campanha">
            <h2 className="titulo-destaque">
              PIX DAY do PAQ: <br />{" "}
              <span>Um dia pra unir forças e manter sonhos vivos.</span>
            </h2>
            <p className="texto-intro">
              Sua doação ajuda a garantir o essencial para que jovens sigam
              aprendendo, criando e ampliando seus caminhos com educação,
              tecnologia e inovação.
            </p>

            {/* DOAÇÃO */}
            <div id="doacao" className="donation-div">
              <div className="donation-box">
                {!showPix ? (
                  <>
                    <h3>Faça Parte</h3>
                    <button
                      onClick={() => setShowPix(true)}
                      className="btn-apoie-campanha"
                    >
                      Apoie o PAQ
                    </button>
                  </>
                ) : (
                  <div className="pix-display">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`}
                      alt="QR Code PIX"
                      className="qr-code-img"
                    />

                    <div className="pix-key-container">
                      <p className="pix-key-text">{pixCode}</p>
                    </div>

                    <button
                      onClick={handleCopyPix}
                      className={`btn-apoie ${copied ? "success" : ""}`}
                    >
                      {copied ? "COPIADO!" : "COPIAR CHAVE PIX"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="paq-footer-text">
              Sua doação é a continuidade do nosso trabalho.
            </div>

            <a href="#doacao">
              <img className="arrow" src={Arrow} alt="" />
            </a>
          </div>
        </section>
      </div>

      {/* DOAÇÃO */}
      <div id="doacao" className="donation-div">
        <div className="donation-box">
          {!showPix ? (
            <>
              <h3>Faça Parte</h3>
              <button onClick={() => setShowPix(true)} className="btn-apoie">
                Apoie o PAQ
              </button>
            </>
          ) : (
            <div className="pix-display">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`}
                alt="QR Code PIX"
                className="qr-code-img"
              />

              <div className="pix-key-container">
                <p className="pix-key-text">{pixCode}</p>
              </div>

              <button
                onClick={handleCopyPix}
                className={`btn-apoie ${copied ? "success" : ""}`}
              >
                {copied ? "COPIADO!" : "COPIAR CHAVE PIX"}
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">PAQ. Prototipando a Quebrada © 2024</footer>
    </div>
  );
}

export default App;
