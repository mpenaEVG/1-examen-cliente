'use strict'


ejercicio6(libros,"Sapiens")

function ejercicio1(libros){

    libros.forEach(libro=> {
        console.log("Libro con titulo "+libro.titulo+", perteneciente al autor "+libro.autor+", publicado en  "+libro.anioPublicacion)
    });
}

function ejercicio2(libros){

    const antiguo = libros.reduce((sum,libro) => (sum>libro.anioPublicacion) ? sum : libro)
    console.log("El libro más antiguo es "+antiguo.titulo)
}


function ejercicio3(libros){

    const avaliable = libros.filter(libro=> libro.disponible)
    console.log("Libros disponibles: "+avaliable.length)
}

function ejercicio4(libros){

    const autores = libros.map(libro=>libro.autor)

    console.log(autores)
}

function ejercicio5(libros,genero){
    
    const libro = libros.filter(libro=> libro.genero === genero)
    if(libro){
        libro.forEach(titulo => {
           console.log("Libro: "+titulo.titulo) 
        });
    }else{
        console.log("Libro no encontrado")
    }
}

function ejercicio6(libros,nombreLibro){
    const eleccion = libros.filter(libro=>libro.titulo === nombreLibro)

    if(eleccion){
        eleccion.forEach(ele=>
            {if(ele.disponible){

           [...eleccion,
            ele.disponible = false]
            console.log("La disponibilidad del libro "+ele.titulo+" cambio a  "+ele.disponible)
           
        }else{
            console.log("El libro "+ele.titulo+" no esta disponible")
        }
    })
    }else{
        console.log("El libro introducido no existe en nuestra base de datos")
    }
}


function ejercicio7(libros){

    const generos = {
        ficcion: libros.filter(libro=> libro.genero === 'Ficción').map(libro=> libro.titulo),
        ciencia: libros.filter(libro=> libro.genero === 'Ciencia').map(libro=> libro.titulo),
        historia: libros.filter(libro=> libro.genero === 'Historia').map(libro=> libro.titulo),
        poesia: libros.filter(libro=> libro.genero === 'Poesía').map(libro=> libro.titulo)
    }
    console.log(generos)
}


function ejercicio8(libros){

        const anios = libros.map(libro=>libro.anioPublicacion)
        let promedio = 0
        anios.forEach(anio=>{
            promedio += +anio
        })
        promedio = promedio / anios.length
        console.log("El promedio de los años de publicacion es "+Math.round(promedio))

}