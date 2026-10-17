let t=document.querySelector("tbody"),e=document.querySelector(".backdrop"),n=document.querySelector("#get-students-btn"),l=document.querySelector("#student-form"),a=document.querySelector('button[data-action="add"]'),s=null;function d(){e.style.display="flex",e.style.pointerEvents="auto"}function o(){e.style.display="none"}function i(){fetch("http://localhost:3000/students").then(t=>t.json()).then(e=>{t.innerHTML=e.map(({id:t,name:e,age:n,course:l,skills:a,email:s,isEnrolled:d})=>`
<tr id="${t}">
  <td>${t}</td>
  <td>${e}</td>
  <td>${n}</td>
  <td>${l}</td>
  <td>${a}</td>
  <td><a href="mailto:${s}">${s}</a></td>
  <td>${d?"Зареєстрований":"Не зареєстрований"}</td>
  <td>
    <button data-action="edit" type="button" class="edit">Змінити</button>
    <button data-action="delete" type="button" class="delete">Видалити</button>
  </td>
</tr>
        `).join("")})}n.addEventListener("click",()=>{i()}),a.addEventListener("click",()=>{s=null,l.reset(),d()}),e.addEventListener("click",t=>{t.target===e&&o()}),t.addEventListener("click",t=>{if("BUTTON"!==t.target.nodeName)return;let e=t.target.dataset.action,n=t.target.closest("tr");if(!n)return;let a=n.dataset.id||n.id;if("delete"===e)return void fetch(`http://localhost:3000/students/${a}`,{method:"DELETE"}).then(t=>t.json()).then(()=>i());if("edit"===e){s=a;let t=n.children;l.elements.name.value=t[1]?t[1].textContent.trim():"",l.elements.age.value=t[2]?t[2].textContent.trim():"",l.elements.course.value=t[3]?t[3].textContent.trim():"",l.elements.skills.value=t[4]?t[4].textContent.trim():"",l.elements.email.value=t[5]?t[5].textContent.trim():"",d()}}),l.addEventListener("submit",t=>{t.preventDefault();let e=t.currentTarget.elements,n={name:e.name.value.trim(),age:Number(e.age.value),course:e.course.value.trim(),skills:e.skills.value.split(",").map(t=>t.trim()),email:e.email.value.trim(),isEnrolled:e.isEnrolled.checked};if(null===s)fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(()=>{i(),o(),l.reset()});else{var a;(a=s,fetch(`http://localhost:3000/students/${a}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json())).then(()=>{i(),o(),l.reset(),s=null})}});
//# sourceMappingURL=js-hw38.3a34ec68.js.map
