// function removeSelectedItem() {
//     const colorSelect = document.getElementById('colorSelect');
//     colorSelect.remove(colorSelect.selectedIndex);
// }

function getFormValues(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    const form = document.getElementById('form1');
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;
    console.log('First name:', firstName);
    console.log('Last name:', lastName);
    alert(`First name: ${firstName}\nLast name: ${lastName}`);
}