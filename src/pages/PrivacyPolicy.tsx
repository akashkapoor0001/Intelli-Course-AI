import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective date: April 26, 2025</p>

        <p className="mb-6">
          We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Information Collection</h2>
        <p className="mb-4">
          We collect personal information you provide to us directly, such as your name, email address, and any other information you submit.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Information</h2>
        <p className="mb-4">
          We use the information we collect to operate, maintain, and improve our services, respond to inquiries, and send communications.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell, rent, or share your personal information with third parties except as necessary to provide our services or comply with the law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your information against unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact</h2>
        <p>If you have questions about this Privacy Policy, you can reach us at privacy@example.com.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
