function isValidPassword(password) 
{
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return regex.test(password);
}
const password = "abc12345";

if (isValidPassword(password)) 
  {
  console.log("Password is valid");
} else 
  {
  console.log("Password must be at least 8 characters and include a letter and a number");
}