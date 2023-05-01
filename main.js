
const sideLinks=document.querySelector('.sidebar').querySelectorAll('a')


sideLinks.forEach((sideLinksEl)=>{
  sideLinksEl.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active');
    sideLinksEl.classList.add('active')
  })
})

const menuBtn=document.querySelector('#menu-btn');
const container=document.querySelector('.container')

const aside=document.querySelector('aside')

menuBtn.addEventListener('click',()=>{
  aside.classList.toggle('open')
  container.classList.toggle('opengrid')
})


const close=document.querySelector('.close');
const open=document.querySelector('.open')

close.addEventListener('click',()=>{
  if(aside.classList.contains('open')){
    aside.classList.remove('open')
  }
})




