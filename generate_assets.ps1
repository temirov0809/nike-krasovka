$outputDir = "c:\Users\Asus\Downloads\Google Antigravity\assets\images"
if (!(Test-Path $outputDir)) { New-Item -ItemType Directory -Path $outputDir -Force }

$models = @(
    @{
        filename = "nike-dunk-low.svg"
        name = "Nike Dunk Low Retro"
        primary = "#18181B"
        secondary = "#FFFFFF"
        swoosh = "#09090B"
        sole_base = "#18181B"
        sole_mid = "#FFFFFF"
        accent = "#E4E4E7"
        text_tag = "DUNK RETRO"
    },
    @{
        filename = "nike-air-jordan-1.svg"
        name = "Air Jordan 1 Retro Low"
        primary = "#DC2626"
        secondary = "#FFFFFF"
        swoosh = "#18181B"
        sole_base = "#DC2626"
        sole_mid = "#FAF7F2"
        accent = "#18181B"
        text_tag = "JORDAN 1"
    },
    @{
        filename = "nike-vomero-5.svg"
        name = "Nike Zoom Vomero 5"
        primary = "#9CA3AF"
        secondary = "#F3F4F6"
        swoosh = "#374151"
        sole_base = "#1F2937"
        sole_mid = "#E5E7EB"
        accent = "#6B7280"
        text_tag = "VOMERO 5"
    },
    @{
        filename = "nike-air-max-plus.svg"
        name = "Nike Air Max Plus"
        primary = "#0F172A"
        secondary = "#EA580C"
        swoosh = "#F59E0B"
        sole_base = "#0F172A"
        sole_mid = "#FFFFFF"
        accent = "#FB923C"
        text_tag = "TUNED AIR"
    },
    @{
        filename = "nike-p6000.svg"
        name = "Nike P-6000 Metallic"
        primary = "#CBD5E1"
        secondary = "#FFFFFF"
        swoosh = "#EF4444"
        sole_base = "#1E293B"
        sole_mid = "#F1F5F9"
        accent = "#94A3B8"
        text_tag = "BOWMAN SERIES"
    },
    @{
        filename = "nike-pegasus-2k5.svg"
        name = "Nike Air Pegasus 2K5"
        primary = "#2563EB"
        secondary = "#F8FAFC"
        swoosh = "#1D4ED8"
        sole_base = "#0F172A"
        sole_mid = "#FFFFFF"
        accent = "#60A5FA"
        text_tag = "PEGASUS AIR"
    },
    @{
        filename = "nike-cortez.svg"
        name = "Nike Cortez Vintage '72"
        primary = "#FFFFFF"
        secondary = "#F1F5F9"
        swoosh = "#EF4444"
        sole_base = "#FFFFFF"
        sole_mid = "#2563EB"
        accent = "#94A3B8"
        text_tag = "CORTEZ '72"
    },
    @{
        filename = "hero-sneaker.svg"
        name = "Nike Air Max Pulse Editorial Hero"
        primary = "#18181B"
        secondary = "#FAFAFA"
        swoosh = "#09090B"
        sole_base = "#18181B"
        sole_mid = "#FFFFFF"
        accent = "#10B981"
        text_tag = "AIR MAX 2026"
    }
)

foreach ($m in $models) {
    $slug = $m.filename.Replace(".svg", "")
    $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" fill="none">
  <defs>
    <filter id="shadow-$slug" x="-15%" y="-15%" width="130%" height="145%">
      <feDropShadow dx="0" dy="26" stdDeviation="22" flood-color="#0a0a0a" flood-opacity="0.14"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0a0a0a" flood-opacity="0.08"/>
    </filter>
    <linearGradient id="ground-$slug" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="50%" stop-color="#000000" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="grad-mid-$slug" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="$($m.sole_mid)" />
      <stop offset="100%" stop-color="$($m.accent)" stop-opacity="0.25" />
    </linearGradient>
  </defs>

  <ellipse cx="400" cy="425" rx="310" ry="22" fill="url(#ground-$slug)" filter="blur(8px)"/>

  <g filter="url(#shadow-$slug)" transform="translate(40, 25)">
    <path d="M 120 355 C 130 360, 180 370, 240 370 L 530 370 C 600 370, 640 355, 665 330 C 670 325, 665 310, 640 310 C 570 310, 480 305, 420 305 C 340 305, 250 315, 180 315 C 130 315, 105 330, 120 355 Z" fill="$($m.sole_base)" stroke="#333333" stroke-width="1.5"/>
    <path d="M 125 340 C 140 325, 180 315, 250 315 L 530 315 C 585 315, 625 320, 650 325 L 635 295 C 570 295, 480 290, 420 290 C 340 290, 250 300, 180 300 C 130 300, 115 315, 125 340 Z" fill="url(#grad-mid-$slug)" stroke="#E5E7EB" stroke-width="1"/>

    <rect x="200" y="322" width="60" height="14" rx="7" fill="#E2E8F0" stroke="$($m.accent)" stroke-width="1.5" opacity="0.9"/>
    <circle cx="215" cy="329" r="3" fill="$($m.accent)"/>
    <circle cx="230" cy="329" r="3" fill="$($m.accent)"/>
    <circle cx="245" cy="329" r="3" fill="$($m.accent)"/>

    <path d="M 135 305 C 145 270, 165 240, 205 230 C 235 222, 275 235, 305 240 C 345 220, 395 180, 435 140 C 455 120, 485 125, 505 150 C 520 170, 525 200, 530 230 C 565 235, 620 260, 645 295 Z" fill="$($m.secondary)" stroke="#D1D5DB" stroke-width="1.5"/>

    <path d="M 135 305 C 150 280, 175 265, 215 265 C 240 265, 270 280, 305 290 L 305 310 C 245 310, 180 305, 135 305 Z" fill="$($m.primary)" opacity="0.95"/>
    <path d="M 505 230 C 540 235, 595 255, 640 295 L 610 305 C 570 305, 520 295, 495 285 Z" fill="$($m.primary)" opacity="0.95"/>

    <path d="M 525 235 C 555 240, 595 260, 620 288 C 575 292, 525 290, 495 285 C 495 260, 505 240, 525 235 Z" fill="$($m.secondary)" stroke="#E5E7EB" stroke-width="1"/>
    <circle cx="550" cy="265" r="2.5" fill="$($m.accent)"/>
    <circle cx="565" cy="270" r="2.5" fill="$($m.accent)"/>
    <circle cx="580" cy="275" r="2.5" fill="$($m.accent)"/>
    <circle cx="540" cy="273" r="2.5" fill="$($m.accent)"/>
    <circle cx="555" cy="278" r="2.5" fill="$($m.accent)"/>

    <path d="M 325 230 C 365 200, 415 160, 440 145 L 465 165 C 435 200, 385 240, 345 260 Z" fill="$($m.primary)" opacity="0.9"/>
    <line x1="360" y1="235" x2="390" y2="215" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
    <line x1="385" y1="215" x2="415" y2="190" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
    <line x1="410" y1="190" x2="440" y2="165" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
    <line x1="435" y1="165" x2="460" y2="150" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>

    <path d="M 180 230 C 170 190, 190 165, 230 165 C 260 165, 285 190, 290 220 Z" fill="$($m.primary)"/>
    <path d="M 235 165 L 290 145 C 310 140, 330 160, 320 185 Z" fill="$($m.accent)"/>

    <path d="M 225 270 C 285 280, 355 285, 405 260 C 465 230, 525 190, 555 175 C 525 205, 465 260, 415 285 C 355 315, 275 310, 205 285 C 190 280, 205 268, 225 270 Z" fill="$($m.swoosh)"/>

    <text x="180" y="260" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="9" fill="$($m.accent)" letter-spacing="2">$($m.text_tag)</text>
  </g>
</svg>
"@
    $targetPath = Join-Path $outputDir $m.filename
    [System.IO.File]::WriteAllText($targetPath, $svg, [System.Text.Encoding]::UTF8)
}

Write-Host "Generated all sneaker SVG assets successfully."
