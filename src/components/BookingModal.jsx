import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './Button';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(5, 'Address is required'),
  service: z.string(),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional(),
});

export default function BookingModal({ isOpen, onClose, selectedPackage }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { service: selectedPackage || '' },
  });

  useEffect(() => {
    if (isOpen) {
      reset({ service: selectedPackage || '' });
    }
  }, [isOpen, selectedPackage, reset]);

  const onSubmit = (data) => {
    // TODO: Integrate with backend/API
    alert('Booking submitted!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Book Your Wash</h2>
        <p className="mb-6 text-gray-500">Fill in your details and we’ll confirm your booking.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('name')}
              placeholder="Your Name"
              className={`w-full border rounded px-4 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div>
            <input
              {...register('email')}
              placeholder="Email Address"
              className={`w-full border rounded px-4 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <input
              {...register('phone')}
              placeholder="Phone Number"
              className={`w-full border rounded px-4 py-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>
          <div>
            <input
              {...register('address')}
              placeholder="Address"
              className={`w-full border rounded px-4 py-2 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
          </div>
          <div>
            <select
              {...register('service')}
              className={`w-full border rounded px-4 py-2 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Package</option>
              <option value="Basic Wash">Basic Wash</option>
              <option value="Premium Wash">Premium Wash</option>
              <option value="Ultimate Detail">Ultimate Detail</option>
            </select>
            {errors.service && <span className="text-red-500 text-sm">{errors.service.message}</span>}
          </div>
          <div className="flex gap-2">
            <input
              {...register('date')}
              type="date"
              className={`w-1/2 border rounded px-4 py-2 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input
              {...register('time')}
              type="time"
              className={`w-1/2 border rounded px-4 py-2 ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          <div>
            <textarea
              {...register('notes')}
              placeholder="Additional Notes (optional)"
              className="w-full border rounded px-4 py-2 min-h-[60px] border-gray-300"
            />
          </div>
          <Button type="submit" className="w-full text-lg py-3 mt-2">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
}
