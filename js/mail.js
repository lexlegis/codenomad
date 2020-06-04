function sendMail(email) {
	const method = 'POST';
	const url = 'https://api.sendgrid.com/v3/mail/send';
	const apiKey = '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';
	const headers = {
		'authorization': 'Bearer ' + apiKey,
		'content-type': 'application/json'
	};
	const body = {
		personalizations: [
			{
				to: [{
					email: "hello@codenomad.io",
					name: "Code Nomad"
				}],
				subject: "Subscribed on website: " + email
			}
		],
		from: {
			email: email,
			name: "Subscriber"
		},
		reply_to: {
			email: email,
			name: "Subscriber"
		},
		content: [{
			type: "text/plain",
			value: email
		}]
	};

	return fetch(url, { method, headers, body }).then(console.log, console.error);
}

function handleMailButton() {
	const email = document.getElementById('email-input').value;

	if(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/.test(email) === false) {
		return;
	}
}
