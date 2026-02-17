import { useState, useCallback } from 'react';
import React from 'react';

// ✅ Fix: Use Render URL as fallback for production
const API_URL = import.meta.env.VITE_API_URL || 'https://zevoraglobalspices.onrender.com';

interface FormData {
  name: string;
  company: string;
  email: string;
  destination: string;
  message: string;
  website: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  destination: '',
  message: '',
  website: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setStatus('idle');
    setErrorMessage('');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name');
      setStatus('error');
      return;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please describe your product requirements');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      // ✅ Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          destination: formData.destination,
          message: formData.message,
          website: formData.website,
        }),
      });

      clearTimeout(timeoutId);

      // ✅ Fix: Safely parse JSON response
      let result;
      const responseText = await response.text();

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        console.error('Invalid JSON response:', responseText);
        throw new Error('Server returned an invalid response');
      }

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.errors?.join(', ') ||
            `Server error (${response.status})`
        );
      }

      setStatus('success');
      setFormData(initialFormData);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');

      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          setErrorMessage(
            'Request timed out. Please try again.'
          );
        } else {
          setErrorMessage(err.message);
        }
      } else {
        setErrorMessage(
          'Something went wrong. Please try again.'
        );
      }

      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
  };
}