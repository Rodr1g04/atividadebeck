const calculadora = require('../src/index.js')

test ("2+2=4", () => {
    expect (2+2).toBe(4);
})

test("se a >= b entao a - b >= 0", () => {
    expect(calculadora.subtracao).toBedefined();
    expect(calculadora.subtracao(2,1)).toBeGreaterThanOrEqual(0);
    expect(calculadora.subtracao(2,2)).toBeGreaterThanOrEqual(0);
    expect(calculadora.subtracao(2, -2)).toBeGreaterThanOrEqual(0);
    expect(calculadora.subtracao(-2, -4)).toBeGreaterThanOrEqual(0);
})

test("se a < b entao a - b < 0", () => {
    expect(calculadora.subtracao1(1,2)).toBeLessThan(0);
    expect(calculadora.subtracao1(-2,-1)).toBeLessThan(0);
    expect(calculadora.subtracao1(-2,1)).toBeLessThan(0);

})

test("se a e b < 0 ou a e b > 0 entao a*b > 0, ", () => {
    expect(calculadora.multiplicacao).toBedefined();
    expect(calculadora.multiplicacao(2,2)).toBeGreaterThan(0);
    expect(calculadora.multiplicacao(-2,-2)).toBeGreaterThan(0);

})

test("se a e b < 0 ou a e b > 0 entao a*b > 0, ", () => {
    expect(calculadora.multiplicacao(-2,2)).toBeLessThan(0)
    expect(calculadora.multiplicacao(2,-2)).toBeLessThan(0);

})

test("se a = 0 ou b = 0 entao a*b = 0", () => {
    expect(calculadora.multiplicacao(2,0)).toBe(0);
    expect(calculadora.multiplicacao(-2,0)).toBe(-0);
})

test("se b = 0 entao divisao por ZERO", () =>{
    expect(calculadora.divisao).toBedefined();
    expect(() => calculadora.divisao(2,0))
})