function calcularReajuste(salario, porcentagem) {
    let reajuste = salario * (porcentagem / 100);
    let novoSalario = salario + reajuste;
    return novoSalario;
}

let salario = parseFloat(prompt("Digite o salário atual:"))
let porcentagem = parseFloat(prompt("Digite a porcentagem de reaguste"))
let novoSalario = calcularReajuste(salario, porcentagem);

alert(`O novo salário após o reajuste é: ${novoSalario.toFixed(2)}`);