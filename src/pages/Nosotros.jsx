import React from 'react'
import './Nosotros.scss'
import scrollSection from '../components/Scroll';
import SliderTop from '../components/Slider'
import { Swiper, SwiperSlide } from 'swiper/react';


const Nosotros = ({ extras }) => {
    return (
        <div className="nosotros" >
            {/* <div className="nosotros__image-container">
                <img src="img/aeropuerto.webp" className="nosotros__image_1" />
</div> */}



            <div className="nosotros__text">
                <div className='separador-top'></div>
                <h1>¿QUIÉNES SOMOS?</h1>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus possimus nisi nostrum animi nobis fugiat sequi eos obcaecati neque, dolore vitae explicabo expedita quae laudantium dignissimos recusandae maxime qui.
                    Voluptates, quis? Fugit est vero, maxime sed exercitationem nobis suscipit libero quae, eveniet quis, quisquam provident. Earum atque, nemo fugiat unde eligendi necessitatibus nobis modi, adipisci exercitationem eum eius esse.
                    Suscipit tempora, beatae molestias quod maxime officiis excepturi fugit, minima expedita odit consequatur? Porro repellendus magni aperiam cupiditate, iste quod velit, voluptatem esse neque non odit voluptatibus, laudantium deleniti vitae.
                    Et nesciunt ipsum fugiat enim quod non. Ullam perspiciatis, a quos voluptas debitis nesciunt. Consequatur, delectus. Recusandae, dolore ipsam saepe atque explicabo repudiandae impedit quo in harum nobis dolores officiis.
                    Officia architecto quo repudiandae est enim repellendus esse exercitationem laborum tempore totam ipsam, quos sit quidem voluptas suscipit fuga repellat dolorem id impedit praesentium veniam nulla dolor nesciunt. Nam, neque?
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus placeat eos corrupti distinctio expedita officiis eveniet quibusdam velit sit cupiditate laborum odit in, odio dolorem dolore eius iste ducimus?
                    Excepturi ea, dignissimos magni voluptatum, molestias voluptatem ducimus quasi, nemo non hic iusto modi. At omnis iure iste eum, saepe eius repellendus itaque voluptas beatae quo quasi neque, veniam et.
                    Quidem eum iusto ipsam quis illo nihil doloremque commodi fugiat quam possimus numquam ea assumenda qui, eveniet obcaecati fugit veritatis placeat, unde voluptate est repellat explicabo in ex! Voluptate, possimus?
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci enim, est eveniet voluptas consequuntur pariatur, cupiditate qui necessitatibus aut quasi quibusdam commodi eum neque soluta error totam. Laudantium, magni.2
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, quidem facilis laborum nobis totam iusto possimus aut cum corporis dicta! Molestiae fugiat consequuntur dolore beatae, a asperiores exercitationem voluptate quibusdam.
                    Quam deserunt nesciunt, nihil explicabo tempore harum dolores alias provident vel! Aut deserunt nihil voluptas, eos dolores id enim, inventore consectetur ab saepe aperiam corrupti quibusdam voluptatum neque rerum assumenda.
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, optio neque? Numquam recusandae, dolore eos mollitia vel quas aut nihil? Laboriosam sunt accusamus officiis nobis dolorem, nulla aliquam alias nostrum temporibus eos dignissimos, nam amet iure aut ipsam debitis consequuntur asperiores cum sed assumenda esse labore. In ex sint illo.
                </p>
                <div className='separadores'></div>

                <SliderTop className='slider'></SliderTop>
                <div className='separador-bottom'></div>
            </div>
            {/* 
            <div className="nosotros__image-container">
            <img src="img/compras.webp" className="nosotros__image_2" />
        </div> */}
        </div>
    );
}

export default Nosotros