var e,a,n,i,r,t,s,l;e=function(e){return document.querySelector(e)},n={artists:[(a=function(e,a,n,i){return{fullName:e,songs:a,blurb:n,imgUrl:i}})("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg"),a("Ivy Queen",["Quiero Bailar","CELEBRANDO","Quiero Saber"],"Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.","https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg")]},i=function(e){var a=e.fullName,n=e.songs,i=e.blurb,r=e.imgUrl,t=n.reduce(function(e,a,i){return i===n.length-1?"".concat(e+a," "):"".concat(e+a,", ")},"");return'\n    <div class="card">\n      <figure class="portrait">\n        <svg viewBox="0 0 100 100" class="checkers">\n          <use xlink:href="sprite.svg#checkers"></use>\n        </svg>\n        <img src="'.concat(r,'" alt="').concat(a,'">\n      </figure>\n      <div class="profile">\n        <h3>').concat(a,"</h3>\n        <h5>Hits: ").concat(t,'</h5>\n        <p class="description">').concat(i,"</p>\n      </div>\n    </div>\n  ")},r=e(".cards"),t=n.artists.reduce(function(e,a){return e+i(a)},""),r.innerHTML=t,s=e(".menu-burger"),l=e("header"),function(e,a,n){e.addEventListener(a,n)}(s,"click",function(){"header"===l.className?l.className="openNav":l.className="header"}),window.addEventListener("popstate",function(){var a=e("#page"),n=window.location.hash.substring(1);("home"===n||"about"===n)&&(a.className=n)});
//# sourceMappingURL=index.b643a418.js.map
