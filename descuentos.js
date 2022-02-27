function precioDescuento (precio,descuento){
    const porcentajeConDescuento = 100-descuento;
    const precioDescuento = (porcentajeConDescuento*precio)/100;
    return precioDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscuount = document.getElementById("inputDiscount");
    const inputCupon = document.getElementById("inputCupon");
    const price = inputPrice.value;
    const discount = inputDiscuount.value;
    const cupon = inputCupon.value;

    if (price>0 && cupon==0) {
    const precioConDescuento = precioDescuento(price,discount);
    const resultP = document.getElementById("resultP");
    resultP.innerText ="El precio con descuento es $"+precioConDescuento;
    } else if (price>0 && discount==0) {
    const precioConDescuento = precioDescuento(price,cupon);
    const resultP = document.getElementById("resultP");
    resultP.innerText ="El precio con descuento es $"+precioConDescuento;
    } else {
    resultP.innerText ="Ingresa un valor valido";
    }
}

const coupons = [
    {
        name: "LuvitzEsGod",
        discount: 15,
    },
    {
        name: "UsandoArraysOp",
        discount: 30,
    },
    {
        name: "LasMotosSonCool",
        discount: 25,
    },
];

function onClickArrayButton() {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCuponsA");
    const couponValue = inputCoupon.value;
 

    const isCouponValueValid = function (coupons) {
        return coupons.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = precioDescuento(price, descuento);

        const resultP = document.getElementById("resultP");
        resultP.innerText ="El precio con descuento es $"+precioConDescuento;
    }
}