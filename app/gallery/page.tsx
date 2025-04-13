'use client'

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

const Page = () => {
	return (
		<div
			className="space-y-14 mt-10 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards
				items={testimonials1}
				direction="left"
				speed="slow"
			/>
			<InfiniteMovingCards
				items={testimonials2}
				direction="left"
				speed="slow"
			/>
			<InfiniteMovingCards
				items={testimonials3}
				direction="left"
				speed="slow"
			/>
			<InfiniteMovingCards
				items={testimonials4}
				direction="left"
				speed="slow"
			/>
		</div>
	)
}
export default Page

const testimonials1 = [
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-07.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-17.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-20.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-24.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-27.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-31.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-34.jpg',
	},
	{
		image: '/gallery/group1/photo_2025-04-10_19-32-37.jpg',
	},
];

const testimonials2 = [
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-10.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-15.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-20.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-22.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-25.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-29.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-35.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-38.jpg',
	},
	{
		image: '/gallery/group2/photo_2025-04-10_19-34-41.jpg',
	},
];

const testimonials3 = [
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-29.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-35.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-38.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-41.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-44.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-47.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-35-50.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-02.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-05.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-08.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-12.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-15.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-20.jpg',
	},
	{
		image: '/gallery/group3/photo_2025-04-10_19-36-23.jpg',
	},
];

const testimonials4 = [
	{
		image: '/gallery/group4/photo_2025-04-10_19-36-46.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-36-52.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-36-55.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-36-58.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-02.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-05.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-08.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-11.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-14.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-17.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-19.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-22.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-27.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-30.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-32.jpg',
	},
	{
		image: '/gallery/group4/photo_2025-04-10_19-37-34.jpg',
	},
]
