import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CheckCircle, AlertCircle, User, Mail, MessageSquare, Phone, Clock, MapPin, HelpCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+91 1800-XXX-XXXX",
    description: "Mon-Fri: 9 AM - 6 PM",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "support@shinex.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Service Hours",
    details: "24/7 Online Support",
    description: "Emergency assistance available",
  },
];

const faqs = [
  {
    question: "How do I book a service?",
    answer: "You can book a service through our website by clicking 'Book a Wash' or calling our support team.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, credit/debit cards, and all major digital wallets.",
  },
  {
    question: "Do you provide home service?",
    answer: "Yes, we offer doorstep service for cars and bikes. Big vehicles are serviced at designated locations.",
  },
];

function Support() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "supportMessages"), data);
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
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Message Sent!</h1>
          <p className="text-neutral-600 mb-8">
            Thank you for contacting ShineX. Our support team will respond to your message within 24 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Contact Support
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Need help? Our support team is here to assist you. Get in touch with us through any of the channels below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-soft p-6 text-center border border-neutral-200/50 hover:shadow-medium transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{info.title}</h3>
                  <p className="font-medium text-primary-600 mb-1">{info.details}</p>
                  <p className="text-sm text-neutral-600">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Content and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - FAQ */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-soft p-6 border border-neutral-200/50">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                        <p className="text-neutral-600 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Emergency Support</h3>
                <p className="text-neutral-600 text-sm mb-3">
                  For urgent issues during service, call our emergency hotline:
                </p>
                <p className="font-bold text-primary-600">+91 1800-XXX-XXXX</p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-200/50 animate-slide-up">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send us a Message</h2>

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

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-neutral-400" aria-hidden="true" />
                    <textarea
                      {...register("message")}
                      rows="6"
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                        errors.message ? 'border-red-300' : 'border-neutral-300'
                      }`}
                      placeholder="Describe your issue or question in detail..."
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
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-soft hover:shadow-medium disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" aria-hidden="true" />
                      Send Message
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

export default Support;