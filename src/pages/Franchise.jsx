import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(1, "City is required"),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

function Franchise() {
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
      await addDoc(collection(db, "franchiseEnquiries"), data);
      alert("Franchise enquiry submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting enquiry. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Become a ShineX Franchise Partner</h1>
        <p className="text-center mb-8">Join our network and start your own vehicle washing business.</p>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
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
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                {...register("city")}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Budget (optional)</label>
              <input
                type="text"
                {...register("budget")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message")}
                className="w-full px-3 py-2 border rounded"
                rows="3"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Franchise;