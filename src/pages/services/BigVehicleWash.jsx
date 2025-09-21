import React from "react";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight, Clock, Shield, Sparkles } from "lucide-react";

const pricing = [
  {
    name: "Basic Wash",
    price: "₹1499",
    description: "Essential exterior cleaning",
    features: ["Exterior wash", "Wheel cleaning", "Quick dry"],
  },
  {
    name: "Premium Wash",
    price: "₹2499",
    description: "Complete cleaning service",
    features: ["Everything in Basic", "Interior vacuum", "Undercarriage wash", "Tire treatment"],
    popular: true,
  },
  {
    name: "Deluxe Wash",
    price: "₹3999",
    description: "Full detailing service",
    features: ["Everything in Premium", "Engine bay clean", "Wax protection", "Fleet discount available"],
  },
];

const features = [
  {
    icon: Clock,
    title: "Efficient Service",
    description: "45-60 minutes completion time",
  },
  {
    icon: Shield,
    title: "Heavy-Duty Equipment",
    description: "Professional-grade tools for large vehicles",
  },
  {
    icon: Sparkles,
    title: "Fleet Solutions",
    description: "Specialized services for commercial fleets",
  },
];

function BigVehicleWash() {
  return (
    <div className="md:min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Big Vehicle Wash Services
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional cleaning solutions for trucks, vans, buses, and commercial vehicles.
            Heavy-duty equipment and expert technicians for superior results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="animate-slide-up">
            <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center shadow-soft">
              <div className="text-center text-neutral-500">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Big Vehicle Wash</p>
                <p className="text-sm">Heavy-duty cleaning solutions</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Why Choose Our Big Vehicle Wash?
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our specialized service for large vehicles uses industrial-grade equipment and techniques
                designed for trucks, buses, and commercial fleets. We understand the unique challenges
                of maintaining large vehicles and deliver professional results every time.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary-600" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-neutral-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 border-2 ${
                  plan.popular
                    ? 'border-primary-500 shadow-medium'
                    : 'border-neutral-200 hover:border-primary-300'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{plan.price}</div>
                  <p className="text-neutral-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <Check className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/booking" className="block">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-soft hover:shadow-medium'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                    }`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-200/50">
          <h2 className="text-2xl font-bold text-center text-neutral-900 mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-neutral-600 italic mb-4">
                "Excellent service for our delivery trucks. Professional and reliable."
              </p>
              <p className="font-semibold text-neutral-900">- ABC Logistics</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-neutral-600 italic mb-4">
                "They handle our fleet of 20 trucks efficiently. Great for business!"
              </p>
              <p className="font-semibold text-neutral-900">- City Transport Co.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigVehicleWash;