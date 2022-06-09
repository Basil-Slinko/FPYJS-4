const goods = {
    1: {                                                         // https://www.lamoda.ru/p/mp002xw15tkd/clothes-incity-rubashka/
        id: 1,                                                   // Код товара
        name: 'Рубашка',                                         // Наименование
        description: 'Белая рубашка в голубую полоску',          // Описание
        sizes: [42, 44, 46, 48],                                 // [массив возможных размеров]
        price: 3000,                                             // цена товара
        available: true,                                         // Признак доступности для продажи
    },
    2: {
        id: 2,                                                   // https://www.lamoda.ru/p/mp002xw0c9k9/clothes-oodji-bryuki/
        name: 'Брюки',
        description: 'Лёкгие голубые брюки',
        sizes: [40, 42, 44, 46, 48, 50],
        price: 1800,
        available: true,
    },
    3: {                                                          // https://www.lamoda.ru/p/mp002xw0d81o/clothes-zarina-futbolka/
        id: 3,
        name: 'Футболка',
        description: 'Чёрная футболка',
        sizes: [42, 44, 46, 48, 50, 52],
        price: 800,
        available: true,
    },
    4: {                                                          // https://www.lamoda.ru/p/mp002xw0c45i/clothes-sela-pidzhak/
        id: 4,
        name: 'Пиджак',
        description: 'Бежевый двубортный пиджак',
        sizes: [42, 44, 46, 48],
        price: 7000,
        available: true,
    },
    5: {                                                          // https://www.lamoda.ru/p/mp002xw0cmrb/clothes-befree-shorty-dzhinsovye/
        id: 5,
        name: 'Шорты',
        description: 'Джинсовые шорты с застёжкой молнией',
        sizes: [40, 42, 44, 46, 48, 50],
        price: 2700,
        available: true,
    },
    6: {                                                          // https://www.lamoda.ru/p/rtlaaz617101/clothes-gap-khudi/
        id: 6,
        name: 'Худи',
        description: 'Худи чёрного цвета',
        sizes: [38, 40, 42, 46, 50, 54, 58],
        price: 2800,
        available: true,
    },
    7: {                                                        
        id: 7,
        name: 'Поло',
        description: 'Бело-голубое поло',
        sizes: [42, 44, 46],
        price: 1700,
        available: true,
    },
    8: {                                                          // https://www.lamoda.ru/p/rtlaak278002/clothes-levis-dzhinsy/                                       
        id: 8,
        name: 'Джинсы',
        description: 'Джинсы 501 CROP от Levils',
        sizes: [28, 30],
        price: 14500,
        available: true,
    },
};



let basket = [
    {
        good: 2,
        amount: 1,
    },
    {
        good: 3,
        amount: 2,
    },
    {
        good: 6,
        amount: 1,
    },
    {
        good: 7,
        amount: 2,
    },
];



// Реализуйте функцию вычисления общего количества и стоимости товаров в корзине. 
// Функция должна возвращать объект, содержащий поля:
//      totalAmount    Общее количество товаров в корзине
//      totalSumm      Общая стоимость товаров в корзине

function totalAmountSumm(arr_basket) {
    
    return {'totalAmount': 0, 
            'totalSumm': 0,}
}



function pushToBasket(goodId, productQuantity) {
    basket.push({good:goodId, amount:productQuantity});
    return `\nВ корзину добавлен товар: ${goods[goodId]['name']} (${productQuantity} шт.)`;
};


function deleteGood(goodId) {
    let productQuantity = 0;
    for (let i = 0; i < basket.length; i++) {
      let id_product = basket[i]['good'];
      if (id_product == goodId) {
        productQuantity = basket[i]['amount'];
        basket.splice(i, 1);
      }  
    }
    return `\n\nИз корзины удалён товар: ${goods[goodId]['name']} (${productQuantity} шт.)`;
};


function emptyBasket(arr_basket) {
    while (arr_basket.length > 0) { basket.pop() };
    return `\n\nКорзина очищена.`;
};



console.log(pushToBasket(1, 5));
console.log(basket);


console.log(deleteGood(2));
console.log(basket);


console.log(emptyBasket(basket));
console.log(basket);
 