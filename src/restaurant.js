/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, 
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado; 
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. 
  Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.
  
*/

function orderMenu(keys, drinkKeys, values, drinkValues) {
  for (let index = 0; index < drinkKeys.length; index += 1) {
    keys.push(drinkKeys[index]);
    values.push(drinkValues[index]);
  }
}

function partIf(consumptions, keys, values) {
  if (consumptions[index2] === keys[index3]) {
    totalOrder += parseFloat(values[index3]);
  }
}

let totalOrder = 0;
let index2 = 0;
let index3 = 0;
function calculatorOrder(consumptions, keys, values) {
  for (index2 = 0; index2 < keys.length; index2 += 1) {
    for (index3 = 0; index3 < keys.length; index3 += 1) {
      partIf(consumptions, keys, values);
    }
  }
}

const meuRestaurante = {};
const createMenu = (menu) => {
  meuRestaurante.menu = menu;
  meuRestaurante.fetchMenu = () => meuRestaurante.menu;
  meuRestaurante.consumption = [];
  meuRestaurante.order = (product) => meuRestaurante.consumption.push(product);
  
  meuRestaurante.pay = () => {
    const consumptions = meuRestaurante.consumption;
    const keys = Object.keys(meuRestaurante.menu.food);
    const drinkKeys = Object.keys(meuRestaurante.menu.drink);
    const values = Object.values(meuRestaurante.menu.food);
    const drinkValues = Object.values(meuRestaurante.menu.drink);
    index2 = 0;
    index3 = 0;
    orderMenu(keys, drinkKeys, values, drinkValues);
    calculatorOrder(consumptions, keys, values);
    totalOrder += totalOrder * 0.1;
    return totalOrder;
  };
  return meuRestaurante;
};

// console.log(createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }));
// console.log(meuRestaurante.order('coxinha')) //3.9
// console.log(meuRestaurante.order('coxinha')) //3.9
// console.log(meuRestaurante.order('coxinha')) //3.9
// console.log(meuRestaurante.order('cerveja')) //6.9
// console.log(meuRestaurante.order('cerveja')) //6.9
// console.log(meuRestaurante)
// console.log(meuRestaurante.pay())
// 28,05
module.exports = createMenu;

// const food = Object.entries(meuRestaurante.menu.food);
// const drinkKeys = Object.keys(meuRestaurante.menu.drink);
// const drink = Object.entries(meuRestaurante.menu.drink);
// let totalOrder = 0;
// for (let index = 0; index < consumptions.length; index += 1) {
//   for (let index2 = 0; index2 < foodKeys.length; index2 += 1) {
//     if (consumptions[index] === food[index2][0]) {
//       totalOrder += parseFloat(food[index2][1]);
//     }
//   }
//   for (let index2 = 0; index2 < drinkKeys.length; index2 += 1) {
//     if (consumptions[index] === drink[index2][0]) {
//       totalOrder += parseFloat(drink[index2][1]);
//     }
//   }
// }
// totalOrder += totalOrder * 0.1;
// return totalOrder;
//----------------------------------------------------------------------
// if (consumptions[index] === keys[index2]) {
//   totalOrder += parseFloat(values[index2]);
// }

//----------------------------------------------------------------------
// let totalOrder = 0;
// for (let index = 0; index < drinkKeys.length; index += 1) {
//   keys.push(drinkKeys[index]);
//   values.push(drinkValues[index]);
// }
// for (let index = 0; index < keys.length; index += 1) {
//   for (let index2 = 0; index2 < keys.length; index2 += 1) {
//     if (consumptions[index] === keys[index2]) {
//       totalOrder += parseFloat(values[index2]);
//     }
//   }
// }
// totalOrder += totalOrder * 0.1;
// return totalOrder;