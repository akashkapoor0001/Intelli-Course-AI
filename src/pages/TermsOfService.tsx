import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Last updated: April 26, 2025</p>
        <p className="mb-6">
          Please read these Terms of Service ("Terms") carefully before using our website. By accessing or using the service, you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Use of Our Service</h2>
        <p className="mb-4">
          You agree to use our service only for lawful purposes. You must not use the service in any way that violates any applicable laws or regulations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide information that is accurate and up to date. You are responsible for safeguarding your account credentials.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          The service and its original content, features, and functionality are and will remain the exclusive property of our company.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p>If you have any questions about these Terms, you can contact us at support@example.com.</p>
      </div>
    </div>
  );
};

export default TermsOfService;
