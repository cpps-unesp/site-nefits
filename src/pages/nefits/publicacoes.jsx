import React from "react";
import clsx from "clsx";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
    titulo: "Publicações",
    texto: (
      <>
      <p>Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus lectus varius mattis egestas. </p>
      </>
    )
  }
]

const abas = [
  {
    aba1: "Livros",
    aba2: "Artigos Científicos",
    aba3: "Teses e Dissertações",
    aba4: "TCCs",
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
    descricao3: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn3: "Saiba mais",


    t1: "Título do Projeto",
    texto3: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </>
    ),
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

    t4: "Título do Projeto",
    a4: "Autor 1, Autor 2, Autor 3",
    d4: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn7: "Saiba mais",
    t5: "Título do Projeto",
    a5: "Autor 1, Autor 2, Autor 3",
    d5: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn7: "Saiba mais",
    t6: "Título do Projeto",
    a6: "Autor 1, Autor 2, Autor 3",
    d6: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btn9: "Saiba mais",

    tUm: "Título do Projeto",
    texto4: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </>
    ),
    aUm: "Autor 1, Autor 2, Autor 3",
    dUm: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btnUm: "Saiba mais",
    tDois: "Título do Projeto",
    aDois: "Autor 1, Autor 2, Autor 3",
    dDois: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btnDois: "Saiba mais",
    tTres: "Título do Projeto",
    aTres: "Autor 1, Autor 2, Autor 3",
    dTres: (
      <>
      Nulla pretium dolor lectus, vel vulputate orci porta id. Aenean ac porta risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    btnTres: "Saiba mais",
  }
]

function Abas({aba1, aba2, aba3, aba4, texto1, titulo1, autores1, descricao1, btn1, link1, titulo2, autores2, descricao2, btn2, link2, titulo3, autores3, descricao3, btn3, link3, texto2, t1, texto3, a1, d1, btn4, link4, t2, a2, d2, btn5, link5, t3, a3, d3, btn6, link6, t4, d4, a4, btn7, link7, t5, d5, a5, btn8, link8, t6, d6, a6, btn9, link9, textoUm, tUm, aUm, dUm, btnUm, linkUm, tDois, aDois, dDois, btnDois, linkDois, tTres, aTres, dTres, btnTres, linkTres}){
  return(
    <Tabs
      defaultActiveKey="livros"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="livros" title={aba1}>
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
      </Tab>
      <Tab eventKey="artigos-cientificos" title={aba2}>
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
      </Tab>
      <Tab eventKey="teses-dissertacoes" title={aba3}>
      <div class="row justify-content-center">
            <p className={clsx(styles.texto)}>{texto3}</p>
            <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t4}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{a4}</p>
                  <p className={clsx(styles.cardTexto)}>{d4}</p>
                  <a href={link7} className={clsx(styles.btnUm)}>{btn7}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t5}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{a5}</p>
                  <p className={clsx(styles.cardTexto)}>{d5}</p>
                  <a href={link8} className={clsx(styles.btnUm)}>{btn8}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t6}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{a6}</p>
                  <p className={clsx(styles.cardTexto)}>{d6}</p>
                  <a href={link9} className={clsx(styles.btnUm)}>{btn9}</a>
                </div>
              </div>
            </div>
        </div>
      </Tab>
      <Tab eventKey="tccs" title={aba4}>
      <div class="row justify-content-center">
            <p className={clsx(styles.texto)}>{textoUm}</p>
            <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tUm}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{aUm}</p>
                  <p className={clsx(styles.cardTexto)}>{dUm}</p>
                  <a href={linkUm} className={clsx(styles.btnUm)}>{btnUm}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tDois}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{aDois}</p>
                  <p className={clsx(styles.cardTexto)}>{dDois}</p>
                  <a href={linkDois} className={clsx(styles.btnUm)}>{btnDois}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col col--3 p-3 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tTres}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{aTres}</p>
                  <p className={clsx(styles.cardTexto)}>{dTres}</p>
                  <a href={linkTres} className={clsx(styles.btnUm)}>{btnTres}</a>
                </div>
              </div>
            </div>
        </div>
      </Tab>
    </Tabs>
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
                        <li className={clsx(styles.liLista)}><a href={link5}>Projetos</a></li>
                        <li className={clsx(styles.liListaSelecionado)}><a href={link6}>Publicações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Publicacoes() {
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
              {abas.map((props, idx) => (
                <Abas key={idx} {...props} />
              ))}
            </div>
          </div>
          
        </section>
      </main>
    </Layout>
  );
}

export default Publicacoes;
