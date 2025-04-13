"use client";

import { Carousel } from "@/components/ui/bannerCarousel";
export function Banner() {
	const slideData = [
		{
			title: "Uzbek Architecture",
			button: "Explore Component",
			src:"/banner/archi.jpg",
		},
		{
			title: "Uzbek Culture",
			button: "Explore Component",
			src:"/banner/culture.jpg",
		},
		{
			title: "Uzbek Cuisine",
			button: "Explore Component",
			src:"/banner/cusine.jpg",
		},
		{
			title: "Uzbek Nature",
			button: "Explore Component",
			src:"/banner/nature.jpg",
		},
		{
			title: "Souvenirs from Uzbekistan",
			button: "Explore Component",
			src:"/banner/souvenirs.jpg",
		},
	];
	return (
		<>
			<div className="relative overflow-hidden w-full h-full py-20">
				<Carousel slides={slideData} />
			</div>
		</>
	
	);
}
