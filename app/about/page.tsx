'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from 'next/image'

const team = [
	{
		name: 'Yasmin Sulaymanova',
		id: 'u050139',
		role: 'operator',
		img: '/team/1.JPG'
	},
	{
		name: 'Dilnura Abdunabiyeva',
		id: 'u050209',
		role: 'Group manager',
		img: '/team/2.jpg'
	},
	{
		name: 'Abduqosimov Shoxnajot',
		id: 'u050101',
		role: 'Video editor and designer',
		img: '/team/3.JPG'
	},
	{
		name: 'Dono Rashidova',
		id: 'u050255',
		role: 'webside editor',
		img: '/team/4.jpg'
	},
	{
		name: 'Akbarov Rustamxo’ja',
		id: 'u050051',
		role: 'video editor and operator',
		img: '/team/5.JPG'
	},
]

const Page = () => {
	return (
		<div className={'font-space-grotesk'}>
			<h1 className={'text-4xl text-center max-md:text-2xl mt-5'}>From the Heart of the Silk Road to the Screen in Your
				Hand</h1>
			
			{/* 	Team members */}
			<div className="grid  gap-6 p-4 max-w-7xl mx-auto">
				{team.map((member) => (
					<Card key={member.id} className="hover:shadow-lg transition-shadow my-6">
						<CardHeader className="pb-2">
							<div className="flex justify-center">
									<Image src={member.img} alt={member.name} width={300} height={300}  className="object-cover" />
							</div>
						</CardHeader>
						<CardContent className="text-center">
							<CardTitle className="text-lg">{member.name}</CardTitle>
							<CardDescription className="mt-1">ID: {member.id}</CardDescription>
							<CardDescription className="mt-2 text-sm text-foreground">
								{member.role}
							</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
			
			<div >
				<h1 className={'text-4xl text-center max-md:text-2xl mt-5'}>Mission Statement</h1>
				<p className={'text-lg text-center max-md:text-md my-2'}>At our heart, we&apos;re a group of enthusiasts who
					believe that every corner of Uzbekistan is a treasure waiting to be discovered. <br
						className={'max-md:hidden'} />Our journey begins with the Silk Road, a historic trade route that wove
					together civilizations, cultures, and stories.<br className={'max-md:hidden'} /> It&apos;s where the ancient
					meets the contemporary, and where our passion for storytelling truly finds its roots.
					<br className={'max-md:hidden'} />Our mission is to capture
					the essence of this vibrant nation through the lens of our cameras and the beats of our hearts. <br
						className={'max-md:hidden'} />To
					uncover the
					heartbeat of Uzbekistan — one story, one tradition, one flavor at a time.<br className={'max-md:hidden'} /> We
					bring ancient roots and modern
					vibes together to celebrate a culture as rich as its silk and as warm as its hospitality.</p>
			</div>
			
			<h1 className={'text-center text-4xl max-md:text-2xl mt-12'}>Channel Goals</h1>
			<div className={'mb-16 text-center justify-center items-center space-y-2 max-w-sm mx-auto my-4'}>
				<p>1.Preserve and Promote Heritage
					Showcase the timeless traditions, music, dance, architecture,<br className={'max-md:hidden'} /> and festivals
					of Uzbekistan, keeping them alive for future generations and introducing them to a global audience.</p>
				<p>2. Bridge Past and Present
					Explore how ancient customs blend with modern Uzbek identity,<br className={'max-md:hidden'} /> from fashion
					and art to daily life, showing that culture evolves without losing its soul.</p>
				<p>3. Cultural Deep Dives
					Create series that focus on specific elements of Uzbek culture  —  <br className={'max-md:hidden'} />like the
					story behind suzani embroidery, the secrets of plov, or the history of Samarkand — <br className={'max-md:hidden'} />giving
					viewers more than
					surface-level content.</p>
				<p>4. Connect with the Diaspora
					Serve as a digital homeland for Uzbeks around the world, helping them <br className={'max-md:hidden'}/> reconnect with their roots through engaging and meaningful content.</p>
				<p>5. Build Cultural Curiosity
					Inspire travelers, culture lovers, and the curious to explore Uzbekistan <br className={'max-md:hidden'}/> through the lens of our channel. with respect and enthusiasm by offering authentic and immersive content.</p>
			</div>
		</div>
	)
}
export default Page
