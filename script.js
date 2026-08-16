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

// --- Helpers ---
function todayKey() {
  return new Date().toISOString().split('T')[0];
}

function calculateStreak(habit) {
  const dates = Object.keys(habit.completions).filter(d => habit.completions[d]).sort();
  if (dates.length === 0) return 0;

  let streak = 1;
  for (let i = dates.length - 1; i > 0; i--) {
    const curr = new Date(dates[i]);
    const prev = new Date(dates[i - 1]);
    const diffDays = (curr - prev) / (1000 * 60 * 60 * 24);
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}

function renderWeekGrid(habit) {
  const days = getLast7Days();
  const cells = days.map(day => {
    const done = !!habit.completions[day];
    return `<span class="day-cell ${done ? 'filled' : ''}" title="${day}"></span>`;
  }).join('');
  return `<div class="week-grid">${cells}</div>`;
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

    const isDoneToday = !!habit.completions[todayKey()];
    const streak = calculateStreak(habit);

    card.innerHTML = `
      <div class="habit-info">
        <span class="habit-name">${habit.name}</span>
        <span class="habit-streak">🔥 ${streak} day streak</span>
        ${renderWeekGrid(habit)}
      </div>
      <div class="habit-actions">
        <button class="toggle-btn ${isDoneToday ? 'done' : ''}" data-id="${habit.id}">
          ${isDoneToday ? '✓ Done today' : 'Mark done'}
        </button>
        <button class="delete-btn" data-id="${habit.id}" aria-label="Delete habit">✕</button>
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

function deleteHabit(id) {
  habits = habits.filter(h => h.id !== id);
  saveHabits();
  render();
}

function toggleToday(id) {
  const habit = habits.find(h => h.id === id);
  if (!habit) return;
  const key = todayKey();
  habit.completions[key] = !habit.completions[key];
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

habitList.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.classList.contains('delete-btn')) {
    deleteHabit(id);
  } else if (e.target.classList.contains('toggle-btn')) {
    toggleToday(id);
  }
});

// --- Init ---
render();

// Persistence confirmed: all state changes (add/delete/toggle) call
// saveHabits() which writes to localStorage under the "habits" key,
// and loadHabits() reads it back on page load.
