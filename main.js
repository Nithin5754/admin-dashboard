
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



const hidesectionEl=document.querySelectorAll('.hidesection')
const btns=document.querySelectorAll('.btn')


container.addEventListener('click',(e)=>{
 
  const id=e.target.dataset.id;

if(id){
btns.forEach((btn)=>{
  btn.classList.remove('live')
})

e.target.classList.add('live')

hidesectionEl.forEach((hidesection)=>{
  hidesection.classList.remove('live');
})


const element=document.getElementById(id);
element.classList.add('live')
}



})