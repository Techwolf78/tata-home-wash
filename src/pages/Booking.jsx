import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CheckCircle, AlertCircle, Calendar, Clock, User, Phone, Car, MessageSquare } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  vehicleType: z.string().min(1, "Vehicle type is required"),
  dateTime: z.string().min(1, "Date and time are required"),
  notes: z.string().optional(),
});

function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "bookings"), data);
      // Success is handled by isSubmitSuccessful
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error; // Let react-hook-form handle it
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 flex items-center justify-center px-6">
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Book Your Wash</h1>
            <p className="text-lg text-neutral-600">
              Schedule your vehicle cleaning service with ease. Fill out the form below and we'll take care of the rest.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 border border-neutral-200/50 animate-slide-up">
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

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Vehicle Type *
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 z-10" aria-hidden="true" />
                  <select
                    {...register("vehicleType")}
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white ${
                      errors.vehicleType ? 'border-red-300' : 'border-neutral-300'
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
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Preferred Date & Time *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                  <input
                    type="datetime-local"
                    {...register("dateTime")}
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.dateTime ? 'border-red-300' : 'border-neutral-300'
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
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Special Notes
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-neutral-400" aria-hidden="true" />
                  <textarea
                    {...register("notes")}
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Any special requests or notes about your vehicle..."
                  />
                </div>
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
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                    Book Appointment
                  </>
                )}
              </button>
            </form>

            {/* Info */}
            <div className="mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200/50">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-neutral-900 mb-1">Service Hours</p>
                  <p className="text-sm text-neutral-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-neutral-600">Sunday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;