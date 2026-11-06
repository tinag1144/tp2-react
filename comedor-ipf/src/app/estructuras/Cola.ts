

export class Cola<T> {
  // En vez de un array normal tipo ['Plato 1', 'Plato 2'], uso un objeto literal. Porque si usaba un array y sacaba el primer elemento con shift(), 
  // el sistema tenía que reacomodar a todos los demás un lugar hacia atrás (complejidad O(n)).
  // Al usar un objeto, los pedidos se quedan quietos en su lugar y yo solo muevo el "cajero"
  // usando los índices. Esto hace que sacar un pedido sea instantáneo (O(1)).


  //acá, en vez de usar un array para guardar los items, uso un objeto porque si utilizo un array y saco el primero el elemento con shift() (y no puedo usar shift) el sistema tiene que reacomodar a todos los demas un lugar hacia atrás; y con un objeto los pedidos se quedan quietos y solo se mueve el
  #items: Record<number, T> = {};
  
  // Este es mi "cajero". Me dice qué número de ticket estoy atendiendo ahora.
  #frenteIndex = 0; 
  
  // Este es el rollo de números. Me dice qué ticket le toca al PRÓXIMO que llegue.
  #finalIndex = 0;  

  // Llega un pedido a la fila
  encolar(item: T): void {
    // Lo guardo en el número de ticket actual
    this.#items[this.#finalIndex] = item;
    // Preparo el siguiente número para el que venga después
    this.#finalIndex++;
  }

  // Atiendo al primer pedido de la fila
  desencolar(): T | undefined {
    if (this.estaVacia()) return undefined;
    
    // Guardo el pedido que voy a entregar
    const item = this.#items[this.#frenteIndex];
    
    // Lo borro del objeto para liberar memoria. ¡Acá está la magia! 
    // Como lo borro con 'delete', no muevo a los demás pedidos de lugar.
    delete this.#items[this.#frenteIndex]; 
    
    // Avanzo el "cajero" al siguiente número de ticket
    this.#frenteIndex++; 
    
    return item;
  }

  // Solo miro qué pedido está primero, sin atenderlo todavía
  frente(): T | undefined {
    if (this.estaVacia()) return undefined;
    return this.#items[this.#frenteIndex];
  }

  // Para saber cuántos hay en la fila, resto el último ticket dado menos el que estoy atendiendo
  get tamanio(): number {
    return this.#finalIndex - this.#frenteIndex;
  }

  estaVacia(): boolean {
    return this.tamanio === 0;
  }

  // Como en las pantallas de React Native necesito usar .map() para renderizar la lista,
  // convierto mi objeto de tickets a un array tradicional.
  aArray(): T[] {
    const arrayCopia: T[] = [];
    // Recorro desde el ticket que estoy atendiendo hasta el último que entregué
    for (let i = this.#frenteIndex; i < this.#finalIndex; i++) {
      arrayCopia.push(this.#items[i]);
    }
    return arrayCopia;
  }
}