export const Header: React.FC = () => {
	return (
		<header className="fixed flex justify-between items-center p-4 bg-gray-800 text-white">
			<h1>Portfólio</h1>
			<nav>
				<ul className="flex space-x-4">
					<li><a href="#home">Home</a></li>
					<li><a href="#photos">Fotos</a></li>
					<li><a href="#about">Sobre</a></li>
					<li><a href="#contact">Contato</a></li>
				</ul>
			</nav>
		</header>
	);
}