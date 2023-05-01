
const sideLinks=document.querySelectorAll('a')


sideLinks.forEach((sideLinksEl)=>{
  sideLinksEl.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active');
    sideLinksEl.classList.add('active')
  })
})




