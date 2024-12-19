import './options.css'
import { options } from '../../data'

export default function Options() {
  return (
     <div className="options">
        {options.map((item, key) => (
            <div className="item" key={key}>
                <div className="icon">
                    {item.icon}
                </div>
                <div className="content">
                    <span className="title">{item.title}</span>
                    <span className="desc">{item.desc}</span>
                    <button>Saiba mais</button>
                </div>
            </div>
        ))}
    </div>
  )
}
