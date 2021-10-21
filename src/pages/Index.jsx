import React from 'react'
import nova from '../media/logo.2.png';
import i1 from '../media/1.jpg';
import i2 from '../media/2.jpg';
import i3 from '../media/3.jpg';
import i4 from '../media/4.jpg';
import i16 from '../media/16.jpg';
import i17 from '../media/17.jpg';
import i18 from '../media/18.png';
import i19 from '../media/19.png';
import i20 from '../media/20.png';
import logo from '../media/logo.2.png';


const Index = () => {
    return (
        <div>
            <main>
        <section className="contenedor sobre-nosotros">
            <h2 className="m-10 flex justify-center text-blue-400 font-extrabold">Nuestro producto</h2>
            <div className="flex  justify-center">
                <img src={nova} alt="" className="imagen-about-us" />
                <div className="contenido-textos">
                    <h3><span>1</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, placeat? Nulla laboriosam quam, animi maxime quasi praesentium delectus tenetur doloremque voluptates obcaecati omnis itaque soluta recusandae ducimus ut voluptas dolorum.</p>
                    <h3><span>2</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, placeat? Nulla laboriosam quam, animi maxime quasi praesentium delectus tenetur doloremque voluptates obcaecati omnis itaque soluta recusandae ducimus ut voluptas dolorum.</p>
                </div>
            </div>
        </section>
        <section className="portafolio">
            <div className="contenedor">
                <h2 className="m-10 flex justify-center text-blue-400 font-extrabold">Portafolio</h2>
                <div className="galeria-port">
                    <div className="imagen-port">
                        <img src={i1} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={i2} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={i3} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={i4} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={i1} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={i2} alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={i3} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={i4} alt="" />
                        <div className="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="clientes contenedor">
            <h2 className="m-10 flex justify-center text-blue-400 font-extrabold">Que dicen nuestros clientes</h2>
            <div className="cards">
                <div className="card">
                    <img src={i16} alt="" />
                    <div className="contenido-texto-card">
                        <h4>Name</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos asperiores obcaecati expedita eveniet quidem? Maiores deserunt sapiente, magni accusantium, voluptatum qui eaque molestiae dignissimos recusandae optio quae laboriosam error!</p>
                    </div>
                </div>
                <div className="card">
                    <img src={i17} alt="" />
                    <div className="contenido-texto-card">
                        <h4>Name</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos asperiores obcaecati expedita eveniet quidem? Maiores deserunt sapiente, magni accusantium, voluptatum qui eaque molestiae dignissimos recusandae optio quae laboriosam error!</p>
                    </div>
                </div>
            </div>    
        </section>
        <section className="about-servicios">
            <div className="contenedor">
                <h2 className="m-10 flex justify-center text-blue-400 font-extrabold">Nestros Servicios</h2>
                <div className="servicio-cont">
                    <div className="servicio-ind">
                        <img src={i18} alt="" />
                        <h3>name</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nam.</p>
                    </div>
                    <div className="servicio-ind">
                        <img src={i19} alt="" />
                        <h3>name</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nam.</p>
                    </div>
                    <div className="servicio-ind">
                        <img src={i20} alt="" />
                        <h3>name</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nam.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <footer className="p-1 bg-blue-200 ">
            <div>
            <img src={logo} alt="" className='h-28 m-1 flex justify-center p-2'/>
            </div>
            </footer>
        </section>
    </main>
        </div>
    );
}

export default Index
