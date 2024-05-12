import React from 'react';
import banner5 from '../../assets/ban5.jpg'
import banner6 from '../../assets/ban6.jpg'


const About = () => {
    return (
        <div className=' bg-gray-100'>
<div className="min-h-screen max-w-6xl mx-auto text-gray-800">
	<div className="p-6 space-y-8">
		
		<main>
			<div className="container mx-auto space-y-16">
				
				<section>
					<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">How it works</span>
					<h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">Building with Mamba is simple</h2>
					<div className="grid gap-6 my-16 lg:grid-cols-3">
						<div className="flex flex-col p-8 space-y-4 rounded-md bg-yellow-200">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 dark:text-gray-50">1</div>
							<p className="text-2xl font-semibold">
								<b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white dark:text-gray-50">2</div>
							<p className="text-2xl font-semibold">
								<b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md bg-yellow-200">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 dark:text-gray-50">3</div>
							<p className="text-2xl font-semibold">
								<b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
							</p>
						</div>
					</div>
				</section>
			
				<section>
					<div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
							<img src={banner6} alt="" className="object-cover w-full h-auto max-h-96 dark:bg-gray-500" />
							<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-500">
								<span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-600 dark:text-gray-50">Business</span>
								<h2 className="text-3xl font-bold md:flex-1">Curating a workplace that inspires team movement</h2>
								<div>
									<p className="dark:text-gray-600">November 30, 2020</p>
									<p className="dark:text-gray-600">By Leroy Jenkins</p>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				<section>
					<div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-50">
						<h2 className="text-5xl font-bold text-center">Our team is here to help you.</h2>
						<div className="flex justify-center p-4">
							<a rel="noopener noreferrer" href="#">Meet our crew &gt;</a>
						</div>
						<img src={banner5} alt="" className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500" />
					</div>
				</section>
			</div>
		</main>
	
	</div>
</div>
        </div>
    );
};

export default About;