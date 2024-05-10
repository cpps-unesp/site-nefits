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
    titulo: "Projetos",
    texto: (
      <>
      <p>Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus lectus varius mattis egestas. </p>
      </>
    )
  }
]

const abas = [
  {
    aba1: "Projetos em Andamento",
    aba2: "Projetos Concluídos",
    texto1: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus lectus varius mattis egestas. 
      </>
    ),
    titulo1: "Título do Projeto",
    autores1: "Autor 1, Autor 2, Autor 3",
    descricao1: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn1: "Saiba mais",
    titulo2: "Título do Projeto",
    autores2: "Autor 1, Autor 2, Autor 3",
    texto2: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </>
    ),
    descricao2: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn2: "Saiba mais",
    titulo3: "Título do Projeto",
    autores3: "Autor 1, Autor 2, Autor 3",
    texto3: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </>
    ),
    descricao3: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn3: "Saiba mais",


    t1: "Título do Projeto",
    a1: "Autor 1, Autor 2, Autor 3",
    d1: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn4: "Saiba mais",
    t2: "Título do Projeto",
    a2: "Autor 1, Autor 2, Autor 3",
    d2: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn5: "Saiba mais",
    t3: "Título do Projeto",
    a3: "Autor 1, Autor 2, Autor 3",
    d3: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn6: "Saiba mais",
  },
]

function Abas({aba1, aba2, texto1, texto2, titulo1, titulo2, titulo3, autores1, autores2, autores3, descricao1, descricao2, descricao3, btn1, btn2, btn3, link1, link2, link3, t1, t2, t3, a1, a2, a3, d1, d2, d3, btn4, btn5, btn6, link4, link5, link6}){
  return(
    <div class="row justify-content-center">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="andamento-tab" data-bs-toggle="tab" data-bs-target="#andamento-tab-pane" type="button" role="tab" aria-controls="andamento-tab-pane" aria-selected="true">Projetos em Andamento</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="concluidos-tab" data-bs-toggle="tab" data-bs-target="#concluidos-tab-pane" type="button" role="tab" aria-controls="concluidos-tab-pane" aria-selected="false">Projetos Concluídos</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        
        <div class="tab-pane fade show active" id="andamento-tab-pane" role="tabpanel" aria-labelledby="andamento-tab" tabindex="0">
          <div class="row justify-content-center">
              <p className={clsx(styles.texto)}>{texto1}</p>
              <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo1}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autores1}</p>
                    <p className={clsx(styles.cardTexto)}>{descricao1}</p>
                    <a href={link1} className={clsx(styles.btnUm)}>{btn1}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autores2}</p>
                    <p className={clsx(styles.cardTexto)}>{descricao2}</p>
                    <a href={link2} className={clsx(styles.btnUm)}>{btn2}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo3}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autores3}</p>
                    <p className={clsx(styles.cardTexto)}>{descricao3}</p>
                    <a href={link3} className={clsx(styles.btnUm)}>{btn3}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
        <div class="tab-pane fade" id="concluidos-tab-pane" role="tabpanel" aria-labelledby="concluidos-tab" tabindex="0">
          <div class="row justify-content-center">
              <p className={clsx(styles.texto)}>{texto2}</p>
              <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t1}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a1}</p>
                    <p className={clsx(styles.cardTexto)}>{d1}</p>
                    <a href={link4} className={clsx(styles.btnUm)}>{btn4}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a2}</p>
                    <p className={clsx(styles.cardTexto)}>{d2}</p>
                    <a href={link5} className={clsx(styles.btnUm)}>{btn5}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t3}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a3}</p>
                    <p className={clsx(styles.cardTexto)}>{d3}</p>
                    <a href={link6} className={clsx(styles.btnUm)}>{btn6}</a>
                  </div>
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
                        <li className={clsx(styles.liLista)}><a href={link3}>Equipe</a></li>
                        <li className={clsx(styles.liLista)}><a href={link4}>Notícias</a></li>
                        <li className={clsx(styles.liListaSelecionado)}><a href={link5}>Projetos</a></li>
                        <li className={clsx(styles.liLista)}><a href={link6}>Publicações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Projetos() {
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
              {abas.map((props, idx) => (
                <Abas key={idx} {...props} />
              ))}
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default Projetos;
