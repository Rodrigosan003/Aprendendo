document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.login-form');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const emailError = document.getElementById('emailError');
	const passwordError = document.getElementById('passwordError');

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let valid = true;

		// limpar mensagens
		emailError.textContent = '';
		passwordError.textContent = '';

		const emailVal = email.value.trim();
		const passwordVal = password.value || '';

		if (!emailVal) {
			emailError.textContent = 'Preencha o e‑mail.';
			email.setAttribute('aria-invalid', 'true');
			valid = false;
		} else if (!emailRegex.test(emailVal)) {
			emailError.textContent = 'E‑mail inválido.';
			email.setAttribute('aria-invalid', 'true');
			valid = false;
		} else {
			email.removeAttribute('aria-invalid');
		}

		if (!passwordVal) {
			passwordError.textContent = 'Preencha a senha.';
			password.setAttribute('aria-invalid', 'true');
			valid = false;
		} else if (passwordVal.length < 6) {
			passwordError.textContent = 'A senha deve ter ao menos 6 caracteres.';
			password.setAttribute('aria-invalid', 'true');
			valid = false;
		} else {
			password.removeAttribute('aria-invalid');
		}

		if (!valid) {
			const firstInvalid = form.querySelector('[aria-invalid="true"]');
			if (firstInvalid) firstInvalid.focus();
			return;
		}

		// Simular envio bem-sucedido
		const btn = form.querySelector('button[type="submit"]');
		btn.disabled = true;
		const prevText = btn.textContent;
		btn.textContent = 'Entrando...';

		setTimeout(() => {
			btn.disabled = false;
			btn.textContent = prevText;
			alert('Login válido (simulado).');
			form.reset();
			emailError.textContent = '';
			passwordError.textContent = '';
		}, 800);
	});
});
