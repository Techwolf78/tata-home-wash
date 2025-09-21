import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CheckCircle, AlertCircle, User, Mail, Phone, MapPin, DollarSign, MessageSquare, TrendingUp, Users, Award, Zap } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(1, "City is required"),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const benefits = [
  {
    icon: TrendingUp,
    title: "High Profit Margins",
    description: "Industry-leading profit margins with low operational costs",
  },
  {
    icon: Users,
    title: "Growing Market",
    description: "Expanding vehicle washing market with increasing demand",
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Established brand with proven business model",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Fast-track setup with comprehensive training and support",
  },
];

function Franchise() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "franchiseEnquiries"), data);
      // Success handled by isSubmitSuccessful
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-soft p-12 text-center max-w-md w-full border border-neutral-200/50 animate-slide-up">
          <CheckCircle className="w-16 h-16 text-secondary-500 mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Enquiry Submitted!</h1>
          <p className="text-neutral-600 mb-8">
            Thank you for your interest in ShineX franchise. Our team will contact you within 24 hours to discuss next steps.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Become a ShineX Franchise Partner
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Join India's fastest-growing vehicle washing network. Start your own successful business with our proven model,
              comprehensive training, and ongoing support.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-soft p-6 text-center border border-neutral-200/50 hover:shadow-medium transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Content and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why Choose ShineX Franchise?</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    ShineX has revolutionized the vehicle washing industry with our eco-friendly approach and
                    customer-centric services. As a franchise partner, you'll benefit from:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Complete business setup and operational guidance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Marketing and branding support
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Ongoing training and technical assistance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Exclusive territory rights
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Investment Range</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">₹15-25 Lakhs</p>
                <p className="text-sm text-neutral-600">
                  Including setup costs, equipment, initial inventory, and working capital
                </p>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Expected ROI</h3>
                <p className="text-2xl font-bold text-secondary-600 mb-2">24-36 Months</p>
                <p className="text-sm text-neutral-600">
                  Average payback period with proper execution and marketing
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-200/50 animate-slide-up">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get Franchise Details</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.name ? 'border-red-300' : 'border-neutral-300'
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

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.email ? 'border-red-300' : 'border-neutral-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <input
                      type="tel"
                      {...register("phone")}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.phone ? 'border-red-300' : 'border-neutral-300'
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

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <input
                      type="text"
                      {...register("city")}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.city ? 'border-red-300' : 'border-neutral-300'
                      }`}
                      placeholder="Enter your city"
                    />
                  </div>
                  {errors.city && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.city.message}
                    </div>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Investment Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <select
                      {...register("budget")}
                      className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white"
                    >
                      <option value="">Select your budget range</option>
                      <option value="Under 10 Lakhs">Under ₹10 Lakhs</option>
                      <option value="10-20 Lakhs">₹10-20 Lakhs</option>
                      <option value="20-30 Lakhs">₹20-30 Lakhs</option>
                      <option value="Above 30 Lakhs">Above ₹30 Lakhs</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <textarea
                      {...register("message")}
                      rows="4"
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                        errors.message ? 'border-red-300' : 'border-neutral-300'
                      }`}
                      placeholder="Tell us about your background and interest in franchising..."
                    />
                  </div>
                  {errors.message && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.message.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary-500 hover:bg-secondary-600 disabled:bg-neutral-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-soft hover:shadow-medium disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" aria-hidden="true" />
                      Submit Franchise Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Franchise;