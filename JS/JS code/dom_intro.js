(function() {
    function clickHandler (message){
        alert('Hi ... ' + message);
    }

    let myButton = document.getElementById('id1');
    myButton.addEventListener('click', function(){clickHandler('ABC')});
})();