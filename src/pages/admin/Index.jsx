import React from 'react'



const Admin = () => {
    return (
        <div>
            <input className="p-5 m-4 text-white bg-gray-200 rounded mg-10" placeholder="Búsqueda" />
            <main>
            <section className="contenedor sobre-nosotros">
            <h2 className="m-10 flex justify-center text-blue-400 font-extrabold">Nuestro producto</h2>
            <div className="flex  justify-center">
                <img src='../media/logo.2.png' alt="" class="imagen-about-us" />
                <div className="contenido-textos">
                    <h3><span>1</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, placeat? Nulla laboriosam quam, animi maxime quasi praesentium delectus tenetur doloremque voluptates obcaecati omnis itaque soluta recusandae ducimus ut voluptas dolorum.</p>
                    <h3><span>2</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, placeat? Nulla laboriosam quam, animi maxime quasi praesentium delectus tenetur doloremque voluptates obcaecati omnis itaque soluta recusandae ducimus ut voluptas dolorum.</p>
                </div>
            </div>
        </section>
        <section class="team contenedor" id="equipo">
            <h3>Nuestros productos</h3>
            <p class="after">Para todo tipo de personas</p>
            <div class="card">
                <div class="content-card">
                    <div class="people">
                        <img src='media/19.png' alt="" />
                    </div>
                    <div class="texto-team">
                        <h4>Hombres</h4>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div class="content-card">
                    <div class="people">
                        <img src="img/mujer.jpg" alt="" />
                    </div>
                    <div class="texto-team">
                        <h4>Mujeres</h4>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div class="content-card">
                    <div class="people">
                        <img src="img/niño.jpg" alt="" />
                    </div>
                    <div class="texto-team">
                        <h4>pelaos</h4>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="about" id="servicio">
            <div class="contenedor">
                <h3>Nuestros servicios</h3>
                <p class="after">Siempre mejorando para ti</p>
                <div class="servicios">
                    <div class="caja-servicios">
                        <img src="img/www.png" alt="" />
                        <h4>Creativos y asmbrosos</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div class="caja-servicios">
                        <img src="img/sitio-web.png" alt="" />
                        <h4>Creativos y asmbrosos</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div class="caja-servicios">
                        <img src="img/codigo.png" alt="" />
                        <h4>Creativos y asmbrosos</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="work contenedor" id="trabajo">
            <h3>Nuestro trabajo</h3>
            <p class="after">Hacemos de algo simple algo extraordinario</p>
            <div class="contenedor">
                <div class="galeria-port">
                    <div class="imagen-port">
                        <img src="img/hombre2.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/t.jpg" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/hombre4.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/mujer1.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/mujer4.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/niño1.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/niño2.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/niño3.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src="img/niño4.jpg" alt="" />
                        <div class="hover-galeria">
                            <img src="img/calendar.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </div>
    );
}

export default Admin
