import React, { useContext } from 'react'
import './Inicio.scss'
import Card from '../components/Card'
import ProductoContext from '../contexts/ProductoContext'
import Nosotros from './Nosotros'
import SliderTop from '../components/Slider'
import Contacto from './Contacto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'


const Inicio = () => {
    const { productos } = useContext(ProductoContext)

    return (
        <>

            <main>



                <section className="section-cards"> {/* <!-- section-cards --> */}
                    <header className="section-cards__header">
                        {/* <SliderTop /> */}
                    </header>
                    <br />
                    <br />
                    <div className="cards-conteiner"> {
                        productos && productos.map((producto, idx) => (<Card key={idx} producto={producto} />))
                    }



                    </div> {/* <!-- cards-conteiner --> */}

                </section> {/* <!-- section-cards --> */}

                <section id='nosotros'>
                    <Nosotros />
                </section>

                <section id='contactos'>
                    <Contacto />
                </section>

                <div className='logos'>
                    <div className='whtapp'><FontAwesomeIcon icon={faWhatsapp} size="2xl" /></div>

                    <div className='uptoup'>
                        <Link to="section-cards" spy={true} smooth={true} offset={0} duration={1000}>

                            <FontAwesomeIcon icon={faCircleUp} size='2xl' />

                        </Link>
                    </div>
                </div>
            </main>


            <script type="module" src="/main.js"></script>
        </>
    )
}

export default Inicio