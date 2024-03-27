function proximoElementoD(sequencia) {
  const ultimo = sequencia[sequencia.length - 1];
  return (Math.sqrt(ultimo) + 2) ** 2;
}

// Exemplo de uso
const proximoD = proximoElementoD([4, 16, 36, 64]);
console.log(proximoD); // Saída: 100