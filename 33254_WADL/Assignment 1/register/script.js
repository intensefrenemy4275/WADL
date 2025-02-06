function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    
    let valid = true;
    if (!name || !email || !mobile || !address || !city || !gender || hobbies.length === 0) {
      alert("Please fill out all the fields correctly.");
      return false;
    }

    if (!/^[A-Za-z]{1,}$/.test(name)) {
        usernameError.textContent = 'Name must be alphabets only.';
        valid = false;
    }

    if (!/^[0-9]{10,10}$/.test(mobile)) {
        usernameError.textContent = 'Mobile Number must be numbers only and exactly 10 characters.';
        valid = false;
    }
    return valid;
  }
  