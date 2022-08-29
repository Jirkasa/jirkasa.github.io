(()=>{"use strict";!function(e,s,t){if(!e)throw new Error("no header container element was passed");if(!s)throw new Error("no header element was passed");new IntersectionObserver((function([e]){e.isIntersecting?s.classList.remove(t):s.classList.add(t)}),{root:null,threshold:.99}).observe(e)}(document.querySelector(".intro-section__header"),document.querySelector(".header"),"header--fixed");const e=document.querySelectorAll(".progress-bar--hidden"),s=new class{constructor(e=0,s=null,t=null){this._observer=null,this._elements=[],window.IntersectionObserver?this._createObserver(e,t):s?.()}observe(e,s,t){window.IntersectionObserver&&(this._elements.push({element:e,cssClass:s,action:t}),this._observer.observe(e))}_createObserver(e,s){const t={root:s,threshold:e};this._observer=new IntersectionObserver(this._observerCallback.bind(this),t)}_observerCallback(e){for(let s of e){const e=this._elements.findIndex((e=>e.element===s.target));if(-1===e)continue;const t=this._elements[e];if(s.isIntersecting)switch(t.action){case"addOnEnter":t.element.classList.add(t.cssClass),this._unobserveElement(e);break;case"removeOnEnter":t.element.classList.remove(t.cssClass),this._unobserveElement(e);break;case"addOnEnterAndRemoveOnLeave":t.element.classList.add(t.cssClass);break;case"removeOnEnterAndAddOnLeave":t.element.classList.remove(t.cssClass)}else switch(t.action){case"addOnLeave":t.element.classList.add(t.cssClass),this._unobserveElement(e);break;case"removeOnLeave":t.element.classList.remove(t.cssClass),this._unobserveElement(e);break;case"addOnEnterAndRemoveOnLeave":t.element.classList.remove(t.cssClass);break;case"removeOnEnterAndAddOnLeave":t.element.classList.add(t.cssClass)}}}_unobserveElement(e){this._observer.unobserve(this._elements[e].element),this._elements.splice(e,1)}}(.9,(()=>{for(let s of e)s.classList.remove("progress-bar--hidden")}));for(let t of e)s.observe(t,"progress-bar--hidden","removeOnEnter");!function(e,s,t){if(!e||!s)throw new Error("at least two parameters must be passed");s.addEventListener("click",(function(s){s.target.closest(t)&&(e.checked=!1)}))}(document.getElementById("navigation"),document.querySelector(".header__navigation ul"),".header__navigation-item")})();