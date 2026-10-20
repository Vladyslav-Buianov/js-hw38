export const deleteStudents = async (id) => {
    const deleting = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE"
    })
    const deleted = await deleting.json();
    return deleted;
}