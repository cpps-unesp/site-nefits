import React from "react";
import clsx from "clsx";
/* import Layout from "@theme/Layout"; */
import styles from "./styles.module.css";

const intro = [
    {
        imgBanner: "/images/logo-banner.png",
        link1: "/",
        link2: "/sobre",
        link3: "/equipe",
        link4: "/noticias",
        link5: "/projetos",
        link6: "/publicacoes"
    }
]

const primeiroContainer = [
  {
    titulo: "Equipe",
    texto: (
      <>
      <p>Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus lectus varius mattis egestas. </p>
      </>
    )
  }
]

const membrosEquipe = [
  {
    foto: "/images/icon.png",
    nome: "Hélio Alexandre da Silva",
    cargo: "Líder",
    social1: "/images/linkedin.svg",
    social2: "/images/lattes.svg",
    foto2: "/images/icon.png",
    nome2: "Membro da Equipe",
    cargo2: "Cargo",
    socialDois1: "/images/linkedin.svg",
    socialDois2: "/images/lattes.svg",
    foto3: "/images/icon.png",
    nome3: "Membro da Equipe",
    cargo3: "Cargo",
    socialTres1: "/images/linkedin.svg",
    socialTres2: "/images/lattes.svg",
  },
  {
    foto: "/images/icon.png",
    nome: "Membro da Equipe",
    cargo: "Cargo",
    social1: "/images/linkedin.svg",
    social2: "/images/lattes.svg",
    foto2: "/images/icon.png",
    nome2: "Membro da Equipe",
    cargo2: "Cargo",
    socialDois1: "/images/linkedin.svg",
    socialDois2: "/images/lattes.svg",
    foto3: "/images/icon.png",
    nome3: "Membro da Equipe",
    cargo3: "Cargo",
    socialTres1: "/images/linkedin.svg",
    socialTres2: "/images/lattes.svg",
  },
]

function MembrosEquipe({foto, foto2, foto3, nome, nome2, nome3, cargo, cargo2, cargo3, social1, socialDois1, socialTres1, social2, socialDois2, socialTres2, link1, linkDois1, linkTres1, link2, linkDois2, linkTres2}){
  return(
    <div class="row justify-content-center">
      <div className={clsx(styles.containerEquipe, "col col--3 mt-3 mx-2 text-center")}>
        <div className="row align-items-center">
          <div class="col-3">
            <img src={foto} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe)} />
          </div>
          <div class="col-9 text-start pt-2">
            <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome}</h3>
            <p className={clsx(styles.textoEquipe, "gy-0")}>{cargo}</p>
            <div class="row">
              <div class="col-2">
                <a href={link1}><img src={social1} alt="Logo" className={clsx(styles.social)} /></a>
              </div>
              <div class="col-2">
                <a href={link2}><img src={social2} alt="Logo" className={clsx(styles.social)} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.containerEquipe, "col col--3 mt-3 mx-2 text-center")}>
        <div className="row align-items-center">
          <div class="col-3">
            <img src={foto2} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe)} />
          </div>
          <div class="col-9 text-start pt-2">
            <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome2}</h3>
            <p className={clsx(styles.textoEquipe, "gy-0")}>{cargo2}</p>
            <div class="row">
              <div class="col-2">
                <a href={linkDois1}><img src={socialDois1} alt="Logo" className={clsx(styles.social)} /></a>
              </div>
              <div class="col-2">
                <a href={linkDois2}><img src={socialDois2} alt="Logo" className={clsx(styles.social)} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.containerEquipe, "col col--3 mt-3 mx-2 text-center")}>
        <div className="row align-items-center">
          <div class="col-3">
            <img src={foto3} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe)} />
          </div>
          <div class="col-9 text-start pt-2">
            <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome3}</h3>
            <p className={clsx(styles.textoEquipe, "gy-0")}>{cargo3}</p>
            <div class="row">
              <div class="col-2">
                <a href={linkTres1}><img src={socialTres1} alt="Logo" className={clsx(styles.social)} /></a>
              </div>
              <div class="col-2">
                <a href={linkTres2}><img src={socialTres2} alt="Logo" className={clsx(styles.social)} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrimeiroContainer({titulo, texto}){
  return(
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h1 className={clsx(styles.titulo)}>{titulo}</h1>
          <p className={clsx(styles.texto)}>{texto}</p>
        </div>
      </div>
    </div>
  )
}

function Intro({imgBanner, link1, link2, link3, link4, link5, link6}){
    return(
        <div className={clsx(styles.heroBanner)}>
            <div class="row">
                <div className="col-md-3 col-sm-12">
                    <img className="intro" src={imgBanner} alt="Logo NéFiTs" />
                </div>
                <div className="col-md-9 text-end mt-2">
                    <ul className={clsx(styles.ulLista)}>
                        <li className={clsx(styles.liLista)}><a href={link1}>Home</a></li>
                        <li className={clsx(styles.liLista)}><a href={link2}>Sobre</a></li>
                        <li className={clsx(styles.liListaSelecionado)}><a href={link3}>Equipe</a></li>
                        <li className={clsx(styles.liLista)}><a href={link4}>Notícias</a></li>
                        <li className={clsx(styles.liLista)}><a href={link5}>Projetos</a></li>
                        <li className={clsx(styles.liLista)}><a href={link6}>Publicações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Equipe() {
  return (
    <div title="NéFiTs">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>

      <header className={clsx(styles.heroBanner)}>
        <div>
          {intro.map((props, idx) => (
            <Intro key={idx} {...props} />
          ))}
        </div>
      </header>
      <main className={clsx(styles.main, "p-5")}>
        <section className={styles.content}>
          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {primeiroContainer.map((props, idx) => (
                <PrimeiroContainer key={idx} {...props} />
              ))}
            </div>
          </div>

          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {membrosEquipe.map((props, idx) => (
                <MembrosEquipe key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Equipe;