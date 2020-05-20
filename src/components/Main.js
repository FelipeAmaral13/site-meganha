import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Felipe Souza Amaral. Graduado em Engenharia Mecatrônica pelo Instituto Federal Sudeste
            de Minas - Campus Juiz de Fora. Mestrando em Ciência da Computação pelo Programa de Pós-Graduação
            em Ciência da Computação na Universidade Federal de Juiz de Fora. <a href="#work">Aberto a propostas!</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Palestras.
            Cursos.
            Projetos.
            Contato pelo Email: felipengmec@gmail.com
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Faço parte da equipe da Expert Desenvolvimento e Tecnologia desenvolvendo soluções para IoT (embarcados, segurança e mobilidade), data science (análise exploratória, séries temporais, identificação de perfis de consumidores), Inteligência Artificial e Visão Computacional. 
          Estou finalizando um mestrado na UFJF, no curso de ciência da computação com foco na área de inteligência computacional. Fui estagiário de docência no Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais - Campus Juiz de Fora, ministrando a matéria Informática Básica para o curso técnico e em paralelo  lecionei Inteligência Computacional para o curso de Engenharia Mecatrônica. Ainda no campo acadêmico,  leciono de maneira voluntária,  programação e robótica para crianças e adolescentes na escola Ctrl+Play.
          esenvolvi cursos na plataforma Udemy onde leciono aulas sobre Visão computacional com base nas tecnologias Matlab e Python. O curso conta já com 500 alunos em oito países diferentes.
          * Treinamento Profissional (2017) - Projeto e implementação de uma plataforma flexível para desenvolvimento de aplicações baseadas em microcontroladores. 
          * Iniciação científica (2017) -  Estudo de técnicas de reconhecimento vascular para desenvolvimento de um sistema de segurança. O trabalho tinha como foco desenvolver alguma ferramenta capaz de identificar as estruturas venosas do dorso da mão humana e classifica-las, fazendo assim um sistema biométrico de alta precisão. Construção com êxito do protótipo funcional.
          * Grupo PET (2014 a 2016) - Equipe formada por alunos com pilares em educação, ciência e tecnologia. Nesse grupo desenvolvi minhas habilidades para falar em público e ministrar minicursos.
          * Iniciação científica (2013 a 2014) - Projeto de circuitos digitais utilizando linguagem de descrição de hardware e implementação via kit FPGA, nessa iniciação fiz estudos a fundo sobre a linguagem de programação VHDL e implementamos em um controle de motor de passo que seria usada para uma CNC.         
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
