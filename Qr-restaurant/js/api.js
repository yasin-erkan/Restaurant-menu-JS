//the fontion having data from debugger.jason

export const fetchMenu = async () => {
  // the date taken from db.json with the help of 'fetch'
  const res = await fetch("../db.json");
  const data = await res.json();
  return data;
};
