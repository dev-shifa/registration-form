import React from 'react';

type PasswordStrengthProps = {
  password: string;
};

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = getStrength();
  const bars = Array(4).fill(0).map((_, i) => i < strength);

  return (
    <div className="mt-2">
      <div className="flex gap-1">
        {bars.map((filled, i) => (
          <div
            key={i}
            className={`h-1 w-full rounded-full transition-colors ${
              filled
                ? [
                    'bg-red-500',
                    'bg-orange-500',
                    'bg-yellow-500',
                    'bg-green-500',
                  ][strength - 1]
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="mt-1 text-xs text-gray-600">
        {[
          'Very weak',
          'Weak',
          'Medium',
          'Strong',
          'Very strong',
        ][strength]}
      </p>
    </div>
  );
}