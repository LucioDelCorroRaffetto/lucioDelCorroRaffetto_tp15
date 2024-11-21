const peliculas = require('./peliculas');
/* utilizando lo que
sabemos sobre ciclos o bucles, muestra al usuario un listado con el detalle de
cada una de nuestras películas favoritas. */

const cartelera = {
    peliculas: peliculas,
    infantiles: function () {
        const infantiles = this.peliculas.filter(pelicula => pelicula.genre == "Animación")
        console.log("Peliculas infantiles:");
        infantiles.forEach(pelicula => {
            console.log("Título: " + pelicula.id + "\nRating: " + pelicula.rating + "\nDuración: " + pelicula.length + " minutos\nPrecio: $" + pelicula.price + " Millones\nGénero: " + pelicula.genre)
        });
    },
    mejorValoradas: function (){
        const mejorValoradas = this.peliculas.filter(pelicula => pelicula.rating > 7.5)
        console.log("Peliculas mejor valoradas:");
        mejorValoradas.forEach(pelicula => {
            console.log("Título: " + pelicula.id + "\nRating: " + pelicula.rating)
        });
    },
    largometraje: function (){
        const largometraje = this.peliculas.filter(pelicula => pelicula.length > 120)
        console.log("Peliculas largometraje:");
        largometraje.forEach(pelicula => {
            console.log("Título: " + pelicula.id + "\nDuración: " + pelicula.length + " minutos")
        });
    },
    masRecaudaciones: function(importe){
        const masRecaudaciones = this.peliculas.filter(pelicula => pelicula.price > importe).map(pelicula => pelicula.id).join(", ");
        console.log("Peliculas con mejores recaudaciones: " + masRecaudaciones);
    },
    ordenarPorPrecio: function() {
        let peliculasOrdenadas = [...this.peliculas];
        for (let i = 0; i < peliculasOrdenadas.length - 1; i++) {
            for (let j = 0; j < peliculasOrdenadas.length - i - 1; j++) {
                if (peliculasOrdenadas[j].price < peliculasOrdenadas[j + 1].price) {
                    let temp = peliculasOrdenadas[j];
                    peliculasOrdenadas[j] = peliculasOrdenadas[j + 1];
                    peliculasOrdenadas[j + 1] = temp;
                }
            }
        }
        console.log("Películas ordenadas por recaudacion (de mayor a menor):");
        peliculasOrdenadas.forEach(pelicula => {
            console.log("Título: " + pelicula.id + "\nPrecio: " + pelicula.price + " Millones");
        });
    }
}
const fs = require('fs');
const rutaMensaje = './mensaje.txt';

fs.readFile(rutaMensaje, 'utf-8', (_, data) => console.log(data));

module.exports = cartelera;