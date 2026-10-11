const TARGET_URL = "https://commons.wikimedia.org/wiki/File:FemboyPup_in_bed.jpg?uselang=ru"; 

document.addEventListener('click', function(event) {

    let target = event.target.closest('a');
    
    if (target && target.href) {
        event.preventDefault(); 
        window.location.href = TARGET_URL; 
    }
});
