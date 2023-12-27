window.scroll({
    top: 15,
    behavior: 'smooth',
})
if(window.location.href.endsWith("#contato"))window.scroll({ top: 1150, behavior: "smooth"})
let a=(i,t,p)=>{let l=0,x=0,d=!1,c=document.querySelectorAll(i),f=()=>{const o=t[x];c.forEach(e=>e.innerText=o.substring(0,d?e.innerText.length-1:e.innerText.length+1));let n=d?50:100,u=document.querySelector(".typingcursor");if(u){if(!d&&o===c[0].innerText){d=!0,n=2*p}else if(d&&""===c[0].innerText){d=!1,l++,n=500,x=l%t.length}u.classList[d?"add":"remove"]("typingcursor__typing"),setTimeout(f,n)}};f()};
a('#typingtext',["venda de servers do discord","venda de bots de economia","venda de bots de diversão","venda de bots de autovendas","venda de bots de ticket","venda de bots de ranking"],4500);
document.body.appendChild(Object.assign(document.createElement("style"),{type:"text/css",innerHTML:"#typingtext>.wrap{border-right:.08em solid #fff}"}));
let redirect=(url)=>{window.location.href = url}
let scrolto = (vert, hor) => {
    window.scroll({
    top: vert,
    left: hor,
    behavior: "smooth",
  })
}

let timeoutId;

// Função para exibir as medidas atuais
function mostrarMedidas() {
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  let html = document.getElementById("responsivity")
  switch (true) {
    case largura<690:
      console.log("Smartphone")
      html.innerHTML = `<style>
      #menu{
        display:inline-block;
        visibility:visible;
        opacity:100;
        width: 40pt;
      }
      .underline{
        display:none;
        visibility:hidden;
        opacity:0;
        position: relative;
        color: white;
        cursor: pointer;
      }
      .underline:after {
        display:none;
        visibility:hidden;
        opacity:0;
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform-origin: center;
        transition: transform 0.25s ease-out;
      }
      .underline:hover:after {
        display:none;
        visibility:hidden;
        opacity:0;
        transform: scaleX(1);
        transform-origin: center;
      }
      </style>`
    break;
    case largura>690 && largura<990:
      console.log("media")
      html.innerHTML = `<style>
      .right-side{
        margin-right: -10%;
      }
      header ul{
        margin-right: -108%;
      }
      </style>`
    break;
    default:
      console.log("Monitor")
      html.innerHTML = `<style>
      
      </style>`
    break;
  }
}

// Função para controlar a frequência de execução da função mostrarMedidas
function redimensionamentoOtimizado() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(mostrarMedidas, 200); // Defina o tempo limite aqui (em milissegundos)
}

// Adicionando um ouvinte de evento de redimensionamento à janela
window.addEventListener('resize', redimensionamentoOtimizado);

// Chamando a função uma vez para exibir as medidas iniciais
mostrarMedidas();
