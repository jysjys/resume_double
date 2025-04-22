'use client'

import { useState } from 'react'
import avatar from '../../public/avatar.jpeg'
interface ResumeData {
  basicInfo: {
    name: string
    gender: string
    age: number
    phone: string
    email: string
    major: string
    position: string
    photoUrl?: string
  }
  education: Array<{
    school: string
    major: string
    startDate: string
    endDate: string
  }>
  experience: Array<{
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
  }>
  skills: Array<{
    category: string
    items: string[]
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
  }>
}

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    basicInfo: {
      name: '',
      gender: '',
      age: 0,
      phone: '',
      email: '',
      major: '',
      position: '',
      photoUrl: avatar.src
    },
    education: [],
    experience: [],
    skills: [
      {
        category: '前端技术',
        items: ['Vue', 'React', 'Next.js', 'Express']
      },
      {
        category: '后端技术',
        items: ['Spring Boot', 'MySQL']
      }
    ],
    projects: []
  })

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 hover:scale-105">个人简历</h1>
      
      {/* 基本信息部分 */}
      <section className="mb-8 bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-foreground/10 hover:border-indigo-500/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-indigo-500 before:rounded-full">基本信息</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          {/* 照片上传区域 */}
          <div className="w-48 h-48 bg-foreground/5 rounded-xl flex items-center justify-center border-2 border-dashed border-foreground/20 hover:border-indigo-500 transition-all duration-300 cursor-pointer group">
            {resumeData.basicInfo.photoUrl ? (
              <img
                src={resumeData.basicInfo.photoUrl}
                alt="个人照片"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="text-center text-foreground/50 group-hover:text-indigo-500 transition-colors duration-300">
                <p>点击上传照片</p>
                <p className="text-sm mt-2">(建议尺寸: 200x200)</p>
              </div>
            )}
          </div>
          
          {/* 基本信息表单 */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">姓名</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">姜玉双</div>
            </div>
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">性别</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">男</div>
            </div>
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">年龄</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">32</div>
            </div>
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">手机</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">16619917440</div>
            </div>
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">邮箱</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">double.jys@gmail.com</div>
            </div>
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">专业</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">计算机科学与技术</div>
            </div>
            <div className="group p-3 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">期望岗位</label>
              <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">全栈偏前端</div>
            </div>
          </div>
        </div>
      </section>

      {/* 教育经历部分 */}
      <section className="mb-8 bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-foreground/10 hover:border-indigo-500/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-indigo-500 before:rounded-full">教育经历</h2>
        <div className="p-4 rounded-lg bg-white/30 dark:bg-gray-800/30 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">绥化学院</h3>
              <p className="text-gray-600 dark:text-gray-400">计算机科学与技术</p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
              2013 - 2017
            </div>
          </div>
        </div>
      </section>

      {/* 工作经验部分 */}
      <section className="mb-8 bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-foreground/10 hover:border-indigo-500/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-indigo-500 before:rounded-full">工作经历</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300 shadow-sm hover:shadow-md ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">北银金科</h3>
                <p className="text-gray-600 dark:text-gray-400">全栈开发工程师</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                2023 - 至今
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300 shadow-sm hover:shadow-md ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">恒生电子</h3>
                <p className="text-gray-600 dark:text-gray-400">前端开发工程师</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                2018 - 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 专业技能部分 */}
      <section className="mb-8 bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-foreground/10 hover:border-indigo-500/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-indigo-500 before:rounded-full">专业技能</h2>
        {resumeData.skills.map((skillGroup, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium mb-4 text-indigo-500">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-4 py-2 border border-indigo-200/30 dark:border-indigo-500/30 bg-white/50 dark:bg-gray-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-default transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 项目经历部分 */}
      <section className="mb-8 bg-background p-6 rounded-lg shadow border border-foreground/10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-indigo-500 before:rounded-full">项目经历</h2>
        <p className="text-foreground/50 italic">待补充</p>
      </section>
    </div>
  )
}