import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

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
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "bookings"), data);
      alert("Booking submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Book a Wash</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Vehicle Type</label>
            <select
              {...register("vehicleType")}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Big Vehicle">Big Vehicle</option>
            </select>
            {errors.vehicleType && <p className="text-red-500 text-sm">{errors.vehicleType.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Preferred Date/Time</label>
            <input
              type="datetime-local"
              {...register("dateTime")}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.dateTime && <p className="text-red-500 text-sm">{errors.dateTime.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Notes (optional)</label>
            <textarea
              {...register("notes")}
              className="w-full px-3 py-2 border rounded"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;