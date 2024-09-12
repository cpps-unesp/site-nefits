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
    link2: "https://www.instagram.com/nefits.unesp?igsh=MTQxcXhiYjd5N2R1",
    link3: "#",
    link4: "https://www.youtube.com/@nefits8028",
    logo1: "/images/logos_rodape.svg",
  }
];

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
    foto: "/images/Professor_Helio.svg",
    nome: "Hélio Alexandre da Silva",
    cargo: "Pesquisador – Coordenador",
    descricao: (
      <>
        Professor Assistente doutor da UNESP/Franca e do Programa de Pós-graduação em Filosofia da UNESP/Marilia. Coordenador do Programa de Pós-graduação em Planejamento e Análise em 
        Políticas Públicas UNESP/Franca. Possui graduação e mestrado em Filosofia pela Unesp/Marília e Doutorado em Filosofia pela Universidade Estadual de Campinas. Realizou doutorado 
        sandwich em Filosofia na École des Hautes Études en Sciences Sociales (2011) e Pós-doutorado em Filosofia (2018) na École des Hautes Études en Sciences Sociales. Possui interesse 
        nos seguintes temas: Filosofia social e política, pobreza, crítica social, modernidade, desigualdade, alienação, sofrimento social, conflitos sociais, movimentos sociais. Atualmente 
        desenvolve a pesquisa "Crítica da pobreza como objeto da filosofia social" com financiamento Fapesp processo 22/02922-1.
      </> 
    ),
    foto2: "/images/Ana_Julia_Diniz_Neves_do_Lago.svg",
    nome2: "Ana Júlia Diniz Neves do Lago",
    cargo2: "Graduanda",
    descricao2: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp). 
        Atualmente é pesquisadora bolsista FAPESP sob orientação do Prof. Dr. Hélio Alexandre da Silva, com o tema "Liberdades e opressões: a interseccionalidade como crítica do 
        neoliberalismo" (Processo nº 2022/08490-6). Realizou Estágio de Pesquisa no Exterior com bolsa BEPE/Fapesp (Bolsa de Estágio de Pesquisa no Exterior) na Université 
        Paris-Nanterre, sob a supervisão do Prof. Dr. Pierre Sauvêtre com o tema "Subjetividade e opressão: um recorte de gênero no neoliberalismo" (Processo nº 2023/08867-5). 
      </>
    ),

    foto3: "/images/Bianca_Regina_Poltronieri.svg",
    nome3: "Bianca Regina Poltronieri",
    cargo3: "Graduanda",
    descricao3: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) na UNESP. Foi pesquisadora bolsista do Programa Institucional de Bolsas de Iniciação 
        Científica (PIBIC) - CNPq, entre 2022 e 2023, com o tema: "Entendendo o Feminismo Islâmico: Uma investigação sobre os desafios que obstam este movimento político-religioso 
        transnacional". Atualmente, participa do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs) e do IARAS - Núcleo de Estudos de Gênero, vinculado ao Grupo de Estudos 
        de Defesa e Segurança Internacional (GEDES-UNESP).
      </>
    ),
    foto4: "/images/Eduarda_Barboza.svg",
    nome4: "Eduarda Pereira Pires Barboza",
    cargo4: "Graduanda",
    descricao4: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) da UNESP. Foi pesquisadora bolsista do Programa Institucional de Bolsas de Iniciação 
        Científica (PIBIC)- CNPq no ciclo 2022-2023. Participou do Programa de Escala Estudantil AUGM na Universidade de Playa Ancha (UPLA) durante o primeiro semestre letivo de 2024. 
        Atualmente, desenvolve pesquisa para a PIBIC com o tema "A centralidade da propriedade privada na  justificativa ideológica para o colonialismo e a desigualdade social" sob 
        orientação do Prof. Dr. Hélio Alexandre da Silva, faz parte também do Observatório de Conflitos, vinculado ao Grupo de Estudos de Defesa e Segurança Internacional (GEDES-UNESP).
      </>
    ),

    foto5: "/images/Gabriel_Henrique_de_Andrade.svg",
    nome5: "Gabriel Henrique de Andrade ",
    cargo5: "Graduando",
    descricao5: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e 
        Teoria Social (NéFiTs) e do grupo de pesquisa em Filosofia, Arte e Política (FIAPO). Além disso, é membro coordenador do Grupo de Estudos em Cultura e Antropologia (GECA) e 
        membro do Núcleo de Estudos Linguísticos e Culturais (NELC).
      </>
    ),
    foto6: "/images/Gabrielle_Nascimento.svg",
    nome6: "Gabrielle Nascimento",
    cargo6: "Graduanda",
    descricao6: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) na UNESP. Pesquisadora bolsista pela Vunesp em colaboração com a Secretaria de Educação 
        do Estado de São Paulo (SEDUC) desde de 2022 com finalização prevista para 2024 com o tema: "Planificação: um mapa conceitual do debate", sob a orientação do Prof. Dr Hélio 
        Alexandre. Participou do Programa de Escala Estudantil AUGM na Universidade de Santiago do Chile durante o segundo semestre letivo de 2023. Atualmente, participa do Núcleo de 
        Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    
    foto7: "/images/Natalie.svg",
    nome7: "Natalie Storti Corbani",
    cargo7: "Graduanda",
    descricao7: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp).  
        Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    foto8: "/images/Roan.svg",
    nome8: "Roan Matthaeus Chimello Dias",
    cargo8: "Mestrando",
    descricao8: (
      <>
        Possui graduação em Direito pela UNESP (Universidade Estadual Paulista Júlio de Mesquita Filho) - FCHS - Faculdade de Ciências Humanas e Sociais Câmpus de Franca (2021), 
        mestrando no Programa de Pós-Graduação em Filosofia, Curso de Mestrado Acadêmico, na UNESP Faculdade de Filosofia e Ciências - Câmpus de Marília. Tem experiência na área de 
        Filosofia, com ênfase em "Teoria Crítica" e "Ética". Ex integrante da Assessoria Jurídica Popular/AJUP da UNESP-Franca.
      </>
    ),
    
    foto9: "/images/Sofia_Grandini.svg",
    nome9: "Sofia Grandini",
    cargo9: "Graduanda",
    descricao9: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais (FCHS) da UNESP, desenvolve pesquisa no Programa Institucional de Bolsas de Iniciação Científica 
        (PIBIC) sobre indústria cultural e os conceitos de tempo livre, lazer e ócio intitulada "Tempo livre, lazer e ócio: dimensões da indústria cultural em Adorno e Horkheimer". 
        Participa do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    foto10: "/images/Icaro_Costa_Ferreira.svg",
    nome10: "Ícaro Costa Ferreira",
    cargo10: "Graduando",
    descricao10: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Integrante do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social 
        (NéFiTs). Com interesse pessoal em explorar as interseções entre Relações Internacionais e Filosofia.
      </>
    ),
    
    foto11: "/images/Julia_de_Andrade.svg",
    nome11: "Julia de Andrade Fernandes Francisco",
    cargo11: "Graduanda",
    descricao11: (
      <>
        Graduanda em Relações Internacionais, pela Universidade Estadual Paulista Júlio de Mesquita Filho, Faculdade de Ciências Humanas e Sociais, câmpus de Franca. Integrante do 
        Núcleo de Pesquisa em Ética, Filosofia, Teoria Política e Social (NéFITs) e pesquisadora do Programa de Inicação Científica Sem Bolsa (ICSB) - CNPQ, sob orientação do Professor 
        Dr. Hélio Alexandre da Silva, com o tema "Pobreza e dever moral na Metafísica dos Costumes de Kant". Atualmente. também faz parte do projeto de extensão popular Núcleo Agrário 
        Terra e Raíz (Natra), no coletivo de produção. Tem interesse na área de filosofia, com especial interesse nos temas referentes à ética, aos estudos kantianos e aos estudos de 
        gênero.
      </>
    ),
    foto12: "/images/Matheus_Sena.svg",
    nome12: "Matheus Sena Asevedo Campanhã",
    cargo12: "Mestrando",
    descricao12: (
      <>
        Bacharel e Licenciado em Ciências Sociais pela Faculdade de Ciências e Letras - campus de Araraquara -, da Universidade Estadual Paulista (FCLAr/UNESP) com a monografia 
        "A autodeterminação negra: uma análise da filosofia social e política de Achille Mbembe". Integra o Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs) e o Núcleo Negro da UNESP para Pesquisa e 
        Extensão (NUPE) no qual foi bolsista pela PROEC. Atualmente é mestrando com bolsa pela CAPES em Filosofia pela Faculdade de Filosofia e Ciências - campus de Marília -, da 
        Universidade Estadual Paulista (FFC/UNESP) com o projeto "Violência em Frantz Fanon e Achille Mbembe”.
      </>
    ),
    
    foto13: "/images/Matheus_Vilhena.svg",
    nome13: "Matheus de Vilhena Moraes",
    cargo13: "Mestrando",
    descricao13: (
      <>
        Mestrando em Filosofia na Faculdade de Filosofia e Ciências (FFC) - Unesp/Marília. Bacharel em Direito pela Faculdade de Ciências Humanas e Sociais (FCHS) - Unesp/Franca. 
        Realizou Iniciação Científica financiada pela FAPESP, orientado pelo professor Dr. Hélio Alexandre da Silva, sob o título: "A erradicação da pobreza extrema através da reforma 
        das instituições compartilhadas proposta por Thomas Pogge" (Processo Nº 2021/03197-6). Realizou Estágio de Pesquisa no Exterior com a bolsa BEPE/Fapesp (Bolsa de Estágio de 
        Pesquisa no Exterior) no Global Justice Program na Yale University, orientado pelo professor Thomas Pogge, com o título: "Critério de Justiça Universal, 
        Dever Negativo e Dever Positivo de Justiça: o estudo teórico dos conceitos da reforma institucional de Thomas Pogge" (Processo Nº 2022/04654-4). 
      </>
    ),

    foto15: "/images/Beatriz_Furlan.svg",
    nome15: "Beatriz Furlan de Carvalho",
    cargo15: "Mestranda",
    descricao15: (
      <>
        Mestranda em Filosofia pela Universidade Estadual Paulista (UNESP-Marília), na qual desenvolve uma pesquisa com o tema de noção de esfera pública em Nancy Fraser, sob orientação do 
        Prof. Dr. Hélio Alexandre da Silva. Graduada em direito pela Universidade Estadual de Londrina (UEL).
      </>
    ),

    foto14: "/images/Bruno_Gomes.svg",
    nome14: "Bruno Gomes Dos Santos",
    cargo14: "Mestrando",
    descricao14: (
      <>
        Mestrando em Filosofia pela Universidade Estadual Paulista (UNESP-Marília), na linha "Conhecimento, Ética e Política", sob orientação do Prof. Dr. Hélio Alexandre da Silva. 
        Membro do Núcleo de pesquisa em Ética, Filosofia, Teoria política e Social (NéFiTs) (UNESP-Franca). Graduado em Psicologia pela Pontifícia Universidade Católica de Campinas. 
        Desenvolveu projeto de Iniciação Científica sob orientação da Prof Dra Raquel Souza Lobo Guzzo, nas temáticas de Ideologia e Subjetividade. Tem interesse no diálogo entre 
        Psicanálise e Teoria Crítica, Psicanálise e Filosofia Política,Sofrimento Social, Reconhecimento.
      </>
    ),

    foto16: "/images/Isabela-Masciarelli.svg",
    nome16: "Isabela Masciarelli",
    cargo16: "Graduanda",
    descricao16: (
      <>
        Graduanda em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e Teoria 
        Social (NéFiTs). 
      </>
    ),

    foto18: "/images/icon.svg",
    nome18: "Júlia de Almeida",
    cargo18: "Graduanda",
    descricao18: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp). Tem interesse nas 
        áreas de sociologia, desigualdade social e precarização do trabalho.   Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e Teoria Social (NéFiTs).
      </>
    ),

    foto17: "/images/Luiz_Bispo.svg",
    nome17: "Luiz Eduardo Alves Bispo",
    cargo17: "Graduando",
    descricao17: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais (FCHS) na UNESP. Pesquisador bolsista do programa VUNESP (2022-2024) com o tema "Injustiça 
        Testemunhal: uma forma de olhar a aporofobia" sob orientação do Prof. Dr. Hélio Alexandre da Silva. Faz parte também do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social 
        (NéFiTs) e do Núcleo de Estudos da Violência, Criminalidade e Forças Armadas na América latina (NEFA), onde desenvolve um projeto sob orientação da Prof. Dra. Marília Carolina 
        Barbosa de Souza Pimenta na área de Segurança e América Latina em Relações Internacionais.
      </>
    ),

    foto19: "/images/Laura_Capucci.svg",
    nome19: "Laura Capucci ",
    cargo19: "Graduanda",
    descricao19: (
      <>
        Curso o quinto semestre de Relações Internacionais pela UNESP (Universidade Estadual Paulista “Júlio de Mesquita Filho”) - Campus Franca. Fiz parte da administração do grupo de extensão 
        GEPESOI por 2 anos. Além disso, também fiz parte do âmbito administrativo do Cursinho Popular atrelado à universidade, bem como lecionei a matéria de biologia aos cursistas por mais de 
        1 ano. Atualmente, faço parte do time de Relações Comerciais da ORBE - Consultoria Internacional como Analista do Projeto Governamental e sou membro do Núcleo de Pesquisa em Ética, 
        Filosofia, Teoria Política e Social (NéFTis) desde agosto de 2022.
      </>
    ),
  },
]

const data = [
  {
    foto: "/images/Professor_Helio.svg",
    nome: "Hélio Alexandre da Silva",
    cargo: "Pesquisador – Coordenador",
    descricao: (
      <></> 
    ),
  },
  {
    foto: "/images/Ana_Julia_Diniz_Neves_do_Lago.svg",
    nome: "Ana Júlia Diniz Neves do Lago",
    cargo: "Membro",
    descricao: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp). 
        Atualmente é pesquisadora bolsista FAPESP sob orientação do Prof. Dr. Hélio Alexandre da Silva, com o tema "Liberdades e opressões: a interseccionalidade como crítica do 
        neoliberalismo" (Processo nº 2022/08490-6). Realizou Estágio de Pesquisa no Exterior com bolsa BEPE/Fapesp (Bolsa de Estágio de Pesquisa no Exterior) na Université 
        Paris-Nanterre, sob a supervisão do Prof. Dr. Pierre Sauvêtre com o tema "Subjetividade e opressão: um recorte de gênero no neoliberalismo" (Processo nº 2023/08867-5). 
      </>
    ),
  }
]

function Cards(props){
  return(
    <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={props.foto} alt="Foto do membro da equipe" className="img-fluid rounded-start" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{props.nome}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{props.cargo}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{props.descricao}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

function MembrosEquipe({foto, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19,
  nome, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10, nome11, nome12, nome13, nome14, nome15, nome16, nome17, nome18, nome19,
  cargo, cargo2, cargo3, cargo4, cargo5, cargo6, cargo7, cargo8, cargo9, cargo10, cargo11, cargo12, cargo13, cargo14, cargo15, cargo16, cargo17, cargo18, cargo19,
  descricao, descricao2, descricao3, descricao4, descricao5, descricao6, descricao7, descricao8, descricao9, descricao10, descricao11, descricao12, descricao13, 
  descricao14, descricao15, descricao16, descricao17, descricao18, descricao19}){
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

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto3} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome3}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo3}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao3}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto4} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome4}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo4}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao4}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto5} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome5}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo5}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao5}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto6} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome6}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo6}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao6}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto7} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome7}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo7}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao7}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto8} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome8}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo8}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao8}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto9} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome9}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo9}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao9}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto10} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome10}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo10}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao10}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto11} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome11}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo11}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao11}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto12} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome12}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo12}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao12}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto13} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome13}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo13}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao13}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5 h-100 d-inline-block">
            <img src={foto14} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome14}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo14}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao14}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto15} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome15}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo15}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao15}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto16} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome16}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo16}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao16}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto17} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome17}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo17}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao17}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto18} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome18}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo18}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao18}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto19} alt="Foto do membro da equipe" className={clsx(styles.fotoEquipe, "img-fluid rounded-start")} />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}>{nome19}</h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}>{cargo19}</p>
              <p class={clsx(styles.descricao, "gy-0")}>{descricao19}</p>
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
            <li className={clsx(styles.liListaSelecionado)}>
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

export default Equipe;