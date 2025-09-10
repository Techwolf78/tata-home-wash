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
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-0 relative border border-gray-100">
        <div className="px-8 py-7 md:px-10 md:py-9">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-[#004289] text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004289] focus-visible:ring-offset-2"
            onClick={onClose}
            aria-label="Close booking modal"
            tabIndex={0}
          >
            ×
          </button>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900 tracking-tight text-center">
            <span className="bg-gradient-to-r from-[#004289] via-[#004289]/80 to-[#4f6fa6] bg-clip-text text-transparent">Book Your Wash</span>
          </h2>
          <p className="mb-6 text-gray-500 text-center">Fill in your details and we’ll confirm your booking.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register('name')}
                placeholder="Your Name"
                className={`w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.name ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
            </div>
            <div>
              <input
                {...register('email')}
                placeholder="Email Address"
                className={`w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.email ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
            </div>
            <div>
              <input
                {...register('phone')}
                placeholder="Phone Number"
                className={`w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.phone ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
            </div>
            <div>
              <input
                {...register('address')}
                placeholder="Address"
                className={`w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.address ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.address}
              />
              {errors.address && <span className="text-red-500 text-xs mt-1 block">{errors.address.message}</span>}
            </div>
            <div>
              <select
                {...register('service')}
                className={`w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.service ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.service}
              >
                <option value="">Select Package</option>
                <option value="Basic Wash">Basic Wash</option>
                <option value="Premium Wash">Premium Wash</option>
                <option value="Ultimate Detail">Ultimate Detail</option>
              </select>
              {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service.message}</span>}
            </div>
            <div className="flex gap-2">
              <input
                {...register('date')}
                type="date"
                className={`w-1/2 border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.date ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.date}
              />
              <input
                {...register('time')}
                type="time"
                className={`w-1/2 border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all ${errors.time ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.time}
              />
            </div>
            <div>
              <textarea
                {...register('notes')}
                placeholder="Additional Notes (optional)"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 min-h-[60px] bg-gray-50 focus:bg-white focus:border-[#004289] focus:outline-none focus:ring-2 focus:ring-[#004289]/20 transition-all"
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full text-base md:text-lg py-3 rounded-lg font-bold bg-[#004289] hover:bg-[#00336b] text-white shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#004289] focus-visible:ring-offset-2">
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
