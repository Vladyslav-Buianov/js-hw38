let t=async()=>{let t=await fetch("http://localhost:3000/students");return await t.json()},e=async t=>{let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}},n=await fetch("http://localhost:3000/students",e);return await n.json()},n=async t=>{let e=await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"});return await e.json()},a=async(t,e)=>{let n={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}},a=await fetch(`http://localhost:3000/students/${e}`,n);return await a.json()},l=document.querySelector("tbody"),s=document.querySelector(".backdrop"),i=document.querySelector("#get-students-btn"),r=document.querySelector("#student-form"),d=document.querySelector('button[data-action="add"]'),o=null;function c(){s.style.display="flex",s.style.pointerEvents="auto"}function u(){s.style.display="none"}async function m(){l.innerHTML=(await t()).map(({id:t,name:e,age:n,course:a,skills:l,email:s,isEnrolled:i})=>`
<tr id="${t}">
  <td>${t}</td>
  <td>${e}</td>
  <td>${n}</td>
  <td>${a}</td>
  <td>${l}</td>
  <td><a href="mailto:${s}">${s}</a></td>
  <td>${i?"Зареєстрований":"Не зареєстрований"}</td>
  <td>
    <button data-action="edit" type="button" class="edit">Змінити</button>
    <button data-action="delete" type="button" class="delete">Видалити</button>
  </td>
</tr>
        `).join("")}i.addEventListener("click",()=>{m()}),d.addEventListener("click",()=>{o=null,r.reset(),c()}),s.addEventListener("click",t=>{t.target===s&&u()}),l.addEventListener("click",async t=>{if("BUTTON"!==t.target.nodeName)return;let e=t.target.dataset.action,a=t.target.closest("tr");if(!a)return;let l=a.dataset.id||a.id;if("delete"===e){await n(l),m();return}if("edit"===e){o=l;let t=a.children;r.elements.name.value=t[1]?t[1].textContent.trim():"",r.elements.age.value=t[2]?t[2].textContent.trim():"",r.elements.course.value=t[3]?t[3].textContent.trim():"",r.elements.skills.value=t[4]?t[4].textContent.trim():"",r.elements.email.value=t[5]?t[5].textContent.trim():"",c()}}),r.addEventListener("submit",async t=>{t.preventDefault();let n=t.currentTarget.elements,l={name:n.name.value.trim(),age:Number(n.age.value),course:n.course.value.trim(),skills:n.skills.value.split(",").map(t=>t.trim()),email:n.email.value.trim(),isEnrolled:n.isEnrolled.checked};null===o?(await e(l),m(),u(),r.reset()):(await a(l,o),m(),u(),r.reset(),o=null)});
//# sourceMappingURL=js-hw38.3fa82628.js.map
