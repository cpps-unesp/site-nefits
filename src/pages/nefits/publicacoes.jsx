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
      </>
    ),
    titulo1: "Ethical Challenges in the Climate Crisis: Thomas Pogge's Perspective and the Challenges for Global Cooperation",
    autores1: "Matheus de Vilhena Moraes",
    descricao1: (
      <>
      This article explores the climate crisis, examining not only the urgency of action but also the ethical and social complexities associated with it...
      </>
    ),
    btn1: "Saiba mais",


    t1: "Alienação de negras e negros em Achille Mbembe",
    texto3: (
      <>
      </>
    ),
    a1: "Matheus Sena Asevedo Campanhã",
    d1: (
      <>
      Este estudo teve como objetivo reunir e compreender os aspectos e os
      contornos mais relevantes do conceito de alienação para negras e negros
      na obra <i>Crítica da razão negra</i> (2020a) do filósofo Achille Mbembe através de uma análise
      textual, na qual se fez uma reconstrução da obra em questão...
      </>
    ),
    btn4: "Saiba mais",
    t2: "Pobreza como Déficit dos Direitos Humanos em Thomas Pogge",
    a2: "Matheus de Vilhena Moraes",
    d2: (
      <>
      Thomas Pogge é um dos mais importantes filósofos políticos a ter como tema central
      o problema da pobreza. Segundo o autor, boa parte da pobreza global poderia ser resolvida a
      partir de pequenas mudanças na ordem global...
      </>
    ),
    btn5: "Saiba mais",
    
    t4: "O Benefício de Prestação Continuada: um estudo sobre a centralidade da pobreza no seu quadro normativo.",
    a4: "Andreia Celia Silva de Oliveira",
    d4: (
      <>
      O estudo objetiva analisar as concepções de pobreza apresentadas no quadro normativo do programa 
      Benefício de Prestação Continuada (BPC), criado pela Lei 8.742 (Lei Orgânica da Assistência Social – LOAS), 
      de 07 de dezembro de 1993 e suas alterações posteriores...
      </>
    ),
    btn7: "Saiba mais",
    t5: "Teoria Democrática Deliberativa: uma análise dos conselhos municipais de assistência social",
    a5: "Talismara Guilherme Molina",
    d5: (
      <>
      As diversas experiências sobre a institucionalização de espaços deliberativos, como forma de
      renovação democrática, têm despertado interesse de estudos tanto no campo teórico quanto no
      empírico, em que a teoria democrática deliberativa figura como sustentáculo da
      institucionalização...
      </>
    ),
    btn8: "Saiba mais",

    tUm: "A Autodeterminação Negra: uma análise da filosofia social e política de Achille Mbembe",
    texto4: (
      <>
      </>
    ),
    aUm: "Matheus Sena Asevedo Campanhã",
    dUm: (
      <>
      Esta monografia buscou analisar, principalmente, os conceitos de raça, alienação e
      violência no pensamento de Achille Mbembe em vista de buscar um sentido acerca da
      emancipação e superação da situação da população negra...
      </>
    ),
    btnUm: "Saiba mais",
    tDois: "O Cotidiano e o Estranhamento em Lukács",
    aDois: "Roan Matthaeus Chimello Dias",
    dDois: (
      <>
      A filosofia de Lukács é composta de obras monumentais. Em específico seu período de
      maturidade, sua produção agrega esforços de assentamento e desenvolvimento das bases
      materialista-dialéticas, oferecendo uma rica captura das múltiplas determinações do ser social...
      </>
    ),
    btnDois: "Saiba mais",
    tTres: "Os Contornos da Questão Social em Sobre a Revolução de Hannah Arendt",
    aTres: "Larissa Barcellos Rodrigues",
    dTres: (
      <>
      A compreensão sobre o pensamento político de Hannah Arendt depreende a
      consideração dos diversos momentos e objetivos que conduziram a produção de seus trabalhos
      Os delineamentos sobre a separação da esfera política e social ocupam um espaço privilegiado...
      </>
    ),
    btnTres: "Saiba mais",
    tQuatro: "Malucos de Estrada: a (r)existência de uma forma de vida no Brasil",
    aQuatro: "Daniela Leonardi Polizio",
    dQuatro: (
      <>
      O objetivo deste trabalho é abordar a existência da formação social dos malucos de estrada no
      Brasil como um exemplo de uma Forma de Vida...
      </>
    ),
    btnQuatro: "Saiba mais",
    tCinco: "Relações entre a Ética da Responsabilidade Jonasiana e o Direito",
    aCinco: "Péricles de Freitas Nogueira",
    dCinco: (
      <>
      O presente trabalho tem como objetivo apresentar a teoria da responsabilidade
      desenvolvida por Hans Jonas em seu livro “O Princípio Responsabilidade: Ensaio de uma
      Ética para a Civilização Tecnológica”...
      </>
    ),
    btnCinco: "Saiba mais",
    tSeis: "Necropolítica: a Política de Negação do Negro",
    aSeis: "Mayara Cristina Oliveira Pires",
    dSeis: (
      <>
      O racismo não é apenas um fenômeno evidenciado nas microações presentes na sociedade, 
      ele permeia as estruturas, as noções de poder, os modelos políticos e societais...
      </>
    ),
    btnSeis: "Saiba mais",
    tSete: "Vítimas, Ética e Libertação na Obra de Enrique Dussel",
    aSete: "Beatriz Batista do Nascimento Alkmin",
    dSete: (
      <>
      O número de refugiados que recentemente tem crescido na Europa e nos EUA é um fenômeno que 
      pode ser legitimamente abordado pelas Relações internacionais a partir de várias dimensões...
      </>
    ),
    btnSete: "Saiba mais",
    tOito: "O Cotidiano e o Estranhamento em Lukács",
    aOito: "Roan Matthaeus Chimello Dias",
    dOito: (
      <>
      A filosofia de Lukács é composta de obras monumentais. Em específico seu período de
      maturidade, sua produção agrega esforços de assentamento e desenvolvimento das bases
      materialista-dialéticas...
      </>
    ),
    btnOito: "Saiba mais",
    tNove: "Desigualdade e Diferença: a desigualdade benéfica para todos na teoria da justiça como equidade de John Rawls",
    aNove: "Luana Ambiel Marachini",
    dNove: (
      <>
      A desigualdade e a diferença têm sido fatores articulantes das relações sociais, sejam elas
      analisadas dentro de uma perspectiva interna, ou externa, nacional ou internacionalmente...
      </>
    ),
    btnNove: "Saiba mais",
    tDez: "Igualdade material como instrumento de inclusão social-debate sobre a constitucionalidade das cotas raciais nas Universidades Públicas",
    aDez: "Gabriel Ferreira dos Santos",
    dDez: (
      <>
      O presente trabalho tem como objetivo expor um estudo acerca das ações afirmativas,
      especialmente aquilo que se refere à política de cotas raciais para o ingresso ao ensino superior
      público...
      </>
    ),
    btnDez: "Saiba mais",
    tOnze: "Entre Freire e Jacotot: Emancipação, Saber e Razão",
    aOnze: "Tark Fraig",
    dOnze: (
      <>
      O presente projeto de pesquisa tem por objetivo realizar uma leitura comparada entre
      os educadores Paulo Freire e Joseph Jacotot, a partir de três questões: emancipação, saber e
      razão...
      </>
    ),
    btnOnze: "Saiba mais",
  }
]

function Abas({aba1, aba2, aba3, aba4, texto1, titulo1, autores1, descricao1, btn1, link1, titulo2, autores2, descricao2, btn2, link2, titulo3, autores3, descricao3, btn3, link3, 
  texto2, t1, texto3, a1, d1, btn4, link4, t2, a2, d2, btn5, link5, t3, a3, d3, btn6, link6, t4, d4, a4, btn7, link7, t5, d5, a5, btn8, link8, t6, d6, a6, btn9, link9, textoUm, tUm, 
  aUm, dUm, btnUm, linkUm, tDois, aDois, dDois, btnDois, linkDois, tTres, aTres, dTres, btnTres, linkTres, tQuatro, aQuatro, dQuatro, btnQuatro, linkQuatro, tCinco, aCinco, dCinco, btnCinco, linkCinco,
 tSeis, aSeis, dSeis, btnSeis, linkSeis, tSete, aSete, dSete, btnSete, linkSete, tOito, aOito, dOito, btnOito, linkOito, tNove, aNove, dNove, btnNove, linkNove, tDez, aDez, dDez, btnDez, 
 linkDez, tOnze, aOnze, dOnze, btnOnze, linkOnze}){
  return(
    <div class="col-12">
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
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-4 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo1}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autores1}</p>
                    <p className={clsx(styles.cardTexto)}>{descricao1}</p>
                    <a href={link1} className={clsx(styles.btnUm)}>{btn1}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="artigos-tab-pane" role="tabpanel" aria-labelledby="artigos-tab" tabindex="0">
          <div class="row justify-content-start">
              <p className={clsx(styles.texto)}>{texto2}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-4 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t1}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a1}</p>
                    <p className={clsx(styles.cardTexto)}>{d1}</p>
                    <a href={link4} className={clsx(styles.btnUm)}>{btn4}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-4 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a2}</p>
                    <p className={clsx(styles.cardTexto)}>{d2}</p>
                    <a href={link5} className={clsx(styles.btnUm)}>{btn5}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="teses-tab-pane" role="tabpanel" aria-labelledby="teses-tab" tabindex="0">
          <div class="row justify-content-start">
              <p className={clsx(styles.texto)}>{texto3}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-4 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t4}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a4}</p>
                    <p className={clsx(styles.cardTexto)}>{d4}</p>
                    <a href={link7} className={clsx(styles.btnUm)}>{btn7}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-4 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t5}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a5}</p>
                    <p className={clsx(styles.cardTexto)}>{d5}</p>
                    <a href={link8} className={clsx(styles.btnUm)}>{btn8}</a>
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
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aUm}</p>
                    <p className={clsx(styles.cardTexto)}>{dUm}</p>
                    <a href={linkUm} className={clsx(styles.btnUm)}>{btnUm}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tDois}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aDois}</p>
                    <p className={clsx(styles.cardTexto)}>{dDois}</p>
                    <a href={linkDois} className={clsx(styles.btnUm)}>{btnDois}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tTres}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aTres}</p>
                    <p className={clsx(styles.cardTexto)}>{dTres}</p>
                    <a href={linkTres} className={clsx(styles.btnUm)}>{btnTres}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tQuatro}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aQuatro}</p>
                    <p className={clsx(styles.cardTexto)}>{dQuatro}</p>
                    <a href={linkQuatro} className={clsx(styles.btnUm)}>{btnQuatro}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tCinco}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aCinco}</p>
                    <p className={clsx(styles.cardTexto)}>{dCinco}</p>
                    <a href={linkCinco} className={clsx(styles.btnUm)}>{btnCinco}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tSeis}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aSeis}</p>
                    <p className={clsx(styles.cardTexto)}>{dSeis}</p>
                    <a href={linkSeis} className={clsx(styles.btnUm)}>{btnSeis}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tSete}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aSete}</p>
                    <p className={clsx(styles.cardTexto)}>{dSete}</p>
                    <a href={linkSete} className={clsx(styles.btnUm)}>{btnSete}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tOito}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aOito}</p>
                    <p className={clsx(styles.cardTexto)}>{dOito}</p>
                    <a href={linkOito} className={clsx(styles.btnUm)}>{btnOito}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tNove}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aNove}</p>
                    <p className={clsx(styles.cardTexto)}>{dNove}</p>
                    <a href={linkNove} className={clsx(styles.btnUm)}>{btnNove}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tDez}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aDez}</p>
                    <p className={clsx(styles.cardTexto)}>{dDez}</p>
                    <a href={linkDez} className={clsx(styles.btnUm)}>{btnDez}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{tOnze}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{aOnze}</p>
                    <p className={clsx(styles.cardTexto)}>{dOnze}</p>
                    <a href={linkOnze} className={clsx(styles.btnUm)}>{btnOnze}</a>
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
    </div>
  );
}

export default Publicacoes;
