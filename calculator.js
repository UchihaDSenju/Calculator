// let display=document.querySelector('body h1');
// let equal=document.querySelector('body .equal')
// let num=document.querySelectorAll('.cal .num')
// let op=document.querySelector('body p')
// num=addEventListener('click',function(e){

//     console.log(e.target);//consoles the element that has been clicked
//     display.textContent+= e.target.textContent;
// })
// equal=addEventListener('click',function(e){
//     console.log(e.target)
//     let ans=eval(display.textContent)
//     console.log(ans)
// })
let display=document.querySelector('body .display h1')
let ans=document.querySelector('body .display p')
let res=''
function da(origval,disval){
    display.textContent+=disval
    res+=origval
}
function solv(){
    ans.textContent=eval(res)
    display.textContent=ans.textContent
}
function cle(){
    display.textContent=''
    ans.textContent=''
    res=''
}