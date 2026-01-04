import React, { useState } from 'react';
import { MapPin, Users, TrendingUp, PieChart, BarChart3, Target, Filter, Download } from 'lucide-react';

const DemographicsAnalysis = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [analysisType, setAnalysisType] = useState('age');

  const districts = [
    { id: 'all', name: 'ทั้งหมด', voters: 124850 },
    { id: 'srithat', name: 'อำเภอศรีธาตุ', voters: 31420 },
    { id: 'wangsammo', name: 'อำเภอวังสามหมอ', voters: 28150 },
    { id: 'chaiyawan', name: 'อำเภอไชยวาน', voters: 35680 },
    { id: 'kukkaew', name: 'อำเภอกู่แก้ว', voters: 29600 }
  ];

  const demographicData = {
    age: [
      { group: '18-30 ปี', count: 28450, percentage: 22.8, tendency: 'ไม่แน่นอน', leader: 'สรวิชญ์' },
      { group: '31-45 ปี', count: 35680, percentage: 28.6, tendency: 'เปลี่ยนแปลงได้', leader: 'ประชาชาติ' },
      { group: '46-60 ปี', count: 42320, percentage: 33.9, tendency: 'มั่นคง', leader: 'อดิศักดิ์' },
      { group: '60+ ปี', count: 18400, percentage: 14.7, tendency: 'มั่นคงมาก', leader: 'อดิศักดิ์' }
    ],
    occupation: [
      { group: 'เกษตรกรปลูกอ้อย', count: 52340, percentage: 41.9, tendency: 'เปลี่ยนแปลงได้', leader: 'ประชาชาติ' },
      { group: 'ข้าราชการ/รัฐวิสาหกิจ', count: 18750, percentage: 15.0, tendency: 'เปลี่ยนแปลงได้', leader: 'อดิศักดิ์' },
      { group: 'ประกอบธุรกิจส่วนตัว', count: 22180, percentage: 17.8, tendency: 'ไม่แน่นอน', leader: 'สรวิชญ์' },
      { group: 'รับจ้าง/ลูกจ้าง', count: 21420, percentage: 17.2, tendency: 'เปลี่ยนแปลงได้', leader: 'ประชาชาติ' },
      { group: 'อื่นๆ', count: 10160, percentage: 8.1, tendency: 'ไม่แน่นอน', leader: 'ไม่ระบุ' }
    ],
    income: [
      { group: 'ต่ำกว่า 15,000 บาท', count: 45280, percentage: 36.3, tendency: 'เปลี่ยนแปลงได้', leader: 'ประชาชาติ' },
      { group: '15,000-30,000 บาท', count: 38420, percentage: 30.8, tendency: 'เปลี่ยนแปลงได้', leader: 'อดิศักดิ์' },
      { group: '30,000-50,000 บาท', count: 24610, percentage: 19.7, tendency: 'มั่นคง', leader: 'อดิศักดิ์' },
      { group: 'มากกว่า 50,000 บาท', count: 16540, percentage: 13.2, tendency: 'มั่นคงมาก', leader: 'สรวิชญ์' }
    ]
  };

  const electionHistory = [
    { year: '2562', totalVotes: 118450, turnout: 72.4, winner: 'ผู้สมัครอื่น', party: 'เพื่อไทย', votes: 42180 },
    { year: '2566', totalVotes: 121380, turnout: 74.8, winner: 'ผู้สมัครอื่น', party: 'ก้าวไกล', votes: 38920 },
    { year: '2568', totalVotes: 84614, turnout: 67.36, winner: 'อดิศักดิ์ แก้วมุงคุณทรัพย์', party: 'ไทยสร้างไทย', votes: 27751 }
  ];

  const swingVoters = {
    total: 31450,
    percentage: 25.2,
    characteristics: [
      'อายุ 25-40 ปี ประกอบอาชีพอิสระ',
      'มีการศึกษาระดับปริญญาตรี',
      'อาศัยในเขตเมืองและชานเมือง',
      'ให้ความสำคัญกับนโยบายเศรษฐกิจ'
    ],
    locations: [
      { district: 'อำเภอศรีธาตุ', count: 12680, hotspots: ['ตำบลศรีธาตุ', 'ตำบลโนนสูง'] },
      { district: 'อำเภอกู่แก้ว', count: 8970, hotspots: ['ตำบลกู่แก้ว', 'ตำบลโนนทองอินทร์'] },
      { district: 'อำเภอไชยวาน', count: 6240, hotspots: ['ตำบลไชยวาน', 'ตำบลน้ำอ้อม'] },
      { district: 'อำเภอวังสามหมอ', count: 3560, hotspots: ['ตำบลวังสามหมอ'] }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">วิเคราะห์ฐานเสียงและประชากรศาสตร์</h2>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
            <Download className="w-4 h-4" />
            <span>ส่งออกรายงาน</span>
          </button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              {districts.map(district => (
                <option key={district.id} value={district.id}>{district.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={analysisType}
              onChange={(e) => setAnalysisType(e.target.value)}
            >
              <option value="age">กลุ่มอายุ</option>
              <option value="occupation">อาชีพ</option>
              <option value="income">รายได้</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ผู้มีสิทธิเลือกตั้ง</p>
              <p className="text-2xl font-bold text-gray-900">124,850</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ผู้ลังเล (Swing Voters)</p>
              <p className="text-2xl font-bold text-gray-900">31,450</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-orange-600 text-sm font-medium">25.2% ของทั้งหมด</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">อัตราการเลือกตั้งคาดการณ์</p>
              <p className="text-2xl font-bold text-gray-900">76.8%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-green-600 text-sm font-medium">+2.6% จากครั้งที่แล้ว</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ฐานเสียงแกว่ง</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-purple-600 text-sm font-medium">อำเภอที่แข่งกันสูง</span>
          </div>
        </div>
      </div>

      {/* Demographic Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">การกระจายตาม{analysisType === 'age' ? 'อายุ' : analysisType === 'occupation' ? 'อาชีพ' : 'รายได้'}</h3>
          <div className="space-y-4">
            {demographicData[analysisType].map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{item.group}</h4>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">{item.count.toLocaleString()}</span>
                    <span className="text-xs text-gray-600 ml-1">({item.percentage}%)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">ผู้นำ: {item.leader}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.tendency === 'มั่นคง' || item.tendency === 'มั่นคงมาก' 
                      ? 'bg-green-100 text-green-800' 
                      : item.tendency === 'เปลี่ยนแปลงได้'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.tendency}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swing Voters Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">การวิเคราะห์ผู้ลังเล (Swing Voters)</h3>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">จำนวนทั้งหมด</span>
              <span className="font-bold text-gray-900">{swingVoters.total.toLocaleString()} คน</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">สัดส่วน</span>
              <span className="font-bold text-orange-600">{swingVoters.percentage}%</span>
            </div>
            
            <h4 className="font-medium text-gray-900 mb-3">ลักษณะเฉพาะ</h4>
            <div className="space-y-2">
              {swingVoters.characteristics.map((char, index) => (
                <div key={index} className="text-sm text-gray-600 bg-orange-50 px-3 py-2 rounded">
                  • {char}
                </div>
              ))}
            </div>
          </div>

          <h4 className="font-medium text-gray-900 mb-3">การกระจายตามพื้นที่</h4>
          <div className="space-y-3">
            {swingVoters.locations.map((location, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{location.district}</span>
                  <span className="text-sm font-medium text-gray-900">{location.count.toLocaleString()}</span>
                </div>
                <div className="text-xs text-gray-600">
                  จุดร้อน: {location.hotspots.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Election History */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">ประวัติการเลือกตั้ง 3 ครั้งล่าสุด</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">ปี</th>
                <th className="text-left py-3 px-4">ผู้ชนะ</th>
                <th className="text-left py-3 px-4">พรรค</th>
                <th className="text-right py-3 px-4">คะแนน</th>
                <th className="text-right py-3 px-4">อัตราออกมาเลือกตั้ง</th>
              </tr>
            </thead>
            <tbody>
              {electionHistory.map((election, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">{election.year}</td>
                  <td className="py-3 px-4">{election.winner}</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {election.party}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-medium">{election.votes.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right">{election.turnout}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* District Map Visualization */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">แผนที่เลือกตั้ง GIS</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {districts.slice(1).map((district, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 mb-1">{district.name}</h4>
                <p className="text-sm text-gray-600">{district.voters.toLocaleString()} คน</p>
                <div className="mt-2 flex justify-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    ดูรายละเอียด
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographicsAnalysis;