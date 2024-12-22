import './options.css'
import { options } from '../../data'

export default function Options() {
    return (
        <div className="options">
            {options.map((item, key) => (
                <div className="item" key={key}>
                    <div className="icon" id='options'>
                        {item.icon}
                    </div>
                    <div className="content">
                        <span className="title">{item.title}</span>
                        <span className="desc">{item.desc}</span>
                        <a href='https://api.whatsapp.com/send?phone=5527998957231'>Saiba mais</a>

                    </div>
                </div>
            ))
            }
        </div >
    )
}
