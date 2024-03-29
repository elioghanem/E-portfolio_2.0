function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(' .modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_we7zsro',
            'template_s4nz6ma',
            event.target,
            'wGQjWHfKXG5Wu8Slw'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible-success";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "the email service is temporarily unavailable.Please contact me directly on email:elioghanem546@gmail.com"
            );
        })
}
let isModalOpen = false;

function toggleModal() {

    const mailBtn = document.getElementById("mailBtn");

    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal__open");
        mailBtn.classList.remove("hidden");
    } else {
        isModalOpen = true;
        document.body.classList.add("modal__open");
        mailBtn.classList.add("hidden");
    }
}
let isDark = false;

function toggleDarkMode() {
    if (isDark) {
        isDark = false;
        return document.body.classList.remove("toggle__dark--mode");
    }
    isDark = true;
    document.body.classList += "toggle__dark--mode";
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for (let i = 0; i < shapes.length; i++) {;
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`;

    }
}



window.addEventListener('scroll', function() {
    let mailBtn = document.getElementById('mailBtn');
    let footer = document.querySelector('footer');

    let footerPosition = footer.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        mailBtn.classList.add('footer-style');
    } else {
        mailBtn.classList.remove('footer-style');
    }
});

function openMenu() {
    document.body.classList += (" open__menu");
}

function closeMenu() {
    document.body.classList.remove("open__menu");
}

function toggleModalAndCloseMenu() {
    toggleModal();
    closeMenu();
}