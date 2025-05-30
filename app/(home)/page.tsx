import { Banner } from '@/components/home/Banner'
import CityCard from '@/components/home/cityCard'
import PhotoGallery from '@/components/home/HomeGallery'
import { Button } from '@/components/ui/button'
import { aboutCities } from '@/constants';
import Link from 'next/link'

const Page = () => {
	return (
		<div>
			<Banner /> {/* Ensure Banner component is imported */}
			<div className="max-sm mx-0 mx-[5%] py-8">
				<Link href='/city' className="font-space-grotesk text-4xl font-semibold mb-2">
					Popular destinations for tourists
				</Link>
				<p className="font-space-grotesk font-normal text-gray-500 mb-8">
					Explore Uzbekistan’s iconic cities
				</p>
				
				{/* Flex container for cards */}
				<div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-x-24 gap-y-10">
					{aboutCities.map((item) => (
						<CityCard
							key={item.url}
							name={item.name}
							image={item.img}
							url={item.url}
							about={item.about}
						/>
					)).slice(0, 8)}
				</div>
				<Button className={'mx-auto py-5 px-16 text-xl mt-4 justify-center flex items-center font-space-grotesk'}>
					<Link href={'/city'}>View more</Link>
				</Button>
			</div>
			
			<div className=" mx-[5%] py-8">
				<Link href={'/gallery'} className="font-space-grotesk text-4xl font-semibold mb-2">
					Photo gallery
				</Link>
				<p className="font-space-grotesk font-normal text-gray-500 mb-8">
					Places, people, events – all the most intriguing in our Photo gallery
				</p>
				<PhotoGallery/>
			</div>
		</div>
	);
};

export default Page;
