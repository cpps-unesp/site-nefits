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

const rodape = [
  {
    icon1: "/images/facebook_rodape2.svg",
    icon2: "/images/instagram_rodape2.svg",
    icon3: "/images/linkedin_rodape2.svg",
    icon4: "/images/youtube_rodape.svg",
    link1: "#",
    link2: "#",
    link3: "#",
    link4: "https://www.youtube.com/@nefits8028",
    logo1: "/images/logos_rodape.svg",
  }
];

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

const noticiasCards = [
  {
    foto: "/images/img_4.png",
    titulo: "Título Notícia",
    texto: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn: "Saiba mais",
    foto2: "/images/img_4.png",
    titulo2: "Título Notícia",
    texto2: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn2: "Saiba mais",
  },
  {
    foto: "/images/img_4.png",
    titulo: "Título Notícia",
    texto: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn: "Saiba mais",
    foto2: "/images/img_4.png",
    titulo2: "Título Notícia",
    texto2: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn2: "Saiba mais",
  },
]

function NoticiasCards({foto, titulo, texto, btn, link, foto2, titulo2, texto2, btn2, link2}){
  return(
    <div class="row justify-content-center">
      <div className={clsx(styles.cardNoticias, "col-12 col col-xl-5 mt-1 mx-2 mb-2 px-0 text-center")}>
        <div class="row">
          <div class="col-6">
            <img src={foto} alt="Logo" className={clsx(styles.imgNoticias, "img-fluid")} />
          </div>
          <div class="col-6 text-start mt-3">
            <h1 className={clsx(styles.tituloEquipe)}>{titulo}</h1>
            <p className={clsx(styles.textoEquipe, "mb-4")}>{texto}</p>
            <a href={link} className={clsx(styles.btnUm)}>{btn}</a>
          </div>
        </div>
      </div>

      <div className={clsx(styles.cardNoticias, "col-12 col col-xl-5 mt-1 mx-2 mb-2 px-0 text-center")}>
        <div class="row">
          <div class="col-6">
            <img src={foto2} alt="Logo" className={clsx(styles.imgNoticias, "img-fluid")} />
          </div>
          <div class="col-6 text-start mt-3">
            <h1 className={clsx(styles.tituloEquipe)}>{titulo2}</h1>
            <p className={clsx(styles.textoEquipe, "mb-4")}>{texto2}</p>
            <a href={link2} className={clsx(styles.btnUm)}>{btn2}</a>
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

function Intro({imgBanner, link1, link2, link3, link4, link5, link6}){
    return(
        <div className={clsx(styles.heroBanner)}>
            <div class="row">
                <div className="col-md-3 col-sm-12">
                  <a href="/"><img className="intro" src={imgBanner} alt="Logo NéFiTs" /></a>
                </div>
                <div className="col-md-9 text-end mt-2">
                    <ul className={clsx(styles.ulLista)}>
                        <li className={clsx(styles.liLista)}><a href={link1}>Home</a></li>
                        <li className={clsx(styles.liLista)}><a href={link2}>Sobre</a></li>
                        <li className={clsx(styles.liLista)}><a href={link3}>Equipe</a></li>
                        <li className={clsx(styles.liListaSelecionado)}><a href={link4}>Notícias</a></li>
                        <li className={clsx(styles.liLista)}><a href={link5}>Projetos</a></li>
                        <li className={clsx(styles.liLista)}><a href={link6}>Publicações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Noticias() {
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
              {noticiasCards.map((props, idx) => (
                <NoticiasCards key={idx} {...props} />
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

export default Noticias;
