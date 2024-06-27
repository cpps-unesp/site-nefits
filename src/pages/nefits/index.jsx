import React from "react";
import clsx from "clsx";
// import Layout from "@theme/Layout";
import styles from "./styles.module.css";

const intro = [
  {
    link1: "/",
    link2: "/sobre",
    link3: "/equipe",
    link4: "/noticias",
    link6: "/publicacoes",
    link7: "/videos",
  },
];

const primeiroContainer = [
  {
    img1: "/images/1.jpeg",
    texto1: (
      <>
        O espírito que mobiliza o Núcleo de pesquisa em Ética, Filosofia, Teoria política e Social pretende sempre friccionar a dimensão do diagnóstico das opressões e injustiças com os 
        esforços de compreensão dos potenciais criativos e imaginativos que brotam dos conflitos que compõem as dinâmicas sociais. Os resultados dessa fricção podem, através das mediações 
        necessárias, servir de impulso para análise e formulação de políticas públicas.
      </>
    ),
  },
];

const containerSobre = [
  {
    titulo1: "Sobre",
    texto1: (
      <>
        O NéFiTs (Núcleo de pesquisa em Ética, Filosofia, Teoria política e Social) é um núcleo de pesquisa, sediado na Unesp, campus de Franca, que se constrói em torno de 
        pesquisas orientadas por um enfoque primordialmente filosófico construído a partir de um íntimo diálogo com as ciências humanas e sociais. 
      </>
    ),
    btn1: "Saiba mais",
    link: "/sobre",
    img1: "/images/sobre1.png",
  },
];

const containerCards = [
  {
    titulo: "Notícias",
    link: "/noticias",
    imgFoto: "/images/noticias1.svg",
    texto: (
      <>
        Sed malesuada risus sit amet pretium tristique. Mauris eu commodo metus.
      </>
    ),
    titulo2: "Publicações",
    linkDois1: "/publicacoes",
    imgFoto2: "/images/projetos1.svg",
    texto2: (
      <>
        Acesse as publicações desenvolvidas e publicadas pela equipe NéFiTs.
      </>
    ),
  },
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


function ContainerCards({titulo, texto, imgFoto, link, titulo2, texto2, imgFoto2, linkDois1, titulo3, texto3, imgFoto3, linkTres1 }){
  return(
    <div class="row justify-content-center text-center">
      <div className={clsx(styles.containerCards, "col-12 col-lg-6 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <img src={imgFoto} alt="Logo" className={clsx(styles.SobreCards, "img-fluid")}></img>
            <h2><a href={link} className={clsx(styles.titulo)}>{titulo}</a></h2>
            <p className={clsx(styles.texto)}>{texto}</p>
            <a href={link} className={clsx(styles.btnUm)}>Saiba mais</a>
        </div>
      </div>

      <div className={clsx(styles.containerCards, "col-12 col-lg-6 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <img src={imgFoto2} alt="Logo" className={clsx(styles.SobreCards, "img-fluid")} />
            <h2><a href={linkDois1} className={clsx(styles.titulo)}>{titulo2}</a></h2>
            <p className={clsx(styles.texto)}>{texto2}</p>
            <a href={linkDois1} className={clsx(styles.btnUm)}>Saiba mais</a>
        </div>
      </div>
    </div>
  ) 
}
function ContainerSobre({ titulo1, texto1, btn1, img1, link }) {
  return (
    <div className={clsx(styles.containerUm, "text-center rounded p-3")}>
      <div class="row mb-3 align-items-center p-3">
        <div class="col-md-6 col-sm-12 text-start">
            <h1 className={clsx(styles.titulo)}>{titulo1}</h1>
            <p className={clsx(styles.texto)}>{texto1}</p>
            <a href={link} className={clsx(styles.btnUm)}>{btn1}</a>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <img className="img-fluid" src={img1} alt="Imagem 1" />
        </div>
      </div>
    </div>
  );
}

function PrimeiroContainer({ img1, texto1 }) {
  return (
    <div class="row mt-3 mb-4">
      <div class="col-md-6 col-sm-12 text-center">
        <img src={img1} className={clsx(styles.imgHome, "img-fluid rounded")} alt="Imagem 1" />
      </div>
      <div class="col-md-6 col-sm-12 text-start d-flex align-items-center text-wrap">
        <p className={clsx(styles.texto)}>{texto1}</p>
      </div>
    </div>
  );
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
          <img className="intro" src="/images/logo-banner.png" alt="Logo NéFiTs" />
        </div>
        <div className="col-md-7 text-end mt-2">
          <ul className={clsx(styles.ulLista)}>
            <li className={clsx(styles.liListaSelecionado)}>
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
            <li className={clsx(styles.liLista)}>
              <a href={link7}>Vídeos</a>
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

function Home() {
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
              {containerSobre.map((props, idx) => (
                <ContainerSobre key={idx} {...props} />
              ))}
            </div>
          </div>

          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {containerCards.map((props, idx) => (
                <ContainerCards key={idx} {...props} />
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

export default Home;
