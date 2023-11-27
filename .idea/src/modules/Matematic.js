class Matematic {

    static isInteiro(numero) {
        if (Number.isInteger(numero)) {
            return true;
        } else {
            throw new Error('O número não é inteiro');
        }
    }

    static isPositivo(numero) {
        if (numero > 0){
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
            for (let i = 1; i < numeroInteiro; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    somatorio += i;
                }
            }
            return somatorio;
        } catch (error) {
            console.error(error.message);
        }
    }
}