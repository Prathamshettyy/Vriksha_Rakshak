// src/components/EmblaCarouselButtons.tsx

import React from "react"
// The type import has been corrected here
import { type UseEmblaCarouselType } from "embla-carousel-react"

type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton = (props: DotButtonPropType) => {
  const { selected, onClick } = props

  return (
    <button
      className={`embla__dot ${selected ? "embla__dot--selected" : ""}`}
      type="button"
      onClick={onClick}
    />
  )
}

type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export const PrevButton = (props: PrevNextButtonPropType) => {
  const { enabled, onClick } = props

  return (
    <button
      className="embla__button embla__button--prev absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center disabled:hidden"
      onClick={onClick}
      disabled={!enabled}
    >
      <svg
        className="w-6 h-6"
        viewBox="137.718 -1.001 366.563 644"
        fill="currentColor"
      >
        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.66-60.42 0L181.28 350.2c-16.67-16.67-16.67-43.76 0-60.42l247.08-247.08z" />
      </svg>
    </button>
  )
}

export const NextButton = (props: PrevNextButtonPropType) => {
  const { enabled, onClick } = props

  return (
    <button
      className="embla__button embla__button--next absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center disabled:hidden"
      onClick={onClick}
      disabled={!enabled}
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 238.003 238.003"
        fill="currentColor"
      >
        <path d="M181.776 107.71L78.705 4.637c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.071c6.198-6.198 6.198-16.273 0-22.47z" />
      </svg>
    </button>
  )
}