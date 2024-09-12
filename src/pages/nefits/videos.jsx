import React from "react";
import clsx from "clsx";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
/* import Layout from "@theme/Layout"; */
import styles from "./styles.module.css";

const intro = [
    {
        imgBanner: "/images/logo-banner.png",
        link1: "/",
        link2: "/sobre",
        link3: "/equipe",
        link4: "/noticias",
        link6: "/publicacoes",
        link7: "/videos"
    }
]

const rodape = [
  {
    icon1: "/images/facebook_rodape2.svg",
    icon2: "/images/instagram_rodape2.svg",
    icon3: "/images/linkedin_rodape2.svg",
    icon4: "/images/youtube_rodape.svg",
    link1: "#",
    link2: "https://www.instagram.com/nefits.unesp?igsh=MTQxcXhiYjd5N2R1",
    link3: "#",
    link4: "https://www.youtube.com/@nefits8028",
    logo1: "/images/logos_rodape.svg",
  }
];

const primeiroContainer = [
  {
    titulo: "Vídeos",
    texto: (
      <>
        Confira os vídeos postados em nosso <b className={clsx(styles.textoLink)}><a href="https://www.youtube.com/@nefits8028/videos" target="_blank">canal do Youtube</a></b>.
      </>
    )
  }
]

const listaVideos = [
  {
    video1: "https://www.youtube.com/embed/8jm3WiNnTJg?si=y30xatmohRaJyu7n",
    video2: "https://www.youtube.com/embed/UDwJN2f_SyU?si=cThK2Og541iyl6TP",
    video3: "https://www.youtube.com/embed/0IxnnS-fJWw?si=2sffqYb5ScFUckww",
    video4: "https://www.youtube.com/embed/E_iFbGYRxt0?si=RK9P_N0SmVTvGD2w",
    video5: "https://www.youtube.com/embed/1HeMXPti7A4?si=JnhZYTpfquDgklSC",
    video6: "https://www.youtube.com/embed/PCQ078PnUoI?si=umhMP-EKSL4vpKnt"
  }
]

function ListaVideos({video1, video2, video3, video4, video5, video6}){
  return(
    <div class="col-12">
      <div class="row text-center">
        <div class="col-12 col-xl-4 gx-2 gy-3">
          <iframe width="420" height="315" className="object-fit-cover border rounded" src={video1} allowfullscreen></iframe>
        </div>

        <div class="col-12 col-xl-4 gx-3 gy-3">
          <iframe width="420" height="315" className="object-fit-cover border rounded" src={video2} allowfullscreen></iframe>
        </div>

        <div class="col-12 col-xl-4 gx-3 gy-3">
          <iframe width="420" height="315" className="object-fit-cover border rounded" src={video3} allowfullscreen></iframe>
        </div>

        <div class="col-12 col-xl-4 gx-3 gy-3">
          <iframe width="420" height="315" className="object-fit-cover border rounded" src={video4} allowfullscreen></iframe>
        </div>

        <div class="col-12 col-xl-4 gx-3 gy-3">
          <iframe width="420" height="315" className="object-fit-cover border rounded" src={video5} allowfullscreen></iframe>
        </div>

        <div class="col-12 col-xl-4 gx-3 gy-3">
          <iframe width="420" height="315" className="object-fit-cover border rounded" src={video6} allowfullscreen></iframe>
        </div>

        <div class="col-12 gx-3 gy-3 text-center">
          <a href="https://www.youtube.com/@nefits8028/videos" target="_blank" className={clsx(styles.btnUm)}>Ver Lista Completa</a>
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

        {/*<div class="row">
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
          <div class="elfsight-app-8fc49845-33db-425c-a6f6-319414138f09" data-elfsight-app-lazy></div>
        </div> */}
      </div>
    </div>
  )
}

function Rodape({icon1, icon2, icon3, icon4, link1, link2, link3, link4, logo1, logo2}){
  return(
    <div class="container rodape">
      <div class="row">
        <div class="col-6 col-lg-3 d-flex align-items-center justify-content-sm-center">
          <div class="row">
            <div class="col-12 mb-1">
              <h4 className={clsx(styles.tituloRodape)}>Redes Sociais</h4>
            </div>
            <div class="col-3 gx-2 ps-3">
              <a href={link1} target="_blank"><img src={icon1} alt="Rede Social 1" /></a>
            </div>

            <div class="col-3 gx-2">
              <a href={link2} target="_blank"><img src={icon2} alt="Rede Social 2" /></a>
            </div>

            <div class="col-3 gx-2">
              <a href={link3} target="_blank"><img src={icon3} alt="Rede Social 3" /></a>
            </div>

            <div class="col-3 gx-2">
              <a href={link4} target="_blank"><img src={icon4} alt="Rede Social 4" /></a>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-3 d-flex align-items-center justify-content-sm-center">
          <div class="row">
            <div class="col-12 mb-1 pt-3">
              <h4 className={clsx(styles.tituloRodape)}>Contato</h4>
            </div>
            <div class="col-12">
              <p className={clsx(styles.textoRodape)}>nefits.unesp@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 d-flex justify-content-sm-center justify-content-lg-end">
          <div class="row">
            <div class="col-4 pt-3">
              <img src={logo1} alt="Logos" />
            </div>
          </div>
        </div>

        <hr className={clsx(styles.hr, "mt-3 mb-3")} />

        <p className={clsx(styles.textoRodape)}>Design por <b className={clsx(styles.textoRodape)}>Júlia dos Santos Silveira</b> © 2024 Current</p>

      </div>
    </div>
  )
}

function Intro({ link1, link2, link3, link4, link5, link6, link7 }) {
  return (
    <div className={clsx(styles.heroBanner)}>
      <div class="row">
        <div className="col-md-3 col-sm-12">
          <a href="/"><img className="intro" src="/images/logo-banner.png" alt="Logo NéFiTs" /></a>
        </div>
        <div className="col-md-7 text-end mt-2">
          <ul className={clsx(styles.ulLista)}>
            <li className={clsx(styles.liLista)}>
              <a href={link1}>Home</a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link2}>Sobre</a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link3}>Equipe</a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link4}>Notícias</a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link6}>Publicações</a>
            </li>
            <li className={clsx(styles.liListaSelecionado)}>
              <a href={link7}>Vídeos</a>
            </li>
            <li className={clsx(styles.liLista, "gx-5 mt-1")}>
              <div class="dropdown">
                <button className={clsx(styles.textoTrad, "btn bg-transparent dropdown-toggle")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                  </svg>
                </button>
                <ul class="dropdown-menu">
                  <li><button className={clsx(styles.textoTrad, "dropdown-item")} type="button"><img className={clsx(styles.imgTrad)} src="/images/brazil-flag-icon.svg" />  Português</button></li>
                  <li><button className={clsx(styles.textoTrad, "dropdown-item")} type="button"><img className={clsx(styles.imgTrad)} src="/images/united-states-flag-icon.svg" />  Inglês</button></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.logoMenu, "col-md-2 col-sm-12")}>
          <img  src="/images/logo_unesp.svg" alt="Logo UNESP" />
        </div>
      </div>
    </div>
  );
}
function Videos() {
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
              {listaVideos.map((props, idx) => (
                <ListaVideos key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={clsx(styles.rodape)}>
        <div>
          {rodape.map((props, idx) => (
            <Rodape key={idx} {...props} />
            ))}
        </div>
      </footer>
    </div>
  );
}

export default Videos;
