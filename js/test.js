let hoverElement = document.getElementById('hoverElement');

hoverElement.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#bbb';
});

hoverElement.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ddd';
});

let fullscreenBtn = document.getElementById('fullscreenBtn');
let fullscreenVideo = document.getElementById('fullscreenVideo');

fullscreenBtn.addEventListener('click', function() {
    toggleFullScreen(fullscreenVideo);
});

function toggleFullScreen(element) {
    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(err => {
            console.log('Error attempting to enable full screen');
        });
    }
}

let openModalBtn = document.getElementById('openModalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');
let modal = document.getElementById('myModal');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

let formContainer = document.getElementById('formContainer');
let formSteps = document.querySelectorAll('.form-step');
let currentStep = 0;

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
    }
}

function submitForm() {
    alert('Form submitted!');
}

var scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
