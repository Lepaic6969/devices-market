<template>
   <main>
   
       
        <section class="portafolio" id="portafolio">
            <div class="contenedor">
                <div class="contenedor-textos-portafolio">
                    <h2 class="titulo-portafolio">Bienvenido al demo de un Software de asignación de dispositivos electrónicos  de Market Mix.</h2>
                    <p class="parrafo-portafolio">Nuestra organización está disponible 24/7 para brindarte la mejor el mejor servicio en soluciones tecnológicas, aquí tienes un ejemplo de nuestro trabajo...</p>
                </div>
                <div class="contenedor-portafolio"> <!--Este es el flex container-->
                    <img src="../assets/img/1.jpg" alt="">
                    <img src="../assets/img/2.jpg" alt="">
                    <img src="../assets/img/3.jpg" alt="">
                    <img src="../assets/img/4.jpg" alt="">
                    <img src="../assets/img/5.jpg" alt="">
                    <img src="../assets/img/6.jpg" alt="">
                </div>
            </div>
        </section>
        <section class="iconos">
            <div class="contenedor">
                <div class="contenedor-iconos"> <!--Este es el Flex container-->
                    <div class="icono-individual">
                        <img src="../assets/img/icono1.png" alt="">
                        <h3>Mejores Tiempos.</h3>
                        <p>Le brindamos las soluciones que su empresa necesita en tiempos record, sin comprometer con esto la calidad del Software.</p>
                    </div>
                    <div class="icono-individual">
                        <img src="../assets/img/icono2.png" alt="">
                        <h3>Eficiencia.</h3>
                        <p>Nuestras soluciones cuentan con la mayor optimización de recursos posible, haciendo de su aplicativo veloz y amigable con el usuario.</p>
                    </div>
                    <div class="icono-individual">
                        <img src="../assets/img/icono3.png" alt="">
                        <h3>Adaptabilidad.</h3>
                        <p>El software es adaptable para ser accedido desde cualquier dispositivo. Incluyendo cualquier computadora, tablet o smartphone.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
   
</template>

<script setup>


</script>

<style scoped>

/* *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body{
    font-family: 'lato';
    font-size:16px;
    background-color: #fff;
} */
.contenedor{
    width:90%;
    max-width: 1000px;
    margin:auto;
    overflow: hidden;
}


main{
   height: 1500px;
}
main .acerca-de{
    background: #f0f3f5;
    padding: 45px 0;
    text-align: center;
}
main .acerca-de .contenedor-texto-acerca .titulo-acerca{
    font-size: 24px;
    font-weight: 900;
    /* color:#999999; */
    margin-bottom: 20px;
}
main .acerca-de .contenedor-texto-acerca .parrafo-acerca{
    color:#999999;
    font-weight: 600;
    margin-bottom: 20px;
}
main .iconos{
    background: white;
    padding: 30px 0;
}
.contenedor-iconos{
    display:flex;
    justify-content: space-between;
    text-align: center;
}
.contenedor-iconos .icono-individual{
    width: 30%;
    margin:20px 0;
}
.contenedor-iconos .icono-individual h3{
    margin:10px 0;
}

main .portafolio{
    background: white;
    padding: 60px 0;
}
main .contenedor-textos-portafolio{
    text-align: start;

}
main .contenedor-textos-portafolio .titulo-portafolio{
    /* font-weight: 900; */
    margin-bottom:20px;
    font-size: 35px;
}
main .contenedor-textos-portafolio .parrafo-portafolio{
    font-weight: normal;
    font-size: 20px;
    /* color:#999999; */
    margin-bottom:60px;
}
main .portafolio .contenedor-portafolio{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
main .portafolio .contenedor-portafolio img{
    width:32%;
    margin:auto;
    margin-bottom: 10px;
    border-radius: 5px;
}
main .portafolio .contenedor-portafolio img:hover{
    opacity: .6;
}




@media screen and (max-width:465px){
   main{
   height: 2000px;
   }
    .contenedor-iconos{
       flex-direction: column;
    }
    .contenedor-iconos .icono-individual{
        width: 90%;
        margin: auto;
       
    }
    
    main .portafolio .contenedor-portafolio img{
        width:49%;
        margin:auto;
        margin-bottom: 5px;
        border-radius: 5px;
    }
    main .contenedor-textos-portafolio .titulo-portafolio{
    font-size: 25px;
   }
   main .contenedor-textos-portafolio .parrafo-portafolio{
    font-size: 16px;
}
}
</style>