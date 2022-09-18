const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden'); //looks for html elements with class 'hidden'
hiddenElements.forEach((element) => observer.observe(element)); //run observer on each element with class 'hidden'