import React, { useState, useEffect } from 'react';

/**
 * BackgroundVideoLayer Component
 * 
 * Premium site-wide background video that plays on loop
 * Fixed positioning ensures it persists across all pages
 * Carefully tuned opacity and z-index for optimal layering
 */
export default function BackgroundVideoLayer() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      {/* Video Background - Fixed to viewport */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-10"
        style={{
          zIndex: -1,
          pointerEvents: 'none',
        }}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/homevideo.mp4.mp4" type="video/mp4" />
      </video>

      {/* Premium Overlay - Enhances content readability */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-sky-50/40 via-transparent to-white/20"
        style={{
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* Loading fallback background */}
      {!isVideoLoaded && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-sky-50"
          style={{
            zIndex: -2,
            pointerEvents: 'none',
          }}
        />
      )}
    </>
  );
}
