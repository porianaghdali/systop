"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export default () => {
    const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 7,
      spacing: 35,
    },
    breakpoints: {
      "(max-width: 1440px)": {
        slides: { perView: 5, spacing: 25 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  })


  return (
    <div ref={sliderRef} className="keen-slider relative overflow-hidden">
      <div className="hidden sm:flex z-30 absolute top-0   right-0 w-[249px] h-full"style={{
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 37.75%, #FFFFFF 75.7%)"

      }}></div>
      <div className="hidden sm:flex z-30 absolute top-0  rotate-180 left-0 w-[249px] h-full"style={{
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 43.98%, #FFFFFF 81.93%)"

      }}></div>
      <div className="keen-slider__slide number-slide1">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide2">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide3">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide4">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide5">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide6">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide6">ارائه سریع خدمات</div>
      <div className="keen-slider__slide number-slide6">ارائه سریع خدمات</div>
    </div>
  )
}
