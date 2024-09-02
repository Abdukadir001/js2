const title = document.querySelector('#title')
const box = document.createElement('div')
const body = document.querySelector('body')
// const h1 = document.createElement('h1')

// h1.innerText = 'Septemberbfv'
// box.append(h1)
body.append(box)

// title.textContent = 'hello'

box.classList.add('wrapper')

box.setAttribute('id' ,'bebra')

// box.classList.remove('wrapper')
// box.classList.toggle('wrapper')



const card = document.querySelector('.card')
const btn = document.querySelector('.card button')
const img = document.querySelector('.card img')
const name = document.querySelector('.card h1')
const changeBtn = document.querySelector('#change')

const originalSrc = img.src
const originalName = name.innerText


btn.onclick = ( ) => {
    card.classList.toggle('red')
 
    if(name.innerText == originalName) {
        name.innerText = 'Devuwka'
    }
    else{
        name.innerText = originalName
    }
   



  

    if(img.src  == originalSrc){
        img.src = 'https:/basket-08.wbcontent.net/vol1132/part113263/113263952/images/big/2.webp'
    }
    else{
        img.src = originalSrc
    }
}


const deleteBtn  = document.querySelector('#del')


deleteBtn.onclick = () => {
    card.classList.toggle('none')
}