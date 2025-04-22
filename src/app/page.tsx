'use client'

import { useState } from 'react'

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
      photoUrl: ''
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">个人简历</h1>
      
      {/* 基本信息部分 */}
      <section className="mb-8 bg-background p-6 rounded-lg shadow border border-foreground/10">
        <h2 className="text-xl font-semibold mb-4">基本信息</h2>
        <div className="flex gap-8">
          {/* 照片上传区域 */}
          <div className="w-48 h-48 bg-foreground/5 rounded-lg flex items-center justify-center">
            {resumeData.basicInfo.photoUrl ? (
              <img
                src={resumeData.basicInfo.photoUrl}
                alt="个人照片"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center text-foreground/50">
                <p>点击上传照片</p>
                <p className="text-sm">(建议尺寸: 200x200)</p>
              </div>
            )}
          </div>
          
          {/* 基本信息表单 */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground/80">姓名</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.name}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, name: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">性别</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.gender}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, gender: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">年龄</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.age}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, age: parseInt(e.target.value) }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">手机</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.phone}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, phone: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">邮箱</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.email}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, email: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">专业</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.major}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, major: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">期望岗位</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={resumeData.basicInfo.position}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  basicInfo: { ...resumeData.basicInfo, position: e.target.value }
                })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 教育经历部分 */}
      <section className="mb-8 bg-background p-6 rounded-lg shadow border border-foreground/10">
        <h2 className="text-xl font-semibold mb-4">教育经历</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border border-foreground/10 rounded bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground/80">学校</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={edu.school}
                  onChange={(e) => {
                    const newEducation = [...resumeData.education]
                    newEducation[index] = { ...edu, school: e.target.value }
                    setResumeData({ ...resumeData, education: newEducation })
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80">专业</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={edu.major}
                  onChange={(e) => {
                    const newEducation = [...resumeData.education]
                    newEducation[index] = { ...edu, major: e.target.value }
                    setResumeData({ ...resumeData, education: newEducation })
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80">开始时间</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={edu.startDate}
                  onChange={(e) => {
                    const newEducation = [...resumeData.education]
                    newEducation[index] = { ...edu, startDate: e.target.value }
                    setResumeData({ ...resumeData, education: newEducation })
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80">结束时间</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={edu.endDate}
                  onChange={(e) => {
                    const newEducation = [...resumeData.education]
                    newEducation[index] = { ...edu, endDate: e.target.value }
                    setResumeData({ ...resumeData, education: newEducation })
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => setResumeData({
            ...resumeData,
            education: [...resumeData.education, {
              school: '',
              major: '',
              startDate: '',
              endDate: ''
            }]
          })}
        >
          添加教育经历
        </button>
      </section>

      {/* 工作经验部分 */}
      <section className="mb-8 bg-background p-6 rounded-lg shadow border border-foreground/10">
        <h2 className="text-xl font-semibold mb-4">工作经验</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4 p-4 border border-foreground/10 rounded bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">公司</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={exp.company}
                  onChange={(e) => {
                    const newExperience = [...resumeData.experience]
                    newExperience[index] = { ...exp, company: e.target.value }
                    setResumeData({ ...resumeData, experience: newExperience })
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">职位</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={exp.position}
                  onChange={(e) => {
                    const newExperience = [...resumeData.experience]
                    newExperience[index] = { ...exp, position: e.target.value }
                    setResumeData({ ...resumeData, experience: newExperience })
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80">开始时间</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={exp.startDate}
                  onChange={(e) => {
                    const newExperience = [...resumeData.experience]
                    newExperience[index] = { ...exp, startDate: e.target.value }
                    setResumeData({ ...resumeData, experience: newExperience })
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80">结束时间</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={exp.endDate}
                  onChange={(e) => {
                    const newExperience = [...resumeData.experience]
                    newExperience[index] = { ...exp, endDate: e.target.value }
                    setResumeData({ ...resumeData, experience: newExperience })
                  }}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-foreground/80">工作描述</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-foreground/10 bg-background text-foreground shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={3}
                  value={exp.description}
                  onChange={(e) => {
                    const newExperience = [...resumeData.experience]
                    newExperience[index] = { ...exp, description: e.target.value }
                    setResumeData({ ...resumeData, experience: newExperience })
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => setResumeData({
            ...resumeData,
            experience: [...resumeData.experience, {
              company: '',
              position: '',
              startDate: '',
              endDate: '',
              description: ''
            }]
          })}
        >
          添加工作经验
        </button>
      </section>

      {/* 专业技能部分 */}
      <section className="mb-8 bg-background p-6 rounded-lg shadow border border-foreground/10">
        <h2 className="text-xl font-semibold mb-4">专业技能</h2>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium text-foreground mb-2">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="px-3 py-1 bg-foreground/5 text-foreground rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 项目经历部分 */}
      <section className="mb-8 bg-background p-6 rounded-lg shadow border border-foreground/10">
        <h2 className="text-xl font-semibold mb-4">项目经历</h2>
        <p className="text-foreground/50 italic">待补充</p>
      </section>
    </div>
  )
}