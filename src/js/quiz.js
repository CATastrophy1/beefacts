const form = document.querySelector('.page7-form')
const prevBtn = document.querySelector('.page7-btn-prev')
const nextBtn = document.querySelector('.page7-btn-next')
const submitBtn = document.querySelector('.page7-btn-submit')

const questions = [
    {
        question: 'Jak brzmi łacińska nazwa pszczoły miodnej?',
        answers: {
            a: 'Apis cerana',
           b: 'Apis dorsata',
           c: 'Apis florea', 
           d: 'Apis mellifera'
            
        },
    },
    {
        question: 'Jakiego koloru nie widzą pszczoły?',
        answers: {
            a: 'Niebieskiego',
           b: 'Żółtego',
           c: 'Czerwonego', 
           d: 'Zielonego'
            
        },
    },
    {
        question: 'Co pszczoły komunikują tańcem wywijanym?',
        answers: {
            a: 'Źródło pożytku',
           b: 'Zagrożenie',
           c: 'Radość'
            
        },
    },
    {
        question: 'W jakim wieku pszczoła robotnica zajmuje się budową wosku?',
        answers: {
            a: '1-3',
           b: '7-14',
           c: '15-18'
            
        },
    }
]