import React from "react";
import clsx from "clsx";
/* import Layout from "@theme/Layout"; */
import LanguageSelector from "../../components/LanguageSelector";
import Translator from "../../components/i18n/translator";
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

const fapesp = [
  {
    logo: "/images/fapesp_logo.svg"
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
    foto: "/images/Professor_Helio.svg",
    foto2: "/images/Ana_Julia_Diniz_Neves_do_Lago.svg",
    foto3: "/images/Bianca_Regina_Poltronieri.svg",
    foto5: "/images/Gabriel_Henrique_de_Andrade.svg",
    foto6: "/images/Gabrielle_Nascimento.svg",
    foto7: "/images/Natalie.svg",
    foto8: "/images/Roan.svg",
    foto9: "/images/Sofia_Grandini.svg",
    foto10: "/images/Icaro_Costa_Ferreira.svg",
    foto11: "/images/Julia_de_Andrade.svg",
    foto12: "/images/Matheus_Sena.svg",
    foto13: "/images/Matheus_Vilhena.svg",
    foto15: "/images/Beatriz_Furlan.svg",
    foto14: "/images/Bruno_Gomes.svg",
    foto16: "/images/Isabela-Masciarelli.svg",
    foto18: "/images/icon.svg",
    foto17: "/images/Luiz_Bispo.svg",
    foto19: "/images/Laura_Capucci.svg",
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

function MembrosEquipe({foto, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19}){
  return(
    <div class="row justify-content-center">
      <div className={clsx("card col-12 col-lg-5 mt-3 mx-2 p-0 shadow border-0")}>
        <div className="row g-0">
          <div class="col-md-5">
            <img src={foto} alt="Foto do membro da equipe" className="img-fluid rounded-start" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.1.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.1.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.1.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.2.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.2.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.2.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.3.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.3.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.3.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.4.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.4.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.4.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.5.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.5.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.5.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.6.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.6.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.6.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.7.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.7.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.7.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.8.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.8.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.8.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.9.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.9.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.9.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.10.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.10.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.10.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.11.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.11.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.11.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.12.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.12.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.12.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.13.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.13.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.13.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.14.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.14.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.14.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.15.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.15.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.15.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.16.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.16.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.16.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.17.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.17.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.17.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.18.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.18.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.18.sobre" /></p>
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
              <h3 className={clsx(styles.tituloEquipe, "gy-0")}><Translator path="3.19.nome" /></h3>
              <p className={clsx(styles.textoEquipe, "gy-0 fw-bold")}><Translator path="3.19.cargo" /></p>
              <p class={clsx(styles.descricao, "gy-0")}><Translator path="3.19.sobre" /></p>
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
          <h1 className={clsx(styles.titulo)}><Translator path="3.equipe" /></h1>
          <p className={clsx(styles.texto)}>{texto}</p>
        </div>
      </div>
    </div>
  )
}

function Fapesp({logo}){
  return(
    <div class="container rodape2">
      <div class="row d-flex">
        <div class="col-12 d-flex align-items-center text-start justify-content-center">
          <div class="row">
            <div class="col-1 d-flex align-items-center">
              <img className={clsx(styles.logoRodape, "img-fluid")} src={logo} alt="Logo" />
            </div>
            <div class="col-11 d-flex align-items-center gx-2 gy-4 text-wrap">
              <p className={clsx(styles.textoRodape2)}><Translator path="1.fapesp1" />    
                <b className={clsx(styles.textoRodape2)}><Translator path="1.fapesp2" /></b>.
              </p>
            </div>
          </div>
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
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.social" /></h4>
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
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.contato" /></h4>
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
              <a href={link1}><Translator path="7.home" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link2}><Translator path="7.sobre" /></a>
            </li>
            <li className={clsx(styles.liListaSelecionado)}>
              <a href={link3}><Translator path="7.equipe" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link4}><Translator path="7.noticias" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link6}><Translator path="7.publicacoes" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link7}><Translator path="7.videos" /></a>
            </li>
            <li className={clsx(styles.liLista, "gx-5 mt-1")}>
              <LanguageSelector />
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

      <div className={clsx(styles.rodape2)}>
        {fapesp.map((props, idx) => (
          <Fapesp key={idx} {...props} />
          ))}
      </div>

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