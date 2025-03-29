function togglePassword() {
    const pwInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-pw');
    
    if (pwInput.type === 'password') {
        pwInput.type = 'text';
        toggleBtn.classList.add('visible');
    } else {
        pwInput.type = 'password';
        toggleBtn.classList.remove('visible');
    }
}
