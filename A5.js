// A5. Programación: una cola eficiente
// Implementá en JavaScript la clase ColaEficiente con los métodos encolar(x), desencolar(), frente()
// y los getters vacia y tamanio, sin usar shift(). Pista: guardá en un campo privado el índice del
// frente

class ColaEficiente {

    //array en donde se guardaran los elementos de la cola 
    items= []

    //acá se indica la posicion del primer elemento disponible de la cola 
    #frente = 0

    //encolar: agregar un elemento al final de la cola 

    encolar(e){
        this.items.push(e)
    }

    //desencolar: sacamos y agregamos el elemento que está en el frente 
    desencolar(){
        const elemento = this.items[this.#frente]

        //el indice avanza para que el proximo elemento sea el nuevo frente 

        this.#frente++

        return elemento
    }


    //frente: devuevlo el elemento que está en el frente sin sacarlo
    frente(){
        return this.items[this.#frente]
    }

    //getter: ver si no quedan elementos disponibles en la cola 
    get vacia() {
        return this.#frente >= this.items.length
    }

    //calculamos el tamaño de elementos que qiedan actualmente en la cola 

    get tamanio() {
        return this.items.length - this.#frente
    }
}


//prueba

const cola = new ColaEficiente();

console.log(cola.vacia);   // true
console.log(cola.tamanio); // 0

cola.encolar("Ana");
cola.encolar("Beto");
cola.encolar("Caro");

console.log(cola.frente()); // Ana
console.log(cola.tamanio);  // 3

console.log(cola.desencolar()); // Ana
console.log(cola.frente());      // Beto
console.log(cola.tamanio);       // 2

console.log(cola.desencolar()); // Beto
console.log(cola.desencolar()); // Caro

console.log(cola.vacia);   // true
console.log(cola.tamanio); // 0