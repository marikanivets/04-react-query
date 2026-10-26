import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div style={{ color: '#e74c3c', backgroundColor: '#fde8e8', padding: '12px', borderRadius: '6px', textAlign: 'center', margin: '20px 0' }}>
      {message}
    </div>
  );
};

export default ErrorMessage;
