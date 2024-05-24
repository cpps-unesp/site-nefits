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

    foto3: "/images/Bianca_Regina_Poltronieri.svg",
    nome3: "Bianca Regina Poltronieri",
    cargo3: "Membro",
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
    cargo4: "Membro",
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
    cargo5: "Membro",
    descricao5: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e 
        Teoria Social (NéFiTs) e do grupo de pesquisa em Filosofia, Arte e Política (FIAPO). Além disso, é membro coordenador do Grupo de Estudos em Cultura e Antropologia (GECA) e 
        membro do Núcleo de Estudos Linguísticos e Culturais (NELC).
      </>
    ),
    foto6: "/images/Gabrielle_Nascimento.svg",
    nome6: "Gabrielle Nascimento",
    cargo6: "Membro",
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
    cargo7: "Membro",
    descricao7: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais de Franca (FCHS) da Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp).  
        Atualmente participa do Núcleo de Pesquisa em Ética Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    foto8: "/images/Roan.svg",
    nome8: "Roan Matthaeus Chimello Dias",
    cargo8: "Membro",
    descricao8: (
      <>
        Possui graduação em Direito pela UNESP (Universidade Estadual Paulista Júlio de Mesquita Filho) - FCHS - Faculdade de Ciências Humanas e Sociais Câmpus de Franca (2021), 
        mestrando no Programa de Pós-Graduação em Filosofia, Curso de Mestrado Acadêmico, na UNESP Faculdade de Filosofia e Ciências - Câmpus de Marília. Tem experiência na área de 
        Filosofia, com ênfase em "Teoria Crítica" e "Ética". Ex integrante da Assessoria Jurídica Popular/AJUP da UNESP-Franca.
      </>
    ),
    
    foto9: "/images/Sofia_Grandini.svg",
    nome9: "Sofia Grandini",
    cargo9: "Membro",
    descricao9: (
      <>
        Graduanda em Relações Internacionais na Faculdade de Ciências Humanas e Sociais (FCHS) da UNESP, desenvolve pesquisa no Programa Institucional de Bolsas de Iniciação Científica 
        (PIBIC) sobre indústria cultural e os conceitos de tempo livre, lazer e ócio intitulada "Tempo livre, lazer e ócio: dimensões da indústria cultural em Adorno e Horkheimer". 
        Participa do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social (NéFiTs).
      </>
    ),
    foto10: "/images/Icaro_Costa_Ferreira.svg",
    nome10: "Ícaro Costa Ferreira",
    cargo10: "Membro",
    descricao10: (
      <>
        Graduando em Relações Internacionais pela Faculdade de Ciências Humanas e Sociais de Franca (FCHS) - UNESP. Integrante do Núcleo de Pesquisa em Ética, Filosofia e Teoria Social 
        (NéFiTs). Com interesse pessoal em explorar as interseções entre Relações Internacionais e Filosofia.
      </>
    ),
    
    foto11: "/images/Julia_de_Andrade.svg",
    nome11: "Julia de Andrade Fernandes Francisco",
    cargo11: "Membro",
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
    cargo12: "Membro",
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
    cargo13: "Membro",
    descricao13: (
      <>
        Mestrando em Filosofia na Faculdade de Filosofia e Ciências (FFC) - Unesp/Marília. Bacharel em Direito pela Faculdade de Ciências Humanas e Sociais (FCHS) - Unesp/Franca. 
        Realizou Iniciação Científica financiada pela FAPESP, orientado pelo professor Dr. Hélio Alexandre da Silva, sob o título: "A erradicação da pobreza extrema através da reforma 
        das instituições compartilhadas proposta por Thomas Pogge" (Processo Nº 2021/03197-6). Realizou Estágio de Pesquisa no Exterior com a bolsa BEPE/Fapesp (Bolsa de Estágio de 
        Pesquisa no Exterior) no Global Justice Program na Yale University, orientado pelo professor Thomas Pogge, com o título: "Critério de Justiça Universal, 
        Dever Negativo e Dever Positivo de Justiça: o estudo teórico dos conceitos da reforma institucional de Thomas Pogge" (Processo Nº 2022/04654-4). 
      </>
    ),
  },
]

const data = [
  {
    foto: "/images/Professor_Helio.svg",
    nome: "Hélio Alexandre da Silva",
    cargo: "Líder",
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

function MembrosEquipe({foto, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, 
  nome, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10, nome11, nome12, nome13,
  cargo, cargo2, cargo3, cargo4, cargo5, cargo6, cargo7, cargo8, cargo9, cargo10, cargo11, cargo12, cargo13,
  descricao, descricao2, descricao3, descricao4, descricao5, descricao6, descricao7, descricao8, descricao9, descricao10, descricao11, descricao12, descricao13}){
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