function proximoElemento(sequencia) {
    const ultimo = sequencia[sequencia.length - 1];
    const indice = sequencia.length; // Último índice da sequência
  
    // Lógica específica para a sequência fornecida
    const proximo = indice * indice; // Quadrado do último índice
  
    return proximo;
  }
  
  const proximo = proximoElemento([0, 1, 4, 9, 16, 25, 36]);
  console.log(proximo); // Saída: 49
  