const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log(prev, next);


next.addEventListener('click', function () {
    let activeItem = document.querySelector('.pic.active');

    let itemToActive = activeItem.nextElementSibling;

    activeItem.classList.remove('active');
    itemToActive.classList.add('active');

    if (activeItem.nextElementSibling.classList.contains('last')) {
        activeItem.nextElementSibling.classList.contains('first').activeItem.nextElementSibling.classList.add('active');
    }

})

prev.addEventListener('click', function () {
    let activeItem = document.querySelector('.pic.active');

    let itemToActive = activeItem.previousElementSibling;

    itemToActive.classList.remove('active');
    activeItem.classList.add('active');

})

// for (let i = 0; i < slides.length; i++) {

//     let arrayImg = [
//         "https://picsum.photos/id/237/600/400",
//         "https://picsum.photos/id/230/600/400",
//         "https://picsum.photos/id/195/600/400",
//         "https://picsum.photos/id/215/600/400",
//         "https://picsum.photos/id/198/600/400"
//     ];

//     let imgNow = 0;
//     let img = document.querySelector('.img');



//     next.addEventListener('click', function () {

//         imgNow.setAttribute('src', arrayImg[imgNow]);
//         imgNow++;

//         if (imgNow > arrayImg.length - 1) {
//             imgNow = 0;
//         }

//     })

//     prev.addEventListener('click', function () {
//         imgNow.setAttribute('src', arrayImg[imgNow]);
//         imgNow--;
//         if (imgNow < 0) {
//             imgNow = arrayImg.length - 1;
//         }
//     })

    //     imgFirst.classList.add('first');
    //     imgLast.classList.add('last');
