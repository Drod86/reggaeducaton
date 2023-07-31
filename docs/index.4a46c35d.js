const e=e=>document.querySelector(e),t=(e,t)=>{e.innerHTML=t},s=(e,t,s)=>{e.addEventListener(t,s)},a=(e,t)=>s(e,"click",t);var o=(e,t)=>`<h${e} class="U4fuBG_header">${t}</${e}>`;const i={},n=(e,t)=>{i[e]=t},c="<div>THIS IS THE HOME PAGE VIEW</div>",d="<div>this is the about page view</div>";(e=>{let t=document.querySelector("body"),s=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${o(1,"This template is set up to use ES6 modules and scss in css modules format  to use a component focused approach to build a static web app for github pages. Microverse student linter configurations are in place.")}
    <div class="page">
    ${e}
    </div>`;t.innerHTML=s})(c),n("",c),n("about",d),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);t(void 0,i[e])});const r=e(".home"),u=e(".about"),l=e(".page");a(r,()=>t(l,c)),a(u,()=>t(l,d));
//# sourceMappingURL=index.4a46c35d.js.map
