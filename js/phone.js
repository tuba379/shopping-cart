function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
        if (newPhoneNumber > 10) {
            return 10;
        }
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
        if (newPhoneNumber < 1) {
            return 1;
        }
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})