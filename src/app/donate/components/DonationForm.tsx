'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type DonationType = 'one-time' | 'monthly';
type PaymentMethod = 'mpesa' | 'card' | 'paypal' | 'bank';

const presetAmounts = [30, 50, 100, 300, 500, 1000, 5000];

const donationImpact: Record<number, string> = {
  30: 'Provides indigenous seeds and basic farming tools for one smallholder farmer.',
  50: 'Training materials and composting supplies for 2 smallholder farmers',
  100: 'Supports one community dialogue and advocacy activities focused on womens land rights and food sovereignty reaching 20+ women',
  300: 'Funds one youth Agroecology mentorship initiative for climate resilience and community learning reaching 30+ youths. ',
  500: 'Sponsors a full  establishment of a school demo farm where students can practically learn agroecological practices',
  1000: 'Establishes a community Resilience Centre serving 50+ farming households',
  5000: 'Funds a full ART programme year:eg, ART Green Schools, Voices from the Roots, My food, my power campaign, Her Land; Her Power.',
};

const paymentMethods: { id: PaymentMethod; label: string; icon: string; description: string }[] = [
  { id: 'mpesa', label: 'M-Pesa', icon: '📱', description: 'Mobile money transfer' },
  { id: 'card', label: 'Card', icon: '💳', description: 'Visa / Mastercard' },
  { id: 'paypal', label: 'PayPal', icon: '🅿️', description: 'PayPal account' },
  { id: 'bank', label: 'Bank Transfer', icon: '🏦', description: 'Direct bank transfer' },
];

export default function DonationForm() {
  const [donationType, setDonationType] = useState<DonationType>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [coverFees, setCoverFees] = useState(false);
  const [inHonor, setInHonor] = useState(false);
  const [honorName, setHonorName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const effectiveAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
  const feeAmount = effectiveAmount ? effectiveAmount * 0.03 : 0;
  const totalAmount = effectiveAmount
    ? coverFees
      ? effectiveAmount + feeAmount
      : effectiveAmount
    : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!effectiveAmount || effectiveAmount <= 0) return;
    setLoading(true);
    // TODO: Integrate Stripe / PayPal / M-Pesa payment processing here
    // For M-Pesa: integrate Safaricom Daraja API
    // For Card: integrate Stripe Elements
    // For PayPal: integrate PayPal SDK
    // For Bank: display bank transfer details
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 sm:py-20 bg-background" aria-label="Donation confirmation">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-card border border-border rounded-3xl p-10 shadow-xl">
            <div className="text-5xl mb-5" aria-hidden="true">🌱</div>
            <h2 className="font-display text-3xl text-foreground mb-4">Thank You for Your Support!</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Your contribution of <strong className="text-primary">${totalAmount.toFixed(2)}</strong> helps strengthen grassroots communities across Africa. You will receive a confirmation email shortly.
            </p>
            <p className="text-muted-foreground text-sm italic">
              *Payment processing integration coming soon. ART will contact you directly to complete your donation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-background" aria-labelledby="donation-form-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* ── Left: Donation Form ── */}
          <div className="bg-card border border-border rounded-md shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-primary px-8 py-6">
              <h2 id="donation-form-heading" className="font-display text-2xl text-primary-foreground mb-1">
                Make a Donation
              </h2>
              <p className="text-primary-foreground/70 text-sm">
                100% of your contribution supports community programs
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8" noValidate>
              {/* Donation type toggle */}
              <div className="flex rounded-md overflow-hidden border border-border mb-8" role="group" aria-label="Donation frequency">
                {(['one-time', 'monthly'] as DonationType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setDonationType(type)}
                    className={`flex-1 py-3 text-sm font-semibold transition-all focus-ring ${
                      donationType === type
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-muted-foreground hover:bg-primary/5'
                    }`}
                    aria-pressed={donationType === type}
                  >
                    {type === 'one-time' ? 'One-Time' : 'Monthly Giving'}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <fieldset className="mb-6">
                <legend className="text-sm font-semibold text-foreground mb-3">Select Amount (USD)</legend>
                <div className="grid grid-cols-4 gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                      className={`py-3 rounded-md text-base font-display font-bold transition-all border-2 focus-ring ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-card text-foreground border-border hover:border-primary/40'
                      }`}
                      aria-pressed={selectedAmount === amount && !customAmount}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                {effectiveAmount && donationImpact[effectiveAmount] && (
                  <p className="text-xs text-primary mt-3 flex items-start gap-1.5">
                    <span aria-hidden="true">💚</span>
                    <span>
                      <strong>${effectiveAmount}</strong> {donationImpact[effectiveAmount]}
                    </span>
                  </p>
                )}
              </fieldset>

              {/* Custom amount */}
              <div className="mb-8">
                <label htmlFor="custom-amount" className="text-sm font-semibold text-foreground mb-2 block">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold" aria-hidden="true">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className="w-full pl-8 pr-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    aria-label="Custom donation amount in USD"
                  />
                </div>
              </div>

              {/* Payment method */}
              <fieldset className="mb-8">
                <legend className="text-sm font-semibold text-foreground mb-3">Payment Method</legend>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-lg border-2 text-center transition-all focus-ring ${
                        paymentMethod === method.id
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                      }`}
                      aria-pressed={paymentMethod === method.id}
                    >
                      <div className="text-2xl mb-1" aria-hidden="true">{method.icon}</div>
                      <div className="font-semibold text-foreground text-xs">{method.label}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">{method.description}</div>
                    </button>
                  ))}
                </div>
                {/* TODO: Render payment-specific UI based on selected method */}
                <p className="text-xs text-muted-foreground mt-3 italic">
                  * Payment processing is configured with {paymentMethod === 'mpesa' ? 'Safaricom Daraja API' : paymentMethod === 'card' ? 'Stripe' : paymentMethod === 'paypal' ? 'PayPal SDK' : 'bank transfer details'}.
                </p>
              </fieldset>

              {/* Additional options */}
              <div className="space-y-4 mb-8 pb-8 border-b border-border">
                {/* Cover fees */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={coverFees}
                      onChange={(e) => setCoverFees(e.target.checked)}
                      className="sr-only"
                      id="cover-fees"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${coverFees ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/50'}`}>
                      {coverFees && <Icon name="CheckIcon" size={12} className="text-primary-foreground" />}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Cover transaction fees</span>
                    {effectiveAmount && effectiveAmount > 0 && (
                      <span className="text-xs text-muted-foreground ml-2">(+${feeAmount.toFixed(2)})</span>
                    )}
                    <p className="text-xs text-muted-foreground mt-0.5">Ensures 100% of your donation reaches community programs.</p>
                  </div>
                </label>

                {/* In honor */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={inHonor}
                      onChange={(e) => setInHonor(e.target.checked)}
                      className="sr-only"
                      id="in-honor"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${inHonor ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/50'}`}>
                      {inHonor && <Icon name="CheckIcon" size={12} className="text-primary-foreground" />}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Donate in honor or memory of someone</span>
                </label>

                {inHonor && (
                  <div className="pl-8">
                    <input
                      type="text"
                      placeholder="Honoree's name"
                      value={honorName}
                      onChange={(e) => setHonorName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md bg-background text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-primary transition-colors"
                      aria-label="Honoree name for dedication"
                    />
                  </div>
                )}
              </div>

              {/* Total */}
              {effectiveAmount && effectiveAmount > 0 && (
                <div className="flex justify-between items-center mb-6 bg-primary/5 rounded-md px-5 py-4">
                  <span className="font-semibold text-foreground">
                    {donationType === 'monthly' ? 'Monthly Total' : 'Donation Total'}
                  </span>
                  <span className="font-display font-bold text-2xl text-primary">
                    ${totalAmount.toFixed(2)}
                    {donationType === 'monthly' && <span className="text-sm font-sans font-normal text-muted-foreground">/mo</span>}
                  </span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!effectiveAmount || effectiveAmount <= 0 || loading}
                className="btn-shimmer w-full bg-accent text-accent-foreground py-4 rounded-md font-semibold text-base hover:bg-accent/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus-ring flex items-center justify-center gap-2"
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Donate Now →
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
                <Icon name="LockClosedIcon" size={12} />
                Secure donation · ART Reg: CLG-87TKRADA
              </p>
            </form>
          </div>

          {/* ── Right: Impact Sidebar ── */}
          <aside className="space-y-5" aria-label="Donation impact information">
            {/* Impact story */}
            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <h2 className="font-display text-lg font-semibold mb-3">Your Support in Action</h2>
              <h2
            id="impact-cards-heading"
            className="font-display text-3xl text-accent sm:text-4xl"
          >
            How Donations Help
          </h2>

            </div>

            {/* What your gift does */}
            <div className="bg-card border border-border rounded-xl shadow-lg p-6">
              <h2 className="font-display text-base font-bold text-foreground mb-4">What your gift does</h2>
              <ul className="space-y-3 list-none">
                {Object.entries(donationImpact).map(([amt, impact]) => (
                  <li key={amt} className="flex gap-3 items-start text-sm">
                    <span className="font-bold text-accent shrink-0 mt-0.5">${amt}</span>
                    <span className="text-muted-foreground text-xs">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust signals */}
            <div className="bg-background border border-border rounded-xl p-5">
              <h2 className="font-semibold text-sm text-foreground mb-3">Why give to ART?</h2>
              <ul className="space-y-2 list-none text-xs text-muted-foreground">
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-0.5" aria-hidden="true">✓</span>
                  100% of net donations go directly to programs
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-0.5" aria-hidden="true">✓</span>
                  Registered nonprofit — Reg. CLG-87TKRADA
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-0.5" aria-hidden="true">✓</span>
                  Secure SSL payment processing
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-0.5" aria-hidden="true">✓</span>
                  Tax receipt emailed immediately
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-0.5" aria-hidden="true">✓</span>
                  Cancel monthly giving anytime
                </li>
              </ul>
              <a
                href="/impact#annual-report"
                className="inline-flex items-center gap-1 mt-4 text-xs text-primary font-semibold hover:underline"
              >
                Download our Annual Report →
              </a>
            </div>

            {/* Payment security badges */}
            <div className="flex items-center justify-center gap-4 py-3 px-4 bg-card border border-border rounded-xl">
              <span className="text-xs text-muted">Secured by</span>
              <span className="font-bold text-sm text-muted-foreground">Stripe</span>
              <span className="text-border" aria-hidden="true">|</span>
              <span className="font-bold text-sm text-blue-600">PayPal</span>
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}