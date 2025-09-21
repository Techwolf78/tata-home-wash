import React from 'react';
import { Users, Home, Clock, ShieldCheck } from 'lucide-react';

const features = [
	{
		icon: <Users size={32} className="text-[#0437F2]" />,
		title: 'Trained Experts',
		desc: 'Our team is professionally trained for quality and safety.'
	},
	{
		icon: <Home size={32} className="text-[#0437F2]" />,
		title: 'Doorstep Service',
		desc: 'Convenient car washing at your doorstep, no hassle.'
	},
	{
		icon: <Clock size={32} className="text-[#0437F2]" />,
		title: 'Quick & Efficient',
		desc: 'Fast service without compromising on quality.'
	},
	{
		icon: <ShieldCheck size={32} className="text-[#0437F2]" />,
		title: 'Quality Guarantee',
		desc: 'We stand by our service with a satisfaction guarantee.'
	}
];

export default function Differentiators() {
	return (
		<section className="py-8 md:py-12 bg-gradient-to-r from-neutral-50 via-white to-primary-50/30">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0437F2]">
					Why Choose ShineX?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{features.map((f, i) => (
						<div
							key={i}
							className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-soft border border-neutral-200/50 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="mb-4 flex justify-center">{f.icon}</div>
							<h3 className="text-lg font-semibold mb-2 text-[#0437F2]">
								{f.title}
							</h3>
							<p className="text-neutral-600 text-sm">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
