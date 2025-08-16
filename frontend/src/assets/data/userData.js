const user = {
    id: 1,
    name: 'Swapnil',
    email: 'swapnil@gmail.com',
    password: 'password123' 
  };
  
 
  localStorage.setItem('user', JSON.stringify(user));

  export default user;