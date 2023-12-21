window.scroll({
    top: 15,
    behavior: 'smooth',
})
let a=(i,t,p)=>{let l=0,x=0,d=!1,c=document.querySelectorAll(i),f=()=>{const o=t[x];c.forEach(e=>e.innerText=o.substring(0,d?e.innerText.length-1:e.innerText.length+1));let n=d?50:100,u=document.querySelector(".typingcursor");if(u){if(!d&&o===c[0].innerText){d=!0,n=2*p}else if(d&&""===c[0].innerText){d=!1,l++,n=500,x=l%t.length}u.classList[d?"add":"remove"]("typingcursor__typing"),setTimeout(f,n)}};f()};
a('#typingtext',["venda de servers do discord","venda de bots de economia","venda de bots de diversão","venda de bots de autovendas","venda de bots de ticket","venda de bots de ranking"],4500);
document.body.appendChild(Object.assign(document.createElement("style"),{type:"text/css",innerHTML:"#typingtext>.wrap{border-right:.08em solid #fff}"}));
