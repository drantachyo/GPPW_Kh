'use client'

import { Play, Clock, Zap } from 'lucide-react'

interface EducationModuleProps {
  module: {
    id: number
    title: string
    description: string
    icon: string
    difficulty: string
    duration: string
    content: string
  }
}

export default function EducationModule({ module }: EducationModuleProps) {
  const difficultyColor = {
    Beginner: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200',
    Advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
  }

  return (
    <div className="card hover:shadow-xl transition-all duration-300">
      <div className="text-5xl mb-4">{module.icon}</div>
      <h3 className="text-xl font-bold mb-2">{module.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{module.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Clock size={16} />
          <span>{module.duration} read</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              difficultyColor[module.difficulty as keyof typeof difficultyColor]
            }`}
          >
            {module.difficulty}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{module.content}</p>

      <button className="w-full btn-primary bg-eco-accent hover:bg-cyan-600 flex items-center justify-center gap-2">
        <Play size={18} />
        Start Learning
      </button>
    </div>
  )
}
