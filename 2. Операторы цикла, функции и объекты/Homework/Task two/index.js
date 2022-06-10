const goods = {
    1: {                                                         
        id: 1,                                                   
        name: 'Рубашка',                                         
        description: 'Белая рубашка в голубую полоску',          
        sizes: [42, 44, 46, 48],                                 
        price: 3000,                                            
        available: true,                                         
    },
    2: {
        id: 2,                                                 
        name: 'Брюки',
        description: 'Лёкгие голубые брюки',
        sizes: [40, 42, 44, 46, 48, 50],
        price: 1800,
        available: true,
    },
    3: {                                                          
        id: 3,
        name: 'Футболка',
        description: 'Чёрная футболка',
        sizes: [42, 44, 46, 48, 50, 52],
        price: 800,
        available: true,
    },
    4: {                                                          
        id: 4,
        name: 'Пиджак',
        description: 'Бежевый двубортный пиджак',
        sizes: [42, 44, 46, 48],
        price: 7000,
        available: true,
    },
    5: {                                                   
        id: 5,
        name: 'Шорты',
        description: 'Джинсовые шорты с застёжкой молнией',
        sizes: [40, 42, 44, 46, 48, 50],
        price: 2700,
        available: true,
    },
    6: {                                                  
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
    8: {                                                                                           
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


function totalAmountSumm(arr_basket, obj_goods) {
    let totalAmount = 0;
    let totalSumm = 0;
    for (let i = 0; i < arr_basket.length; i++) {
      let id_product = arr_basket[i]['good'];
      let amount_product = arr_basket[i]['amount'];
      let cost_prouduct = obj_goods[id_product]['price'] * amount_product
      totalSumm = totalSumm + cost_prouduct
      totalAmount = totalAmount + amount_product
    };
    return {'totalAmount': totalAmount, 
            'totalSumm': totalSumm,}
}


function pushToBasket(goodId, productQuantity, arr_basket, obj_goods) {
    arr_basket.push({good:goodId, amount:productQuantity});
    return `\nВ корзину добавлен товар: ${obj_goods[goodId]['name']} (${productQuantity} шт.)`;
};


function deleteGood(goodId, arr_basket, obj_goods) {
    let productQuantity = 0;
    for (let i = 0; i < arr_basket.length; i++) {
      let id_product = arr_basket[i]['good'];
      if (id_product == goodId) {
        productQuantity = arr_basket[i]['amount'];
        arr_basket.splice(i, 1);
      }  
    }
    return `\n\nИз корзины удалён товар: ${obj_goods[goodId]['name']} (${productQuantity} шт.)`;
};


function emptyBasket(arr_basket) {
    while (arr_basket.length > 0) { 
        arr_basket.pop();
    };
    return `\n\nКорзина очищена.`;
};


console.log(totalAmountSumm(basket, goods));
console.log(basket);


console.log(pushToBasket(1, 5, basket, goods));
console.log(basket);


console.log(deleteGood(2, basket, goods));
console.log(basket);


console.log(emptyBasket(basket));
console.log(basket);
 
