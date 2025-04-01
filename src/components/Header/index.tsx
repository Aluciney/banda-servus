export const Header: React.FC = () => {
	return (
		<header className="fixed px-12 h-20 bg-zinc-800 text-white w-full">
			<div className="flex justify-between items-center h-full max-w-screen-xl mx-auto text-sm">
				<h1 className="hidden sm:block">Portfólio</h1>
				<nav className="w-full">
					<ul className="flex w-full space-x-12 justify-center sm:justify-end">
						<li><a href="#home" className="hover:underline">Home</a></li>
						<li><a href="#photos" className="hover:underline">Fotos</a></li>
						<li><a href="#about" className="hover:underline">Sobre</a></li>
						<li><a href="#contact" className="hover:underline">Contato</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}