import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up animate-once">
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Start Your Project</span>
            </h2>
            <p className="text-lg text-gray-400">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
          </div>

          <form onSubmit={handleSubmit} 
                className="space-y-6 p-8 rounded-2xl subtle-border glass-effect card-shadow 
                          opacity-0 animate-fade-in-up animate-once animate-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="opacity-0 animate-fade-in-up animate-once animate-delay-300">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-style"
                  required
                />
              </div>
              <div className="opacity-0 animate-fade-in-up animate-once animate-delay-400">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-style"
                  required
                />
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in-up animate-once animate-delay-500">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-style resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-end opacity-0 animate-fade-in-up animate-once animate-delay-600">
              <button
                type="submit"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg
                         bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200
                         font-medium text-base"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}