function getFormvalue() {
    let form = document.getElementById('form1'); // replace 'yourFormId' with the id of your form
    let firstName = form.elements['fname'].value; // replace 'firstName' with the name of your input field for the first name
    let lastName = form.elements['lname'].value; // replace 'lastName' with the name of your input field for the last name

    // Now you can use the firstName and lastName variables
}
