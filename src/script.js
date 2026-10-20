import { getStudents } from "./api/getStudents";
import { renderMarkup } from "./markup/renderMarkup";
import { postStudents } from "./api/postStudents";
import { deleteStudents } from "./api/deleteStudents";
import { updateStudents } from "./api/updateStudents";

const tableRef = document.querySelector("tbody");
const backdropRef = document.querySelector(".backdrop");
const btnRef = document.querySelector("#get-students-btn");
const formRef = document.querySelector("#student-form");
const addBtnRef = document.querySelector('button[data-action="add"]');
let currentId = null;

btnRef.addEventListener("click", () => {
  renderList();
});

addBtnRef.addEventListener("click", () => {
  currentId = null;
  formRef.reset();
  openModal();
});

backdropRef.addEventListener("click", (evt) => {
  if (evt.target === backdropRef) {
    closeModal();
  }
});

tableRef.addEventListener("click", async (evt) => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const action = evt.target.dataset.action;
  const tr = evt.target.closest("tr");
  if (!tr) return;
  const id = tr.dataset.id || tr.id;

  if (action === "delete") {
    // deleteStudents(id).then(() => renderList());
    await deleteStudents(id);
    renderList();
    return;
  }

  if (action === "edit") {
    currentId = id;
    const cells = tr.children;
    formRef.elements.name.value = cells[1] ? cells[1].textContent.trim() : "";
    formRef.elements.age.value = cells[2] ? cells[2].textContent.trim() : "";
    formRef.elements.course.value = cells[3] ? cells[3].textContent.trim() : "";
    formRef.elements.skills.value = cells[4] ? cells[4].textContent.trim() : "";
    formRef.elements.email.value = cells[5] ? cells[5].textContent.trim() : "";
    openModal();
  }
});

formRef.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const elements = evt.currentTarget.elements;
  const studentData = {
    name: elements.name.value.trim(),
    age: Number(elements.age.value),
    course: elements.course.value.trim(),
    skills: elements.skills.value.split(",").map((skill) => skill.trim()),
    email: elements.email.value.trim(),
    isEnrolled: elements.isEnrolled.checked,
  };

  if (currentId === null) {
    // postStudents(studentData).then(() => {
    //   renderList();
    //   closeModal();
    //   formRef.reset();
    // });
    await postStudents(studentData);
    renderList();
    closeModal();
    formRef.reset();
  } else {
    // updateStudents(studentData, currentId).then(() => {
    //   renderList();
    //   closeModal();
    //   formRef.reset();
    //   currentId = null;
    // });
    await updateStudents(studentData, currentId);
    renderList();
    closeModal();
    formRef.reset();
    currentId = null;
  }
});

function openModal() {
  backdropRef.style.display = "flex";
  backdropRef.style.pointerEvents = "auto";
}

function closeModal() {
  backdropRef.style.display = "none";
}

async function renderList() {
  // getStudents().then((res) => {
  //   tableRef.innerHTML = renderMarkup(res);
  // });
  const res = await getStudents();
  tableRef.innerHTML = renderMarkup(res);
}