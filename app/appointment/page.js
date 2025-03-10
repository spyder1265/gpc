"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  isMember: "",
  date: "",
  time: "",
  purpose: "",
};

export default function Appointment() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.isMember)
      newErrors.isMember = "Please select if you're a member.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.purpose) newErrors.purpose = "Purpose is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const timeValue = formData.time;
    const convertTo12HourFormat = (time24) => {
      const [hours, minutes] = time24.split(":").map(Number);
      const period = hours >= 12 ? "pm" : "am";
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
    };
    const formattedTime = convertTo12HourFormat(timeValue);
    console.log(formattedTime);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email || "Not Provided",
          phone: formData.phone,
          isMember: formData.isMember,
          date: formData.date,
          time: formattedTime,
          purpose: formData.purpose,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Appointment submitted successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to submit appointment. Please try again.");
    }
    // setFormData(initialFormData);
  };

  return (
    <main className='min-h-screen w-full flex flex-col'>
      <section className='relative h-[500px] w-full'>
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <Toaster position='top-right' reverseOrder={false} />
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-5xl font-bold'>
                Book Appointment
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className='h-auto bg-slate-50 py-10 w-full'>
        <Card className='w-full max-w-2xl mx-auto'>
          <CardHeader>
            <CardTitle className='text-center text-2xl font-bold text-greenActive'>
              Book an Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className='space-y-6 p-5 text-greenActive'
            >
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName' className='font-semibold'>
                    First Name <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='firstName'
                    name='firstName'
                    placeholder='John'
                    required
                    className='w-full border-2 outline-none focus:border-yellowShade focus:outline-yellowShade'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className='text-red-500'>{errors.firstName}</span>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName' className='font-semibold'>
                    Last Name <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='lastName'
                    name='lastName'
                    placeholder='Doe'
                    required
                    className='w-full border-2 focus:border-yellowShade focus:outline-yellowShade'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className='text-red-500'>{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email' className='font-semibold'>
                  Email
                  {/* <span className='text-red-500'>*</span> */}
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='name@example.com'
                  // required
                  className='w-full border-2 focus:border-yellowShade focus:outline-yellowShade'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className='text-red-500'>{errors.email}</span>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email' className='font-semibold'>
                  Phone Number <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  pattern='[+0-9]{10,15}'
                  placeholder='+233 123 456 789'
                  required
                  className='w-full border-2 focus:border-yellowShade focus:outline-yellowShade'
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className='text-red-500'>{errors.phone}</span>
                )}
              </div>

              <div className='space-y-2'>
                <Label className='font-semibold'>
                  Are you a member of Grace Pavilion Chapel?{" "}
                  <span className='text-red-500'>*</span>
                </Label>
                <RadioGroup
                  name='isMember'
                  required
                  className='flex space-x-4'
                  value={formData.isMember}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, isMember: value }))
                  }
                >
                  <div className='flex items-center space-x-2'>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <RadioGroupItem
                        value='Yes'
                        id='Yes'
                        className={cn(
                          "w-4 h-4 border-2 rounded-full",
                          formData.isMember === "Yes"
                            ? "border-[#c5b987] bg-[#c5b987] border-8"
                            : "border-gray-400"
                        )}
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <RadioGroupItem
                        value='No'
                        id='No'
                        className={cn(
                          "w-4 h-4 border-2 rounded-full",
                          formData.isMember === "No"
                            ? "border-[#c5b987] bg-[#c5b987] border-8"
                            : "border-gray-400"
                        )}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </RadioGroup>
                {errors.isMember && (
                  <span className='text-red-500'>{errors.isMember}</span>
                )}
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='date' className='font-semibold'>
                    Date Requested <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='date'
                    name='date'
                    type='date'
                    required
                    className='w-full border-2 focus:border-yellowShade focus:outline-yellowShade outline-none'
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <span className='text-red-500'>{errors.date}</span>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='time' className='font-semibold'>
                    Time Requested <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='time'
                    name='time'
                    type='time'
                    required
                    className='w-full border-2 focus:border-yellowShade focus:outline-yellowShade'
                    value={formData.time}
                    onChange={handleChange}
                  />
                  {errors.time && (
                    <span className='text-red-500'>{errors.time}</span>
                  )}
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='purpose' className='font-semibold'>
                  Purpose <span className='text-red-500'>*</span>
                </Label>
                <Textarea
                  id='purpose'
                  name='purpose'
                  required
                  placeholder='Purpose of the appointment'
                  className='w-full border-2 focus:border-yellowShade focus:outline-yellowShade'
                  rows={4}
                  value={formData.purpose}
                  onChange={handleChange}
                />
                {errors.purpose && (
                  <span className='text-red-500'>{errors.purpose}</span>
                )}
              </div>

              <div className='flex justify-center items-center'>
                <button
                  type='submit'
                  className='w-fit py-2 px-4 text-white rounded-xl transition-colors duration-200 bg-greenShade hover:bg-greenActive border-none'
                >
                  Submit
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      <div className='bg-slate-50'>
        <Footer />
      </div>
    </main>
  );
}
