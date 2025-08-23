import React from 'react'
import { motion } from 'framer-motion'

const Logo = ({ size = 'medium', animated = true, className = '' }) => {
  const sizes = {
    small: { width: 120, height: 40, fontSize: '14px' },
    medium: { width: 180, height: 60, fontSize: '18px' },
    large: { width: 240, height: 80, fontSize: '24px' }
  }

  const currentSize = sizes[size]

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
  }

  const waveVariants = {
    animate: {
      d: [
        "M0,20 Q15,10 30,20 T60,20",
        "M0,20 Q15,30 30,20 T60,20",
        "M0,20 Q15,10 30,20 T60,20"
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  }

  const LogoComponent = animated ? motion.div : 'div'
  const variants = animated ? logoVariants : {}

  return (
    <LogoComponent
      variants={variants}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      whileHover={animated ? { scale: 1.05 } : undefined}
      className={`logo-container ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
    >
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 240 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="240" height="80" rx="16" fill="url(#logoGradient)" style={{ filter: 'url(#glow)' }} />

        {/* Waves */}
        <motion.path variants={animated ? waveVariants : {}} animate={animated ? "animate" : undefined}
          d="M0,20 Q15,10 30,20 T60,20" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" transform="translate(20, 25)" />
        <motion.path variants={animated ? waveVariants : {}} animate={animated ? "animate" : undefined}
          d="M0,20 Q15,10 30,20 T60,20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" transform="translate(20, 35)" />

        {/* Microphone */}
        <g transform="translate(20, 20)">
          <rect x="12" y="8" width="8" height="16" rx="4" fill="white" opacity="0.9" />
          <circle cx="16" cy="32" r="3" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
          <line x1="16" y1="35" x2="16" y2="40" stroke="white" strokeWidth="2" opacity="0.8" />
          <line x1="12" y1="40" x2="20" y2="40" stroke="white" strokeWidth="2" opacity="0.8" />
        </g>

        {/* Text */}
        <g fill="url(#textGradient)">
          <text x="65" y="25" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">mr.local</text>
          <text x="65" y="45" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">NaaM</text>
          <text x="130" y="45" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#fbbf24">FM</text>
        </g>

        {/* Decorative */}
        <circle cx="200" cy="25" r="2" fill="rgba(255,255,255,0.6)" />
        <circle cx="210" cy="30" r="1.5" fill="rgba(255,255,255,0.4)" />
        <circle cx="220" cy="35" r="1" fill="rgba(255,255,255,0.3)" />

        {/* Signal */}
        <g transform="translate(190, 45)">
          <rect x="0" y="8" width="3" height="4" fill="rgba(255,255,255,0.5)" />
          <rect x="5" y="6" width="3" height="6" fill="rgba(255,255,255,0.7)" />
          <rect x="10" y="4" width="3" height="8" fill="rgba(255,255,255,0.9)" />
          <rect x="15" y="2" width="3" height="10" fill="white" />
        </g>
      </svg>
    </LogoComponent>
  )
}

export default Logo
