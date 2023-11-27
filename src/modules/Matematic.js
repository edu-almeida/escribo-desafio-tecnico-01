class Matematic {

    static isInteiro(numero) {
        if (Number.isInteger(numero)) {
            return true;
        } else {
            throw new Error('O número não é inteiro');
        }
    }

    static isPositivo(numero) {
        if (numero > 0) {
            return true;
        } else {
            throw new Error('O número não é positivo');
        }
    }

    static somatorio(numero) {
        try {
            Matematic.isInteiro(numero);
            Matematic.isPositivo(numero);

            let somatorio = 0;
            for (let i = 1; i < numero; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    somatorio += i;
                }
            }
            console.log(`O somatório é: ${somatorio}`);
            return somatorio;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

module.exports = Matematic;

