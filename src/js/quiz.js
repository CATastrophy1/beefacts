const form = document.querySelector('.page7-form')
const formBox = document.querySelectorAll('.page7-form-box')
const formPrevBtn = document.querySelector('.page7-btn-prev')
const formNextBtn = document.querySelector('.page7-btn-next')
const submitBtn = document.querySelector('.page7-btn-submit')
const quizError = document.querySelector('.page7-error')
const score = document.querySelector('.page7-final-text')
const finalPage = document.querySelector('.page7-final')
let count = 1

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
		formNextBtn.disabled = false
		formPrevBtn.disabled = false
	}
}

const answersArray = []

const correctAnswers = ['Apis mellifera', 'Czerwonego', 'Źródło pożytku', '15-18 dni']

const handleSubmitBtn = () => {
	const checkedName = document.querySelector('input[name = "name"]:checked')
	const checkedColor = document.querySelector('input[name = "color"]:checked')
	const checkedDance = document.querySelector('input[name = "dance"]:checked')
	const checkedAge = document.querySelector('input[name = "age"]:checked')

	if (checkedColor != null && checkedName != null && checkedAge != null && checkedDance != null) {
		answersArray.push(
			checkedName.nextElementSibling.innerHTML,
			checkedColor.nextElementSibling.innerHTML,
			checkedDance.nextElementSibling.innerHTML,
			checkedAge.nextElementSibling.innerHTML
		)
		console.log(answersArray)
		checkAnswers()
	

	} else {
		quizError.textContent = 'Musisz zaznaczyć wszystkie odpowiedzi!'
	}
}

const checkAnswers = () => {
	let correctNum = 0
	for (let i = 0; i < 4; i++) {
		if (answersArray[i] === correctAnswers[i]) {
			correctNum++
		}
	}
	showScore(correctNum)
}

const showScore = (num) => {
	formBox.forEach(box => {
		box.classList.remove('active-question')})
finalPage.classList.add('active-question')
	score.textContent=`${num}/4 poprawnych odpowiedzi`
	submitBtn.style.display = 'none'
	formPrevBtn.style.display = 'none'
	formNextBtn.style.display = 'none'
	
}

submitBtn.addEventListener('click', handleSubmitBtn)
formNextBtn.addEventListener('click', handleformNextBtn)
formPrevBtn.addEventListener('click', handleformPrevBtn)
