import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

const intro = [
    {
        imgBanner: "../src/img/logo-banner.png",
        link1: "/nefits",
        link2: "/nefits/sobre",
        link3: "/nefits/equipe",
        link4: "/nefits/noticias",
        link5: "/nefits/projetos",
        link6: "/nefits/publicacoes"
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

const noticiasCards = [
  {
    foto: "../src/img/img_4.png",
    titulo: "Título Notícia",
    texto: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn: "Saiba mais",
    foto2: "../src/img/img_4.png",
    titulo2: "Título Notícia",
    texto2: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn2: "Saiba mais",
  },
  {
    foto: "../src/img/img_4.png",
    titulo: "Título Notícia",
    texto: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn: "Saiba mais",
    foto2: "../src/img/img_4.png",
    titulo2: "Título Notícia",
    texto2: "Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus.",
    btn2: "Saiba mais",
  },
]

function NoticiasCards({foto, titulo, texto, btn, link, foto2, titulo2, texto2, btn2, link2}){
  return(
    <div class="row justify-content-center">
      <div className={clsx(styles.cardNoticias, "col col--5 mt-1 mx-2 mb-2 px-0 text-center")}>
        <div class="row">
          <div class="col-6">
            <img src={foto} alt="Logo" className={clsx(styles.imgNoticias)} />
          </div>
          <div class="col-6 text-start mt-3">
            <h1 className={clsx(styles.tituloEquipe)}>{titulo}</h1>
            <p className={clsx(styles.textoEquipe, "mb-4")}>{texto}</p>
            <a href={link} className={clsx(styles.btnUm)}>{btn}</a>
          </div>
        </div>
      </div>

      <div className={clsx(styles.cardNoticias, "col col--5 mt-1 mx-2 mb-2 px-0 text-center")}>
        <div class="row">
          <div class="col-6">
            <img src={foto2} alt="Logo" className={clsx(styles.imgNoticias)} />
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
    <Layout title="NéFiTs">
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
    </Layout>
  );
}

export default Noticias;
