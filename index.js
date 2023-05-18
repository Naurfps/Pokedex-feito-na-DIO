/*
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (cor, marca, gastoMedioPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }

    }

    const civic = new Carro('Honda', 'Preto', 1/12)
    console.log(civic.calcularGastoDePercurso(70, 5))
    const golf = new Carro('Volkswagen', 'Branco', 1/14)
    console.log(golf.calcularGastoDePercurso(70, 5))
    const palio = new Carro('Fiat', 'Cinza', 1/15)
    console.log(palio.calcularGastoDePercurso(20, 5))
    */

    /*
    class Pessoa {
        nome;
        peso;
        altura;

        constructor (nome, peso, altura) {
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;
        }

        calcularImc() {
            return this.peso / (this.altura * this.altura)
        }

        classificarImc() {
            const imc = this.calcularImc()
            if (imc < 18.5){
            return 'Magreza'
            }
            else if (imc => 18.5 && imc < 24.9){
            return 'Normal'
            }
            else if (imc => 25 && imc < 29.9){
            return 'Obesidade'
            }
        }

    }

    const jose = new Pessoa('jose', 70, 1.75)
    console.log(jose.calcularImc());
    console.log(jose.classificarImc())
    const ruan = new Pessoa('ruan', 55, 1.80)
    console.log(ruan.calcularImc());
    console.log(ruan.classificarImc());
    */
   
    /*
      const nome = 'Ruan Lucas Alves Freitas Da Silva';

      for (let i = 0; i < nome.length; i++) {
        
        console.log(nome[i])
        
      }
      */

      /*
      const notas = [];

      notas.push(10)
      notas.push(10)
      notas.push(10)

      let soma = 0;

      for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        soma = soma + nota;
        
      }

      const media = soma / notas.length;
      console.log(media)
      */

      /*
      for (let i = 1; i <= 10; i++) {
        console.log(i * 7);
        
      }
      */

      /* 
      const numeros = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]


      for (let i = 1; i <= 10; i = i + 2) {
        console.log(numeros[i])
      }
      */

      /*
      const numeros = [0,1,2,3,4,5,6,7,8,9,10]

      for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];

        if (numero % 2 === 0) {
            console.log(numero)
        }
        
      }
      */