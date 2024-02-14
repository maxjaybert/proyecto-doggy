import React, { useContext, useState } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'
// import Swal from 'sweetalert2'
import Formulario from './Formulario'
import { useHref } from 'react-router'
import Contacto from '../pages/Contacto'
import { Link } from 'react-router-dom'
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll'




const Card = ({ producto }) => {
    const { agregarCarritoContext } = useContext(CarritoContext)
    // console.log(producto)



    // const showAlert = ({ }) => {


    //     Swal.fire({
    //         title: "Estas seleccionando ",
    //         text: `${producto.plan}`,
    //         icon: "info",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Si, por supuesto",
    //         cancelButtonText: "No, me equivoque"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire({
    //                 title: "Confirmado!",
    //                 text: "Avanzamos al formulario?",
    //                 icon: "success",
    //                 confirmButtonText: "Vamos!",

    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     window.scrollTo({ top: 100, behavior: "smooth" })
    //                     // window.location.href = `/real_world`
    //                 }
    //             })
    //         }
    //     }); {

    //     }


    // }






    const handleClick = (e) => {

        agregarCarritoContext(producto)
    }

    return (
        <>


            <a href="#" className="card" onClick={handleClick}> {/* <!-- card --> */}
                <article className="card__article">
                    <div className="card__image-container">
                        <img src={producto.foto} alt={producto.nombre} className="card__image" />
                    </div>
                    <div className="card__content">
                        <div className="card__description">
                            <h2 className="card__heading">{producto.plan}</h2>
                            <p>{producto.detalles}</p>
                        </div>
                        {/* <button onClick={handleClick} className='boton-agregar'>Seleccionar Plan</button> */}

                        {/* onClick={() => handleClick(producto) */}

                    </div>
                </article>
            </a> {/* <!-- card -->
*/}
        </>


    )
}

export default Card