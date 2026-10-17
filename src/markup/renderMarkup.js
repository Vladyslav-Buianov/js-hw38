export function renderMarkup(itms) {
  const item = itms.map(
    ({ id, name, age, course, skills, email, isEnrolled }) => {
          return `
<tr id="${id}">
  <td>${id}</td>
  <td>${name}</td>
  <td>${age}</td>
  <td>${course}</td>
  <td>${skills}</td>
  <td><a href="mailto:${email}">${email}</a></td>
  <td>${isEnrolled ? "Зареєстрований" : "Не зареєстрований"}</td>
  <td>
    <button data-action="edit" type="button" class="edit">Змінити</button>
    <button data-action="delete" type="button" class="delete">Видалити</button>
  </td>
</tr>
        `;
    },
    ).join("");
    return item
}