import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CheckCircle, AlertCircle, Calendar, Clock, User, Phone, Car, MessageSquare, Star, Shield, Zap, Sparkles, X } from "lucide-react";

const packages = [
  {
    id: 'basic',
    name: 'Basic Wash',
    price: '₹399',
    originalPrice: '₹499',
    duration: '30 mins',
    features: [
      'Exterior hand wash',
      'Towel dry',
      'Tyre & wheel clean',
      'Waterless cleaning'
    ],
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium Wash',
    price: '₹699',
    originalPrice: '₹899',
    duration: '45 mins',
    features: [
      'Everything in Basic',
      'Interior vacuum',
      'Dashboard polish',
      'Windows in/out',
      'Air freshener'
    ],
    popular: true
  },
  {
    id: 'ultimate',
    name: 'Ultimate Detail',
    price: '₹1199',
    originalPrice: '₹1499',
    duration: '90 mins',
    features: [
      'Everything in Premium',
      'Wax polish',
      'Engine bay clean',
      'Odour removal',
      'Tire shine',
      'Interior deep clean'
    ],
    popular: false
  }
];

const schema = z.object({
  package: z.string().min(1, "Please select a service package"),
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  vehicleType: z.string().min(1, "Vehicle type is required"),
  dateTime: z.string().min(1, "Date and time are required"),
  notes: z.string().optional(),
});

function Booking() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1); // 1: Package selection, 2: Booking form
  const [showBanner, setShowBanner] = useState(true);

  // Check localStorage on component mount
  useEffect(() => {
    const bannerClosed = localStorage.getItem('offerBannerClosed');
    if (bannerClosed === 'true') {
      setShowBanner(false);
    }
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
    localStorage.setItem('offerBannerClosed', 'true');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    watch
  } = useForm({
    resolver: zodResolver(schema),
  });

  const watchedPackage = watch("package");

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setValue("package", pkg.id);
    setCurrentStep(2);

    // Scroll to form section for mobile users
    setTimeout(() => {
      const formSection = document.querySelector('.booking-form-section');
      if (formSection) {
        const headerOffset = 120; // Account for sticky header and banner
        const elementPosition = formSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "bookings"), {
        ...data,
        packageDetails: packages.find(p => p.id === data.package),
        timestamp: new Date()
      });
      // Success is handled by isSubmitSuccessful
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error; // Let react-hook-form handle it
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="md:min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-soft p-12 text-center max-w-md w-full border border-neutral-200/50 animate-slide-up">
          <CheckCircle className="w-16 h-16 text-secondary-500 mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Booking Confirmed!</h1>
          <p className="text-neutral-600 mb-8">
            Thank you for choosing ShineX. We'll contact you shortly to confirm your appointment details.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Another Service
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Sticky Urgency Banner */}
      {showBanner && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm md:text-base flex-1 justify-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="font-bold">Limited Time Offer!</span>
                <span className="text-blue-100 hidden sm:inline">Book now and get ₹200 OFF on all premium packages.</span>
                <span className="text-xs md:text-sm bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">Offer ends in 24 hours!</span>
              </div>
              <button
                onClick={handleCloseBanner}
                className="ml-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
                aria-label="Close offer banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Professional Car Care Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Book Your Premium
              <span className="block text-blue-600">Car Wash</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose your service package and schedule your professional vehicle cleaning.
              <span className="font-semibold text-blue-600"> Save up to 30% today!</span>
            </p>
          </div>

          {/* Popular Slots Alert */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-orange-900 mb-1">Popular slots filling up fast!</p>
                <p className="text-sm text-orange-700">Today 2-4 PM slots: Only 3 left • Tomorrow morning: 80% booked</p>
              </div>
            </div>
          </div>

          {/* Trust Signals & Social Proof */}
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-neutral-200/50 mb-8 animate-slide-up">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">10,000+</div>
                <div className="text-sm text-neutral-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">4.9★</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">50K+</div>
                <div className="text-sm text-neutral-600">Cars Washed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">99%</div>
                <div className="text-sm text-neutral-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic leading-relaxed">
                  "Outstanding service! My car looks brand new. The team was professional and the booking process was seamless."
                </p>
                <div className="text-sm text-slate-600">
                  <strong>Rahul Sharma</strong> • Honda City Owner
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic leading-relaxed">
                  "Best car wash service in Pune. Eco-friendly, quick, and affordable. Highly recommend the Premium package!"
                </p>
                <div className="text-sm text-slate-600">
                  <strong>Priya Patel</strong> • Toyota Fortuner Owner
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-slate-200/50">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="w-5 h-5 text-green-500" />
                <span>100% Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Zap className="w-5 h-5 text-green-500" />
                <span>Eco-Friendly Products</span>
              </div>
            </div>
          </div>

          {currentStep === 1 ? (
            /* Package Selection */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => handlePackageSelect(pkg)}
                  className={`group relative bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    watchedPackage === pkg.id
                      ? 'border-blue-500 shadow-lg scale-105'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{pkg.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-lg text-slate-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-slate-600">{pkg.duration}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      watchedPackage === pkg.id
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          ) : (
            /* Booking Form */
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200/50 booking-form-section">
              {/* Selected Package Summary */}
              {selectedPackage && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-900">{selectedPackage.name}</h3>
                      <p className="text-blue-700">{selectedPackage.price} • {selectedPackage.duration}</p>
                    </div>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Change Package
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base ${
                        errors.name ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      type="tel"
                      {...register("phone")}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base ${
                        errors.phone ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.phone.message}
                    </div>
                  )}
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Vehicle Type *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 z-10" aria-hidden="true" />
                    <select
                      {...register("vehicleType")}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white text-base ${
                        errors.vehicleType ? 'border-red-300' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select your vehicle type</option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="Big Vehicle">Big Vehicle (Truck/Van/Bus)</option>
                    </select>
                  </div>
                  {errors.vehicleType && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.vehicleType.message}
                    </div>
                  )}
                </div>

                {/* Date & Time */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Preferred Date & Time *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      type="datetime-local"
                      {...register("dateTime")}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base ${
                        errors.dateTime ? 'border-red-300' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.dateTime && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.dateTime.message}
                    </div>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Special Notes
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <textarea
                      {...register("notes")}
                      rows="4"
                      className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-base"
                      placeholder="Any special requests or notes about your vehicle..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" aria-hidden="true" />
                      Confirm Booking - {selectedPackage?.price}
                    </>
                  )}
                </button>
              </form>

              {/* Trust Signals */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">100% Safe</p>
                    <p className="text-xs text-slate-600">Fully insured service</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Zap className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Quick Service</p>
                    <p className="text-xs text-slate-600">30-90 min completion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Star className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Satisfaction Guarantee</p>
                    <p className="text-xs text-slate-600">Money back promise</p>
                  </div>
                </div>
              </div>

              {/* Service Hours */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200/50">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-1">Service Hours</p>
                    <p className="text-sm text-slate-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-slate-600">Sunday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;