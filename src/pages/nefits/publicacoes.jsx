import React from "react";
import clsx from "clsx";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
    link1: "#",
    link2: "#",
    link3: "#",
    logo1: "/images/logos_rodape.svg",
  }
];

const primeiroContainer = [
  {
    titulo: "Publicações",
    texto: (
      <>
      <p></p>
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
      </>
    ),
    titulo1: "Ethical Challenges in the Climate Crisis",
    subtitulo1: "Thomas Pogge's Perspective and the Challenges for Global Cooperation",
    autores1: "Matheus de Vilhena Moraes",
    ano1: "2023",
    btn1: "Visualizar",
    link1: "/arquivos/2023-Matheus_de_Vilhena_Moraes-ETHICAL_CHALLENGES_IN_THE_CLIMATE.pdf",


    t1: "Alienação de negras e negros em Achille Mbembe",
    texto3: (
      <>
      </>
    ),
    a1: "Matheus Sena Asevedo Campanhã",
    ano2: "2023",
    btn4: "Visualizar",
    link4: "/arquivos/2023-Matheus_Sena_Asevedo_Campanha-Alienacao_de_negras_e_negros_em_Achille_Mbembe.pdf",

    t2: "Pobreza como Déficit dos Direitos Humanos em Thomas Pogge",
    a2: "Matheus de Vilhena Moraes",
    ano3: "2023",
    btn5: "Visualizar",
    link5: "/arquivos/2023-Matheus_de_Vilhena_Moraes-POBREZA_COMO_DEFICIT_DOS_DIREITOS_HUMANOS_EM_THOMAS_POGGE.pdf",
    
    t4: "O Benefício de Prestação Continuada",
    subtitulo2: "Um estudo sobre a centralidade da pobreza no seu quadro normativo",
    a4: "Andreia Celia Silva de Oliveira",
    ano4: "2022",
    btn7: "Visualizar",
    link7: "/arquivos/2022-Andreia_Celia-O_BENEFICIO_DE_PRESTACAO_CONTINUADA.docx",

    t5: "Teoria Democrática Deliberativa",
    subtitulo3: "Uma análise dos conselhos municipais de assistência social",
    a5: "Talismara Guilherme Molina",
    ano5: "2022",
    btn8: "Visualizar",
    link8: "/arquivos/2022-Talismara_Molina-TEORIA_DEMOCRATICA_DELIBERATIVA.pdf",

    t6: "A inteligência de ninguém",
    subtitulo7: "Igualdade, emancipação e pobreza em O mestre ignorante de Jacques Rancière",
    a6: "Tark Fraig",
    ano16: "2024",
    btn9: "Visualizar",
    link9: "/arquivos/2024-Tark_Fraig-A_Inteligencia_de_Ninguem.pdf",

    tUm: "A Autodeterminação Negra",
    subtitulo4: "Uma análise da filosofia social e política de Achille Mbembe",
    texto4: (
      <>
      </>
    ),
    aUm: "Matheus Sena Asevedo Campanhã",
    ano6: "2023",
    btnUm: "Visualizar",
    linkUm: "/arquivos/2023-Matheus_Sena_Asevedo_Campanha-TCC.pdf",

    tDois: "Malucos de Estrada",
    subtitulo5: "A (r)existência de uma forma de vida no Brasil",
    aDois: "Daniela Leonardi Polizio",
    ano7: "2021",
    btnDois: "Visualizar",
    linkDois: "/arquivos/2021-Daniela_Leonardi_Polizio-TCC.pdf",

    tTres: "Necropolítica",
    subtitulo6: "A Política de Negação do Negro",
    aTres: "Mayara Cristina Oliveira Pires",
    ano8: "2021",
    btnTres: "Visualizar",
    linkTres: "/arquivos/2021-Mayara_Cristina_Oliveira_Pires-TCC.docx",

    tQuatro: "O Cotidiano e o Estranhamento em Lukács",
    aQuatro: "Roan Matthaeus Chimello Dias",
    ano9: "2020",
    btnQuatro: "Visualizar",
    linkQuatro: "/arquivos/2020-Roan_Matheus_Chimello_Dias-TCC.pdf",

    tCinco: "Relações entre a Ética da Responsabilidade Jonasiana e o Direito",
    aCinco: "Péricles de Freitas Nogueira",
    ano10: "2021",
    btnCinco: "Visualizar",
    linkCinco: "/arquivos/2021-Pericles_de_Freitas_Nogueira-TCC.pdf",

    tSeis: "Os Contornos da Questão Social em Sobre a Revolução de Hannah Arendt",
    aSeis: "Larissa Barcellos Rodrigues",
    ano11: "2022",
    btnSeis: "Visualizar",
    linkSeis: "/arquivos/2022-Larissa_Barcellos_Rodrigues-TCC.pdf",

    tSete: "Vítimas, Ética e Libertação na Obra de Enrique Dussel",
    aSete: "Beatriz Batista do Nascimento Alkmin",
    ano12: "2021",
    btnSete: "Visualizar",
    linkSete: "/arquivos/2021-Beatriz_Batista_do_Nascimento_Alkmin-TCC.docx",

    tOito: "Desigualdade e Diferença",
    aOito: "Luana Ambiel Marachini",
    ano13: "2020",
    btnOito: "Visualizar",
    linkOito: "/arquivos/2020-Luana_Ambiel_Marachini-TCC.pdf",

    tNove: "Igualdade material como instrumento de inclusão social-debate sobre a constitucionalidade das cotas raciais nas Universidades Públicas",
    aNove: "Gabriel Ferreira dos Santos",
    ano14: "2020",
    btnNove: "Visualizar",
    linkNove: "/arquivos/2020-Gabriel_Ferreira_dos_Santos-TCC.pdf",

    tDez: "Entre Freire e Jacotot",
    aDez: "Tark Fraig",
    ano15: "2020",
    btnDez: "Visualizar",
    linkDez: "/arquivos/2020-Tark_Fraig-TCC.pdf",
  }
]

function Abas({texto1, titulo1, subtitulo1, autores1,ano1, btn1, link1, texto2, t1, texto3, a1, ano2, btn4, link4, t2, a2, ano3, btn5, link5, t4, ano4, a4, subtitulo2, btn7, link7, t5, 
  subtitulo3, ano5, a5, btn8, link8, textoUm, tUm, subtitulo4, aUm, ano6, btnUm, linkUm, tDois, subtitulo5, aDois, ano7, btnDois, linkDois, tTres, subtitulo6, aTres, ano8, btnTres, 
  linkTres, tQuatro, aQuatro, ano9, btnQuatro, linkQuatro, tCinco, aCinco, ano10, btnCinco, linkCinco, tSeis, aSeis, ano11, btnSeis, linkSeis, tSete, aSete, ano12, btnSete, linkSete, 
  tOito, aOito, ano13, btnOito, linkOito, tNove, aNove, ano14, btnNove, linkNove, tDez, aDez, ano15, btnDez, linkDez, t6, subtitulo7, ano16, a6, btn9, link9}){
  return(
    <div class="col-12 abas">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="livros-tab" data-bs-toggle="tab" data-bs-target="#livros-tab-pane" type="button" role="tab" aria-controls="livros-tab-pane" aria-selected="true">Livros</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="artigos-tab" data-bs-toggle="tab" data-bs-target="#artigos-tab-pane" type="button" role="tab" aria-controls="artigos-tab-pane" aria-selected="false">Artigos Científicos</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="teses-tab" data-bs-toggle="tab" data-bs-target="#teses-tab-pane" type="button" role="tab" aria-controls="teses-tab-pane" aria-selected="false">Teses e Dissertações</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="tccs-tab" data-bs-toggle="tab" data-bs-target="#tccs-tab-pane" type="button" role="tab" aria-controls="tccs-tab-pane" aria-selected="false">TCCs</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="livros-tab-pane" role="tabpanel" aria-labelledby="livros-tab" tabindex="0">
          <div class="row justify-content-start">
              <p className={clsx(styles.texto, "mt-2")}>{texto1}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo1}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo1}</p>
                    <p className={clsx(styles.cardTexto, "fw-medium")}>{autores1} • {ano1}</p>
                    <a href={link1} target="_blank" className={clsx(styles.btnUm)}>{btn1}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="artigos-tab-pane" role="tabpanel" aria-labelledby="artigos-tab" tabindex="0">
          <div class="row justify-content-start">
              <p className={clsx(styles.texto)}>{texto2}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t1}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a1} • {ano2}</p>
                    <a href={link4} target="_blank" className={clsx(styles.btnUm)}>{btn4}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a2} • {ano3}</p>
                    <a href={link5} target="_blank" className={clsx(styles.btnUm)}>{btn5}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="teses-tab-pane" role="tabpanel" aria-labelledby="teses-tab" tabindex="0">
          <div class="row justify-content-start">
              <p className={clsx(styles.texto)}>{texto3}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t4}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo2}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a4} • {ano4}</p>
                    <a href={link7} target="_blank" className={clsx(styles.btnUm)}>{btn7}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t5}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo3}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a5} • {ano5}</p>
                    <a href={link8} target="_blank" className={clsx(styles.btnUm)}>{btn8}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t6}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo7}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a6} • {ano16}</p>
                    <a href={link9} target="_blank" className={clsx(styles.btnUm)}>{btn9}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="tccs-tab-pane" role="tabpanel" aria-labelledby="tccs-tab" tabindex="0">
          <div class="row justify-content-center">
              <p className={clsx(styles.texto)}>{textoUm}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tUm}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo4}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aUm} • {ano6}</p>
                    <a href={linkUm} target="_blank" className={clsx(styles.btnUm)}>{btnUm}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tDois}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo5}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aDois} • {ano7}</p>
                    <a href={linkDois} target="_blank" className={clsx(styles.btnUm)}>{btnDois}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tTres}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo6}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aTres} • {ano8}</p>
                    <a href={linkTres} target="_blank" className={clsx(styles.btnUm)}>{btnTres}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tQuatro}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aQuatro} • {ano9}</p>
                    <a href={linkQuatro} target="_blank" className={clsx(styles.btnUm)}>{btnQuatro}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tCinco}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aCinco} • {ano10}</p>
                    <a href={linkCinco} target="_blank" className={clsx(styles.btnUm)}>{btnCinco}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tSeis}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aSeis} • {ano11}</p>
                    <a href={linkSeis} target="_blank" className={clsx(styles.btnUm)}>{btnSeis}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tSete}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aSete} • {ano12}</p>
                    <a href={linkSete} target="_blank" className={clsx(styles.btnUm)}>{btnSete}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tOito}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aOito} • {ano13}</p>
                    <a href={linkOito} target="_blank" className={clsx(styles.btnUm)}>{btnOito}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tNove}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aNove} • {ano14}</p>
                    <a href={linkNove} target="_blank" className={clsx(styles.btnUm)}>{btnNove}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tDez}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aDez} • {ano15}</p>
                    <a href={linkDez} target="_blank" className={clsx(styles.btnUm)}>{btnDez}</a>
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
                  <a href="/"><img className="intro" src={imgBanner} alt="Logo NéFiTs" /></a>
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

export default Publicacoes;
