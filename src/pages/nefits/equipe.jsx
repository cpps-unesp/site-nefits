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
    titulo: "Equipe",
    texto: (
      <>
      </>
    )
  }
]

const membrosEquipe = [
  {
    foto: "/images/icon.svg",
    nome: "Hélio Alexandre da Silva",
    cargo: "Líder",
    descricao: (
      <></>
    ),
    foto2: "/images/Ana_Julia_Diniz_Neves_do_Lago.svg",
    nome2: "Ana Júlia Diniz Neves do Lago",
    cargo2: "Membro",
    descricao2: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp). 
        Atualmente é pesquisadora bolsista FAPESP sob orientação do Prof. Dr. Hélio Alexandre da Silva, com o tema "Liberdades e opressões: a interseccionalidade como crítica do 
        neoliberalismo" (Processo nº 2022/08490-6). Realizou Estágio de Pesquisa no Exterior com bolsa BEPE/Fapesp (Bolsa de Estágio de Pesquisa no Exterior) na Université 
        Paris-Nanterre, sob a supervisão do Prof. Dr. Pierre Sauvêtre com o tema "Subjetividade e opressão: um recorte de gênero no neoliberalismo" (Processo nº 2023/08867-5). 
      </>
    ),
  },
  {
    foto: "/images/Bianca_Regina_Poltronieri.svg",
    nome: "Bianca Regina Poltronieri",
    cargo: "Membro",
    descricao: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) na UNESP. Foi pesquisadora bolsista do Programa Institucional de Bolsas de Iniciação 
        Científica (PIBIC) - CNPq, entre 2022 e 2023, com o tema: "Entendendo o Feminismo Islâmico: Uma investigação sobre os desafios que obstam este movimento político-religioso 
        transnacional". Atualmente, participa do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs) e do IARAS - Núcleo de Estudos de Gênero, vinculado ao Grupo de Estudos 
        de Defesa e Segurança Internacional (GEDES-UNESP).
      </>
    ),
    foto2: "/images/Eduarda_Barboza.svg",
    nome2: "Eduarda Pereira Pires Barboza",
    cargo2: "Membro",
    descricao2: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) da UNESP. Foi pesquisadora bolsista do Programa Institucional de Bolsas de Iniciação 
        Científica (PIBIC)- CNPq no ciclo 2022-2023. Participou do Programa de Escala Estudantil AUGM na Universidade de Playa Ancha (UPLA) durante o primeiro semestre letivo de 2024. 
        Atualmente, desenvolve pesquisa para a PIBIC com o tema "A centralidade da propriedade privada na  justificativa ideológica para o colonialismo e a desigualdade social" sob 
        orientação do Prof. Dr. Hélio Alexandre da Silva, faz parte também do Observatório de Conflitos, vinculado ao Grupo de Estudos de Defesa e Segurança Internacional (GEDES-UNESP).
      </>
    ),
  },
  {
    foto: "/images/Gabriel_Henrique_de_Andrade.svg",
    nome: "Gabriel Henrique de Andrade ",
    cargo: "Membro",
    descricao: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e 
        Teoria Social (NéFiTs) e do grupo de pesquisa em Filosofia, Arte e Política (FIAPO). Além disso, é membro coordenador do Grupo de Estudos em Cultura e Antropologia (GECA) e 
        membro do Núcleo de Estudos Linguísticos e Culturais (NELC).
      </>
    ),
    foto2: "/images/Gabrielle_Nascimento.svg",
    nome2: "Gabrielle Nascimento",
    cargo2: "Membro",
    descricao2: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) na UNESP. Pesquisadora bolsista pela Vunesp em colaboração com a Secretaria de Educação 
        do Estado de São Paulo (SEDUC) desde de 2022 com finalização prevista para 2024 com o tema: "Planificação: um mapa conceitual do debate", sob a orientação do Prof. Dr Hélio 
        Alexandre. Participou do Programa de Escala Estudantil AUGM na Universidade de Santiago do Chile durante o segundo semestre letivo de 2023. Atualmente, participa do Núcleo de 
        Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs).
      </>
    ),
  },
  {
    foto: "/images/Natalie.svg",
    nome: "Natalie Storti Corbani",
    cargo: "Membro",
    descricao: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp).  
        Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    foto2: "/images/Roan.svg",
    nome2: "Roan Matthaeus Chimello Dias",
    cargo2: "Membro",
    descricao2: (
      <>
        Possui graduação em Direito pela UNESP (Universidade Estadual Paulista Júlio de Mesquita Filho) - FCHS - Faculdade de Ciências Humanas e Sociais Câmpus de Franca (2021), 
        mestrando no Programa de Pós-Graduação em Filosofia, Curso de Mestrado Acadêmico, na UNESP Faculdade de Filosofia e Ciências - Câmpus de Marília. Tem experiência na área de 
        Filosofia, com ênfase em "Teoria Crítica" e "Ética". Ex integrante da Assessoria Jurídica Popular/AJUP da UNESP-Franca.
      </>
    ),
  },
  {
    foto: "/images/Sofia_Grandini.svg",
    nome: "Sofia Grandini",
    cargo: "Membro",
    descricao: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais (FCHS) da UNESP, desenvolve pesquisa no Programa Institucional de Bolsas de Iniciação Científica 
        (PIBIC) sobre indústria cultural e os conceitos de tempo livre, lazer e ócio intitulada "Tempo livre, lazer e ócio: dimensões da indústria cultural em Adorno e Horkheimer". 
        Participa do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    foto2: "/images/Icaro_Costa_Ferreira.svg",
    nome2: "Ícaro Costa Ferreira",
    cargo2: "Membro",
    descricao2: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Integrante do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social 
        (NéFiTs). Com interesse pessoal em explorar as interseções entre Relações Internacionais e Filosofia.
      </>
    ),
  },
  {
    foto: "/images/Julia_de_Andrade.svg",
    nome: "Julia de Andrade Fernandes Francisco",
    cargo: "Membro",
    descricao: (
      <>
        Graduanda em Relações Internacionais, pela Universidade Estadual Paulista Júlio de Mesquita Filho, Faculdade de Ciências Humanas e Sociais, câmpus de Franca. Integrante do 
        Núcleo de Pesquisa em Ética, Filosofia, Teoria Política e Social (NéFITs) e pesquisadora do Programa de Inicação Científica Sem Bolsa (ICSB) - CNPQ, sob orientação do Professor 
        Dr. Hélio Alexandre da Silva, com o tema "Pobreza e dever moral na Metafísica dos Costumes de Kant". Atualmente. também faz parte do projeto de extensão popular Núcleo Agrário 
        Terra e Raíz (Natra), no coletivo de produção. Tem interesse na área de filosofia, com especial interesse nos temas referentes à ética, aos estudos kantianos e aos estudos de 
        gênero.
      </>
    ),
    foto2: "/images/Matheus_Sena.svg",
    nome2: "Matheus Sena Asevedo Campanhã",
    cargo2: "Membro",
    descricao2: (
      <>
        Bacharel e Licenciado em Ciências Sociais pela Faculdade de Ciências e Letras - campus de Araraquara -, da Universidade Estadual Paulista (FCLAr/UNESP) com a monografia 
        "A autodeterminação negra: uma análise da filosofia social e política de Achille Mbembe". Integra o Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs) e o Núcleo Negro da UNESP para Pesquisa e 
        Extensão (NUPE) no qual foi bolsista pela PROEC. Atualmente é mestrando com bolsa pela CAPES em Filosofia pela Faculdade de Filosofia e Ciências - campus de Marília -, da 
        Universidade Estadual Paulista (FFC/UNESP) com o projeto "Violência em Frantz Fanon e Achille Mbembe”.
      </>
    ),
  },
  {
    foto: "/images/Matheus_Vilhena.svg",
    nome: "Matheus de Vilhena Moraes",
    cargo: "Membro",
    descricao: (
      <>
        Mestrando em Filosofia na Faculdade de Filosofia e Ciências (FFC) - Unesp/Marília. Bacharel em Direito pela Faculdade de Ciências Humanas e Sociais (FCHS) - Unesp/Franca. 
        Realizou Iniciação Científica financiada pela FAPESP, orientado pelo professor Dr. Hélio Alexandre da Silva, sob o título: "A erradicação da pobreza extrema através da reforma 
        das instituições compartilhadas proposta por Thomas Pogge" (Processo Nº 2021/03197-6). Realizou Estágio de Pesquisa no Exterior com a bolsa BEPE/Fapesp (Bolsa de Estágio de 
        Pesquisa no Exterior) no Global Justice Program na Yale University, orientado pelo professor Thomas Pogge, com o título: "Critério de Justiça Universal, 
        Dever Negativo e Dever Positivo de Justiça: o estudo teórico dos conceitos da reforma institucional de Thomas Pogge" (Processo Nº 2022/04654-4). 
      </>
    ),
    foto2: "",
    nome2: "",
    cargo2: "",
    descricao2: (
      <>
      </>
    ),
  },
]

function MembrosEquipe({foto, foto2, nome, nome2, cargo, cargo2, descricao, descricao2}){
  return(
    <div class="row justify-content-center">
      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto} alt="Foto do membro da equipe" className="img-fluid rounded-start" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto2} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome2}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo2}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao2}</p>
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
                        <li className={clsx(styles.liListaSelecionado)}><a href={link3}>Equipe</a></li>
                        <li className={clsx(styles.liLista)}><a href={link4}>Notícias</a></li>
                        <li className={clsx(styles.liLista)}><a href={link5}>Projetos</a></li>
                        <li className={clsx(styles.liLista)}><a href={link6}>Publicações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Equipe() {
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
              {membrosEquipe.map((props, idx) => (
                <MembrosEquipe key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Equipe;