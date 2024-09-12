import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";


const intro = [
    {
        imgBanner: "/images/logos_rodape.svg",
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

const quemSomos = [
  {
    titulo: "Quem somos",
    img1: "/images/equipe_nefits_2.svg",
    texto1: (
      <>
        O NéFiTs (Núcleo de pesquisa em Ética, Filosofia, Teoria política e Social) é um núcleo de pesquisa, sediado na Unesp, campus de Franca, que se constrói em torno de 
        pesquisas orientadas por um enfoque primordialmente filosófico construído a partir de um íntimo diálogo com as ciências humanas e sociais. Nesse sentido, ele se 
        estrutura a partir da articulação de pesquisas que reúnem disciplinas como filosofia, sociologia, história, antropologia, psicologia, direito, relações internacionais 
        entre outras. 
      </>
    ),
    texto2: (
      <>
        Os temas analisados e os trabalhos produzidos pelo NéFiTs, a partir desse enfoque teórico de matriz abertamente interdisciplinar, lidam com questões que 
        articulam, ao mesmo tempo, diferentes abordagens de crítica social sem perder de vista o esforço de imaginar novas formas de vida e de combate às injustiças e 
        desigualdades que marcam a forma atual do capitalismo neoliberal.
      </>
    )
  }
]

const objetivos = [
  {
    titulo: "Objetivos",
    img1: "/images/sobre2.svg",
    texto1: (
      <>
        O objetivo do NéFiTs é incentivar e promover pesquisas que se orientam pela articulação de duas dimensões estruturantes: a primeira busca construir diagnósticos críticos 
        sobre as diversas dimensões das sociedades capitalistas, isso significa, entre outras coisas, pesquisar e analisar os obstáculos que impedem com que essas sociedades 
        superem diferentes formas de experiências sociais negativas. Nesse sentido, ganham maior interesse a investigação crítica de temas ligados às diferentes formas de opressão 
        e injustiça que estão no centro dos debates que informam as sociedades capitalistas neoliberais tais como pobreza, sofrimento social, alienação, desigualdade e os desafios 
        da emergência climática e da ameaça de colapso ambiental.  
      </>
    ),
    texto2: (
      <>
        A segunda dimensão estruturante procura reunir esforços de pesquisa que buscam analisar movimentos sociais, com um 
        intuito particular de procurar neles elementos que incentivam a imaginação e a criação que possam emergir da mobilização e articulação de diferentes formas de ação no espaço 
        público. Assim, o espírito que mobiliza o Núcleo de pesquisa em Ética, Filosofia, Teoria política e Social pretende sempre friccionar a dimensão do diagnóstico das opressões 
        e injustiças com os esforços de compreensão dos potenciais criativos e imaginativos que brotam dos conflitos que compõem as dinâmicas sociais. Os resultados dessa fricção 
        podem, através das mediações necessárias, servir de impulso para análise e formulação de políticas públicas.
      </>
    )
  }
]

function Objetivos({titulo, img1, texto1, texto2}) {
  return (
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-4 text-center">
            <img src={img1} alt="Objetivos" className="img-fluid px-5 pb-4 pt-2" />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-12">
                <h2 className={clsx(styles.titulo, "text-start")}>{titulo}</h2>
              </div>
              <div class="col-12 gy-2">
                <p className={clsx(styles.texto)}>{texto1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <p className={clsx(styles.texto)}>{texto2}</p>
      </div>
    </div>
  );
}

function QuemSomos({titulo, img1, texto1, texto2}){
  return(
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-12">
            <h2 className={clsx(styles.titulo, "text-start")}>{titulo}</h2>
          </div>
          <div class="col-12 gy-2">
            <p className={clsx(styles.texto)}>{texto1}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-4 order-sm-0 text-center gy-2">
        <img src={img1} alt="Quem somos" className={clsx(styles.sobreImg, "mb-2 img-fluid")} />
      </div>
      
      <div class="col-12 gy-2">
        <p className={clsx(styles.texto)}>{texto2}</p>
      </div>
    </div>
  );
}

const fapesp = [
  {
    logo: "/images/fapesp_logo.svg"
  }
]

function Fapesp({logo}){
  return(
    <div class="container rodape2">
      <div class="row d-flex">
        <div class="col-12 d-flex align-items-center text-start">
          <div class="row">
            <div class="col-3 d-flex align-items-center">
              <img className={clsx(styles.logoRodape, "img-fluid")} src={logo} alt="Logo" />
            </div>
            <div class="col-9 gx-2 gy-4 text-wrap">
              <p className={clsx(styles.textoRodape)}>Esse site foi construído com apoio da Fapesp através do    
                <b className={clsx(styles.textoRodape)}> Auxílio à Pesquisa-Programas Especiais-Programa Nova Geração de Pesquisadores/PI</b>.
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
            <li className={clsx(styles.liListaSelecionado)}>
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

function Sobre() {
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
              {quemSomos.map((props, idx) => (
                <QuemSomos key={idx} {...props} />
              ))}
            </div>
          </div>

          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {objetivos.map((props, idx) => (
                <Objetivos key={idx} {...props} />
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

export default Sobre;