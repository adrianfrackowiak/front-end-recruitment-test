const form = {
    firstName: document.querySelector('input[name="firstname"]'),
    lastName: document.querySelector('input[name="lastname"]'),
    email: document.querySelector('input[name="email"]'),
    postalCode: document.querySelector('input[name="postalcode"]'),
    phoneNumber: document.querySelector('input[name="phone"]'),
    cardNumber: document.querySelector('input[name="creditcard"]'),
    code: document.querySelector('input[name="securitycode"]'),
    date: document.querySelector('input[name="date"]'),
    button: document.querySelector('.checkout-btn'),
    info: document.querySelector('.validation-info'),
};

form.phoneNumber.addEventListener('input', (e) => {
    if (form.phoneNumber.value.length === 1) {
        form.phoneNumber.value = '(';
    } else if (form.phoneNumber.value.length === 4) {
        form.phoneNumber.value += ') ';
    }
});

form.cardNumber.addEventListener('input', (e) => {
    if (
        form.cardNumber.value.length === 4 ||
        form.cardNumber.value.length === 11 ||
        form.cardNumber.value.length === 18
    ) {
        form.cardNumber.value += ' - ';
    }
});

form.date.addEventListener('input', (e) => {
    if (form.date.value.length === 2) {
        form.date.value += ' / ';
    }
});

const validation = (form) => {
    if (
        form.firstName.value === '' ||
        form.lastName.value === '' ||
        form.email.value === '' ||
        form.postalCode.value === '' ||
        form.phoneNumber.value === '' ||
        form.cardNumber.value === '' ||
        form.code.value === '' ||
        form.date.value === ''
    ) {
        form.info.innerHTML = '<p>All fields required</p>';
        return false;
    }

    if (!/^[a-zA-Ząćżźółń]*$/g.test(form.firstName.value)) {
        form.info.innerHTML = '<p>First name must have only letters</p>';
        return false;
    }

    if (!/^[a-zA-Ząćżźółń]*$/g.test(form.lastName.value)) {
        form.info.innerHTML = '<p>Last name must have only letters</p>';
        return false;
    }

    if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            form.email.value
        )
    ) {
        form.info.innerHTML = '<p>Invalid email address</p>';
        return false;
    }

    if (
        !/^[0-9-]*$/g.test(form.postalCode.value) ||
        form.postalCode.value.length < 5
    ) {
        form.info.innerHTML = '<p>Invalid postal code</p>';
        return false;
    }

    if (
        !/^[0-9- ()]*$/g.test(form.phoneNumber.value) ||
        form.phoneNumber.value.length < 13
    ) {
        form.info.innerHTML = '<p>Invalid phone number</p>';
        return false;
    }

    if (
        !/^[0-9\ -]*$/g.test(form.cardNumber.value) ||
        form.cardNumber.value.length < 25
    ) {
        form.info.innerHTML = '<p>Invalid card number</p>';
        return false;
    }

    if (!/^[0-9]*$/g.test(form.code.value) || form.code.value.length < 3) {
        form.info.innerHTML = '<p>Invalid secure code</p>';
        return false;
    }

    if (!/[0-9 /]*$/g.test(form.date.value) || form.date.value.length < 7) {
        form.info.innerHTML = '<p>Invalid date</p>';
        return false;
    }

    return true;
};

form.button.addEventListener('click', () => {
    if (validation(form)) form.info.innerHTML = '<p>Success!</p>';
});
