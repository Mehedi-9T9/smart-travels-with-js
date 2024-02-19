

const element = document.getElementById('seat-container');
const elementNode = element.childNodes;


const myArr = [];
console.log(myArr);
for (const i of elementNode) {
    i.addEventListener('click', function (e) {
        const targetElement = e.target;
        const value = targetElement.innerText;
        myArr.push(value)
        console.log(myArr);


        if (myArr.length <= 4) {

            // Background Set
            targetElement.classList.add('bg-green-500');

            // Seat Update
            const selectSeat = document.getElementById('select-seat')
            const selectSeatText = selectSeat.innerText;
            const selectSeatValue = parseInt(selectSeatText) + 1;
            selectSeat.innerText = selectSeatValue;

            // Seat Name Update
            const classText = 'Economoy';
            const staticPrice = 550;
            elementCreate('seat-name', value)
            elementCreate('seat-class', classText)
            elementCreate('seat-price', staticPrice)

            // Total Price Update
            const totalPrice = staticPrice * selectSeatValue;
            setInnerText('total-price', totalPrice)


            // Total Seat Decrese
            const leftSeat = document.getElementById('seat-left')
            const leftSeatText = leftSeat.innerText;
            const seatNum = parseInt(leftSeatText) - 1;
            leftSeat.innerText = seatNum;
        }
        // diseble to enable
        if (myArr.length === 1) {
            const element = document.getElementById('input-btn');
            element.removeAttribute('disabled')
        }

        // something Alert
        if (myArr.length === 5) {
            alert("Sorry ! You Can't Select ")
        }
    });

}




document.getElementById('cupor-field').addEventListener('keyup', function (e) {

    const getValue = e.target.value;
    console.log(getValue);

    document.getElementById('cupon-btn').addEventListener('click', function () {
        if (getValue.toLowerCase() === 'new15') {

            console.log("same to same");
            hideElement('cupon-field')
            showElement('cupon-offer')

            const totalPriceElement = document.getElementById('total-price');
            const priceText = totalPriceElement.innerText;
            const priceNum = parseInt(priceText);
            const mulPrice = priceNum * 15;
            const div = mulPrice / 100;
            const getOffer = priceNum - div;

            setInnerText('less-offer', div)
            setInnerText('grand-total', getOffer)
        }
        else if (getValue.toLowerCase() === 'couple20') {
            console.log("same to same");
            hideElement('cupon-field')
            showElement('cupon-offer')

            const totalPriceElement = document.getElementById('total-price');
            const priceText = totalPriceElement.innerText;
            const priceNum = parseInt(priceText);
            const mulPrice = priceNum * 20;
            const div = mulPrice / 100;
            const getOffer = priceNum - div;

            setInnerText('less-offer', div)



            setInnerText('grand-total', getOffer)
        }
        else { alert('Invalid Cupon') }

    })

})











// Hide element Function
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
//  Show Element Function
function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}




// console.log(total);

function elementCreate(elementId, value) {
    const seatName = document.getElementById(elementId);
    const p = document.createElement('li')
    p.innerText = value
    seatName.appendChild(p)
}


// set inner Text Function
function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// Scroll to Section Function
function scrollToSection(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
