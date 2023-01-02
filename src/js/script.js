const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
const progress = document.querySelector('.progress')
const progressBee = document.querySelector('.progress-bee')
const page = document.querySelectorAll('.page')

let pageNum = 1
let width = 0

const nextPage = () => {
	if (pageNum >= 1 && pageNum < (page.length+1)) {
		pageNum++
		width += 100/(page.length-1)
        progressBee.style.transform= 'scalex(1) translate(-50%, -50%)'
		progress.style.width = `${width}%`
		progressBee.style.left = `${width}%`
		
	}
	console.log(width);
	console.log(pageNum);
    disableBtn()
    handlePages()
}

const handlePages = () => {
    page.forEach(page => {
        if (pageNum == page.dataset.number) {
            page.classList.add('active-page')
        } else {
            page.classList.remove('active-page')

        }
    })
}

const disableBtn = () => {
	if (pageNum === 1) {
		previousBtn.disabled = true
	} else if ((pageNum === page.length)) {
		nextBtn.disabled = true
	} else {
		previousBtn.disabled = false
		nextBtn.disabled = false
	}
}

const previousPage = () => {
    if (pageNum > 1 && pageNum <= (page.length+1)) {
		pageNum--
		width -= 100/(page.length-1)
        progressBee.style.transform= 'scalex(-1) translate(50%, -50%)'
		progress.style.width = `${width}%`
		progressBee.style.left = `${width}%`
		
	}

	console.log(width);
	console.log(pageNum);

	disableBtn()
    handlePages()
}

const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const violet = document.querySelector('.violet')
const yellow = document.querySelector('.yellow')
const grey = document.querySelector('.grey')
const page2Btn = document.querySelector('.page2-btn')
const page2Movie = document.querySelector('.page2-movie')
const page2CloseBtn = document.querySelector('.page2-movie-closebtn')



page2Btn.addEventListener('click', () => {
	page2Movie.classList.add('movie-active')
})
page2CloseBtn.addEventListener('click', () => page2Movie.classList.remove('movie-active'))







nextBtn.addEventListener('click', nextPage)
previousBtn.addEventListener('click', previousPage)