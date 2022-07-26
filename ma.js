/* ДЗ12 промиси и круг который бегет по екрану*/


class Ball {
    constructor(selector){
        this.el=document.querySelector(selector);
        this.mov=Promise.resolve(true);
    }
setposition(x,y){
    this.el.style.transform=`translate(${x}px, ${y}px) translate(-50%, -50%)`;
}

    move(x,y){
        this.mov=this.mov
        .then(()=> new Promise(resolve =>{
            this.el.addEventListener('transitionend', ()=>resolve(true), {once:true});
            this.setposition(x,y)
        }))
        

    }
    
}

const ball= new Ball('.circl')
console.log(ball)
window.addEventListener('click', (e)=>{
    console.log(e)
    ball.move(e.clientX, e.clientY)
})