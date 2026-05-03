'use client'

import { useEffect, useState } from 'react'

interface StatCounterProps {
  label: string
  value: number
}

export default function StatCounter({ label, value }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = value / 60
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(timer)
          return value
        }
        return prev + increment
      })
    }, 50)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-eco-green mb-2">
        {Math.floor(count).toLocaleString()}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-lg">{label}</p>
    </div>
  )
}
