import React from "react";
import { Link } from "react-router-dom";
import { Car, Bike, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    id: "car-wash",
    title: "Car Wash",
    description: "Professional car washing services with eco-friendly products and attention to detail.",
    icon: Car,
    path: "/services/car-wash",
    features: ["Interior & Exterior", "Eco-friendly products", "Quick service"],
  },
  {
    id: "bike-wash",
    title: "Bike Wash",
    description: "Specialized bike cleaning to keep your motorcycle looking pristine and performing well.",
    icon: Bike,
    path: "/services/bike-wash",
    features: ["Frame protection", "Chain cleaning", "Detailing"],
  },
  {
    id: "big-vehicle-wash",
    title: "Big Vehicle Wash",
    description: "Heavy-duty cleaning solutions for trucks, buses, and large commercial vehicles.",
    icon: Truck,
    path: "/services/big-vehicle-wash",
    features: ["Heavy-duty equipment", "Bulk pricing", "Fleet services"],
  },
];

function Services() {
  return (
    <div className="md:min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of professional vehicle washing services.
            Each service is tailored to meet the specific needs of your vehicle type.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 border border-neutral-200/50 hover:border-primary-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-600" aria-hidden="true" />
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="group/btn inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-soft p-8 border border-neutral-200/50">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Book Your Wash?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-md mx-auto">
            Schedule your vehicle cleaning service today and experience the ShineX difference.
          </p>
          <Link to="/booking">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 flex items-center gap-2 mx-auto">
              Book Now
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;