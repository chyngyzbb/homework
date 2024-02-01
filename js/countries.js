// npm -

const row=document.querySelector('.row')
const btnPop=document.querySelector('.btn-pop')
const btnArea=document.querySelector('.btn-area')

btnPop.addEventListener('click',()=>{
    row.innerHTML=""
    axios('https://restcountries.com/v3.1/all').then((tit)=>{
        tit.data.sort((a,b)=>b.population-a.population)
        .map((el,idx)=>{
            row.innerHTML+=`<div class="col-4">
            <h2>${idx+1}</h2>
            <img src="${el.flags.svg}" width="350" height="200">
            <h3>${el.name.common}</h3>
            <p>Борбору:${el.capital?el.capital:"жок"}</p>
            <p>Калкы:${el.population}</p>
            <p>Аянты:${el.area}<b>км</b><sup>2</sup></p>
            </div>
            `
        })
    })
})


btnArea.addEventListener('click',()=>{
    row.innerHTML=""
    axios('https://restcountries.com/v3.1/all').then((tit)=>{
    
    tit.data.sort((a,b)=>b.area-a.area)
       .map((el,idx)=>{
            row.innerHTML+=`<div class="col-4">
            <h2>${idx+1}</h2>
            <img src="${el.flags.svg}" width="350" height="200">
            <h3>${el.name.common}</h3>
            <p>Борбору:${el.capital?el.capital:"жок"}</p>
            <p>Калкы:${el.population}</p>
            <p>Аянты:${el.area}<b>км</b><sup>2</sup></p>
            </div>
            `
        })
    })
})




