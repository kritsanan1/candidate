import React, { useState } from 'react';
import { Users, MapPin, Activity, TrendingUp, Calendar, Eye, AlertTriangle, BarChart3, PieChart, Target, Search, MessageSquare } from 'lucide-react';
import CandidateDatabase from './modules/CandidateDatabase';
import DemographicsAnalysis from './modules/DemographicsAnalysis';
import ActivityTracking from './modules/ActivityTracking';
import CompetitiveAnalysis from './modules/CompetitiveAnalysis';
import CandidateIntelligence from './modules/CandidateIntelligence';
import SocialMediaMonitoring from './modules/SocialMediaMonitoring';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('overview');

  const modules = [
    { id: 'overview', name: 'ภาพรวม', icon: Eye },
    { id: 'intelligence', name: 'ข่าวกรองการเมือง', icon: Search },
    { id: 'candidates', name: 'ฐานข้อมูลผู้สมัคร', icon: Users },
    { id: 'social', name: 'ติดตามสื่อสังคม', icon: MessageSquare },
    { id: 'demographics', name: 'วิเคราะห์ฐานเสียง', icon: MapPin },
    { id: 'activities', name: 'ติดตามกิจกรรม', icon: Activity },
    { id: 'analysis', name: 'เปรียบเทียบและพยากรณ์', icon: TrendingUp },
  ];

  const renderContent = () => {
    switch (activeModule) {
      case 'intelligence':
        return <CandidateIntelligence />;
      case 'candidates':
        return <CandidateDatabase />;
      case 'social':
        return <SocialMediaMonitoring />;
      case 'demographics':
        return <DemographicsAnalysis />;
      case 'activities':
        return <ActivityTracking />;
      case 'analysis':
        return <CompetitiveAnalysis />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ระบบติดตามคู่แข่งการเมือง</h1>
                <p className="text-sm text-gray-600">อุดรธานี เขต 6 - การเลือกตั้ง 2569</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">วันเลือกตั้ง:</span> 8 กุมภาพันธ์ 2569
              </div>
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                เหลือ 42 วัน
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeModule === module.id
                        ? 'bg-green-100 text-green-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{module.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Dashboard Component
const OverviewDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ผู้สมัครทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">7 คน</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-green-600 text-sm font-medium">+2 คนจากเดือนที่แล้ว</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ผู้มีสิทธิเลือกตั้ง</p>
              <p className="text-2xl font-bold text-gray-900">162,384</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-gray-600 text-sm">4 อำเภอ 48 ตำบล (ประชากร ~162,384 คน)</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">กิจกรรมวันนี้</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-purple-600 text-sm font-medium">12 การประชุมหาเสียง</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ความนิยมเฉลี่ย</p>
              <p className="text-2xl font-bold text-gray-900">32%</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-green-600 text-sm font-medium">+3% จากสัปดาห์ที่แล้ว</span>
          </div>
        </div>
      </div>

      {/* Current Leader Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">อันดับความนิยมล่าสุด</h3>
          <div className="space-y-4">
            {[
              { name: 'ประชาชาติ แสนแก้ว', party: 'เพื่อไทย', support: 32, trend: '+3' },
              { name: 'ธนอนันต์ เมนะสวัสดิ์', party: 'กล้าธรรม', support: 28, trend: '+5' },
              { name: 'อดิศักดิ์ แก้วมุงคุณทรัพย์', party: 'เพื่อไทย', support: 25, trend: '-2' },
              { name: 'สรวิชญ์ นาแพงสอน', party: 'รวมไทยสร้างชาติ', support: 18, trend: '+1' },
              { name: 'ผู้สมัครอื่นๆ', party: 'อื่นๆ', support: 8, trend: '-1' },
              { name: 'ไม่ระบุ/ไม่แน่ใจ', party: '', support: 9, trend: '-2' },
            ].map((candidate, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">{candidate.name}</p>
                      {candidate.party && <p className="text-sm text-gray-600">{candidate.party}</p>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{candidate.support}%</span>
                  <span className={`text-sm font-medium ${
                    candidate.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {candidate.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">การกระจายตัวตามเขต</h3>
          <div className="space-y-4">
            {[
              { district: 'อำเภอศรีธาตุ', voters: 31420, leader: 'ประชาชาติ', leadPercent: 35 },
              { district: 'อำเภอวังสามหมอ', voters: 28150, leader: 'ธนอนันต์', leadPercent: 32 },
              { district: 'อำเภอไชยวาน', voters: 35680, leader: 'ประชาชาติ', leadPercent: 32 },
              { district: 'อำเภอกู่แก้ว (บางส่วน)', voters: 29600, leader: 'ธนอนันต์', leadPercent: 30 },
            ].map((area, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{area.district}</h4>
                  <span className="text-sm text-gray-600">{area.voters.toLocaleString()} คน</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">ผู้นำ: {area.leader}</span>
                  <span className="text-sm font-medium text-green-600">{area.leadPercent}%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${area.leadPercent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts and Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-bold text-gray-900">การเตือนความเสี่ยง</h3>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-red-400 bg-red-50 p-3 rounded">
              <p className="text-sm font-medium text-red-800">ประชาชาติเพิ่มกิจกรรมหาเสียงอย่างเข้มข้น</p>
              <p className="text-xs text-red-600 mt-1">ใช้เครือข่ายครอบครัวและพรรคเพื่อไทยรุกหนักในพื้นที่</p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-3 rounded">
              <p className="text-sm font-medium text-yellow-800">อดิศักดิ์ประสบปัญหาความน่าเชื่อถือ</p>
              <p className="text-xs text-yellow-600 mt-1">การเปลี่ยนพรรคและผลงานที่ผ่านมาถูกตั้งคำถาม</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-bold text-gray-900">โอกาสและข้อแนะนำ</h3>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-green-400 bg-green-50 p-3 rounded">
              <p className="text-sm font-medium text-green-800">ธนอนันต์มีโมเมนตัมเพิ่มขึ้น</p>
              <p className="text-xs text-green-600 mt-1">นโยบายเทคโนโลยีและการปฏิรูปได้รับความสนใจเพิ่มขึ้น</p>
            </div>
            <div className="border-l-4 border-blue-400 bg-blue-50 p-3 rounded">
              <p className="text-sm font-medium text-blue-800">เกษตรกรต้องการโซลูชันที่ดินและเทคโนโลยี</p>
              <p className="text-xs text-blue-600 mt-1">ปัญหา ส.ป.ก. และความต้องการเกษตรอัจฉริยะเป็นประเด็นร้อน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;