import React, { useEffect } from 'react';
import './booking-success-modal.css';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="booking-success-title">
      <div className="booking-modal">
        <button className="booking-modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <h2 id="booking-success-title" className="booking-modal-title">
          Booking Successful!
        </h2>
        <p className="booking-modal-message">
          We will contact you soon.
        </p>
        <button className="booking-modal-action" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};
