function proximoElementoF(sequencia) {
  const ultimo = sequencia[sequencia.length - 1];
  if (ultimo < 16) {
    return ultimo + 8;
  } else {
    return ultimo + 1;
  }
}

// Exemplo de uso
const proximoF = proximoElementoF([2, 10, 12, 16, 17, 18, 19]);
console.log(proximoF); // Saída: 20