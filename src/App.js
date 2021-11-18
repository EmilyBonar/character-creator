import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Decoration from "./components/Decoration/Decoration";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Decoration />
			<CharacterEditor />
			<Footer />
		</>
	);
}

export default App;
