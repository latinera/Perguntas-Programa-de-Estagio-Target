function proximoElemento(sequencia) {
    const a = sequencia[sequencia.length - 2];
    const b = sequencia[sequencia.length - 1];
    return a + b;
  }
  
  const proximo = proximoElemento([1, 1, 2, 3, 5, 8]);
  console.log(proximo); // Saída: 13
  