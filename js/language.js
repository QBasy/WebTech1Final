const hoverElements = $(".col");

hoverElements.each(function() {
    $(this).on('mouseover', function() {
        $(this).css('background-color', '#a9a9a9');
    });

    $(this).on('mouseout', function() {
        $(this).css('background-color', '#ddd');
    });
});

let openModalBtn1 = $('#openModalBtn1');
let closeModalBtn1 = $('#closeModalBtn1');
let modal1 = $('#myModal1');

openModalBtn1.on('click', function() {
    modal1.css('display', 'block');
});

closeModalBtn1.on('click', function() {
    modal1.css('display', 'none');
});

let openModalBtn2 = $('#openModalBtn2');
let closeModalBtn2 = $('#closeModalBtn2');
let modal2 = $('#myModal2');

openModalBtn2.on('click', function() {
    modal2.css('display', 'block');
});

closeModalBtn2.on('click', function() {
    modal2.css('display', 'none');
});

let openModalBtn3 = $('#openModalBtn3');
let closeModalBtn3 = $('#closeModalBtn3');
let modal3 = $('#myModal3');

openModalBtn3.on('click', function() {
    modal3.css('display', 'block');
});

closeModalBtn3.on('click', function() {
    modal3.css('display', 'none');
});

$(window).on('click', function(event) {
    if (event.target === modal1[0]) {
        modal1.css('display', 'none');
    }
    if (event.target === modal2[0]) {
        modal2.css('display', 'none');
    }
    if (event.target === modal3[0]) {
        modal3.css('display', 'none');
    }
});


let dotnetVideo, springVideo, djangoVideo;

function onYouTubeIframeAPIReady() {
    dotnetVideo = new YT.Player('dotnetVideo', {
        height: '360',
        width: '640',
        videoId: 'C5cnZ-gZy2I',
        playerVars: {
            'controls': 0,
            'autoplay': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
    springVideo = new YT.Player('springVideo', {
        height: '360',
        width: '640',
        videoId: 'F5mRW0jo-U4',
        playerVars: {
            'controls': 0,
            'autoplay': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
    djangoVideo = new YT.Player('djangoVideo', {
        height: '360',
        width: '640',
        videoId: 'vtPkZShrvXQ',
        playerVars: {
            'controls': 0,
            'autoplay': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}