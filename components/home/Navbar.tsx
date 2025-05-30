'use client'


import {
	NavigationMenu, NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cities, navbarLinks } from '@/constants'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
			<div
				className={'justify-between flex text-white bg-[#dc2626] font-space-grotesk py-3'}>
				
				<div className={'pl-10'}>
					<Link href={'/'}>
						<Image
							src={'/logo.png'}
							alt={'logo'}
							width={200}
							height={200}
						/>
					</Link>
				</div>
				
				{/* MOBILE NAVBAR */}
				<div className={'hidden max-md:flex'}>
					<Sheet key={'top'}>
						<SheetTrigger>
							<Menu size={30}  className={'mr-5'}/>
						
						</SheetTrigger>
						<SheetContent side={'top'}>
							<SheetTitle className={'mx-auto flex flex-col gap-[10px] font-space-grotesk text-lg text-center'}>
								
								<Link href={'/city'}>Cities</Link>
								
								{navbarLinks.map((link) => (
									<Link href={link.url} key={link.name}>
										<p>{link.name}</p>
									</Link>
								))}
							</SheetTitle>
						
						</SheetContent>
					</Sheet>
				</div>
				
				<div className={'flex mt-5 text-lg max-md:hidden'}>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={'font-space-grotesk hover:underline underline-offset-4 cursor-pointer pr-[20px]'}>
									<Link href={'/city'}>
										Cities
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent className={''}>
									{cities.map((city) => (
										<Link key={city.url} href={`${city.url}`}>
											<p className={'font-space-grotesk py-[2px]'}>{city.name}</p>
										</Link>
									))}
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					
					{navbarLinks.map((link) => (
						<Link href={link.url} key={link.name}>
							<p className={'font-space-grotesk px-[20px] hover:underline underline-offset-4'}>{link.name}</p>
						</Link>
					))}
				</div>
			
			</div>
	
	)
}
export default Navbar
