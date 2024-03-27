function proximoElemento(sequencia) {
    return sequencia[sequencia.length - 1] + 2;
  }
  
  const proximo = proximoElemento([1, 3, 5, 7]);
  console.log(proximo); // Saída: 9
  