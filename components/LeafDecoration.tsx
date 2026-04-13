import React from 'react';

type LeafVariant = 'cluster' | 'single' | 'vertical' | 'bottom-right' | 'top-right' | 'bottom-left' | 'leaf' | 'palm' | 'brand-cluster' | 'brand-stem';

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
        {/* Right leaflets — closed filled blades, fillOpacity graduates base→tip */}
        <path d="M134 368 C175 361 216 374 226 378 C218 383 175 377 134 372 Z" fill={color} fillOpacity="0.62" stroke={color} strokeWidth="0.4" strokeOpacity="0.25" />
        <path d="M133 344 C172 337 209 349 219 353 C211 358 172 352 133 348 Z" fill={color} fillOpacity="0.58" stroke={color} strokeWidth="0.4" strokeOpacity="0.25" />
        <path d="M132 320 C168 313 201 324 211 328 C203 333 168 328 132 324 Z" fill={color} fillOpacity="0.55" stroke={color} strokeWidth="0.4" strokeOpacity="0.22" />
        <path d="M132 296 C164 289 194 299 204 303 C196 308 164 304 132 300 Z" fill={color} fillOpacity="0.52" stroke={color} strokeWidth="0.4" strokeOpacity="0.22" />
        <path d="M131 273 C160 266 186 275 196 279 C188 284 160 281 131 277 Z" fill={color} fillOpacity="0.49" stroke={color} strokeWidth="0.4" strokeOpacity="0.20" />
        <path d="M131 251 C157 244 179 253 189 257 C181 262 157 258 131 255 Z" fill={color} fillOpacity="0.46" stroke={color} strokeWidth="0.4" strokeOpacity="0.20" />
        <path d="M130 230 C153 223 172 232 182 236 C174 241 153 239 130 234 Z" fill={color} fillOpacity="0.43" stroke={color} strokeWidth="0.35" strokeOpacity="0.18" />
        <path d="M130 210 C150 203 165 212 175 216 C167 221 150 219 130 214 Z" fill={color} fillOpacity="0.41" stroke={color} strokeWidth="0.35" strokeOpacity="0.18" />
        <path d="M130 191 C148 185 159 193 169 197 C161 202 148 199 130 195 Z" fill={color} fillOpacity="0.39" stroke={color} strokeWidth="0.35" strokeOpacity="0.16" />
        <path d="M130 173 C145 167 153 175 163 179 C155 184 145 181 130 177 Z" fill={color} fillOpacity="0.37" stroke={color} strokeWidth="0.35" strokeOpacity="0.16" />
        <path d="M130 156 C143 150 148 158 158 162 C150 167 143 164 130 160 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="0.3" strokeOpacity="0.14" />
        <path d="M130 140 C140 134 143 142 153 146 C145 151 140 148 130 144 Z" fill={color} fillOpacity="0.33" stroke={color} strokeWidth="0.3" strokeOpacity="0.14" />
        <path d="M130 125 C138 120 138 127 148 131 C140 136 138 134 130 129 Z" fill={color} fillOpacity="0.31" stroke={color} strokeWidth="0.3" strokeOpacity="0.12" />
        <path d="M130 111 C136 107 134 113 144 117 C136 122 136 118 130 115 Z" fill={color} fillOpacity="0.29" stroke={color} strokeWidth="0.3" strokeOpacity="0.12" />
        {/* Left leaflets — mirror of right */}
        <path d="M134 368 C93 361 48 374 38 378 C46 383 93 377 134 372 Z" fill={color} fillOpacity="0.62" stroke={color} strokeWidth="0.4" strokeOpacity="0.25" />
        <path d="M133 344 C92 337 55 349 45 353 C53 358 92 352 133 348 Z" fill={color} fillOpacity="0.58" stroke={color} strokeWidth="0.4" strokeOpacity="0.25" />
        <path d="M132 320 C96 313 63 324 53 328 C61 333 96 328 132 324 Z" fill={color} fillOpacity="0.55" stroke={color} strokeWidth="0.4" strokeOpacity="0.22" />
        <path d="M132 296 C100 289 70 299 60 303 C68 308 100 304 132 300 Z" fill={color} fillOpacity="0.52" stroke={color} strokeWidth="0.4" strokeOpacity="0.22" />
        <path d="M131 273 C104 266 78 275 68 279 C76 284 104 281 131 277 Z" fill={color} fillOpacity="0.49" stroke={color} strokeWidth="0.4" strokeOpacity="0.20" />
        <path d="M131 251 C107 244 85 253 75 257 C83 262 107 258 131 255 Z" fill={color} fillOpacity="0.46" stroke={color} strokeWidth="0.4" strokeOpacity="0.20" />
        <path d="M130 230 C111 223 92 232 82 236 C90 241 111 239 130 234 Z" fill={color} fillOpacity="0.43" stroke={color} strokeWidth="0.35" strokeOpacity="0.18" />
        <path d="M130 210 C114 203 99 212 89 216 C97 221 114 219 130 214 Z" fill={color} fillOpacity="0.41" stroke={color} strokeWidth="0.35" strokeOpacity="0.18" />
        <path d="M130 191 C116 185 105 193 95 197 C103 202 116 199 130 195 Z" fill={color} fillOpacity="0.39" stroke={color} strokeWidth="0.35" strokeOpacity="0.16" />
        <path d="M130 173 C119 167 111 175 101 179 C109 184 119 181 130 177 Z" fill={color} fillOpacity="0.37" stroke={color} strokeWidth="0.35" strokeOpacity="0.16" />
        <path d="M130 156 C121 150 116 158 106 162 C114 167 121 164 130 160 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="0.3" strokeOpacity="0.14" />
        <path d="M130 140 C124 134 121 142 111 146 C119 151 124 148 130 144 Z" fill={color} fillOpacity="0.33" stroke={color} strokeWidth="0.3" strokeOpacity="0.14" />
        <path d="M130 125 C126 120 126 127 116 131 C124 136 126 134 130 129 Z" fill={color} fillOpacity="0.31" stroke={color} strokeWidth="0.3" strokeOpacity="0.12" />
        <path d="M130 111 C128 107 130 113 120 117 C128 122 128 118 130 115 Z" fill={color} fillOpacity="0.29" stroke={color} strokeWidth="0.3" strokeOpacity="0.12" />
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
    'brand-cluster': (
      <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="bcGrad1" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#5DB83A"/>
            <stop offset="55%" stopColor="#4E8A2A"/>
            <stop offset="100%" stopColor="#6B7A3C"/>
          </radialGradient>
          <radialGradient id="bcGrad2" cx="55%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#62C040"/>
            <stop offset="100%" stopColor="#7A8A42"/>
          </radialGradient>
          <radialGradient id="bcGrad3" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#58B035"/>
            <stop offset="100%" stopColor="#72803E"/>
          </radialGradient>
        </defs>
        {/* Right outer blade */}
        <path d="M148 352 C160 330 195 295 215 245 C235 195 238 140 228 85 C218 35 192 10 166 4 C184 28 192 68 188 118 C184 168 170 220 148 352 Z"
          fill="url(#bcGrad1)"/>
        {/* Left outer blade */}
        <path d="M152 352 C140 330 105 295 85 245 C65 195 62 140 72 85 C82 35 108 10 134 4 C116 28 108 68 112 118 C116 168 130 220 152 352 Z"
          fill="url(#bcGrad2)"/>
        {/* Center blade */}
        <path d="M150 348 C145 310 140 265 142 210 C144 158 148 100 150 10 C152 100 156 158 158 210 C160 265 155 310 150 348 Z"
          fill="url(#bcGrad3)"/>
        {/* White highlight curves — depth/sheen */}
        <path d="M150 352 C158 310 175 260 188 200 C196 160 195 110 184 65"
          stroke="white" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.55" fill="none"/>
        <path d="M150 352 C142 310 125 260 112 200 C104 160 105 110 116 65"
          stroke="white" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.45" fill="none"/>
        <path d="M150 348 C148 300 147 250 148 190 C149 140 150 80 150 14"
          stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.35" fill="none"/>
      </svg>
    ),
    'brand-stem': (
      <svg viewBox="0 0 260 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="bsGrad1" cx="45%" cy="25%" r="65%">
            <stop offset="0%" stopColor="#5DB83A"/>
            <stop offset="55%" stopColor="#4E8A2A"/>
            <stop offset="100%" stopColor="#6B7A3C"/>
          </radialGradient>
          <radialGradient id="bsGrad2" cx="55%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#62C040"/>
            <stop offset="100%" stopColor="#7A8A42"/>
          </radialGradient>
          <radialGradient id="bsGrad3" cx="50%" cy="22%" r="60%">
            <stop offset="0%" stopColor="#58B035"/>
            <stop offset="100%" stopColor="#72803E"/>
          </radialGradient>
        </defs>
        {/* Right outer blade */}
        <path d="M128 310 C140 288 175 253 195 203 C215 153 218 98 208 43 C198 -7 172 -32 146 -38 C164 -14 172 26 168 76 C164 126 150 178 128 310 Z"
          fill="url(#bsGrad1)"/>
        {/* Left outer blade */}
        <path d="M132 310 C120 288 85 253 65 203 C45 153 42 98 52 43 C62 -7 88 -32 114 -38 C96 -14 88 26 92 76 C96 126 110 178 132 310 Z"
          fill="url(#bsGrad2)"/>
        {/* Center blade */}
        <path d="M130 306 C125 268 120 223 122 168 C124 116 128 58 130 -32 C132 58 136 116 138 168 C140 223 135 268 130 306 Z"
          fill="url(#bsGrad3)"/>
        {/* White highlight curves */}
        <path d="M130 310 C138 268 155 218 168 158 C176 118 175 68 164 23"
          stroke="white" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.55" fill="none"/>
        <path d="M130 310 C122 268 105 218 92 158 C84 118 85 68 96 23"
          stroke="white" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.45" fill="none"/>
        {/* S-curve stem from base down-right */}
        <path d="M130 315 C128 355 120 385 118 420 C116 455 125 478 145 492"
          stroke="#6B7A3C" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.80" fill="none"/>
        <path d="M130 315 C128 355 120 385 118 420 C116 455 125 478 145 492"
          stroke="#4E8A2A" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.50" fill="none"/>
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
