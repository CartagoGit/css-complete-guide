const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const planButtons = document.querySelectorAll('#plans button');
const [free, recomended, premium] = planButtons;

planButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
		backdrop.style.display = 'block';
	});
});


const modalNegativeButtons = modal.querySelector('button');
modalNegativeButtons.addEventListener('click', () => {
	modal.style.display = 'none';
	backdrop.style.display = 'none';
});
