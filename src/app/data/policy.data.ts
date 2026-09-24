// Operational figures quoted on the site. These reflect how reception actually
// charges, which is the source of truth over the older written policies. Copy in
// both languages interpolates them, so a change here updates every sentence.

export const POLICY = {
    depositPerPassenger: '500',
    surchargeFromKg: '100',
    surchargePerKg: '35',
    cardFeePercent: '5',
    paypalFeePercent: '6.5',
    pesosPerDollar: '16',
    arrivalTime: '5:15',
    flightMinutes: '45',
    minimumAge: '4',
    weightWarningKg: '200',
    photosFrom: '500',
    photosTo: '3,000'
} as const;
