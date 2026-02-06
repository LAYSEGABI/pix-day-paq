import { useState } from "react";
import "./App.css";
import LogoPaq from "./assets/img/logo_paq.png";
import Arrow from "./assets/img/arrow.svg";
import QRcode from "./assets/img/QRcode.png";
import confetti from "canvas-confetti";

function App() {
  const [showPix, setShowPix] = useState(false);
  const [copied, setCopied] = useState(false); // Novo estado para o feedback

  const pixCode =
    "00020126360014br.gov.bcb.pix0114432135210001305204000053039865802BR5925ASSOCIACAO PROTOTIPANDO A6007PALHOCA62290525K9HRT1PM6ZD1CXVAHMI2QEWW06304A00D";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true); // Muda o texto para "COPIADO!"

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00ff00", "#0000ff", "#ffffff"],
    });
    // Volta ao texto original após 3 segundos
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  // Valores da meta (você pode alterar o currentAmount manualmente por enquanto)
  const goalAmount = 10000;
  const currentAmount = 2685;
  const percentage = Math.floor((currentAmount / goalAmount) * 100);

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
                      src={QRcode}
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

      {/* BLOCO 2 — O QUE É O PIX DAY */}
      <section className="sobre-pix-day" id="doacao">
        <div className="container-pix-day">
          <div className="content-box">
            <h2 className="titulo-secao">O que é o PIX DAY?</h2>
            <div className="texto-informativo">
              <p>
                O <strong>PIX DAY</strong> é uma mobilização do{" "}
                <strong>Prototipando a Quebrada</strong> para garantir a
                continuidade do projeto e a entrada da próxima turma de jovens.
              </p>
              <p>
                Em um único dia, convidamos nossa rede a contribuir com o que
                puder, de forma simples, rápida e transparente.
              </p>
              <p className="frase-efeito">
                Cada PIX soma. <br />
                Cada gesto importa.
              </p>
            </div>

            <div className="meta-container">
              <div className="meta-header">
                <span className="meta-title">META DO DIA</span>
                <div className="meta-values">
                  <span className="current-val">
                    R$ {currentAmount.toLocaleString("pt-BR")}
                  </span>
                  <span className="goal-val">
                    / R$ {goalAmount.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>

              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${percentage}%` }}
                >
                  <span className="percentage-label">{percentage}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3 — POR QUE DOAR AGORA */}
      <section className="por-que-doar" id="doar-agora">
        <div className="container-por-que-doar">
          <h2 className="titulo-secao-pq">
            Por que esse PIX é importante agora?
          </h2>

          <div className="razoes-frases">
            <p>Porque o projeto precisa seguir funcionando.</p>
            <p>Porque novos jovens estão chegando.</p>
            <p>Porque educação também precisa de estrutura.</p>
          </div>

          <div className="garantias-grid">
            <h3 className="subtitulo-garantias">
              Essa arrecadação ajuda a garantir:
            </h3>

            <div className="cards-wrapper">
              <div className="card-item">
                <span className="card-icon">💻</span>
                <p>Equipamentos funcionando</p>
              </div>

              <div className="card-item">
                <span className="card-icon">🍎</span>
                <p>Alimentação na unidade</p>
              </div>

              <div className="card-item">
                <span className="card-icon">🚌</span>
                <p>Transporte para os jovens</p>
              </div>

              <div className="card-item">
                <span className="card-icon">🚀</span>
                <p>Infraestrutura para a turma 2026.1</p>
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
