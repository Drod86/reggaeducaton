const e=e=>document.querySelector(e),a=(e,a,i,r)=>({fullName:e,songs:a,blurb:i,imgUrl:r}),i={artists:[a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg")]};var r=e=>{let{fullName:a,songs:i,blurb:r,imgUrl:n}=e,s=i.reduce((e,a,r)=>r===i.length-1?`${e+a} `:`${e+a}, `,"");return`
    <div class="card">
      <figure class="portrait">
        <svg viewBox="0 0 100 100" class="checkers">
          <use xlink:href="sprite.svg#checkers"></use>
        </svg>
        <img src="${n}" alt="${a}">
      </figure>
      <div class="profile">
        <h3>${a}</h3>
        <h5>Hits: ${s}</h5>
        <p class="description">${r}</p>
      </div>
    </div>
  `};const n=e(".cards"),{artists:s}=i,l=s.reduce((e,a)=>e+r(a),"");n.innerHTML=l;const t=e(".menu-burger"),o=e("header");((e,a,i)=>{e.addEventListener(a,i)})(t,"click",()=>{let{className:e}=o;"header"===e?o.className="openNav":o.className="header"}),window.addEventListener("popstate",()=>{let a=e("#page"),i=window.location.hash.substring(1);("home"===i||"about"===i)&&(a.className=i)});
//# sourceMappingURL=index.e81ded0f.js.map
