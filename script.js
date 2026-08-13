// --- State ---
let habits = loadHabits();

// --- DOM refs ---
const form = document.getElementById('add-habit-form');
const input = document.getElementById('habit-name');
const errorEl = document.getElementById('habit-error');
const habitList = document.getElementById('habit-list');
const emptyState = document.getElementById('empty-state');

// --- Persistence ---
function loadHabits() {
  const raw = localStorage.getItem('habits');
  return raw ? JSON.parse(raw) : [];
}

function saveHabits() {
  localStorage.setItem('habits', JSON.stringify(habits));
}

// --- Rendering ---
function render() {
  habitList.innerHTML = '';

  if (habits.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  habits.forEach(habit => {
    const card = document.createElement('div');
    card.className = 'habit-card';
    card.innerHTML = `
      <div class="habit-info">
        <span class="habit-name">${habit.name}</span>
      </div>
    `;
    habitList.appendChild(card);
  });
}

// --- Actions ---
function addHabit(name) {
  habits.push({
    id: Date.now().toString(),
    name,
    completions: {}
  });
  saveHabits();
  render();
}

// --- Event listeners ---
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = input.value.trim();

  if (!name) {
    input.classList.add('invalid');
    errorEl.classList.add('visible');
    return;
  }

  input.classList.remove('invalid');
  errorEl.classList.remove('visible');
  addHabit(name);
  input.value = '';
});

// --- Init ---
render();
