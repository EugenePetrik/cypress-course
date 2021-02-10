// Task #1

const autumnMonths = ['september', 'october', 'november'];
const winterMonths = ['december', 'january', 'february'];
const springMonths = ['march', 'april', 'may'];
const summerMonths = ['june', 'july', 'august'];

// eslint-disable-next-line no-undef
const currentMonth = prompt('Please, enter current month', 'January');

if (autumnMonths.includes(currentMonth.toLowerCase())) {
  console.log('Season is Autumn');
} else if (winterMonths.includes(currentMonth)) {
  console.log('Season is Winter');
} else if (springMonths.includes(currentMonth)) {
  console.log('Season is Spring');
} else if (summerMonths.includes(currentMonth)) {
  console.log('Season is Summer');
} else {
  console.log('Please enter correct month');
}

// Task #2

for (let i = 0; i <= 10; i++) {
  for(let y = 0; y <= 10; y++) {
    console.log(`${i} x ${y} =`, i * y);
  }
  console.log('\n');
}

// Task #3

const showDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay() + 1;
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minute}`;
};

console.log(showDateTime());
