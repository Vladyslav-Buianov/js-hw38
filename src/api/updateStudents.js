export const updateStudents = async (studentsData, id) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(studentsData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(`http://localhost:3000/students/${id}`,options);
  const updated = await response.json();
  return updated;
};