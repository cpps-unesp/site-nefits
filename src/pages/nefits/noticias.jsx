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
    link2: "#",
    link3: "#",
    link4: "https://www.youtube.com/@nefits8028",
    logo1: "/images/logos_rodape.svg",
  }
];

const primeiroContainer = [
  {
    titulo: "Notícias",
    texto: (
      <>
        Leia as últimas notícias sobre o Núcleo de Estudos em Filosofia, Teoria e Sociedade.	
      </>
    )
  }
]

const noticiasCards = [
  {
    foto: "/images/noticia-1.svg",
    titulo: "Experiências Internacionais – Yale University (Matheus de Vilhena Moraes)",
    texto: (
      <>
      O discente do curso de Direito da FCHS, Matheus de Vilhena Moraes, foi contemplado com a bolsa BEPE – Bolsa de Estágio de Pesquisa no Exterior para desenvolver parte da sua pesquisa realizada no Brasil com o financiamento da FAPESP (Fundação de Amparo à Pesquisa do Estado de São Paulo), sob a orientação do Prof. Dr. Hélio Alexandre da Silva.
      Entre agosto e novembro de 2022, Matheus integrou o Programa de Justiça Global da Universidade de Yale...
      </>
    ),
    btn: "Saiba mais",
    link: "https://www.franca.unesp.br/#!/noticia/643/pesquisa-internacional--universidade-de-yale/",
    foto2: "/images/noticia-2.svg",
    titulo2: "Experiências Internacionais – Universidade Paris-Nanterre (Ana Júlia Diniz Neves do Lago)",
    texto2: (
      <>
      Ana Júlia Diniz Neves do Lago, graduanda do curso de Relações Internacionais da Unesp e bolsista de Iniciação Científica, foi contemplada com uma Bolsa Estágio de Pesquisa no Exterior - BEPE (Processo nº 2023/08867-5) na Universidade Paris-Nanterre, França, financiada pela FAPESP (Fundação de Amparo à Pesquisa do Estado de São Paulo), sob supervisão do Prof. Dr. Pierre Sauvêtre.
      O projeto de pesquisa de Ana Júlia, intitulado "Subjetividade e opressão: um recorte de gênero no neoliberalismo", foi desenvolvido entre 01/11/2023 e 29/02/2024...
      </>
    ),
    btn2: "Saiba mais",
    link2: "https://bv.fapesp.br/pt/bolsas/211973/subjetividade-e-opressao-um-recorte-de-genero-no-neoliberalismo/",
  },
  {
    foto: "/images/noticia-3.svg",
    titulo: "Experiências Internacionais: Universidade de Santiago do Chile (Gabrielle Nascimento)",
    texto: (
      <>
      Gabrielle Nascimento, discente do curso de Relações Internacionais, que estuda Planejamento Econômico como crítica anti-capitalista, foi contemplada com uma oportunidade de intercâmbio na Universidad de Santiago de Chile. Entre agosto de 2023 e janeiro de 2024, Gabrielle desenvolveu sua pesquisa focada na conceituação e mapeamento do debate sobre a planificação econômica, suas experiências e sua efetividade na construção do socialismo.
      Durante sua estadia no Chile, Gabrielle esteve presente no aniversário de 50 anos da ditadura militar...
      </>
    ),
    btn: "Saiba mais",
    link: "",
    foto2: "/images/noticia-4.svg",
    titulo2: "Experiências Internacionais: Universidad de Playa Ancha (Eduarda Pereira Pires Barboza)",
    texto2: (
      <>
      Entre 3 de março e 18 de julho, Eduarda Pereira Pires Barboza, discente do curso de Relações Internacionais, realizou uma visita na Universidad de Playa Ancha (UPLA), no Chile. Seu estudo centraliza-se na desigualdade social, e o intercâmbio foi crucial para expandir sua compreensão desse tema.
      Durante sua estadia, Eduarda observou uma abordagem diferente em relação à desigualdade. Participando de congressos e jornadas, e conversando com colegas e professores, a discente notou que a distinção entre público e estatal é frequentemente enfatizada...
      </>
    ),
    btn2: "Saiba mais",
    link2: "",
  },
  {
    foto: "/images/noticia-5.svg",
    titulo: "Lançamento do Livro: Experiências Sociais Negativas",
    texto: (
      <>
      O Núcleo de Estudos em Ética e Teoria Política e Social tem o prazer de anunciar o lançamento do livro "Experiências Sociais Negativas", uma obra que explora o sofrimento e outras experiências negativas que acompanham a vivência de determinados indivíduos, sob uma perspectiva interdisciplinar e crítica.
      O livro questiona se a Filosofia e as Ciências Sociais podem se ocupar do problema do sofrimento, tradicionalmente considerado objeto exclusivo da psicologia e das terapias. A resposta afirmativa baseia-se na compreensão de que tais experiências não são meramente individuais...
      </>
    ),
    btn: "Saiba mais",
    link: "",
    foto2: "/images/noticia-6.svg",
    titulo2: "II Seminário Permanente de Filosofia Crítica e Sociedade",
    texto2: (
      <>
      Nos dias 24 e 25 de abril, o campus de Franca da UNESP sediou o II Encontro do Seminário Permanente de Filosofia, Crítica e Sociedade. O evento, que surgiu como um esforço de construção de um espaço de debates durante a pandemia, reuniu pesquisadores do Brasil e da América Latina.
      Com o tema "Crítica e subjetividade: experiências do presente para imaginar o futuro", o encontro privilegiou a profundidade dos debates, focando em cada sessão em uma única apresentação, seja um trabalho em progresso ou uma publicação recente... 
      </>
    ),
    btn2: "Saiba mais",
    link2: "",
  },
]

function NoticiasCards({foto, titulo, texto, btn, link, foto2, titulo2, texto2, btn2, link2}){
  return(
    <div class="row justify-content-center">
      <div className={clsx(styles.cardNoticias, "col-12 col col-xxl-5 mt-1 mx-2 mb-2 px-0 text-center")}>
        <div class="row">
          <div class="col-6">
            <img src={foto} alt="Logo" className={clsx(styles.imgNoticias, "img-fluid")} />
          </div>
          <div class="col-6 text-start mt-3">
            <h1 className={clsx(styles.tituloEquipe)}>{titulo}</h1>
            <p className={clsx(styles.textoEquipe, "mb-4")}>{texto}</p>
            <a href={link} target="_blank" className={clsx(styles.btnUm)}>{btn}</a>
          </div>
        </div>
      </div>

      <div className={clsx(styles.cardNoticias, "col-12 col col-xxl-5 mt-1 mx-2 mb-2 px-0 text-center")}>
        <div class="row">
          <div class="col-6">
            <img src={foto2} alt="Logo" className={clsx(styles.imgNoticias, "img-fluid")} />
          </div>
          <div class="col-6 text-start mt-3">
            <h1 className={clsx(styles.tituloEquipe)}>{titulo2}</h1>
            <p className={clsx(styles.textoEquipe, "mb-4")}>{texto2}</p>
            <a href={link2} target="_blank" className={clsx(styles.btnUm)}>{btn2}</a>
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
            <li className={clsx(styles.liLista)}>
              <a href={link2}>Sobre</a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link3}>Equipe</a>
            </li>
            <li className={clsx(styles.liListaSelecionado)}>
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

function Noticias() {
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
              {noticiasCards.map((props, idx) => (
                <NoticiasCards key={idx} {...props} />
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

export default Noticias;
