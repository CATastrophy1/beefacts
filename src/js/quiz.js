const form = document.querySelector('.page7-form')
const formBox = document.querySelectorAll('.page7-form-box')
const formPrevBtn = document.querySelector('.page7-btn-prev')
const formNextBtn = document.querySelector('.page7-btn-next')
const submitBtn = document.querySelector('.page7-btn-submit')
const quizError = document.querySelector('.page7-error') 

let count = 1

const questions = [
	{
		question: 'Jak brzmi łacińska nazwa pszczoły miodnej?',
		answers: {
			a: 'Apis mellifera',
			b: 'Apis dorsata',
			c: 'Apis florea',
		},
		correctAnswer: 'a',
		name: 'name',
	},
	{
		question: 'Jakiego koloru nie widzą pszczoły?',
		answers: {
			a: 'Żółtego',
			b: 'Czerwonego',
			c: 'Zielonego',
		},
		correctAnswer: 'b',
		name: 'color',
	},
	{
		question: 'Co pszczoły komunikują tańcem wywijanym?',
		answers: {
			a: 'Źródło pożytku',
			b: 'Zagrożenie',
			c: 'Radość',
		},
		correctAnswer: 'a',
		name: 'dance',
	},
	{
		question: 'W jakim wieku pszczoła robotnica zajmuje się budową wosku?',
		answers: {
			a: '1-3',
			b: '7-14',
			c: '15-18',
		},
		correctAnswer: 'c',
		name: 'worker',
	},
]

// const createQuiz = () => {
// form.innerHTML=`   <h3 class="page7-form-title">${questions[count].question}</h3>
// <div class="page7-form-question">
//     <input id="${questions[count].name}" type="radio" class="page7-form-question-input">
//     <label name="${questions[count].name}">${questions[count].answers.a}</label>
// </div>
// <div class="page7-form-question">
//     <input id="${questions[count].name}" type="radio" class="page7-form-question-input">
//     <label name="${questions[count].name}">${questions[count].answers.b}</label>
// </div>
// <div class="page7-form-question">
//     <input id="${questions[count].name}" type="radio" class="page7-form-question-input">
//     <label name="${questions[count].name}">${questions[count].answers.c}</label>
// </div>`

// }
const handleformNextBtn = () => {
	if (count >= 1 && count < formBox.length) {
		count++
		formBox.forEach(box => {
			box.classList.remove('active-question')

			if (parseInt(box.dataset.count) === count) {
				box.classList.add('active-question')
			}
		})
	}
    disableBtns()
}
const handleformPrevBtn = () => {
	if (count > 1 && count <= formBox.length) {
		count--
		formBox.forEach(box => {
			box.classList.remove('active-question')

			if (parseInt(box.dataset.count) === count) {
				box.classList.add('active-question')
			}
		})
	}
    disableBtns()
}

const disableBtns = () => {
	if (count === formBox.length) {
		formNextBtn.disabled = true
	} else if (count === 1) {
		formPrevBtn.disabled = true
	} else {
        formNextBtn.disabled=false
        formPrevBtn.disabled=false
    }
}

const answersArray = []

const handleSubmitBtn = () => {
 const checkedName = document.querySelector('input[name = "name"]:checked')
 const checkedColor = document.querySelector('input[name = "color"]:checked')
 const checkedDance = document.querySelector('input[name = "dance"]:checked')
 const checkedAge = document.querySelector('input[name = "age"]:checked')

if(checkedColor != null && checkedName != null && checkedAge != null && checkedDance != null ) {
    answersArray.push(checkedName.nextElementSibling.innerHTML, checkedColor.nextElementSibling.innerHTML, checkedDance.nextElementSibling.innerHTML, checkedAge.nextElementSibling.innerHTML)
    console.log(answersArray);
} else {
quizError.textContent='Musisz zaznaczyć wszystkie odpowiedzi!'
}


}
submitBtn.addEventListener('click', handleSubmitBtn)
formNextBtn.addEventListener('click', handleformNextBtn)
formPrevBtn.addEventListener('click', handleformPrevBtn)
