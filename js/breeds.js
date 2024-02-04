const row=document.querySelector('.min-row')
const img=document.querySelector(".min-img")
const input=document.querySelector(".search-input")
const seaBtn=document.querySelector(".search-btn")
const select=document.querySelector(".select")

axios('https://dog.ceo/api/breeds/list/all')
    .then((res)=>{
    console.log( Object.keys(res.data.message));
    Object.keys(res.data.message).map((el)=>{
        select.innerHTML+=`<option value="${el}">${el}</option>`
        row.innerHTML+=`<button class="btn btn-breed m-1 btn-success">${el}</button>`
    })
})
    .then(()=>getBtn())

function getBtn(){
 const btnBreed=document.querySelectorAll(".btn-breed")
 btnBreed.forEach((btn)=>{
  
    btn.addEventListener('click',()=>
        {
            btnBreed.forEach(el=>el.classList.remove("btn-danger"))
        btn.classList.add('btn-danger')
        getImg(btn.innerHTML)
   
 })
 })
}

select.addEventListener('change',(e)=>getImg(e.target.value))
seaBtn.addEventListener('click',()=>getImg(input.value))

function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res)=>{ 
        window.scroll(0,1000)
        img.innerHTML=`<img src="${res.data.message}">`
    })
}