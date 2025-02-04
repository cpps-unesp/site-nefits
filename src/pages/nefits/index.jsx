import React, { useState } from "react";
import clsx from "clsx";
// import Layout from "@theme/Layout";
import LanguageSelector from "../../components/LanguageSelector";
import Translator from "../../components/i18n/translator";
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
        Acesse as notícias mais recentes sobre o NéFiTs e suas atividades.
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

const fapesp = [
  {
    logo: "/images/fapesp_logo.svg"
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

const carrossel = [
  {
    img1: "/images/noticia-home-1.jpg",
    img2: "/images/noticia-home-2.jpg",
    img3: "/images/noticia-home-3.jpg",
    img4: "/images/noticia-home-4.jpg",
    img5: "/images/noticia-home-5.jpg",
    img6: "/images/noticia-home-6.jpg",
    link1: "/noticias/noticia-1",
    link2: "/noticias/noticia-2",
    link3: "/noticias/noticia-3",
    link4: "/noticias/noticia-4",
    link5: "/noticias/noticia-5",
    link6: "/noticias/noticia-6",
  }
]


function ContainerCards({titulo, texto, imgFoto, link, titulo2, texto2, imgFoto2, linkDois1, titulo3, texto3, imgFoto3, linkTres1 }){
  return(
    <div className="row justify-content-center text-center">
      <div className={clsx(styles.containerCards, "col-12 col-lg-6 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <h2><a href={link} className={clsx(styles.sobreTitulo)}><Translator path="1.noticias" /></a></h2>
            <p className={clsx(styles.sobreTexto, "text-center")}><Translator path="1.textoNoticias" /></p>
            <a href={link} className={clsx(styles.btnSobre)}><Translator path="1.btn" /></a>
        </div>
      </div>

      <div className={clsx(styles.containerCards, "col-12 col-lg-6 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <h2><a href={linkDois1} className={clsx(styles.sobreTitulo)}><Translator path="1.publicacoes" /></a></h2>
            <p className={clsx(styles.sobreTexto, "text-center")}><Translator path="1.textoPublicacoes" /></p>
            <a href={linkDois1} className={clsx(styles.btnSobre)}><Translator path="1.btn" /></a>
        </div>
      </div>
    </div>
  ) 
}
function ContainerSobre({ titulo1, texto1, btn1, img1, link }) {
  return (
    <div className={clsx(styles.containerUm, "text-center rounded p-3")}>
      <div className="row mb-3 align-items-center p-3">
        <div className="col-md-6 col-sm-12 text-start">
            <h1 className={clsx(styles.titulo)}><Translator path="1.sobre.titulo" /></h1>
            <p className={clsx(styles.texto)}><Translator path="1.sobre.texto" /></p>
            <a href={link} className={clsx(styles.btnUm)}><Translator path="1.btn" /></a>
        </div>
        <div className="col-md-6 col-sm-12 text-center">
          <img className="img-fluid" src={img1} alt="Imagem 1" />
        </div>
      </div>
    </div>
  );
}

function PrimeiroContainer({ img1, texto1 }) {
  return (
    <div className="row mt-3 mb-4">
      <div className="col-md-6 col-sm-12 text-center">
        <img src={img1} className={clsx(styles.imgHome, "img-fluid rounded")} alt="Imagem 1" />
      </div>
      <div className="col-md-6 col-sm-12 text-start d-flex align-items-center text-wrap">
        <p className={clsx(styles.texto)}><Translator path="1.home" /></p>
      </div>
    </div>
  );
}

function Fapesp({logo}){
  return(
    <div className="container rodape2">
      <div className="row d-flex">
        <div className="col-12 d-flex align-items-center text-start justify-content-center">
          <div className="row">
            <div className="col-1 d-flex align-items-center">
              <img className={clsx(styles.logoRodape, "img-fluid")} src={logo} alt="Logo" />
            </div>
            <div className="col-11 d-flex align-items-center gx-2 gy-4 text-wrap">
              <p className={clsx(styles.textoRodape2)}><Translator path="1.fapesp1" />    
                <b className={clsx(styles.textoRodape2)}><Translator path="1.fapesp2" /></b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Rodape({icon1, icon2, icon3, icon4, link1, link2, link3, link4, logo1, logo2}){
  return(
    <div className="container rodape">
      <div className="row">
        <div className="col-12 col-xl-3 d-flex align-items-center justify-content-sm-center">
          <div className="row">
            <div className="col-12 mb-1 text-center text-xl-start">
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.social" /></h4>
            </div>
            <div className="col-3 gx-2 ps-3">
              <a href={link1} target="_blank"><img src={icon1} alt="Rede Social 1" /></a>
            </div>

            <div className="col-3 gx-2">
              <a href={link2} target="_blank"><img src={icon2} alt="Rede Social 2" /></a>
            </div>

            <div className="col-3 gx-2">
              <a href={link3} target="_blank"><img src={icon3} alt="Rede Social 3" /></a>
            </div>

            <div className="col-3 gx-2">
              <a href={link4} target="_blank"><img src={icon4} alt="Rede Social 4" /></a>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-3 d-flex align-items-center justify-content-sm-center">
          <div className="row">
            <div className="col-12 mb-1 pt-3 text-center text-xl-start">
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.contato" /></h4>
            </div>
            <div className="col-12">
              <p className={clsx(styles.textoRodape)}>nefits.unesp@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 d-flex justify-content-sm-center justify-content-xl-end">
          <div className="row">
            <div className="col-4 pt-3">
              <img src={logo1} alt="Logos" />
            </div>
          </div>
        </div>

        <hr className={clsx(styles.hr, "mt-3 mb-3")} />

        <div className="col-12">
          <div className="row">
            <div className="col-12 col-xl-5 col-xxl-4 gx-2 gy-2">
              <p className={clsx(styles.textoRodape)}>Design por <b className={clsx(styles.textoRodape)}>Júlia dos Santos Silveira</b> © 2024 Current</p>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  )
}

function Carrossel({img1, img2, img3, img4, img5, img6, link1, link2, link3, link4, link5, link6}) {
  return(
    <div className="container gx-4 gy-3 mb-3">
      <div className="row">
        <div className="col-12">
          <div id="carouselExampleCaptions" className="carousel px-xxl-5 slide rounded justify-content-center" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions5" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions6" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className={clsx(styles.imgCarrossel, "d-block img-fluid rounded")} alt="..." />
                <div className="carousel-caption text-start d-none d-md-block mb-xxl-5 pb-3 pb-xxl-2">
                  <div className="col-7 col-xxl-6">
                    <h5 className={clsx(styles.tituloCarrossel, "text-start text-break")}>Experiências Internacionais – Universidade Yale <br /> (Matheus de Vilhena Moraes)</h5>
                  </div>
                  <a href={link1} className={clsx(styles.btnUm)}>Ler Mais</a>
                </div>
              </div>
              <div className="carousel-item">
                  <img src={img2} className={clsx(styles.imgCarrossel, "d-block img-fluid rounded")} alt="..." />
                <div className="carousel-caption text-end d-none d-md-block mb-xxl-5 pb-3 pb-xxl-2">
                  <div className="row">
                    <div className="col-5 col-xxl-6"></div>
                    <div className="col-7 col-xxl-6 text-end ps-3">
                      <h5 className={clsx(styles.tituloCarrossel, "text-end text-break")}>Experiências Internacionais – Universidade Paris-Nanterre <br /> (Ana Júlia Diniz Neves do Lago)</h5>
                    </div>
                  </div>
                  <a href={link2} className={clsx(styles.btnUm)}>Ler Mais</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img3} className={clsx(styles.imgCarrossel, "d-block img-fluid rounded")} alt="..." />
                <div className="carousel-caption text-start d-none d-md-block mb-xxl-5 pb-3 pb-xxl-2">
                  <div className="col-6 col-xxl-6">
                    <h5 className={clsx(styles.tituloCarrossel, "text-start text-break")}>Experiências Internacionais: Universidade de Santiago do Chile (Gabrielle Nascimento)</h5>
                  </div>
                  <a href={link3} className={clsx(styles.btnUm)}>Ler Mais</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img4} className={clsx(styles.imgCarrossel, "d-block img-fluid rounded")} alt="..." />
                <div className="carousel-caption text-end d-none d-md-block mb-xxl-5 pb-3 pb-xxl-2">
                  <div className="row">
                    <div className="col-5 col-xxl-6"></div>
                    <div className="col-7 col-xxl-6 text-end ps-3">
                      <h5 className={clsx(styles.tituloCarrossel, "text-end text-break")}>Experiências Internacionais: Universidad de Playa Ancha (Eduarda Pereira Pires Barboza)</h5>
                    </div>
                  </div>
                  <a href={link4} className={clsx(styles.btnUm)}>Ler Mais</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img5} className={clsx(styles.imgCarrossel, "d-block img-fluid rounded")} alt="..." />
                <div className="carousel-caption text-start d-none d-md-block mb-xxl-5 pb-3 pb-xxl-2">
                  <div className="col-6 col-xxl-6">
                    <h5 className={clsx(styles.tituloCarrossel, "text-start text-break")}>Lançamento do Livro: Experiências Sociais Negativas</h5>
                  </div>
                  <a href={link5} className={clsx(styles.btnUm)}>Ler Mais</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img6} className={clsx(styles.imgCarrossel, "d-block img-fluid rounded")} alt="..." />
                <div className="carousel-caption text-end d-none d-md-block mb-xxl-5 pb-3 pb-xxl-2">
                  <div className="row">
                    <div className="col-5 col-xxl-6"></div>
                    <div className="col-7 col-xxl-6 text-end ps-3">
                      <h5 className={clsx(styles.tituloCarrossel, "text-end text-break")}>II Seminário Permanente de Filosofia Crítica e Sociedade</h5>
                    </div>
                  </div>
                  <a href={link6} className={clsx(styles.btnUm)}>Ler Mais</a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Intro({ link1, link2, link3, link4, link5, link6, link7 }) {
  return (
    <div className={clsx(styles.heroBanner)}>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <a href="/"><img className="intro" src="/images/logo-banner.png" alt="Logo NéFiTs" /></a> 
        </div>
        <div className="col-md-7 text-end mt-2">
          <ul className={clsx(styles.ulLista)}>
            <li className={clsx(styles.liListaSelecionado)}>
              <a href={link1}><Translator path="7.home" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link2}><Translator path="7.sobre" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
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
          <img  src="/images/logo_unesp.svg" alt="Seja bem vindo ao NéFiTS" />
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
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>

      <header className={clsx(styles.heroBanner)}>
        <div>
          {intro.map((props, idx) => (
            <Intro key={idx} {...props} />
          ))}
        </div>
      </header>
      <main className={clsx(styles.main, "p-5 pb-4 pt-3")}>
        <section className={styles.content}>
          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {carrossel.map((props, idx) => (
                <Carrossel key={idx} {...props} />
              ))}
            </div>
          </div>

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

      <div className={clsx(styles.rodape2)}>
        {fapesp.map((props, idx) => (
          <Fapesp key={idx} {...props} />
          ))}
      </div>

      <footer>
        <div className={clsx(styles.rodape)}>
          {rodape.map((props, idx) => (
            <Rodape key={idx} {...props} />
            ))}
        </div>
      </footer>
    </div>
  );
}

export default Home;
