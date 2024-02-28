import { useState } from "react";
import "../css/index.css"

function App() {
	const time = new Date(),
		hour = time.getHours(),
		salutation = () => {
			if (hour >= 0 && hour < 12)
				return 'Buenos dias.'
			else if (hour >= 12 && hour < 20)
				return 'Buenas tardes'
			else
				return 'Buenas noches'
		},
		speed = 50,
		txt = 'Hola' + salutation,
		typeWriter = () => {
			if (i < txt.length) {
				document.getElementById('title').innerHTML += txt.charAt(i);
				i++;
				setTimeout(typeWriter, speed);
			}
		}
	
	window.onload = function() {
		setTimeout(typeWriter, 300);
	};

	return (
		<>
			<div className="scroll-container">
				<section>
					<div>
						<h1 id="title" className="w-100 roboto-mono-400"></h1>
						<h2 className="w-100">Soy yo!</h2>
					</div>
				</section>
				
				<section>
					<h1>Section 2</h1>
				</section>
				
				<section>
					<h1>Section 3</h1>
				</section>
				
				<section>
					<h1>Section 4</h1>
				</section>
			</div>
		</>
	)
}

export default App
