export function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
					{/* Links Section */}
					<div className="space-y-2">
						<h3 className="text-lg font-semibold mb-4">Explore</h3>
						<ul className="space-y-2">
							{[
								{ name: 'Gallery', href: '/gallery' },
								{ name: 'About', href: '/about' },
								{ name: 'Cities', href: '/cities' },
								{ name: 'Contact', href: '/contact' },
							].map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors duration-200"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					
					{/* Social Links */}
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
						<div className="flex items-center space-x-4">
							<a
								href="https://youtube.com/@pearloftime?si=AxHoy3ZBrnh-RATu"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-red-500 transition-colors duration-200"
								aria-label="YouTube channel"
							>
								<svg
									className="w-8 h-8"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				
				{/* Copyright */}
				<div className="border-t border-gray-800 pt-8 mt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Travel Uzbekistan. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
