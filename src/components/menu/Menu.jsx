import './menu.css'

export default function Menu() {
  return (
    <div className="menu">
        <div className="logo">
            <img src="./logo.svg" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>Serviços</li>
            <li>Produtos</li>
            <li>Contatos</li>
            <li>Sobre nós</li>
        </ul>

        <div className="hamburguer">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </div>
  )
}
