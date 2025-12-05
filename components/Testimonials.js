import { FaMagic } from 'react-icons/fa';

export default function Testimonials() {
    const reviews = [
        {
            text: "A game changer for people who want to buy a car but don't know where to start. Carlytic made everything so simple and transparent. No hidden costs, honest pricing, and great advice.",
            author: "Sarah Williamson",
            role: "South West London, UK",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
        },
        {
            text: "Comparing cars used to be confusing. With Carlytic, I could see exactly what I was paying for and why. Business made easy. Honest, knowledgeable and highly recommend.",
            author: "David Jones",
            role: "North London, UK",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
        },
        {
            text: "Absolutely phenomenal platform! Giving you in-depth, concise and rigorous, unbiased data meaning you can shop - simple, fast, and worry-free peace.",
            author: "Emily Thompson",
            role: "East London, UK",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-brand-blue text-2xl mb-2 flex justify-center"><FaMagic /></span>
                    <span className="text-brand-blue font-medium mb-2 block">TESTIMONIALS</span>
                    <h2 className="text-4xl font-bold text-gray-900">Our customer reviews</h2>
                    <p className="text-gray-600 mt-4">See what people are saying about their experiences on Carlytic!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                            <p className="text-gray-600 mb-8 leading-relaxed italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        src={review.image}
                                        alt={review.author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.author}</h4>
                                    <p className="text-xs text-gray-500">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
