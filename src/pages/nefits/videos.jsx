import React from "react";
import clsx from "clsx";
import LanguageSelector from "../../components/LanguageSelector";
import Translator from "../../components/i18n/translator";
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
          <a href="https://www.youtube.com/@nefits8028/videos" target="_blank" className={clsx(styles.btnUm)}><Translator path="6.btn" /></a>
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
          <h1 className={clsx(styles.titulo)}><Translator path="6.videos" /></h1>
          <p className={clsx(styles.texto)}><Translator path="6.texto" /></p>
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
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.social" /></h4>
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
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.contato" /></h4>
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
              <a href={link1}><Translator path="7.home" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link2}><Translator path="7.sobre" /></a>
            </li>
            <li className={clsx(styles.liListaSelecionado)}>
              <a href={link3}><Translator path="7.equipe" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link4}><Translator path="7.noticias" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link6}><Translator path="7.publicacoes" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link7}><Translator path="7.videos" /></a>
            </li>
            <li className={clsx(styles.liLista, "gx-5 mt-1")}>
              <LanguageSelector />
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
