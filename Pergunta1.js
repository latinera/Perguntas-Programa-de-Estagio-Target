function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }
  
  const resultado = somaAteN(13);
  console.log(resultado); // 91
  