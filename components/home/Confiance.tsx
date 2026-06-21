"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Badge } from "../ui/badge"

const stats = [
  { target: 15,   suffix: "+", pad: true,  label: "Années d'expérience" },
  { target: 5000, suffix: "+", pad: false, label: "Implants posés"       },
]

const useCountUp = (target: number, duration: number, started: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    setCount(0)
    const startTime = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [started, target, duration])

  return count
}

const StatNumber = ({
  target,
  suffix,
  pad,
  label,
  started,
}: (typeof stats)[0] & { started: boolean }) => {
  const count = useCountUp(target, 1500, started)
  const display = pad ? String(count).padStart(2, "0") : String(count)

  return (
    <div className="flex flex-col gap-2 items-center lg:items-start">
      <span className="text-[32.83px] lg:text-[44.7px] font-bold leading-none text-primary">
        {display}{suffix}
      </span>
      <span className="pl-3 text-center lg:text-left text-[12.48px] lg:text-[17px] font-medium uppercase tracking-widest text-[#383838]">
        {label}
      </span>
    </div>
  )
}

const Confiance = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className=" pb-12  lg:pb-16">
      <div className="bg-background px-6 py-11 lg:py-19  lg:px-20">

        {/* Badge + titre */}
        <div className="flex flex-col items-center  text-center">
   

          <Badge>
Preuves de confiance
          </Badge>

    <div className="  py-6 lg:pt-10     ">
      
          <span className="title2">
            Des garanties de confiance et de qualité médicale.
          </span>

    </div>

        </div>

        <div
          ref={sectionRef}
          className="mt-10 flex flex-col lg:flex-row gap-10  "
        >
          <div className="flex flex-col gap-8 flex-1">

            <div className="flex flex-row justify-center gap-10 lg:flex-col lg:justify-start lg:gap-8">
              {stats.map((stat) => (
                <StatNumber key={stat.target} {...stat} started={started} />
              ))}
            </div>

            <p className="text-[14px] lg:text-[18px] font-normal leading-[1.7] text-[#383838] max-w-[480px] border-l-4 italic border-primary pl-3">
              "Nous accueillons des patients du monde entier, parlant couramment
              Français, Anglais, Italien et Arabe pour une communication
              transparente."
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/home/map.png"
              alt="Carte patients internationaux"
              width={712}
              height={407}
              className="w-full h-auto max-w-[712px] object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Confiance