import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, RotateCcw, FileText } from 'lucide-react';
import Footer from '../components/Footer';

const Policy = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'return', label: 'Return & Replacement', icon: RotateCcw },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText }
  ];

  const renderPrivacyPolicy = () => (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        This Privacy Policy describes how TruPower ("the Company", "we", "our", or "us") collects, uses, stores, shares, and protects personal and nonpersonal information through its website trupower.strategyzinc.com and any associated mobile applications (collectively, "Website/Mobile App").
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        By accessing or using the Website/Mobile App, you agree to this Privacy Policy and our Terms & Conditions. If you do not agree, please do not use the platform.
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Definitions & Consent</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            "User" / "You" refers to any person using or accessing the Website/Mobile App.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">By using the platform, you:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Accept and agree to the Terms of Use and this Privacy Policy.</li>
            <li>Consent to the collection, use, storage, and sharing of your data as outlined herein.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            This policy may change over time; we encourage you to review it periodically.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Types of Information Collected</h3>
          
          <h4 className="text-lg font-medium text-gray-900 mb-3">2.1 Personal Information</h4>
          <p className="text-gray-700 leading-relaxed mb-3">We may collect:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
            <li>Name, contact number, email address</li>
            <li>Residential, mailing, or service address</li>
            <li>Government ID details (Aadhar, PAN, etc.)</li>
            <li>Bank/payment details</li>
            <li>Transaction and leasing history</li>
            <li>Physical or health-related information where relevant</li>
            <li>Internet identifiers (e.g. IP address)</li>
            <li>Any other personally identifiable or "sensitive personal data or information" as per applicable law</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 mb-3">2.2 Non-Personal / Technical Information</h4>
          <p className="text-gray-700 leading-relaxed mb-3">We also collect anonymized or aggregated data such as:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Geographic location</li>
            <li>Device, browser, OS information</li>
            <li>Usage patterns and navigation flow on the site/app</li>
            <li>Referral URLs, timestamps, session data</li>
            <li>Data from cookies, web beacons, or tracking codes</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Cookies & Tracking Technologies</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use session cookies (expire when browser is closed) and persistent cookies (remain longer) to track site usage and improve user experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Web beacons, analytics scripts, and other mechanisms may also help us monitor behavior and preferences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may disable cookies in your browser settings, but doing so could limit functionality or access to some parts of the site.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. How Information Is Collected</h3>
          <p className="text-gray-700 leading-relaxed mb-3">Information is collected via:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Direct input by users (forms, registration, document upload)</li>
            <li>Automated collection during site/app use</li>
            <li>From third-party sources (credit agencies, partners)</li>
            <li>Voluntary communications, feedback or support queries (via email, calls, forms)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Purpose & Use of Collected Data</h3>
          <p className="text-gray-700 leading-relaxed mb-3">TruPower uses collected information to:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Facilitate battery leasing, user onboarding, and transaction processing</li>
            <li>Conduct identity and credit verification</li>
            <li>Communicate about EMIs, lease status, terms, and updates</li>
            <li>Send promotional offers, news, and scheme details</li>
            <li>Personalize user experience and interface</li>
            <li>Analyze behavior and performance metrics</li>
            <li>Engage third-party partners (logistics, customer service)</li>
            <li>Detect fraud, unauthorized access, and ensure security</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Disclosure & Sharing of Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell your personal data. We may share your information in the following ways:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4 mb-4">
            <li>Service providers & vendors: for payments, tech support, logistics, KYC, etc.</li>
            <li>Financial institutions: for validating your documents, verifying EMIs, etc.</li>
            <li>Government / legal authorities: when required by law, regulation, or court order</li>
            <li>Business transfers: such as mergers or acquisitions, with appropriate safeguards</li>
            <li>With your consent: after informing you</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Access to personal data internally is restricted to personnel who need it to fulfill their roles.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Data Retention</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We retain personal information only as long as necessary for the purposes for which it was collected or as required by law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sensitive information is stored securely and removed when no longer needed.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Security Measures</h3>
          <p className="text-gray-700 leading-relaxed mb-3">We employ appropriate safeguards including:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4 mb-4">
            <li>Encryption for data in transit and storage</li>
            <li>Secure servers and access control</li>
            <li>Regular security audits and updates</li>
            <li>Staff training on confidential data handling</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            However, no method of transmission or storage is fully secure—use at your own risk.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Your Rights & Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>You must provide accurate and up-to-date information.</li>
            <li>You may request to access, correct, or delete your personal data by contacting us.</li>
            <li>Disabling cookies or withdrawing consent may limit access to certain features.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Policy Changes</h3>
          <p className="text-gray-700 leading-relaxed">
            We may revise this Privacy Policy at any time. Updates will be posted on trupower.strategyzinc.com. Continued use after changes implies acceptance.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">11. Governing Law & Jurisdiction</h3>
          <p className="text-gray-700 leading-relaxed">
            This policy is governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of courts in Gurgaon in India.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            If you have any queries, requests, or concerns about this Privacy Policy or your personal information:
          </p>
          <p className="text-gray-700 leading-relaxed">
            Email: <a href="mailto:energy@strategyzinc.com" className="text-blue-600 hover:text-blue-700">energy@strategyzinc.com</a>
          </p>
        </section>
      </div>
    </div>
  );

  const renderReturnPolicy = () => (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund, Return & Cancellation Policy for TruPower Batteries</h2>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. General Policy Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            This policy outlines the terms and conditions related to refunds, returns, cancellations, and repossession of TruPower IoT-enabled batteries leased through the Pointo Network. It applies to both dealers and end-users.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Security Deposit & Enrollment Fee (For Dealers)</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Dealers must pay a non-interest-bearing security deposit and a one-time, non-refundable Enrollment Fee prior to initiating battery rentals.</li>
            <li>If a dealer ends their partnership and later rejoins the network, a new Enrollment Fee and security deposit must be paid.</li>
            <li>The Enrollment Fee is strictly non-refundable, regardless of the reason for termination.</li>
            <li>In case of termination, the company may adjust outstanding dues against the security deposit, and any remaining amount will be refunded within 30 days.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Battery Rental & EMI Policy (For End-Users)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The battery is leased under a 12-month EMI plan with a structured payment schedule.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
            <li>Initial payment: ₹15,000 (₹12,000 down payment + ₹3,000 file charges).</li>
            <li>Monthly EMI: ₹5,000, payable by the 3rd of every month.</li>
            <li>IoT-enabled batteries will be automatically disabled upon EMI default.</li>
          </ul>
          
          <h4 className="text-lg font-medium text-gray-900 mb-3">Late Payment Policy:</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Delay up to 2 days: ₹100 late fee.</li>
            <li>Beyond 2 days: ₹50/day until EMI is paid.</li>
            <li>If EMI remains unpaid for more than 15 days, the battery will be repossessed.</li>
            <li>Battery will be reactivated only after full payment of dues including penalties.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Ownership Transfer (For End-Users)</h3>
          <p className="text-gray-700 leading-relaxed">
            After successful completion of 12 EMIs, full ownership of the battery is transferred to the end-user.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Credit Verification & Documentation</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Before the battery is issued to the end-user, proper credit verification is required. The following documents must be submitted:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Aadhar Card</li>
            <li>PAN Card</li>
            <li>Bank Details</li>
            <li>Proof of Address</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Policy Modification Clause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The company reserves the right to revise rental rates, EMI structures, or other payment terms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            In case of changes, stakeholders will be notified in advance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dealers or end-users unwilling to accept modifications may terminate the agreement, subject to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Enrollment Fee forfeiture (for dealers).</li>
            <li>Outstanding dues adjustment and repossession (for end-users).</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Termination of Agreement</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If terminated by the company for cause, or by the dealer/end-user voluntarily, the following applies:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Enrollment Fee is non-refundable.</li>
            <li>Security deposit may be used to offset pending dues.</li>
            <li>Any unpaid EMIs or late fees must be cleared before returning or transferring the battery.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Battery Condition & Return (if applicable)</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>If repossession occurs, the battery must be returned in its original working condition.</li>
            <li>Damages or tampering may result in additional recovery charges.</li>
          </ul>
        </section>
      </div>
    </div>
  );

  const renderTermsConditions = () => (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        These Terms and Conditions ("Terms") govern your use of TruPower's website and services. By using our platform, you agree to be bound by these terms.
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using TruPower's website, mobile application, or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Services Provided</h3>
          <p className="text-gray-700 leading-relaxed mb-3">TruPower provides:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Electric vehicle battery manufacturing and supply</li>
            <li>Battery leasing and financing services</li>
            <li>Technical support and maintenance services</li>
            <li>Information about battery technology and sustainability</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h3>
          <p className="text-gray-700 leading-relaxed mb-3">As a user, you agree to:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Follow proper battery handling and safety guidelines</li>
            <li>Report any issues or defects promptly</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Product Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We strive to provide accurate product information, but specifications may change without notice. All product descriptions, images, and specifications are for informational purposes and may not reflect the exact product you receive.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Pricing and Payment</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>All prices are subject to change without notice</li>
            <li>Prices include applicable taxes unless otherwise stated</li>
            <li>Payment must be made according to agreed terms</li>
            <li>Late payment may result in service suspension</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on our platform, including text, graphics, logos, and software, is the property of TruPower and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            TruPower shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Indemnification</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to indemnify and hold harmless TruPower from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Termination</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that violates these Terms or is harmful to other users.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Governing Law</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in Gurgaon, India.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Information</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            For questions about these Terms, please contact us:
          </p>
          <ul className="list-none text-gray-700 leading-relaxed space-y-1">
            <li>Email: <a href="mailto:energy@strategyzinc.com" className="text-blue-600 hover:text-blue-700">energy@strategyzinc.com</a></li>
            <li>Phone: <a href="tel:+917337345560" className="text-blue-600 hover:text-blue-700">+91 7337345560</a></li>
          </ul>
        </section>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return renderPrivacyPolicy();
      case 'return':
        return renderReturnPolicy();
      case 'terms':
        return renderTermsConditions();
      default:
        return renderPrivacyPolicy();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16">
        <div className="pt-24 pb-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Policies & Legal</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Important information about our policies, terms, and your rights as a TruPower customer.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 shadow-sm'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-8 lg:p-12"
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;