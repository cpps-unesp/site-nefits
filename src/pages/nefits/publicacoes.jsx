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
    aba2: "Artigos e Capítulos de Livros",
    aba3: "Teses e Dissertações",
    aba4: "TCCs",
    texto1: (
      <>
      </>
    ),
    titulo1: "Ethical Challenges in the Climate Crisis",
    subtitulo1: "Thomas Pogge's Perspective and the Challenges for Global Cooperation",
    autor1: "Matheus de Vilhena Moraes",
    ano1: "2023",
    btn1: "Visualizar",
    link1: "/arquivos/2023-Matheus_de_Vilhena_Moraes-ETHICAL_CHALLENGES_IN_THE_CLIMATE.pdf",


    titulo2: "Alienação de negras e negros em Achille Mbembe",
    texto3: (
      <>
      </>
    ),
    autor2: "Matheus Sena Asevedo Campanhã",
    ano2: "2023",
    btn2: "Visualizar",
    link2: "/arquivos/2023-Matheus_Sena_Asevedo_Campanha-Alienacao_de_negras_e_negros_em_Achille_Mbembe.pdf",

    titulo3: "Pobreza como Déficit dos Direitos Humanos em Thomas Pogge",
    autor3: "Matheus de Vilhena Moraes",
    ano3: "2023",
    btn3: "Visualizar",
    link3: "/arquivos/2023-Matheus_de_Vilhena_Moraes-POBREZA_COMO_DEFICIT_DOS_DIREITOS_HUMANOS_EM_THOMAS_POGGE.pdf",
    
    titulo4: "O Benefício de Prestação Continuada",
    subtitulo4: "Um estudo sobre a centralidade da pobreza no seu quadro normativo",
    autor4: "Andreia Celia Silva de Oliveira",
    ano4: "2022",
    btn4: "Visualizar",
    link4: "/arquivos/2022-Andreia_Celia-O_BENEFICIO_DE_PRESTACAO_CONTINUADA.docx",

    titulo5: "Teoria Democrática Deliberativa",
    subtitulo5: "Uma análise dos conselhos municipais de assistência social",
    autor5: "Talismara Guilherme Molina",
    ano5: "2022",
    btn5: "Visualizar",
    link5: "/arquivos/2022-Talismara_Molina-TEORIA_DEMOCRATICA_DELIBERATIVA.pdf",

    titulo6: "A inteligência de ninguém",
    subtitulo6: "Igualdade, emancipação e pobreza em O mestre ignorante de Jacques Rancière",
    autor6: "Tark Fraig",
    ano6: "2024",
    btn6: "Visualizar",
    link6: "/arquivos/2024-Tark_Fraig-A_Inteligencia_de_Ninguem.pdf",

    titulo7: "A Autodeterminação Negra",
    subtitulo7: "Uma análise da filosofia social e política de Achille Mbembe",
    texto4: (
      <>
      </>
    ),
    autor7: "Matheus Sena Asevedo Campanhã",
    ano7: "2023",
    btn7: "Visualizar",
    link7: "/arquivos/2023-Matheus_Sena_Asevedo_Campanha-TCC.pdf",

    titulo8: "Malucos de Estrada",
    subtitulo8: "A (r)existência de uma forma de vida no Brasil",
    autor8: "Daniela Leonardi Polizio",
    ano8: "2021",
    btn8: "Visualizar",
    link8: "/arquivos/2021-Daniela_Leonardi_Polizio-TCC.pdf",

    titulo9: "Necropolítica",
    subtitulo9: "A Política de Negação do Negro",
    autor9: "Mayara Cristina Oliveira Pires",
    ano9: "2021",
    btn9: "Visualizar",
    link9: "/arquivos/2021-Mayara_Cristina_Oliveira_Pires-TCC.docx",

    titulo10: "O Cotidiano e o Estranhamento em Lukács",
    autor10: "Roan Matthaeus Chimello Dias",
    ano10: "2020",
    btn10: "Visualizar",
    link10: "/arquivos/2020-Roan_Matheus_Chimello_Dias-TCC.pdf",

    titulo11: "Relações entre a Ética da Responsabilidade Jonasiana e o Direito",
    autor11: "Péricles de Freitas Nogueira",
    ano11: "2021",
    btn11: "Visualizar",
    link11: "/arquivos/2021-Pericles_de_Freitas_Nogueira-TCC.pdf",

    titulo12: "Os Contornos da Questão Social em Sobre a Revolução de Hannah Arendt",
    autor12: "Larissa Barcellos Rodrigues",
    ano12: "2022",
    btn12: "Visualizar",
    link12: "/arquivos/2022-Larissa_Barcellos_Rodrigues-TCC.pdf",

    titulo13: "Vítimas, Ética e Libertação na Obra de Enrique Dussel",
    autor13: "Beatriz Batista do Nascimento Alkmin",
    ano13: "2021",
    btn13: "Visualizar",
    link13: "/arquivos/2021-Beatriz_Batista_do_Nascimento_Alkmin-TCC.docx",

    titulo14: "Desigualdade e Diferença",
    autor14: "Luana Ambiel Marachini",
    ano14: "2020",
    btn14: "Visualizar",
    link14: "/arquivos/2020-Luana_Ambiel_Marachini-TCC.pdf",

    titulo15: "Igualdade material como instrumento de inclusão social-debate sobre a constitucionalidade das cotas raciais nas Universidades Públicas",
    autor15: "Gabriel Ferreira dos Santos",
    ano15: "2020",
    btn15: "Visualizar",
    link15: "/arquivos/2020-Gabriel_Ferreira_dos_Santos-TCC.pdf",

    titulo16: "Entre Freire e Jacotot",
    autor16: "Tark Fraig",
    ano16: "2020",
    btn16: "Visualizar",
    link16: "/arquivos/2020-Tark_Fraig-TCC.pdf",

    titulo17: "Paixões Humanas",
    autor17: "Hélio Alexandre da Silva",
    ano17: "2009",
    btn17: "Visualizar",
    link17: "/arquivos/2009-Helio_Alexandre_da_Silva-Paixoes humanas-Livro.pdf",

    titulo18: "Ciência e Filosofia",
    subtitulo18: "Notas acerca da re-significação de conceitos científicos na filosofia hobbesiana",
    autor18: "Hélio Alexandre da Silva",
    ano18: "2009",
    btn18: "Visualizar",
    link18: "/arquivos/2009-Helio_Alexandre_da_Silva-Ciencia_e_Filosofia.pdf",

    titulo19: "Cinismo e Falência da Crítica (Resenha)",
    autor19: "Leonardo Jorge da Hora e Hélio Alexandre da Silva",
    ano19: "20010",
    btn19: "Visualizar",
    link19: "/arquivos/2010-Helio_Alexandre_da_Silva-Cinismo_e_Falencia_da_Critica_de_Vladimir_Safatle-Resenha.pdf",

    titulo20: "Estruturas e Fundamentos Sociais",
    subtitulo20: "A leitura honnethiana de Habermas",
    autor20: "Hélio Alexandre da Silva e Herbert Barucci Ravagnani",
    ano20: "2013",
    btn20: "Visualizar",
    link20: "/arquivos/2013-Helio_Alexandre_da_Silva-Estruturas_e_fundamentos_sociais_a leitura honnethiana de habermas.pdf",

    titulo21: "Hobbes, Rousseau e a Teoria Crítica",
    subtitulo21: "Características e consequências de uma apropriação",
    autor21: "Hélio Alexandre da Silva",
    ano21: "2013",
    btn21: "Visualizar",
    link21: "/arquivos/2013-Helio_Alexandre_da_Silva-Hobbes_Rousseau_e_a_Teoria Critica-caracteristicas_e_consequencias_de_uma_apropriacao-Tese.pdf",

    titulo22: "Patologias da Autoridade",
    subtitulo22: "Alguns aspectos da noção de “personalidade autoritária” na escola de Frankfurt",
    autor22: "Stéphane Haber. Trad. Hélio Alexandre da Silva",
    ano22: "2014",
    btn22: "Visualizar",
    link22: "/arquivos/2014-Stephane_Haber-Patologias_da_autoridade-Traducao.pdf",

    titulo23: "Habermas, Honneth e os movimentos sociais",
    subtitulo23: "Repensando diagnósticos e alternativas",
    autor23: "Hélio Alexandre da Silva",
    ano23: "2016",
    btn23: "Visualizar",
    link23: "/arquivos/2016-Helio_Alexandre_da_Silva-Habermas_e_Honneth_repensando_diagnosticos_e_alternativas.pdf",

    titulo24: "O Iluminismo Relutante de Jean-Jacques Rousseau",
    autor24: "Hélio Alexandre da Silva",
    ano24: "2016",
    btn24: "Visualizar",
    link24: "/arquivos/2016-Helio_Alexandre_da_Silva-O_Iluminismo_relutante_de_Jean-Jacques_Rousseau.pdf",

    titulo25: "Como pensar filosoficamente o social?",
    autor25: "Franck Fischbach. Trad. Hélio Alexandre da Silva",
    ano25: "2017",
    btn25: "Visualizar",
    link25: "/arquivos/2017-Helio_Alexandre_da_Silva-Como_pensar_filosoficamente_o_social-Traducao.pdf",

    titulo26: "Sob os Olhos da Crítica",
    autor26: "Hélio Alexandre da Silva",
    ano26: "2017",
    btn26: "Visualizar",
    link26: "/arquivos/2017-Helio_Alexandre_da_Silva-Sob_os_olhos_da_critica-Livro.pdf",

    titulo27: "Thomas Hobbes: Política, medo e conflitos sociais",
    autor27: "Hélio Alexandre da Silva",
    ano27: "2017",
    btn27: "Visualizar",
    link27: "/arquivos/2017-Helio_Alexandre_da_Silva-Thomas Hobbes_ política, medo e conflitos sociais.pdf",

    titulo28: "A experiência da pobreza em “Vidas Secas” e no “Auto da Compadecida”",
    autor28: "Heurisgleides Sousa Teixeira e Hélio Alexandre da Silva",
    ano28: "2018",
    btn28: "Visualizar",
    link28: "/arquivos/2018-Helio_Alexandre_da_Silva-A experiencia da pobreza em Vidas secas e no Auto da compadecida.pdf",

    titulo29: "Alienação como dimensão constitutiva da pobreza",
    autor29: "Hélio Alexandre da Silva",
    ano29: "2018",
    btn29: "Visualizar",
    link29: "/arquivos/2018-Helio_Alexandre_da_Silva-Alienacao como dimensao constitutiva da pobreza.pdf",

    titulo30: "Por que razão pretendeis ser pagos às nossas expensas? Pobreza e desigualdade no Segundo discurso de Rousseau",
    autor30: "Hélio Alexandre da Silva",
    ano30: "2019",
    btn30: "Visualizar",
    link30: "/arquivos/2019-Helio_Alexandre_da_Silva-Por que razao pretendeis ser pagos as nossas expensas_ Pobreza e desigualdade no Segundo discurso de Rousseau_.pdf",

    titulo31: "Ainda é mais fácil pensar no fim do mundo que no fim do capitalismo? (Resenha)",
    autor31: "Hélio Alexandre da Silva",
    ano31: "2020",
    btn31: "Visualizar",
    link31: "/arquivos/2020-Helio_Alexandre_da_Silva-Ainda e mais facil pensar no fim do mundo que no fim do capitalismo_ Piketty capital e ideologia.pdf",
  
    titulo32: "A Critique of Poverty",
    subtitulo32: "Exploring the Underground of Social Philosophy",
    autor32: "Hélio Alexandre da Silva",
    ano32: "2021",
    btn32: "Visualizar",
    link32: "/arquivos/2021-Helio_Alexandre_da_Silva-A Critique of Poverty- Exploring the Underground of Social Philosophy.pdf",

    titulo33: "Quem são os mais pobres? Explorando tensões sociais e horizontes políticos",
    autor33: "Hélio Alexandre da Silva",
    ano33: "2021",
    btn33: "Visualizar",
    link33: "/arquivos/2021-Helio_Alexandre_da_Silva-Quem sao os mais pobres_ Explorando tensoes sociais e horizontes politicos.pdf",

    titulo34: "Sofrimento social como dimensão da pobreza",
    autor34: "Hélio Alexandre da Silva",
    ano34: "2022",
    btn34: "Visualizar",
    link34: "/arquivos/2022-Helio_Alexandre_da_Silva-Sofrimento social como dimensao da pobreza.pdf",

    titulo35: "Sonhos e Resistências",
    subtitulo35: "MTST e os testemunhos da luta popular urbana",
    autor35: "Hélio Alexandre da Silva",
    ano35: "2023",
    btn35: "Visualizar",
    link35: "/arquivos/2023-Helio_Alexandre_da_Silva-Sonhos e resistencias- MTST e os testemunhos da luta popular urbana.pdf",

    titulo36: "Liberdades e opressões",
    subtitulo36: "A interseccionalidade como crítica do neoliberalismo",
    autor36: "Ana Júlia Diniz Neves do Lago",
    ano36: "2023-2024",
    btn36: "Visualizar",
    link36: "/arquivos/Ana_Julia_Diniz-Projeto_FAPESP.pdf",

    titulo37: "A relação entre ideologia, propriedade e desigualdade na obra Capital e Ideologia de Thomas Piketty",
    autor37: "Eduarda Pereira Pires Barboza",
    ano37: "2023-2024",
    btn37: "Visualizar",
    link37: "/arquivos/2023_2024-Eduarda_Barboza_Projeto_PIBIC.docx",

    titulo38: "Pobreza e dever moral na Metafísica dos Costumes de Kant",
    autor38: "Julia de Andrade Fernandes Francisco",
    ano38: "2023-2024",
    btn38: "Visualizar",
    link38: "/arquivos/2023_2024-Julia_Andrade-Projeto_PIBIC.pdf",

    titulo39: "Entendendo o Feminismo Islâmico",
    autor39: "Bianca Regina Poltronieri",
    subtitulo39: "Uma Análise sobre os Desafios que Obstam ente Movimento Político-Religioso Transnacional",
    ano39: "2022-2023",
    btn39: "Visualizar",
    link39: "/arquivos/Feminismo_Islamico--Margot_Badran-Projeto_PIBIC.docx",


    titulo40: "Religião, Política e Retórica",
    subtitulo40: "Contornos da Relação entre Fé e Razão no Estado Civil de Thomas Hobbes.",
    autor40: "Vinícius Antonio Ramos Zecca",
    ano40: "2020-2021",
    btn40: "Visualizar",
    link40: "/arquivos/Vinicius_Antonio_Ramos_Zecca-Projeto_FAPESP.pdf",

    titulo41: "A erradicação da pobreza extrema através da reforma das instituições compartilhadas proposta por Thomas Pogge",
    autor41: "Matheus de Vilhena Moraes",
    ano41: "2022-2023",
    btn41: "Visualizar",
    link41: "/arquivos/MATHEUS_VILHENA-Projeto_FAPESP.docx",

    titulo42: "Alienação de Negras e Negros em Achille Mbembe",
    autor42: "Matheus Sena Asevedo Campanhã",
    ano42: "2022-2023",
    btn42: "Visualizar",
    link42: "/arquivos/Matheus_Sena-Projeto_FAPESP.pdf",

    titulo43: "Critério de Justiça Universal, Dever Negativo e Dever Positivo de Justiça",
    autor43: "Matheus de Vilhena Moraes",
    ano43: "2022-2023",
    btn43: "Visualizar",
    link43: "/arquivos/2022-Matheus_de_Vilhena_Moraes-PROJETO_BEPE.docx",

    titulo44: "Subjetividade e Opressão",
    subtitulo44: "Um Recorte de Gênero no Neoliberalismo",
    autor44: "Ana Júlia Diniz Neves do Lago",
    ano44: "2023-2024",
    btn44: "Visualizar",
    link44: "/arquivos/2023-Ana_Julia-Projeto_BEPE.pdf",

    titulo45: "O conceito de interseccionalidade e seu uso para análise da justiça social nas políticas globais",
    autor45: "Ana Júlia Diniz Neves do Lago",
    ano45: "2021-2022",
    btn45: "Visualizar",
    link45: "/arquivos/Interseccionalidade--Silma_Bilge_e_Patricia_Hill_Collins-Projeto_PIBIC.pdf",

    titulo46: "Pobreza, funcionamentos [functionings] e capacidades [capabilities] na obra Desigualdade Reexaminada de Amartya Sen",
    autor46: "Guilherme Vicente Moura",
    ano46: "2021-2022",
    btn46: "Visualizar",
    link46: "/arquivos/Amartya_Sen--Pobreza_functionings_e_capabilities-Projeto_PIBIC.pdf",

    titulo47: "Alienação De Negras E Negros Em Achille Mbembe",
    autor47: "Matheus Sena Asevedo Campanhã",
    ano47: "2021-2022",
    btn47: "Visualizar",
    link47: "/arquivos/Achille_Mbembe--Alienacao_escravidao_colonizacao_e_apartheid-Projeto_PIBIC.pdf",
  }
]

function Abas({titulo1, autor1, ano1, btn1, link1, texto2, titulo2, texto3, autor2, ano2, btn2, link2, titulo3, autor3, ano3, btn3, link3, titulo4, ano4, autor4, subtitulo4, btn4, link4, 
  titulo5, subtitulo5, ano5, autor5, btn5, link5, titulo6, subtitulo6, ano6, autor6, btn6, link6, textoUm, titulo7, subtitulo7, autor7, ano7, btn7, link7, titulo8, subtitulo8, autor8, 
  ano8, btn8, link8, titulo9, subtitulo9, autor9, ano9, btn9, link9, titulo10, autor10, ano10, btn10, link10, titulo11, autor11, ano11, btn11, link11, titulo12, autor12, ano12, btn12, link12, 
  titulo13, autor13, ano13, btn13, link13, titulo14, autor14, ano14, btn14, link14, titulo15, autor15, ano15, btn15, link15, titulo16, autor16, ano16, btn16, link16, 
  titulo17, autor17, ano17, btn17, link17, titulo18, subtitulo18, autor18, ano18, btn18, link18, titulo19, autor19, ano19, btn19, link19, titulo20, subtitulo20, autor20, ano20, btn20, link20,
  titulo21, subtitulo21, autor21, ano21, btn21, link21, titulo22, subtitulo22, autor22, ano22, btn22, link22, titulo23, subtitulo23, autor23, ano23, btn23, link23, titulo24, autor24, ano24, btn24, link24, titulo25, autor25, ano25, btn25, link25,
  titulo26, autor26, ano26, btn26, link26, titulo27, autor27, ano27, btn27, link27, titulo28, autor28, ano28, btn28, link28, titulo29, autor29, ano29, btn29, link29, titulo30, autor30, ano30, btn30, link30,
  titulo31, autor31, ano31, btn31, link31, titulo32, subtitulo32, autor32, ano32, btn32, link32, titulo33, autor33, ano33, btn33, link33, titulo34, autor34, ano34, btn34, link34, titulo35, subtitulo35, autor35, ano35, btn35, link35,
  titulo36, autor36, ano36, btn36, link36, titulo37, autor37, ano37, btn37, link37, titulo38, autor38, ano38, btn38, link38, titulo39, autor39, ano39, btn39, link39, titulo40, autor40, ano40, btn40, link40, titulo41, autor41, ano41, btn41, link41,
  titulo42, autor42, ano42, btn42, link42, titulo43, autor43, ano43, btn43, link43, titulo44, autor44, ano44, btn44, link44, titulo45, autor45, ano45, btn45, link45, titulo46, autor46, ano46, btn46, link46, titulo47, autor47, ano47, btn47, link47
  }){
  return(
    <div class="col-12 abas">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="livros-tab" data-bs-toggle="tab" data-bs-target="#livros-tab-pane" type="button" role="tab" aria-controls="livros-tab-pane" aria-selected="true">Livros</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="artigos-tab" data-bs-toggle="tab" data-bs-target="#artigos-tab-pane" type="button" role="tab" aria-controls="artigos-tab-pane" aria-selected="false">Capítulos de Livros e Artigos</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="teses-tab" data-bs-toggle="tab" data-bs-target="#teses-tab-pane" type="button" role="tab" aria-controls="teses-tab-pane" aria-selected="false">Teses e Dissertações</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="tccs-tab" data-bs-toggle="tab" data-bs-target="#tccs-tab-pane" type="button" role="tab" aria-controls="tccs-tab-pane" aria-selected="false">TCCs</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="relatorios-tab" data-bs-toggle="tab" data-bs-target="#relatorios-tab-pane" type="button" role="tab" aria-controls="relatorios-tab-pane" aria-selected="false">Relatórios de Pesquisa</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="livros-tab-pane" role="tabpanel" aria-labelledby="livros-tab" tabindex="0">
          <div class="row justify-content-center">
            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo17}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor17} • {ano17}</p>
                    <a href={link17} target="_blank" className={clsx(styles.btnUm)}>{btn17}</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo26}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor26} • {ano26}</p>
                  <a href={link26} target="_blank" className={clsx(styles.btnUm)}>{btn26}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo35}</h3>
                  <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo35}</p>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor35} • {ano35}</p>
                  <a href={link35} target="_blank" className={clsx(styles.btnUm)}>{btn35}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="artigos-tab-pane" role="tabpanel" aria-labelledby="artigos-tab" tabindex="0">
          <div class="row justify-content-center">
              <p className={clsx(styles.texto)}>{texto2}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo1}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor1} • {ano1}</p>
                    <a href={link1} target="_blank" className={clsx(styles.btnUm)}>{btn1}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor2} • {ano2}</p>
                    <a href={link2} target="_blank" className={clsx(styles.btnUm)}>{btn2}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo3}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor3} • {ano3}</p>
                    <a href={link3} target="_blank" className={clsx(styles.btnUm)}>{btn3}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo18}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo18}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor18} • {ano18}</p>
                    <a href={link18} target="_blank" className={clsx(styles.btnUm)}>{btn18}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo19}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor19} • {ano19}</p>
                    <a href={link19} target="_blank" className={clsx(styles.btnUm)}>{btn19}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo20}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo20}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor20} • {ano20}</p>
                    <a href={link20} target="_blank" className={clsx(styles.btnUm)}>{btn20}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo22}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo22}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor22} • {ano22}</p>
                    <a href={link22} target="_blank" className={clsx(styles.btnUm)}>{btn22}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo23}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo23}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor23} • {ano23}</p>
                    <a href={link23} target="_blank" className={clsx(styles.btnUm)}>{btn23}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo24}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor24} • {ano24}</p>
                    <a href={link24} target="_blank" className={clsx(styles.btnUm)}>{btn24}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo25}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor25} • {ano25}</p>
                    <a href={link25} target="_blank" className={clsx(styles.btnUm)}>{btn25}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo27}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor27} • {ano27}</p>
                    <a href={link27} target="_blank" className={clsx(styles.btnUm)}>{btn27}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo28}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor28} • {ano28}</p>
                    <a href={link28} target="_blank" className={clsx(styles.btnUm)}>{btn28}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo29}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor29} • {ano29}</p>
                    <a href={link29} target="_blank" className={clsx(styles.btnUm)}>{btn29}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo30}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor30} • {ano30}</p>
                    <a href={link30} target="_blank" className={clsx(styles.btnUm)}>{btn30}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo31}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor31} • {ano31}</p>
                    <a href={link31} target="_blank" className={clsx(styles.btnUm)}>{btn31}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo32}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo32}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor32} • {ano32}</p>
                    <a href={link32} target="_blank" className={clsx(styles.btnUm)}>{btn32}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo33}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor33} • {ano33}</p>
                    <a href={link33} target="_blank" className={clsx(styles.btnUm)}>{btn33}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo34}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor34} • {ano34}</p>
                    <a href={link34} target="_blank" className={clsx(styles.btnUm)}>{btn34}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="teses-tab-pane" role="tabpanel" aria-labelledby="teses-tab" tabindex="0">
          <div class="row justify-content-center">
              <p className={clsx(styles.texto)}>{texto3}</p>
              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo4}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo4}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor4} • {ano4}</p>
                    <a href={link4} target="_blank" className={clsx(styles.btnUm)}>{btn4}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo5}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo5}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor5} • {ano5}</p>
                    <a href={link5} target="_blank" className={clsx(styles.btnUm)}>{btn5}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo6}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo6}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor6} • {ano6}</p>
                    <a href={link6} target="_blank" className={clsx(styles.btnUm)}>{btn6}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo21}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo21}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor21} • {ano21}</p>
                    <a href={link21} target="_blank" className={clsx(styles.btnUm)}>{btn21}</a>
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
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo7}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo7}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor7} • {ano7}</p>
                    <a href={link7} target="_blank" className={clsx(styles.btnUm)}>{btn7}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo8}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo8}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor8} • {ano8}</p>
                    <a href={link8} target="_blank" className={clsx(styles.btnUm)}>{btn8}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo9}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo9}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor9} • {ano9}</p>
                    <a href={link9} target="_blank" className={clsx(styles.btnUm)}>{btn9}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo10}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor10} • {ano10}</p>
                    <a href={link10} target="_blank" className={clsx(styles.btnUm)}>{btn10}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo11}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor11} • {ano11}</p>
                    <a href={link11} target="_blank" className={clsx(styles.btnUm)}>{btn11}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo12}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor12} • {ano12}</p>
                    <a href={link12} target="_blank" className={clsx(styles.btnUm)}>{btn12}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo13}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor13} • {ano13}</p>
                    <a href={link13} target="_blank" className={clsx(styles.btnUm)}>{btn13}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo14}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor14} • {ano14}</p>
                    <a href={link14} target="_blank" className={clsx(styles.btnUm)}>{btn14}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo15}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor15} • {ano15}</p>
                    <a href={link15} target="_blank" className={clsx(styles.btnUm)}>{btn15}</a>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo16}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor16} • {ano16}</p>
                    <a href={link16} target="_blank" className={clsx(styles.btnUm)}>{btn16}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="tab-pane fade" id="relatorios-tab-pane" role="tabpanel" aria-labelledby="relatorios-tab" tabindex="0">
          <div class="row justify-content-center">
            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo36}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor36} • {ano36}</p>
                    <a href={link36} target="_blank" className={clsx(styles.btnUm)}>{btn36}</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo37}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor37} • {ano37}</p>
                  <a href={link37} target="_blank" className={clsx(styles.btnUm)}>{btn37}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo38}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor38} • {ano38}</p>
                  <a href={link38} target="_blank" className={clsx(styles.btnUm)}>{btn38}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo39}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor39} • {ano39}</p>
                  <a href={link39} target="_blank" className={clsx(styles.btnUm)}>{btn39}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo40}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor40} • {ano40}</p>
                  <a href={link40} target="_blank" className={clsx(styles.btnUm)}>{btn40}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo41}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor41} • {ano41}</p>
                  <a href={link41} target="_blank" className={clsx(styles.btnUm)}>{btn41}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo42}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor42} • {ano42}</p>
                  <a href={link42} target="_blank" className={clsx(styles.btnUm)}>{btn42}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo43}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor43} • {ano43}</p>
                  <a href={link43} target="_blank" className={clsx(styles.btnUm)}>{btn43}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo44}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor44} • {ano44}</p>
                  <a href={link44} target="_blank" className={clsx(styles.btnUm)}>{btn44}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo45}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor45} • {ano45}</p>
                  <a href={link45} target="_blank" className={clsx(styles.btnUm)}>{btn45}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo46}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor46} • {ano46}</p>
                  <a href={link46} target="_blank" className={clsx(styles.btnUm)}>{btn46}</a>
                </div>
              </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-2 mx-3")}>
              <div class="row">
                <div class="col-12">
                  <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo47}</h3>
                  <p className={clsx(styles.cardTexto, "fw-bold")}>{autor47} • {ano47}</p>
                  <a href={link47} target="_blank" className={clsx(styles.btnUm)}>{btn47}</a>
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
            <li className={clsx(styles.liLista)}>
              <a href={link4}>Notícias</a>
            </li>
            <li className={clsx(styles.liListaSelecionado)}>
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
