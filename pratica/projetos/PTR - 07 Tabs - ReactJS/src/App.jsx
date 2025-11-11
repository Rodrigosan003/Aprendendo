import React, { useEffect, useState } from 'react'

const Nav = ({ active, onNavigate }) => (
  <nav className="nav" aria-label="Navegação principal">
    <button
      className={`nav-btn ${active === 'home' ? 'active' : ''}`}
      onClick={() => onNavigate('home')}
      aria-current={active === 'home' ? 'page' : undefined}
    >
      <a href="#home" className="nav-link">Início</a>
    </button>
    <button
      className={`nav-btn ${active === 'about' ? 'active' : ''}`}
      onClick={() => onNavigate('about')}
      aria-current={active === 'about' ? 'page' : undefined}
    >
      <a href="#about">Sobre</a>
    </button>
    <button
      className={`nav-btn ${active === 'contact' ? 'active' : ''}`}
      onClick={() => onNavigate('contact')}
      aria-current={active === 'contact' ? 'page' : undefined}
    >
      <a href="#contact">Contato</a>
    </button>
  </nav>
)

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('main section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navigate = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui podemos integrar envio real caso queira
    // Exemplo simples: limpar campos e informar usuário
    const form = e.target
    form.reset()
    // Mensagem leve para confirmar envio
    alert('Mensagem enviada (simulada)')
  }

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          <img src="/assets/images/favicon.ico" alt="logo" />
        </a>
        <Nav active={active} onNavigate={navigate} />
      </header>

      <main className="main">
        <section className="home" id="home">
          <div className="container">
            <div className="text-home">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                tempore saepe fuga iure quisquam. Cupiditate eos laudantium harum
                modi minus ut asperiores alias, inventore magni culpa repudiandae
                nemo! Dignissimos, sunt?
              </p>
              <a
                href="#about"
                className="btn-home"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('about')
                }}
              >
                Saiba mais
              </a>
            </div>
            <div className="image-home">
              <img src="/assets/images/home.svg" alt="Ilustração" />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="image-about">
              <img src="/assets/images/about.svg" alt="Ilustração" />
            </div>
            <div className="text-about">
              <h2>Sobre nós</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                , quod. Laboriosam, magnam! Quisquam, quod. Laboriosam, magnam!
                Quisquam, quod. Laboriosam, magnam! Quisquam, quod. Laboriosam,
                magnam!
              </p>
              <a
                href="#contact"
                className="btn-about"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('contact')
                }}
              >
                Contato
              </a>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Fale conosco</h2>
          <div className="container">
            <div className="img-contact">
              <img src="/assets/images/contact.svg" alt="Ilustração" />
            </div>
            <div className="form-contact">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensagem"
                  required
                ></textarea>
                <button type="submit" className="btn-contact">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
