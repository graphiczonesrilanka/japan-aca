const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


let attempts = 0;
const maxAttempts = 3;
const lockTime = 30; // seconds

const user = document.getElementById("username");
const pass = document.getElementById("password");
const button = document.querySelector("button");
const error = document.getElementById("error");
const lockMsg = document.getElementById("lockMessage");
const card = document.querySelector(".login-card");

function login() {
  const correctUser = "admin";
  const correctPass = "abc123JA";

  if (card.classList.contains("locked")) return;

  if (user.value === correctUser && pass.value === correctPass) {
    error.textContent = "";
    lockMsg.textContent = "";

    card.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "p1.html";
    }, 600);

  } else {
    attempts++;
    error.textContent = `Wrong login (${attempts}/${maxAttempts})`;

    if (attempts >= maxAttempts) {
      startLock();
    }
  }
}

function startLock() {
  let remaining = lockTime;
  card.classList.add("locked");
  error.textContent = "";
  lockMsg.textContent = `Too many attempts. Try again in ${remaining}s`;

  const timer = setInterval(() => {
    remaining--;
    lockMsg.textContent = `Locked. Try again in ${remaining}s`;

    if (remaining <= 0) {
      clearInterval(timer);
      unlock();
    }
  }, 1000);
}

function unlock() {
  attempts = 0;
  card.classList.remove("locked");
  lockMsg.textContent = "You can try again";
}












