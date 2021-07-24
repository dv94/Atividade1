function multiplicar(a, b) {
    return a * b;
}

function soma(a, b) {
    return a + b;
}


function subtracao(a, b) {
    return a - b;
}

// eslint-disable-next-line no-undef
QUnit.test("Testes utilizando as funções equal e notEqual", function (assert) {
    assert.expect(10);
    //Com equal()
    // eslint-disable-next-line no-undef
    assert.equal(multiplicar(2, 2), 4, "Multiplicação de dois números positivos");
    // eslint-disable-next-line no-undef
    assert.equal(multiplicar(-2, -2), 4, "Multiplicação de dois números negativos");
    // eslint-disable-next-line no-undef
    assert.equal(multiplicar(-2, 2), -4, "Multiplicação de um número negativo e um número positivo");
    // eslint-disable-next-line no-undef
    assert.equal(multiplicar(2, 0), 0, "Multiplicação de um número positivo e um número neutro");

    //Soma
    assert.equal(soma(2, 5), 7, "Soma de dois numero inteiros");
    assert.equal(soma(2, 6), 7, "Soma de dois numero inteiros com o resultado errado");

    //Subtração
    assert.equal(subtracao(5, 2), 3, "subtracao de dois numero inteiros");
    assert.equal(subtracao(6, 2), 7, "subtracao de dois numero inteiros com o resultado errado");


    //Com notEqual()
    // eslint-disable-next-line no-undef
    assert.notEqual(multiplicar(1, 1), 0, "Multiplicação de dois número positivo iguais");
    // eslint-disable-next-line no-undef
    assert.notEqual(multiplicar(2, 3), 0, "Multiplicação de um número positivo e um número positivo");
});
