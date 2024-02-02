///////////////////////////////     30.01.2024,    01.02.2024
// npm - node package manager
// axios









const row=document.querySelector('.row')
const select=document.querySelector('.select-country')
const input=document.querySelector('.search-input')
const btn=document.querySelector('.search-btn')
const selectContinent=document.querySelector('.select-continent')
let res=[]

input.addEventListener('keydown',(e)=>{
    console.log(e.key);
    if(e.key==="Enter"){
        axios(`https://restcountries.com/v3.1/name/${input.value}`).then((dat)=>{
            res=dat.data
            view(res)
        })
    }
})

select.addEventListener('change',(e)=>{
    console.log(e.target.value);
    let {value}=e.target
    if(val==='area'){
        axios('https://restcountries.com/v3.1/all').then((tit)=>{
        res=tit.data.sort((a,b)=>b.area-a.area)
        view(res)
    })
    }else if(value==="population"){
        axios('https://restcountries.com/v3.1/all').then((tit)=>{
            res=tit.data.sort((a,b)=>b.population-a.population)
            view(res)
        })
    }else if(value==="A-Z"){
        axios('https://restcountries.com/v3.1/all').then((tit)=>{
            res=tit.data.sort((a,b)=>b.name.common>a.name.common?-1:1)
            view(res)
        })
    }else if(value==="Z-A"){
        axios('https://restcountries.com/v3.1/all').then((tit)=>{
            res=tit.data.sort((a,b)=>b.name.common>a.name.common?1:-1)
            view(res)
        })
    }
  

})

selectContinent.addEventListener('change',(e)=>{
    let val=e.target.value
    if(val==="Americas"){
        axios(`https://restcountries.com/v3.1/region/${val}`).then((res)=>{
            view(res.data)
        })
    }else if(val==="Africa"){
        axios(`https://restcountries.com/v3.1/region/${val}`).then((res)=>{
            view(res.data)
        }) 
    }else if(val==="Asia"){
        axios(`https://restcountries.com/v3.1/region/${val}`).then((res)=>{
            view(res.data)
        }) 
    }else if(val==="Europe"){
        axios(`https://restcountries.com/v3.1/region/${val}`).then((res)=>{
            view(res.data)
        }) 
    }else if(val==="Oceania"){
        axios(`https://restcountries.com/v3.1/region/${val}`).then((res)=>{
            view(res.data)
        }) 
    }else if(val==="Antarctic"){
        axios(`https://restcountries.com/v3.1/region/${val}`).then((res)=>{
            view(res.data)
        }) 
    }
})


function view(ata){
    // console.log(ata);
    window.scroll(0,0)
    row.innerHTML=""
        ata.map((el,idx)=>{
            row.innerHTML+=`<div class="col-4">
            <h2>${idx+1}</h2>
            <img src="${el.flags.svg}" width="300" height="200">
            <h3>${el.name.common}</h3>
            <p>Борбору:${el.capital?el.capital:"жок"}</p>
            <p>Калкы:${el.population}</p>
            <p>Аянты:${el.area}<b>км</b><sup>2</sup></p>
            <p>Континент:${el.region}</p>
            </div>
            `
        })
    }



btn.addEventListener('click',()=>{
    axios(`https://restcountries.com/v3.1/name/${input.value}`).then((dat)=>{
        res=dat.data
        view(res)
    })
})




view(
    axios('https://restcountries.com/v3.1/all').then((tit)=>{
        res=tit.data.slice(1,10).sort((a,b)=>b.area-a.area)
        view(res)
    })
)


