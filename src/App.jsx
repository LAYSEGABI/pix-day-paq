import { useState } from "react";
import "./App.css";
import LogoPaq from "./assets/img/logo_paq.png";
import Arrow from "./assets/img/arrow.svg";
import QRcode from "./assets/img/QRcode.png";
import confetti from "canvas-confetti";

function App() {
  const [showPix, setShowPix] = useState(false);
  const [copied, setCopied] = useState(false);

  const pixCode =
    "00020126360014br.gov.bcb.pix0114432135210001305204000053039865802BR5925ASSOCIACAO PROTOTIPANDO A6007PALHOCA62290525K9HRT1PM6ZD1CXVAHMI2QEWW06304A00D";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00ff00", "#0000ff", "#ffffff"],
    });

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
              <a href="#impacto">Impacto</a>
              <a href="#depoimentos">Depoimentos</a>
            </nav>
          </div>
        </header>

        {/* CAMPANHA - AGORA FOCO EM APOIO CONTÍNUO */}
        <section className="sobre-campanha" id="sobre">
          <div className="container-sobre-campanha">
            <h2 className="titulo-destaque">
              Apoie o PAQ: <br />{" "}
              <span>Transforme realidades através da tecnologia.</span>
            </h2>
            <p className="texto-intro">
              Sua doação garante que jovens das periferias sigam aprendendo,
              criando e construindo futuros através da educação e inovação.
            </p>

            {/* DOAÇÃO DIRETA (QR CODE SEMPRE VISÍVEL) */}
            <div id="doacao" className="donation-div">
              <div className="donation-box">
                <div className="pix-display">
                  <img src={QRcode} alt="QR Code PIX" className="qr-code-img" />

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
              </div>
            </div>

            <div className="paq-footer-text">
              Cada contribuição fortalece a nossa caminhada.
            </div>

            <a href="#impacto">
              <img className="arrow" src={Arrow} alt="Ver mais" />
            </a>
          </div>
        </section>
      </div>

      {/* BLOCO 2 — POR QUE APOIAR O PAQ? */}
<section className="sobre-pix-day" id="sobre-apoio">
  <div className="container-pix-day">
    <div className="content-box">
      <h2 className="titulo-secao">Por que apoiar o PAQ?</h2>
      <div className="texto-informativo">
        <p>
          O <strong>Prototipando a Quebrada</strong> é um ecossistema de educação que prepara 
          jovens de comunidades para o mercado de tecnologia. Sua doação é o que permite 
          manter nossa infraestrutura e oferecer formação gratuita de qualidade.
        </p>
        <p>
          Ao contribuir via PIX, você garante que tenhamos recursos diretos para 
          investir no que é urgente: alimentação, transporte e equipamentos para nossos educandos.
        </p>
        <p className="frase-efeito">
          Cada doação impulsiona uma carreira. <br />
          Cada gesto constrói o futuro da quebrada.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* BLOCO 3 — O IMPACTO DO SEU INVESTIMENTO */}
<section className="por-que-doar" id="investimento">
  <div className="container-por-que-doar">
    <h2 className="titulo-secao-pq">
      Para onde vai o seu investimento?
    </h2>

    <div className="razoes-frases">
      <p>Para manter nossa sede e laboratórios em pleno funcionamento.</p>
      <p>Para abrir portas para as novas turmas que chegam a cada semestre.</p>
      <p>Para garantir que a educação tecnológica seja acessível e de qualidade.</p>
    </div>

    <div className="garantias-grid">
      <h3 className="subtitulo-garantias">
        Sua doação ajuda a manter:
      </h3>

      <div className="cards-wrapper">
        <div className="card-item">
          <span className="card-icon">💻</span>
          <p>Equipamentos e Softwares</p>
        </div>

        <div className="card-item">
          <span className="card-icon">🍎</span>
          <p>Alimentação dos Educandos</p>
        </div>

        <div className="card-item">
          <span className="card-icon">🚌</span>
          <p>Auxílio Transporte</p>
        </div>

        <div className="card-item">
          <span className="card-icon">🚀</span>
          <p>Infraestrutura e Projetos</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* BLOCO 4 — O IMPACTO REAL */}
      <section className="impacto-real" id="impacto">
        <div className="container-impacto">
          <h2 className="titulo-impacto">
            <span className="quadrado-azul"></span> O IMPACTO REAL
          </h2>

          <div className="impacto-grid">
            <div className="impacto-card">
              <h3 className="impacto-numero">+500</h3>
              <h4 className="impacto-subtitulo">JOVENS IMPACTADOS</h4>
              <p className="impacto-descricao">
                Pessoas reais com novas perspectivas através dos programas de
                Imersão e Aceleração.
              </p>
            </div>

            <div className="impacto-card">
              <h3 className="impacto-numero">50%</h3>
              <h4 className="impacto-subtitulo">EMPREGABILIDADE</h4>
              <p className="impacto-descricao">
                Dos nossos edudandes já estão atuando dentro de empresas de
                tecnologia.
              </p>
            </div>

            <div className="impacto-card">
              <h3 className="impacto-numero">780k</h3>
              <h4 className="impacto-subtitulo">REAIS INJETADOS</h4>
              <p className="impacto-descricao">
                Dinheiro que volta pra quebrada através dos salários dos jovens
                formados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 — A VOZ DA COMUNIDADE */}
      <section className="depoimentos" id="depoimentos">
        <div className="container-depoimentos">
          <h2 className="titulo-depoimentos">
            <span className="detalhe-preto"></span> A VOZ DA COMUNIDADE
          </h2>

          <div className="depoimentos-grid">
            <div className="depoimento-card">
              <p className="depoimento-texto">
                "PAQ é força, resiliência, aprendizado... É onde erramos,
                acertamos e seguimos juntos. PAQ é sinônimo de família."
              </p>
              <div className="autor-info">
                <div className="autor-avatar">I</div>
                <div className="autor-detalhes">
                  <strong>IGOR ROHRIG</strong>
                  <span>Educando</span>
                </div>
              </div>
            </div>

            <div className="depoimento-card">
              <p className="depoimento-texto">
                "Fico o dia inteiro pensando na hora de chegar na unidade. O PAQ
                está sendo uma experiência incrível."
              </p>
              <div className="autor-info">
                <div className="autor-avatar">A</div>
                <div className="autor-detalhes">
                  <strong>ANDRÉ MORAES</strong>
                  <span>Imersão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 6 — CHAMADA FINAL */}
      <section className="chamada-final">
        <div className="container">
          <div className="final-content-box">
            <h2 className="titulo-final">
              Vamos juntos manter essa transformação em movimento?
            </h2>

            <div className="texto-final">
              <p>
                Se você acredita que a transformação social começa na base, esse
                convite é pra você.
              </p>
              <p className="destaque-final">
                Qualquer valor faz diferença. <br />{" "}
                <strong>O importante é fazer junto.</strong>
              </p>
            </div>

            <div className="cta-container-final">
              <button
                className="btn-final-doacao"
                onClick={() => {
                  document
                    .getElementById("doacao")
                    .scrollIntoView({ behavior: "smooth" });
                  if (!showPix) setShowPix(true);
                }}
              >
                💙 Doe para seguirmos movendo a transformação
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="paq-footer-final">
        <div className="container footer-content">
          <div className="footer-brand">
            <img src={LogoPaq} alt="Logo PAQ" className="footer-logo" />
            <p className="footer-obrigado">Obrigado por caminhar com o PAQ.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegação</h4>
              <a href="#doacao">Doe</a>
              <a href="#impacto">Impacto</a>
              <a href="#depoimentos">Depoimentos</a>
            </div>
            <div className="footer-column">
              <h4>Redes Sociais</h4>
              <a
                href="https://www.instagram.com/prototipandoaquebrada/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/prototipando-a-quebrada/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>💙 Juntos, seguimos movendo a transformação.</p>
            <small>PAQ. Prototipando a Quebrada © 2026</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
