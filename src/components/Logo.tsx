import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  showTagline?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, showTagline = true, light = false }: LogoProps) {
  const textColor = light ? "text-white" : "text-sky-500";
  const taglineColor = light ? "text-white/60" : "text-sky-400";

  const Icon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <path
        d="M12 2L3 20H21L12 2Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M12 2L3 20H21L12 2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 14L12 6L16 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (iconOnly) return <Icon />;

  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <div className={`flex items-center gap-0.5 ${textColor}`}>
        <span className="text-2xl font-black tracking-tighter">CL</span>
        <div className="mx-0.5">
          <Icon />
        </div>
        <span className="text-2xl font-black tracking-tighter">RITIY</span>
      </div>
      {showTagline && (
        <span className={`text-[9px] font-black tracking-[0.4em] uppercase mt-0.5 ml-1 ${taglineColor}`}>
          Be Clear
        </span>
      )}
    </div>
  );
}
