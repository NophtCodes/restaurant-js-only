(()=>{"use strict";function e(e,t,n,d){const a=document.createElement(e);return t&&(a.id=t),n&&a.classList.add(...n),d&&(a.textContent=d),a}function t(){const t=document.createElement("section");t.id="about";const n=e("h5","null",["title"],"About Us"),d=e("p","null",["text"],"Tucked away in the corner of Wellington, Latte Cafe is a local neighbourhood cafe\n    and bar. Latte is all about doing what we love, in a city that we love. We keep stocked with local\n    produce and pastries. Bring your family for a bite, or meet your friends for a coffee or warm drink.");return t.appendChild(n),t.appendChild(d),t}function n(t,n,d){const a=document.createElement("section");a.id="menu";const c=document.createElement("div");c.classList.add("container");const i=document.createElement("div");i.classList.add("row");const o=document.createElement("div");o.classList.add("menu-left");const l=document.createElement("div");l.classList.add("menu-right");const s=e("h5",null,["title"],t),r=e("p",null,["text"],n),u=document.createElement("div");u.classList.add("buttons");const m=e("button",null,["btn","active"],"Food Menu"),p=e("button",null,["btn"],"Drinks Menu"),h=e("button",null,["btn"],"Takeaway Menu");u.appendChild(m),u.appendChild(p),u.appendChild(h);const C=document.createElement("img");return C.src=d,l.appendChild(C),o.appendChild(s),o.appendChild(r),o.appendChild(u),i.appendChild(o),i.appendChild(l),c.appendChild(i),a.appendChild(c),a}function d(){const t=document.createElement("section");t.id="schedule";const n=document.createElement("div");n.classList.add("container");const d=document.createElement("div");return d.classList.add("row"),[{title:"Location",text:"101 Cuba St, Te Aro, Wellington"},{title:"Hours",text:"Tuesday to Friday 7AM - 3PM  Saturday to Sunday 8AM - 3PM"},{title:"Mondays?",text:"We are closed on Mondays to reflect and refuel"}].forEach((t=>{const n=document.createElement("div");n.classList.add("schedule-content");const a=e("h5",null,["title"],t.title),c=e("p",null,["schedule-text"],t.text);n.appendChild(a),n.appendChild(c),d.appendChild(n)})),n.appendChild(d),t.appendChild(n),t}function a(){const e=document.createElement("section");e.id="gallery";const t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("grid");const d=document.createElement("div");d.classList.add("column-1");const a=document.createElement("div");a.classList.add("column-2");const c=document.createElement("img");c.src="images/grid-1.jpg";const i=document.createElement("img");i.src="images/grid-2.jpg";const o=document.createElement("img");return o.src="images/grid-3.jpg",d.appendChild(c),d.appendChild(i),a.appendChild(o),n.appendChild(d),n.appendChild(a),t.appendChild(n),e.appendChild(t),e}function c(){const t=document.createElement("section");t.id="award";const n=document.createElement("div");n.classList.add("container");const d=document.createElement("div");d.classList.add("row");const a=e("h2",null,["award-heading"],"Award winning cafe and bar."),c=document.createElement("div");c.classList.add("award-text");const i=document.createElement("p");return i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n    est laborum.",c.appendChild(i),d.appendChild(a),d.appendChild(c),n.appendChild(d),t.appendChild(n),t}function i(){const e=document.createElement("footer"),t=document.createElement("p");t.textContent="Developed by © 2023 ";const n=document.createElement("a");return n.textContent="NophtCodes",t.appendChild(n),e.appendChild(t),e}!function(){const o=document.createElement("div");o.appendChild(function(){const t=document.createElement("header");return t.appendChild(function(){const t=document.createElement("nav");t.classList.add("container");const n=document.createElement("div");n.classList.add("burger");for(let e=0;e<3;e++){const e=document.createElement("div");n.appendChild(e)}const d=function(){const t=document.createElement("div");t.classList.add("row");const d=document.createElement("ul");d.classList.add("navmenu"),[{text:"About",href:"#about"},{text:"Menu",href:"#menu"},{text:"Info",href:"#award"},{text:"Gallery",href:"#gallery"}].forEach((t=>{const n=document.createElement("li");n.classList.add("navmenu-item");const a=e("a",null,["navmenu-item__link"],t.text);a.href=t.href,n.appendChild(a),d.appendChild(n)}));const a=document.createElement("a"),c=document.createElement("img");a.classList.add("logo"),c.src="images/logo.svg",c.addEventListener("click",(()=>{const e=window.location.protocol+"//"+window.location.host+window.location.pathname;history.pushState({},document.title,e),location.reload()})),a.appendChild(c);const i=document.createElement("div");return i.classList.add("social-links"),[{src:"images/social-1.svg"},{src:"images/social-2.svg"},{src:"images/social-3.svg"}].forEach((e=>{const t=document.createElement("a");t.href="#",t.classList.add("social-link");const n=document.createElement("img");n.src=e.src,t.appendChild(n),i.appendChild(t)})),t.appendChild(d),t.appendChild(a),t.appendChild(i),t.appendChild(n),t}(),a=function(){const t=document.createElement("aside");t.classList.add("sidebar");const n=e("p",null,["sidebar-title"],"Navigation"),d=document.createElement("ul");d.classList.add("navmenu","sidebar-links"),[{text:"About",href:"#about"},{text:"Menu",href:"#menu"},{text:"Info",href:"#schedule"},{text:"Gallery",href:"#gallery"}].forEach((n=>{const a=e("a",null,["navmenu-item__link"],n.text);a.href=n.href,a.addEventListener("click",(()=>{t.classList.remove("active"),document.querySelector(".overlay").style.display="none",document.querySelector("body").style.overflow="visible"})),d.appendChild(a)}));const a=document.createElement("div");return a.classList.add("social-links","sidebar-socials"),[{src:"images/social-1.svg"},{src:"images/social-2.svg"},{src:"images/social-3.svg"}].forEach((e=>{const t=document.createElement("a");t.classList.add("social-link"),t.href="#";const n=document.createElement("img");n.src=e.src,t.appendChild(n),a.appendChild(t)})),t.appendChild(n),t.appendChild(d),t.appendChild(a),t}(),c=document.createElement("div");return c.classList.add("overlay"),t.appendChild(c),t.appendChild(d),t.appendChild(a),n.addEventListener("click",(()=>{a.classList.toggle("active")})),t}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("hero");const t=document.createElement("div");t.classList.add("container");const n=document.createElement("img");return n.src="images/hero.jpg",t.appendChild(n),e.appendChild(t),e}()),t}()),o.appendChild(function(){const e=document.createElement("main"),o=document.createDocumentFragment();return[t(),n("Menu","We change our menu every season. Here is what we are currently dishing up.","images/menu.jpg"),d(),a(),c(),i()].forEach((e=>{o.appendChild(e)})),e.appendChild(o),e}()),document.body.appendChild(o),function(){const e=document.querySelector(".burger"),t=document.querySelector("aside"),n=document.querySelector(".overlay"),d=document.querySelector("body");e.addEventListener("click",(()=>{t.classList.add("active"),n.style.display="block",d.style.overflow="hidden"})),n.addEventListener("click",(()=>{t.classList.remove("active"),n.style.display="none",d.style.overflow="visible"}))}()}()})();