import React from "react";
import clsx from "clsx";
// import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import image from "../../assets/img/logo-banner.png";


const intro = [
  {
    imgBanner: "/src/assets/img/logo-banner.png",
    link1: "/nefits",
    link2: "/nefits/sobre",
    link3: "/nefits/equipe",
    link4: "/nefits/noticias",
    link5: "/nefits/projetos",
    link6: "/nefits/publicacoes",
  },
];

const primeiroContainer = [
  {
    img1: "/src/assets/img/img_1.png",
    texto1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus
        velit. Sed malesuada risus sit amet pretium tristique. Mauris eu commodo
        metus. Donec elementum id turpis at tincidunt.
      </>
    ),
  },
];

const containerSobre = [
  {
    titulo1: "Sobre",
    texto1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus
        velit. Sed malesuada risus sit amet pretium tristique. Mauris eu commodo
        metus. Donec elementum id turpis at tincidunt.
      </>
    ),
    btn1: "Saiba mais",
    link: "/nefits/sobre",
    img1: "/src/assets/img/img_3.svg",
  },
];

const containerCards = [
  {
    titulo: "Notícias",
    link: "/nefits/noticias",
    imgFoto: "/src/assets/img/img_2.svg",
    texto: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus
        velit. Sed malesuada risus sit amet pretium tristique. Mauris eu commodo
        metus. Donec elementum id turpis at tincidunt.
      </>
    ),
    titulo2: "Projetos",
    linkDois1: "/nefits/projetos",
    imgFoto2: "/src/assets/img/img_2.svg",
    texto2: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus
        velit. Sed malesuada risus sit amet pretium tristique. Mauris eu commodo
        metus. Donec elementum id turpis at tincidunt.
      </>
    ),
    titulo3: "Publicações",
    linkTres1: "/nefits/publicacoes",
    imgFoto3: "/src/assets/img/img_2.svg",
    texto3: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus
        velit. Sed malesuada risus sit amet pretium tristique. Mauris eu commodo
        metus. Donec elementum id turpis at tincidunt.
      </>
    )
  },
]

function ContainerCards({titulo, texto, imgFoto, link, titulo2, texto2, imgFoto2, linkDois1, titulo3, texto3, imgFoto3, linkTres1 }){
  return(
    <div class="row justify-content-center text-center">
      <div className={clsx(styles.containerCards, "col col--3 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <img src={imgFoto} alt="Logo" className={clsx(styles.SobreCards, "mb-3")} />
            <h2><a href={link} className={clsx(styles.titulo)}>{titulo}</a></h2>
            <p className={clsx(styles.texto)}>{texto}</p>
            <a href={link} className={clsx(styles.btnUm)}>Saiba mais</a>
        </div>
      </div>

      <div className={clsx(styles.containerCards, "col col--3 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <img src={imgFoto2} alt="Logo" className={clsx(styles.SobreCards, "mb-3")} />
            <h2><a href={linkDois1} className={clsx(styles.titulo)}>{titulo2}</a></h2>
            <p className={clsx(styles.texto)}>{texto2}</p>
            <a href={linkDois1} className={clsx(styles.btnUm)}>Saiba mais</a>
        </div>
      </div>

      <div className={clsx(styles.containerCards, "col col--3 mt-3 gx-4 border-0 bg-transparent")}>
        <div className={clsx(styles.Cards, "card-body p-3")}>
            <img src={imgFoto3} alt="Logo" className={clsx(styles.SobreCards, "mb-3")} />
            <h2><a href={linkTres1} className={clsx(styles.titulo)}>{titulo3}</a></h2>
            <p className={clsx(styles.texto)}>{texto3}</p>
            <a href={linkTres1} className={clsx(styles.btnUm)}>Saiba mais</a>
        </div>
      </div>
    </div>
  ) 
}
function ContainerSobre({ titulo1, texto1, btn1, img1, link }) {
  return (
    <div className={clsx(styles.containerUm, "text-center")}>
      <div class="row mb-3 align-items-center p-3">
        <div class="col-md-8 col-sm-12 text-start">
            <h1 className={clsx(styles.titulo)}>{titulo1}</h1>
            <p className={clsx(styles.texto)}>{texto1}</p>
            <a href={link} className={clsx(styles.btnUm)}>{btn1}</a>
        </div>
        <div class="col-md-4 col-sm-12 text-end">
          <img className={clsx(styles.sobreImg)} src={img1} alt="Imagem 1" />
        </div>
      </div>
    </div>
  );
}

function PrimeiroContainer({ img1, texto1 }) {
  return (
    <div class="row mt-3 mb-3">
      <div class="col-md-6 col-sm-12 text-end pe-5">
        <img src={img1} className={clsx(styles.imgHome)} alt="Imagem 1" />
      </div>
      <div class="col-md-6 col-sm-12 text-start pe-5 mt-3">
        <p className={clsx(styles.texto)}>{texto1}</p>
      </div>
    </div>
  );
}

function Intro({ imgBanner, link1, link2, link3, link4, link5, link6 }) {
  return (
    <div className={clsx(styles.heroBanner)}>
      <div class="row">
        <div className="col-md-3 col-sm-12">
          <img className="intro" src={imgBanner} alt="Logo NéFiTs" />
        </div>
        <div className="col-md-9 text-end mt-2">
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
              <a href={link5}>Projetos</a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link6}>Publicações</a>
            </li>
          </ul>
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
    </div>
  );
}

export default Home;
