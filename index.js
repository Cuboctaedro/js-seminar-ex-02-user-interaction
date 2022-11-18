const yourname = prompt('What is your name?', '');

const confirmation = confirm(`Is your name ${yourname}?`);

if (confirmation) {
    alert(`Hello  ${yourname}`);
} else {
    alert('Hello stranger');
}