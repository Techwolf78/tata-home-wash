import React from 'react';
import { Users, Leaf, Clock, ShieldCheck } from 'lucide-react';

const features = [
	{
		icon: <Users size={32} className="text-[#004289]" />,
		title: 'Trained Experts',
		desc: 'Our team is professionally trained for quality and safety.'
	},
	{
		icon: <Leaf size={32} className="text-[#004289]" />,
		title: 'Eco-Conscious',
		desc: 'We use eco-friendly products and water-saving techniques.'
	},
	{
		icon: <Clock size={32} className="text-[#004289]" />,
		title: 'Convenience',
		desc: 'Book online and get your car washed at your doorstep.'
	},
	{
		icon: <ShieldCheck size={32} className="text-[#004289]" />,
		title: 'Quality Guarantee',
		desc: 'We stand by our service with a satisfaction guarantee.'
	}
];

export default function Differentiators() {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-10 text-[#004289]">
					Why Choose Tata Home Wash?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{features.map((f, i) => (
						<div
							key={i}
							className="bg-white rounded-lg p-8 text-center shadow-sm border border-[#e5e7eb]"
						>
							<div className="mb-4 flex justify-center">{f.icon}</div>
							<h3 className="text-xl font-semibold mb-2 text-[#004289]">
								{f.title}
							</h3>
							<p className="text-gray-600">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
