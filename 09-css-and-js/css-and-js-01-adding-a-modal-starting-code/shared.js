const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const planButtons = document.querySelectorAll('#plans button');
const [freeButton, recomendedButton, premiumButton] = planButtons;

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const modalNegativeButton = modal.querySelector('button');

planButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// modal.style.display = 'block';
		// backdrop.style.display = 'block';
		modal.classList.add('open');
		backdrop.classList.add('open');
	});
});

[modalNegativeButton, backdrop].forEach((element) =>
	element.addEventListener('click', () => {
		// modal.style.display = 'none';
		// backdrop.style.display = 'none';
		// mobileNav.style.display = 'none';
		modal.classList.remove('open');
		backdrop.classList.remove('open');
		mobileNav.classList.remove('open');
	})
);

toggleButton.addEventListener('click', () => {
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
});
