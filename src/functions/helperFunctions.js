import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const generare = (dimensiune, minim, maxim, setMatrice, setLoading, setDrum) => {
	let i, j, a = [];
	dimensiune = parseInt(dimensiune)

	if (dimensiune < 4 || dimensiune > 20) {
		toast.info('Dati o valoare intre 4 si 20!' , { autoClose: 1000 })
		return false
	}

	for (i = 0; i <= dimensiune + 1; i++) {
		a[i] = new Array(dimensiune);
	}

	for (i = 1; i <= dimensiune; i++) {
		for (j = 1; j <= dimensiune; j++) {
			a[i][j] = Math.floor(Math.random() * (maxim - minim + 1)) + minim;
		}
	}

	for (i = 0; i <= dimensiune + 1; i++) {
		a[0][i] = -1;
		a[dimensiune + 1][i] = -1;

		a[i][0] = -1;
		a[i][dimensiune + 1] = -1;
	}

	document.querySelectorAll('.isObstacle').forEach((el) => el.classList.remove('isObstacle'))

	setLoading(true)
	setDrum([])

	setMatrice(a)
}

export const setareObstacol = (event, dimensiune, matrice, setMatrice, drum, setDrum, setLoading, main) => {
	const value = parseInt(event.target.getAttribute('value'))
	const copie = [...matrice]
	const i = parseInt(event.target.classList[1].split('_')[0]) - 1
	const j = parseInt(event.target.classList[1].split('_')[1]) - 1

	if (!event.target.getAttribute('name') && value !== -1) {
		event.target.setAttribute('name', value)
	}

	if (value !== -1) {
		event.target.setAttribute('value', '-1')
		event.target.classList.add('isObstacle')
		copie[i][j] = -1
	} else {
		event.target.setAttribute('value', event.target.getAttribute('name'))
		event.target.innerHTML = event.target.getAttribute('name')
		event.target.classList.remove('isObstacle')
		copie[i][j] = parseInt(event.target.getAttribute('name'))
	}

	setMatrice(copie)

	if (drum.length > 0) {
		main(dimensiune, matrice, setLoading, setDrum)
	}
}
