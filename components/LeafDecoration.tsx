import React from 'react';

type LeafVariant = 'cluster' | 'single' | 'vertical' | 'bottom-right' | 'top-right' | 'bottom-left' | 'leaf' | 'palm';

interface LeafDecorationProps {
  className?: string;
  variant?: LeafVariant;
  color?: string;
}

export default function LeafDecoration({
  className = '',
  variant = 'cluster',
  color = '#7E8A56',
}: LeafDecorationProps) {
  const variants: Record<LeafVariant, React.ReactNode> = {
    palm: (
      <svg viewBox="0 0 270 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Rachis — central curved stem */}
        <path d="M133 416 C132 350 131 275 130 200 C129 125 130 60 131 8"
          stroke={color} strokeWidth="2.5" strokeOpacity="0.60" strokeLinecap="round" />
        {/* Right leaflets — open bezier strokes, lift then droop */}
        <path d="M134 370 C178 358 218 369 226 373" stroke={color} strokeWidth="1.5" strokeOpacity="0.70" strokeLinecap="round" />
        <path d="M133 346 C174 333 211 344 219 348" stroke={color} strokeWidth="1.5" strokeOpacity="0.67" strokeLinecap="round" />
        <path d="M132 322 C170 308 203 319 211 323" stroke={color} strokeWidth="1.5" strokeOpacity="0.64" strokeLinecap="round" />
        <path d="M132 298 C165 283 196 294 204 298" stroke={color} strokeWidth="1.4" strokeOpacity="0.62" strokeLinecap="round" />
        <path d="M131 275 C161 259 188 270 196 274" stroke={color} strokeWidth="1.4" strokeOpacity="0.59" strokeLinecap="round" />
        <path d="M131 253 C157 236 181 247 189 251" stroke={color} strokeWidth="1.4" strokeOpacity="0.56" strokeLinecap="round" />
        <path d="M130 232 C153 214 174 225 182 229" stroke={color} strokeWidth="1.3" strokeOpacity="0.53" strokeLinecap="round" />
        <path d="M130 212 C150 193 167 204 175 208" stroke={color} strokeWidth="1.3" strokeOpacity="0.50" strokeLinecap="round" />
        <path d="M130 193 C146 173 161 184 169 188" stroke={color} strokeWidth="1.3" strokeOpacity="0.48" strokeLinecap="round" />
        <path d="M130 175 C143 155 155 166 163 170" stroke={color} strokeWidth="1.2" strokeOpacity="0.46" strokeLinecap="round" />
        <path d="M130 158 C140 138 150 149 158 153" stroke={color} strokeWidth="1.2" strokeOpacity="0.44" strokeLinecap="round" />
        <path d="M130 142 C138 122 145 133 153 137" stroke={color} strokeWidth="1.2" strokeOpacity="0.42" strokeLinecap="round" />
        <path d="M130 127 C136 108 141 119 148 123" stroke={color} strokeWidth="1.1" strokeOpacity="0.40" strokeLinecap="round" />
        <path d="M130 113 C134 95 138 106 144 110" stroke={color} strokeWidth="1.1" strokeOpacity="0.38" strokeLinecap="round" />
        {/* Left leaflets — mirror of right */}
        <path d="M134 370 C88 358 44 369 36 373" stroke={color} strokeWidth="1.5" strokeOpacity="0.70" strokeLinecap="round" />
        <path d="M133 346 C90 333 51 344 43 348" stroke={color} strokeWidth="1.5" strokeOpacity="0.67" strokeLinecap="round" />
        <path d="M132 322 C92 308 59 319 51 323" stroke={color} strokeWidth="1.5" strokeOpacity="0.64" strokeLinecap="round" />
        <path d="M132 298 C97 283 66 294 58 298" stroke={color} strokeWidth="1.4" strokeOpacity="0.62" strokeLinecap="round" />
        <path d="M131 275 C101 259 74 270 66 274" stroke={color} strokeWidth="1.4" strokeOpacity="0.59" strokeLinecap="round" />
        <path d="M131 253 C105 236 81 247 73 251" stroke={color} strokeWidth="1.4" strokeOpacity="0.56" strokeLinecap="round" />
        <path d="M130 232 C107 214 88 225 80 229" stroke={color} strokeWidth="1.3" strokeOpacity="0.53" strokeLinecap="round" />
        <path d="M130 212 C110 193 95 204 87 208" stroke={color} strokeWidth="1.3" strokeOpacity="0.50" strokeLinecap="round" />
        <path d="M130 193 C114 173 101 184 93 188" stroke={color} strokeWidth="1.3" strokeOpacity="0.48" strokeLinecap="round" />
        <path d="M130 175 C117 155 107 166 99 170" stroke={color} strokeWidth="1.2" strokeOpacity="0.46" strokeLinecap="round" />
        <path d="M130 158 C120 138 112 149 104 153" stroke={color} strokeWidth="1.2" strokeOpacity="0.44" strokeLinecap="round" />
        <path d="M130 142 C122 122 117 133 109 137" stroke={color} strokeWidth="1.2" strokeOpacity="0.42" strokeLinecap="round" />
        <path d="M130 127 C124 108 121 119 114 123" stroke={color} strokeWidth="1.1" strokeOpacity="0.40" strokeLinecap="round" />
        <path d="M130 113 C126 95 124 106 118 110" stroke={color} strokeWidth="1.1" strokeOpacity="0.38" strokeLinecap="round" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 80 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Leaf body */}
        <path d="M40 6 C62 28 72 75 72 110 C72 145 62 192 40 214 C18 192 8 145 8 110 C8 75 18 28 40 6 Z"
          fill={color} fillOpacity="0.18" stroke={color} strokeOpacity="0.25" strokeWidth="0.8" />
        {/* Center spine */}
        <path d="M40 6 L40 214" stroke={color} strokeWidth="1" strokeOpacity="0.30" strokeLinecap="round" />
        {/* Left veins */}
        <path d="M40 45 C28 50 20 58 15 68" stroke={color} strokeWidth="0.8" strokeOpacity="0.22" strokeLinecap="round" />
        <path d="M40 80 C26 87 17 96 12 108" stroke={color} strokeWidth="0.8" strokeOpacity="0.22" strokeLinecap="round" />
        <path d="M40 115 C26 120 17 129 13 140" stroke={color} strokeWidth="0.8" strokeOpacity="0.20" strokeLinecap="round" />
        <path d="M40 150 C28 154 20 161 16 170" stroke={color} strokeWidth="0.8" strokeOpacity="0.18" strokeLinecap="round" />
        {/* Right veins */}
        <path d="M40 45 C52 50 60 58 65 68" stroke={color} strokeWidth="0.8" strokeOpacity="0.22" strokeLinecap="round" />
        <path d="M40 80 C54 87 63 96 68 108" stroke={color} strokeWidth="0.8" strokeOpacity="0.22" strokeLinecap="round" />
        <path d="M40 115 C54 120 63 129 67 140" stroke={color} strokeWidth="0.8" strokeOpacity="0.20" strokeLinecap="round" />
        <path d="M40 150 C52 154 60 161 64 170" stroke={color} strokeWidth="0.8" strokeOpacity="0.18" strokeLinecap="round" />
      </svg>
    ),
    cluster: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M160 180C160 180 140 140 100 130C60 120 40 80 40 80" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M170 150C170 150 150 120 120 110C90 100 75 70 75 70" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M180 120C180 120 165 95 140 85C115 75 105 50 105 50" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="100" cy="130" rx="25" ry="15" fill={color} opacity="0.15"/>
        <ellipse cx="120" cy="110" rx="20" ry="12" fill={color} opacity="0.12"/>
        <ellipse cx="140" cy="85" rx="18" ry="10" fill={color} opacity="0.1"/>
        <path d="M40 80C35 75 30 78 28 85C26 92 30 98 35 95C40 92 42 85 40 80Z" fill={color} opacity="0.2"/>
        <path d="M75 70C70 65 65 68 63 75C61 82 65 88 70 85C75 82 77 75 75 70Z" fill={color} opacity="0.18"/>
        <path d="M105 50C100 45 95 48 93 55C91 62 95 68 100 65C105 62 107 55 105 50Z" fill={color} opacity="0.15"/>
      </svg>
    ),
    single: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M50 90C50 90 45 60 50 40C55 20 70 10 70 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M50 40C40 35 35 40 33 50C31 60 38 68 48 62" fill={color} opacity="0.15"/>
        <path d="M55 55C48 52 44 56 42 63C40 70 45 75 52 72" fill={color} opacity="0.12"/>
      </svg>
    ),
    vertical: (
      <svg viewBox="0 0 60 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M30 400C30 400 25 350 30 300C35 250 20 200 30 150C40 100 25 50 30 0" stroke={color} strokeWidth="1" strokeLinecap="round"/>
        <ellipse cx="30" cy="300" rx="15" ry="25" fill={color} opacity="0.1"/>
        <ellipse cx="25" cy="220" rx="12" ry="20" fill={color} opacity="0.08"/>
        <ellipse cx="35" cy="140" rx="14" ry="22" fill={color} opacity="0.1"/>
        <ellipse cx="28" cy="60" rx="10" ry="18" fill={color} opacity="0.08"/>
      </svg>
    ),
    'bottom-right': (
      <svg viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M20 230C20 230 60 180 120 160C180 140 220 80 220 80" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 250C50 250 85 200 135 180C185 160 210 110 210 110" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M0 200C0 200 40 160 90 145C140 130 170 85 170 85" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="120" cy="160" rx="40" ry="25" fill={color} opacity="0.12"/>
        <ellipse cx="135" cy="180" rx="35" ry="22" fill={color} opacity="0.1"/>
        <ellipse cx="90" cy="145" rx="30" ry="20" fill={color} opacity="0.08"/>
        <path d="M220 80C215 72 205 76 202 85C199 94 205 104 213 100C221 96 224 86 220 80Z" fill={color} opacity="0.18"/>
        <path d="M210 110C205 102 195 106 192 115C189 124 195 134 203 130C211 126 214 116 210 110Z" fill={color} opacity="0.15"/>
        <path d="M170 85C165 77 155 81 152 90C149 99 155 109 163 105C171 101 174 91 170 85Z" fill={color} opacity="0.12"/>
      </svg>
    ),
    'top-right': (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M160 20C160 20 130 60 100 80C70 100 40 130 40 130" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M170 50C170 50 145 80 120 95C95 110 70 135 70 135" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="100" cy="80" rx="28" ry="18" fill={color} opacity="0.12"/>
        <ellipse cx="120" cy="95" rx="24" ry="15" fill={color} opacity="0.1"/>
        <path d="M40 130C35 125 28 128 25 135C22 142 27 150 34 147C41 144 44 136 40 130Z" fill={color} opacity="0.15"/>
        <path d="M70 135C65 130 58 133 55 140C52 147 57 155 64 152C71 149 74 141 70 135Z" fill={color} opacity="0.12"/>
      </svg>
    ),
    'bottom-left': (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M20 160C20 160 50 120 80 100C110 80 140 50 140 50" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 130C10 130 35 100 60 85C85 70 110 45 110 45" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="80" cy="100" rx="28" ry="18" fill={color} opacity="0.12"/>
        <ellipse cx="60" cy="85" rx="24" ry="15" fill={color} opacity="0.1"/>
        <path d="M140 50C145 45 152 48 155 55C158 62 153 70 146 67C139 64 136 56 140 50Z" fill={color} opacity="0.15"/>
        <path d="M110 45C115 40 122 43 125 50C128 57 123 65 116 62C109 59 106 51 110 45Z" fill={color} opacity="0.12"/>
      </svg>
    ),
  };

  return <div className={className}>{variants[variant]}</div>;
}
