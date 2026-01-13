'use client';

import { useState } from 'react';
import { Whitepaper } from '@/lib/data/whitepaper';

interface WhitepaperFormLabels {
  hint: string;
  selectionTitle: string;
  noSelection: string;
  salutation: string;
  salutationOptions: {
    mr: string;
    mrs: string;
    diverse: string;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  isCustomer: string;
  isCustomerYes: string;
  isCustomerNo: string;
  source: string;
  privacy: string;
  submit: string;
}

interface WhitepaperFormSectionProps {
  title: string;
  note: string;
  whitepapers: Whitepaper[];
  selectedIds: Set<string>;
  labels: WhitepaperFormLabels;
}

export default function WhitepaperFormSection({
  title,
  note,
  whitepapers,
  selectedIds,
  labels,
}: WhitepaperFormSectionProps) {
  const [formData, setFormData] = useState({
    salutation: labels.salutationOptions.mr,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    isCustomer: 'no',
    source: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', { formData, selectedWhitepapers: Array.from(selectedIds) });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section id="form-whitepaper" className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-[var(--egovc-dark)]">{title}</h2>
          <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-gray-700">
              <strong>{labels.hint}</strong> {note}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Whitepaper Selection */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-[var(--egovc-dark)]">
                {labels.selectionTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                {whitepapers.map((whitepaper) => (
                  <label
                    key={whitepaper.id}
                    className="flex items-start gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="whitepapers"
                      value={whitepaper.id}
                      checked={selectedIds.has(whitepaper.id)}
                      readOnly
                      className="mt-1 w-4 h-4 text-[var(--egovc-pink)] border-gray-300 rounded focus:ring-[var(--egovc-pink)]"
                    />
                    <span className="text-sm text-gray-700">{whitepaper.title}</span>
                  </label>
                ))}
              </div>
              {selectedIds.size === 0 && (
                <p className="text-sm text-gray-500 mt-4 italic">
                  {labels.noSelection}
                </p>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="salutation" className="block text-sm font-medium mb-2">
                  {labels.salutation}
                </label>
                <select
                  id="salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
                >
                  <option value={labels.salutationOptions.mr}>{labels.salutationOptions.mr}</option>
                  <option value={labels.salutationOptions.mrs}>{labels.salutationOptions.mrs}</option>
                  <option value={labels.salutationOptions.diverse}>{labels.salutationOptions.diverse}</option>
                </select>
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  {labels.firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  {labels.lastName} <span className="text-[var(--egovc-pink)]">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {labels.email} <span className="text-[var(--egovc-pink)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  {labels.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  {labels.organization} <span className="text-[var(--egovc-pink)]">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {labels.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {labels.isCustomer}
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isCustomer"
                    value="yes"
                    checked={formData.isCustomer === 'yes'}
                    onChange={handleChange}
                    className="text-[var(--egovc-pink)]"
                  />
                  <span>{labels.isCustomerYes}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isCustomer"
                    value="no"
                    checked={formData.isCustomer === 'no'}
                    onChange={handleChange}
                    className="text-[var(--egovc-pink)]"
                  />
                  <span>{labels.isCustomerNo}</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-medium mb-2">
                {labels.source}
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--egovc-pink)] focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-1 text-[var(--egovc-pink)]"
                />
                <span className="text-sm text-gray-700">
                  <span className="text-[var(--egovc-pink)]">*</span> {labels.privacy}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--egovc-pink)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              {labels.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
