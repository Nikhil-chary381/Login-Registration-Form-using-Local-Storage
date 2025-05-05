function login() {
    const mail = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const profile = JSON.parse(localStorage.getItem(mail));
  
    if (!profile) {
      alert("You don't have an account");
    } else if (profile.pass === password) {
      alert("Login successful");
    } else {
      alert("Incorrect email or password");
    }
  }
  
  function register() {
    const fname = document.getElementById("name").value;
    const email = document.getElementById("register-email").value;
    const pass = document.getElementById("register-password").value;
    const confirmpass = document.getElementById("confirm-password").value;
  
    if (!fname || !email || !pass || !confirmpass) {
      alert("Fields should not be empty");
      return;
    }
  
    if (localStorage.getItem(email)) {
      alert("You have already registered");
      return;
    }
  
    if (pass !== confirmpass) {
      alert("Passwords do not match");
      return;
    }
  
    localStorage.setItem(email, JSON.stringify({ fname, pass }));
    alert("Registration successful");
    changepages('login-page');
  }
  
  function show(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  }
  
  function check(id) {
    const email = document.getElementById(id).value;
    if (localStorage.getItem(email)) {
      alert("You have already registered");
    }
  }
  
  function changepages(id) {
    document.getElementById("login-page").classList.remove("active");
    document.getElementById("registration-page").classList.remove("active");
    document.getElementById(id).classList.add("active");
  }
  