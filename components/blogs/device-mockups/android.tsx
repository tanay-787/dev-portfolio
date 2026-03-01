import { useId } from "react"
import type { HTMLAttributes } from "react"

// ─── Frame geometry ───────────────────────────────────────────────────────────
const W   = 380   // total SVG viewBox width  (matches path extents)
const H   = 830   // total SVG viewBox height

// Screen (content) area inside the frame
const SX  = 9     // screen left
const SY  = 14    // screen top
const SW  = 360   // screen width
const SH  = 800   // screen height
const SRX = 33    // screen corner radius x
const SRY = 25    // screen corner radius y

// Percentages for the HTML media overlay div
const LEFT_PCT   = (SX / W)  * 100   // ≈  2.368
const TOP_PCT    = (SY / H)  * 100   // ≈  1.687
const WIDTH_PCT  = (SW / W)  * 100   // ≈ 94.737
const HEIGHT_PCT = (SH / H)  * 100   // ≈ 96.386

// Border-radius percentages relative to the media div's own dimensions
const RX_PCT = (SRX / SW) * 100      // ≈  9.167 (% of div width)
const RY_PCT = (SRY / SH) * 100      //  = 3.125 (% of div height)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AndroidProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  videoSrc?: string
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Android({
  src,
  videoSrc,
  className,
  style,
  ...props
}: AndroidProps) {
  const uid    = useId()
  const maskId = `and-mask${uid}`
  const clipId = `and-clip${uid}`

  const hasVideo = !!videoSrc
  const hasMedia = hasVideo || !!src

  return (
    <div
      className={`relative block w-full max-w-[360px] mx-auto leading-none ${className ?? ""}`}
      style={{ aspectRatio: `${W}/${H}`, ...style }}
      {...props}
    >
      {/* ── Video layer ──────────────────────────────────────────────────── */}
      {hasVideo && (
        <div
          className="absolute z-0 overflow-hidden"
          style={{
            left:         `${LEFT_PCT}%`,
            top:          `${TOP_PCT}%`,
            width:        `${WIDTH_PCT}%`,
            height:       `${HEIGHT_PCT}%`,
            borderRadius: `${RX_PCT}% / ${RY_PCT}%`,
          }}
        >
          {videoSrc!.includes("youtube.com") || videoSrc!.includes("youtu.be") ? (
            <iframe
              src={videoSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          ) : (
            <video
              className="block size-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
      )}

      {/* ── Image layer ──────────────────────────────────────────────────── */}
      {!hasVideo && src && (
        <div
          className="pointer-events-none absolute z-0 overflow-hidden"
          style={{
            left:         `${LEFT_PCT}%`,
            top:          `${TOP_PCT}%`,
            width:        `${WIDTH_PCT}%`,
            height:       `${HEIGHT_PCT}%`,
            borderRadius: `${RX_PCT}% / ${RY_PCT}%`,
          }}
        >
          <img
            src={src}
            alt=""
            className="block size-full object-cover object-top"
          />
        </div>
      )}

      {/* ── SVG frame (z-10, drawn over media) ───────────────────────────── */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-10 size-full pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      >
        <defs>
          {/* Punch-out mask: white = visible frame, black = transparent screen hole */}
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={W} height={H} fill="white" />
            <rect x={SX} y={SY} width={SW} height={SH} rx={SRX} ry={SRY} fill="black" />
          </mask>

          {/* Clip path keeps everything inside the viewBox */}
          <clipPath id={clipId}>
            <rect width={W} height={H} fill="white" />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          {/* ── Phone frame paths – screen area masked out when media present ── */}
          <g mask={hasMedia ? `url(#${maskId})` : undefined}>
            {/* Side buttons */}
            <path
              d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
              className="fill-[#E5E5E5] dark:fill-[#404040]"
            />
            <path
              d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
              className="fill-[#E5E5E5] dark:fill-[#404040]"
            />
            {/* Outer phone body */}
            <path
              d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
              className="fill-[#E5E5E5] dark:fill-[#404040]"
            />
            {/* Inner phone border */}
            <path
              d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
              className="fill-white dark:fill-[#262626]"
            />
            {/* Screen background (visible only when no media) */}
            <path
              d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
              className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]"
            />
          </g>

          {/* ── Camera dot – outside mask so it always renders over media ─── */}
          <circle cx="189" cy="28" r="9" className="fill-white dark:fill-[#262626]" />
          <circle cx="189" cy="28" r="4" className="fill-[#E5E5E5] dark:fill-[#404040]" />
        </g>
      </svg>
    </div>
  )
}
