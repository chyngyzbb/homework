/////////////////////   28.01.2024

///////////        promise

// pending                 -> обновление
// resolved - fulfilled   -> успешно
// rejected              -> ощибка "error"


// let status=400
// const promise=new Promise((resolved,rejected)=>{
//     console.log('start');
//     setTimeout(() => {
//         console.log('time');
//     if(status>=200&&status<300){
//         resolved({status:'ok'})
//     }else{
//         rejected({status:'404'})
//     }
//     }, 2000);
// })
// promise
// .then((task)=>console.log(task))
// .catch((task)=>console.error('...error',task))


// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('timer');
// }, 2000);
// console.log('last');





// const promiseFn=(ml)=>{
//     return new Promise((resolved)=>{
//         setTimeout(() => {
//             console.log('Go...');
//             resolved()
//         }, ml);
//     })
// }
// // Promise.all([promiseFn(2000),promiseFn(4000),promiseFn(6000)]).then(()=>console.log('Finish'))
// Promise.race([promiseFn(2000),promiseFn(4000),promiseFn(6000)]).then(()=>console.log('Finish'))


/////////////////////////////////////////////////////////////////////////////////////////

// API  -> Бекендтен данныйларды тартып алуу же жиберуу

// ЗАПРОСТОР:
//            GET -> тартып алуу
//            POST -> жиберуу
//            PUT -> озгортуу
//            PATCH -> озгортуу
//            DELETE -> очуруу


/////////////////////////////////////////////////////////////////////////////////////

// const row=document.querySelector('.row')

// fetch('https://jsonplaceholder.typicode.com/users',{
//     method:'GET'
// })
//     .then((task)=>task.json())
//     .then((mast)=>mast.map((el)=>(
//         row.innerHTML+=`
//         <div class="bg m-3 p-3 col-3">
//         <h2>${el.name}</h2>
//         <h4>${el.username}</h4>
//         <p>${el.email}</p>
//         <p>${el.company.name}</p>
//         <p>${el.phone}</p>
//         <a href="https://${el.website}" target="_blank">${el.website}</a>
//         </div>`
//     )))





///////////////////////////////////////////////////////////////////////////////////////
const row=document.querySelector('.row')

fetch('https://jsonplaceholder.typicode.com/posts')
.then((task)=>task.json())
.then((tast)=>
    tast.map((el)=>(
        row.innerHTML+=`
        <div class="col-2 bg m-3 p-2">
        <h2>${el.userId}</h2>
        <h3>${el.id}</h3>
        <h5>${el.title}</h5>
        <p>${el.body}</p>
        </div>`
        
    ))
    
)


