
function bookDropdown(event) {
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.navigation');
    navItems.forEach(function(item) {
        item.onclick = bookDropdown;
    });
});
function clickHello(){
    var name = document.getElementById("name").value;
    document.getElementById("hello").innerHTML = "Hello " + name + "!" + 
    " Welcome you to our book universe. Wish you have a good time reading!" ;
}

function clickMe2(){
    var age = document.getElementById("age").value;

    document.getElementById("greeting").innerHTML = "We will suggest books based on your age (" + age + ")" + 
    " and reading preferences during your use. Enjoy reading!!";
}