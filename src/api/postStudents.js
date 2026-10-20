export const postStudents = async (iceData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(iceData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch("http://localhost:3000/students",options);
  const posted = await response.json();
  return posted;
};