let cella = document.querySelectorAll(".button");
let resetBtn = document.querySelector(".resetBtn");
let GiocoFinito = false;

function controllaVincitore(player) {
	if (griglia[0][0] === player && griglia[1][1] === player && griglia[2][2] === player) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[0][2] === player &&
		griglia[1][1] === player &&
		griglia[2][0] === player
	) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[0][0] === player &&
		griglia[1][0] === player &&
		griglia[2][0] === player
	) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[0][1] === player &&
		griglia[1][1] === player &&
		griglia[2][1] === player
	) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[0][2] === player &&
		griglia[1][2] === player &&
		griglia[2][2] === player
	) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[0][0] === player &&
		griglia[0][1] === player &&
		griglia[0][2] === player
	) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[1][0] === player &&
		griglia[1][1] === player &&
		griglia[1][2] === player
	) {
		GiocoFinito = true;
		return true;
	} else if (
		griglia[2][0] === player &&
		griglia[2][1] === player &&
		griglia[2][2] === player
	) {
		GiocoFinito = true;
		return true;
	} else {
		return false;
	}
}

function RicaricaFinestra() {
	window.location.reload(true);
}

resetBtn.addEventListener("click", function (e) {
	e.preventDefault();
	RicaricaFinestra();
});


let currentPlayer = "X";
let griglia = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

let count = 0;

cellaOccupata = true;
let v1, v2;

for (let i = 0; i < cella.length; i++) {
	cella[i].addEventListener("click", function (e) {
		e.preventDefault();

		console.log(`valore della i --> ${i}`);
		console.log(`valore di player --> ${currentPlayer}`);

		cellaOccupata =
			e.currentTarget.classList.contains("player2") ||
			e.currentTarget.classList.contains("player1");

		console.log(cellaOccupata);
		if (!cellaOccupata && !GiocoFinito) {
			count++;
			v1 = cella[i].dataset.row;
			v2 = cella[i].dataset.cell;

			if (currentPlayer === "X") {
				e.currentTarget.classList.toggle("player1");
				cella[i].innerHTML="X"
				griglia[v1][v2] = "X";
			} else {
				e.currentTarget.classList.toggle("player2");
				cella[i].innerHTML="O"
				griglia[v1][v2] = "O";
			}
		}

		let vittoria = controllaVincitore(currentPlayer);

		if (vittoria) {
			document.querySelector(
				".output"
			).innerHTML = `ha vinto il player ${currentPlayer}`;
			document.querySelector(".output").classList.add("colorOutput");
		
		} else if (count === 9 && !vittoria) {
			document.querySelector(".output").innerHTML = `pareggio!`;
			document.querySelector(".output").classList.add("colorOutput");
		}


		if (currentPlayer === "X") {
			currentPlayer = "O";
		} else {
			currentPlayer = "X";
		}
	});
}