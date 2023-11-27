# Desafio Técnico - Desenvolvedor(a) Backend 01

# Classe Matematic

Uma classe JavaScript simples com métodos utilitários para verificar números inteiros e positivos, e um método para calcular a soma de números divisíveis por 3 ou 5.

## Uso

Para utilizar a classe Matematic, siga estes passos:

1. Instale o Node.js se ainda não estiver instalado: [Node.js](https://nodejs.org/)

2. Clone este repositório:

   ```bash
   git clone https://github.com/edu-almeida/escribo-desafio-tecnico-01
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd escribo-desafio-tecnico-01
   ```

4. Instale as dependências (se houver):

   ```bash
   npm install
   ```

5. Use a classe Matematic no seu código chamando a classe e passando um número:

   ```javascript
    const Matematic = require('./modules/Matematic');
    let numero = 10;
    Matematic.somatorio(numero);
   ```

## Métodos

### `isInteiro(numero)`

Verifica se um número dado é um número inteiro.

- Parâmetros:
    - `numero`: O número a ser verificado.

### `isPositivo(numero)`

Verifica se um número dado é positivo.

- Parâmetros:
    - `numero`: O número a ser verificado.

### `somatorio(numero)`

Calcula a soma de números abaixo de um dado número que são divisíveis por 3 ou 5.

- Parâmetros:
    - `numero`: O limite superior para o cálculo da soma.

## Contribuições

Sinta-se à vontade para contribuir para este projeto abrindo issues ou pull requests. Suas contribuições são bem-vindas!

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.
