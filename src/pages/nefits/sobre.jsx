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
        link5: "/projetos",
        link6: "/publicacoes"
    }
]

const rodape = [
  {
    icon1: "/images/facebook_rodape2.svg",
    icon2: "/images/instagram_rodape2.svg",
    icon3: "/images/linkedin_rodape2.svg",
    link1: "#",
    link2: "#",
    link3: "#",
    logo1: "/images/logos_rodape.svg",
  }
];

const quemSomos = [
  {
    titulo: "Quem somos",
    img1: "/images/img_1.png",
    texto1: (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus velit. Sed malesuada risus sit amet pretium tristique. Sed malesuada risus sit amet pretium tristique. Quisque mollis tortor eget eros egestas blandit. Mauris eu commodo metus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus velit. Sed malesuada risus sit amet pretium tristique. Sed malesuada risus sit amet pretium tristique. Quisque mollis tortor eget eros egestas blandit. Mauris eu commodo metus.</p>
      </>
    ),
    texto2: (
      <>
        <p className="texto">Vivamus ornare ullamcorper nulla, sit amet vulputate justo dapibus ac. Fusce fringilla, sem sed porta finibus, tortor lorem porttitor quam, ut convallis ante lectus eu tortor. Phasellus justo ipsum, fermentum at neque in, lacinia facilisis neque. Phasellus facilisis, nunc at fermentum vulputate, erat orci scelerisque erat, ut mattis lectus augue quis velit. Fusce nulla erat, hendrerit vitae facilisis vel, commodo non nunc. </p>
        <p className="texto">Donec elementum id turpis at tincidunt. Donec ullamcorper eros sit amet congue dictum. Fusce luctus eros eget ex posuere fringilla. Donec laoreet, dolor sed feugiat feugiat, mi metus malesuada tortor, dignissim bibendum nunc justo sed orci. Maecenas in auctor tortor.</p>
        <p className="texto">Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus lectus varius mattis egestas. Donec congue nisl eget ligula hendrerit feugiat. Morbi sed leo nibh. In ac ultrices turpis.</p>
      </>
    )
  }
]

const objetivos = [
  {
    titulo: "Objetivos",
    img1: "/images/img_1.png",
    texto1: (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus velit. Sed malesuada risus sit amet pretium tristique. Sed malesuada risus sit amet pretium tristique. Quisque mollis tortor eget eros egestas blandit. Mauris eu commodo metus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lacus velit. Sed malesuada risus sit amet pretium tristique. Sed malesuada risus sit amet pretium tristique. Quisque mollis tortor eget eros egestas blandit. Mauris eu commodo metus.</p>
      </>
    ),
    texto2: (
      <>
        <p className="texto">Vivamus ornare ullamcorper nulla, sit amet vulputate justo dapibus ac. Fusce fringilla, sem sed porta finibus, tortor lorem porttitor quam, ut convallis ante lectus eu tortor. Phasellus justo ipsum, fermentum at neque in, lacinia facilisis neque. Phasellus facilisis, nunc at fermentum vulputate, erat orci scelerisque erat, ut mattis lectus augue quis velit. Fusce nulla erat, hendrerit vitae facilisis vel, commodo non nunc. </p>
      </>
    )
  }
]

const historico = [
  {
    titulo: "Histórico",
  }
]

function Historico({titulo, texto}){
  return(
    <div className={clsx(styles.containerUm)}>
      <div class="row p-3">
        <h1 className={clsx(styles.titulo, "text-start")}>{titulo}</h1>
      </div>
    </div>
  );
}

function Objetivos({titulo, img1, texto1, texto2}) {
  return (
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-4 text-center">
            <img src={img1} alt="Objetivos" className={clsx(styles.sobreImg, "mt-2 mb-2")} />
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
      <div class="col-4 text-center gy-2">
        <img src={img1} alt="Quem somos" className={clsx(styles.sobreImg, "mb-2")} />
      </div>
      
      <div class="col-12 gy-2">
        <p className={clsx(styles.texto)}>{texto2}</p>
      </div>
    </div>
  );
}

function Rodape({icon1, icon2, icon3, link1, link2, link3, logo1, logo2}){
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
          </div>
        </div>

        <div class="col-6 col-lg-3 d-flex align-items-center justify-content-sm-center">
          <div class="row">
            <div class="col-12 mb-1 pt-3">
              <h4 className={clsx(styles.tituloRodape)}>Contato</h4>
            </div>
            <div class="col-12">
              <p className={clsx(styles.textoRodape)}>exemplo@exemplo.com</p>
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
                    <a href="/"><img className="img-fluid intro" src={imgBanner} alt="Logo NéFiTs" /></a>
                </div>
                <div className="col-md-9 text-end mt-2">
                    <ul className={clsx(styles.ulLista)}>
                        <li className={clsx(styles.liLista)}><a href={link1}>Home</a></li>
                        <li className={clsx(styles.liListaSelecionado)}><a href={link2}>Sobre</a></li>
                        <li className={clsx(styles.liLista)}><a href={link3}>Equipe</a></li>
                        <li className={clsx(styles.liLista)}><a href={link4}>Notícias</a></li>
                        <li className={clsx(styles.liLista)}><a href={link5}>Projetos</a></li>
                        <li className={clsx(styles.liLista)}><a href={link6}>Publicações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
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

          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {historico.map((props, idx) => (
                <Historico key={idx} {...props} />
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