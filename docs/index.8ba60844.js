const e=e=>document.querySelector(e),a=(e,a)=>{e.innerHTML=a};var t=()=>`
      home page
  `,s=e=>`
    <a href="#home">
      <figure class="logoBox"><div class="logoText">${e}</div></figure>
    </a>
  `;const o=(e,a,t,s)=>{e.push({itemName:a,content:t,url:s})},n=(e,a)=>`
    <nav class="${e}">
      ${a.reduce((e,a)=>`${e}<li class="item">
          <a class="${a.itemName}-link" href="${a.url}">
            ${a.content}
          </a>
        </li>`,"")}
    </nav>
    `;var i=(e,a)=>`<button type="button" class="${e}">${a}</button>`;const r=[];o(r,"insta","","#instagram"),o(r,"twitter","","#twitter"),o(r,"eng","English","#english"),o(r,"myPage","My Page","#myPage"),o(r,"logout","Logout","#logout");const l=[];o(l,"about","About","#about"),o(l,"program","Program","#program"),o(l,"join","Join","#join"),o(l,"sponsor","Sponsor","#sponsor"),o(l,"news","News","#news");var c=()=>`
    <header class="header">
      <div class="topNav">${n("top",r)}</div>
      <div class="mainNav">
        ${s('<h3>Reggea<span class="red"><em>educa</em></span>ton</h3><h5>Concert Tour 2023</h5>')}
        ${n("main",l)}
        ${i("getTicket","Purchase Tickets")}
      </div>
      <div class="mobileNav"></div>
    </header>
  `;const d={},g=(e,a)=>{d[e]=a};(e=>{let a=document.querySelector(".container"),t=`
    ${c()}
    <div class="page">
      ${e}
    </div>
    `;a.innerHTML=t})(t());const m=e(".insta-link"),u=e(".instagram"),v=e(".twitter-link"),h=e(".twitter");m.appendChild(u),v.appendChild(h);const p=e(".logoBox"),$=e(".circle-waveform-lines");p.insertBefore($,p.firstChild);const b=e(".mobileNav"),w=e(".menu-burger");b.appendChild(w),g("",t()),g("about",`
    <div class="page">
      about page
    </div>
  `),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);a(void 0,d[e])});const N=e("header");((e,a,t)=>{e.addEventListener(a,t)})(w,"click",()=>{let{className:e}=N;"header"===e?N.className="openNav":N.className="header"});
//# sourceMappingURL=index.8ba60844.js.map
