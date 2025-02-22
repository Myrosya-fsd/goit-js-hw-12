import{a as g,S as v,i as w}from"./assets/vendor-YT4DRQk6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const b="48845906-64ae9219885c1d872e65b26b8",L="https://pixabay.com/api/";async function p(e,s=1){const o={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};return(await g.get(L,{params:o})).data}const y=new v(".gallery-list a",{captionsData:"alt",captionDelay:5e3}),n=e=>{w.error({message:e,position:"topRight",maxWidth:432})};function u(e,s){const o=m(s);e.innerHTML=o,y.refresh()}function S(e,s){const o=m(s);e.insertAdjacentHTML("beforeend",o),y.refresh()}function m(e){return e.map(x).join("")}function x(e){return`<li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
              <img
                class="card-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                data-source="${e.largeImageURL}"
              />
              <div class="card-texts">
                <div class="card-text-element likes">
                  <p class="element-title">Likes</p>
                  <p class="element-value">${e.likes}</p>
                </div>
                <div class="card-text-element views">
                  <p class="element-title">Views</p>
                  <p class="element-value">${e.views}</p>
                </div>
                <div class="card-text-element comments">
                  <p class="element-title">Comments</p>
                  <p class="element-value">${e.comments}</p>
                </div>
                <div class="card-text-element downloads">
                  <p class="element-title">Downloads</p>
                  <p class="element-value">${e.downloads}</p>
                </div>
              </div>
            </a>
          </li>`}const r={form:document.querySelector(".form"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),more:document.querySelector(".load-more")};r.form.addEventListener("submit",P);r.more.addEventListener("click",q);r.loader.style.display="none";r.loader.style.display="none";let d="",l=1,f=0;const k=15;async function P(e){e.preventDefault();const s=e.currentTarget.elements.search.value.trim();if(!s){n("Enter some value");return}d=s,l=1,u(r.gallery,[]),r.loader.style.display="block",r.more.style.display="none";try{const o=await p(d,l);f=o.totalHits,o.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):(u(r.gallery,o.hits),h())}catch{n("Sorry, something went wrong. Please try again!")}finally{r.loader.style.display="none"}}async function q(){l+=1,r.loader.style.display="block",r.more.style.display="none";try{const e=await p(d,l);S(r.gallery,e.hits),(e.hits.length<15||l*15>e.totalHits)&&(n("We're sorry, but you've reached the end of search results."),window.scrollBy({top:A(),behavior:"smooth"})),h()}catch{n("Sorry, something went wrong. Please try again!")}finally{r.loader.style.display="none"}}function h(){l*k>=f?r.more.style.display="none":r.more.style.display="block"}function A(){const e=document.querySelector(".gallery-item:nth-child(1)");return e?e.getBoundingClientRect().height*2:0}
//# sourceMappingURL=index.js.map
