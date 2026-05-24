export const formatSalary = (salary) => {
  if (!salary) return "Not specified";
  const num = Number(salary.toString().replace(/[^0-9]/g, ""));
  return isNaN(num) || num === 0 ? salary : `$${num.toLocaleString('en-US')}`;
};

export const generateId = () => Date.now() + Math.floor(Math.random() * 1000);
