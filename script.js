const submit_btn = document.getElementById('submit_button');
const card_content_1 = document.getElementById('card_content_1')
const card_content_2 = document.getElementById('card_content_2')
const rating_btn = document.querySelectorAll('.rating_btn')
const score = document.querySelector('.score')
let stars_score = document.querySelectorAll('.rating_btn')


submit_btn.addEventListener('click', onSubmit);

rating_btn.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick)
});

function onSubmit(){
    card_content_1.classList.add('hide');

    

    card_content_2.classList.remove('hide');
}

function handleRatingBtnClick(event) {
    rating_btn.forEach(btn => {
        btn.classList.remove('active');
    })

    event.target.classList.add('active');
    stars_score = event.target.textContent;
    score.textContent = stars_score;
    console.log(stars_score);
}





console.log(stars_score);
