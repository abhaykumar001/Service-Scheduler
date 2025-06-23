"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ServiceRequestPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "", // keep as string for backend
    timeSlot: "",
  });
  const [status, setStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setForm({ ...form, date: date ? date.toISOString().split("T")[0] : "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", phone: "", email: "", service: "", date: "", timeSlot: "" });
      setSelectedDate(null);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Service Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" required className="w-full p-2 border rounded" value={form.name} onChange={handleChange} />
        <input name="phone" placeholder="Phone" required className="w-full p-2 border rounded" value={form.phone} onChange={handleChange} />
        <input name="email" placeholder="Email" required className="w-full p-2 border rounded" value={form.email} onChange={handleChange} />
        <select name="service" required className="w-full p-2 border rounded" value={form.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="AC Repair">AC Repair</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
        </select>
        {/* Calendar-based date picker */}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          className="w-full p-2 border rounded"
          minDate={new Date()}
          required
        />
        <input name="timeSlot" placeholder="Time Slot (e.g., 2–4 PM)" required className="w-full p-2 border rounded" value={form.timeSlot} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
          Submit
        </button>
        {status === "success" && <p className="text-green-600">Request submitted!</p>}
        {status === "error" && <p className="text-red-600">Something went wrong.</p>}
      </form>
    </div>
  );
}