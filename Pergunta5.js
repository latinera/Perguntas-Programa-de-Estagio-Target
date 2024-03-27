function inverterString(original) {
    let invertida = '';
    for (let i = original.length - 1; i >= 0; i--) {
      invertida += original[i];
    }
    return invertida;
  }
  
  // Exemplo de uso
  const stringOriginal = "Olá, mundo!";
  const stringInvertida = inverterString(stringOriginal);
  console.log(stringInvertida); // Saída: "!odnum ,álO"  