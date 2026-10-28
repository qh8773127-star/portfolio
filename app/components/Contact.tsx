"use client";

import { useState } from "react";
import { Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset(); // Form clear kar dein
      }
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Let&apos;s Talk</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I&apos;m currently available for freelance work and full-time opportunities. 
              Let&apos;s build something amazing together.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg"><Mail size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:your.email@example.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">your.email@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg"><MapPin size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">Sheikhupura, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input name="email" type="email" placeholder="your@email.com" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea name="message" rows={4} placeholder="How can I help you?" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"></textarea>
            </div>
            
            <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
              {isLoading ? (
                <><Loader2 className="animate-spin" size={20} /> Sending...</>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Success Message */}
            {isSuccess && (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg mt-4 text-sm font-medium">
                <CheckCircle2 size={18} />
                Message sent successfully! I will get back to you soon.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}