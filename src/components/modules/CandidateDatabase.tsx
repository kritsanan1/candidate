import React, { useState } from 'react';
import { User, MapPin, DollarSign, Users, FileText, Search, Filter, Plus, CreditCard as Edit, Eye, TrendingUp } from 'lucide-react';
import { candidates, getMainCompetitors, getTargetCandidate } from '../../data/candidates';

const CandidateDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [filterParty, setFilterParty] = useState('all');

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesParty = filterParty === 'all' || candidate.party === filterParty;
    return matchesSearch && matchesParty;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">ฐานข้อมูลผู้สมัครแบบครบวงจร</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
          <Plus className="w-4 h-4" />
          <span>เพิ่มผู้สมัคร</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาชื่อ หรือชื่อเล่น..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={filterParty}
              onChange={(e) => setFilterParty(e.target.value)}
            >
              <option value="all">ทุกพรรค</option>
              <option value="พรรคกล้าธรรม">พรรคกล้าธรรม</option>
              <option value="เพื่อไทย">เพื่อไทย</option>
              <option value="รวมไทยสร้างชาติ">รวมไทยสร้างชาติ</option>
              <option value="ประชาธิปัตย์">ประชาธิปัตย์</option>
              <option value="ภูมิใจไทย">ภูมิใจไทย</option>
              <option value="ประชาชน">ประชาชน</option>
              <option value="เศรษฐกิจไทย">เศรษฐกิจไทย</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidate Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className={`w-6 h-6 ${candidate.isTarget ? 'text-green-600' : 'text-gray-600'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-600">({candidate.nickname})</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    เบอร์ {candidate.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{candidate.party}</div>
                </div>
              </div>
              {candidate.isTarget && (
                <div className="absolute top-2 right-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    เป้าหมาย
                  </span>
                </div>
              )}

              {/* Rating */}
              <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-lg font-bold text-gray-900">{candidate.currentRating}%</span>
                  <span className="text-sm text-gray-600 ml-2">ความนิยม</span>
                </div>
                <div className={`flex items-center space-x-1 ${
                  candidate.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{candidate.trend}</span>
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>อายุ {candidate.age} ปี</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="line-clamp-2">{candidate.education}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">งบประมาณ:</span> {candidate.budget}
                </div>
              </div>

              {/* Top Policies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">นโยบายหลัก</h4>
                <div className="space-y-1">
                  {candidate.policies.slice(0, 2).map((policy, index) => (
                    <div key={index} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      • {policy}
                    </div>
                  ))}
                  {candidate.policies.length > 2 && (
                    <div className="text-xs text-gray-500">+{candidate.policies.length - 2} อื่นๆ</div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedCandidate(candidate)}
                  className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 flex items-center justify-center space-x-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>ดูรายละเอียด</span>
                </button>
                <button className="bg-gray-100 text-gray-600 px-3 py-2 rounded-lg text-sm hover:bg-gray-200">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal */}
      {selectedCandidate && (
        <CandidateDetailModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  );
};

const CandidateDetailModal = ({ candidate, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{candidate.name} ({candidate.nickname})</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">ข้อมูลส่วนตัว</h3>
              <div className="space-y-3">
                <div><span className="font-medium">พรรค:</span> {candidate.party} (เบอร์ {candidate.number})</div>
                <div><span className="font-medium">อายุ:</span> {candidate.age} ปี</div>
                <div><span className="font-medium">การศึกษา:</span> {candidate.education}</div>
                <div><span className="font-medium">ประสบการณ์:</span> {candidate.experience}</div>
                <div><span className="font-medium">งบประมาณ:</span> {candidate.budget.toLocaleString()} บาท</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">การวิเคราะห์ SWOT</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-green-600">จุดแข็ง:</span>
                  <ul className="ml-4 mt-1">
                    {candidate.strengths.map((strength, index) => (
                      <li key={index} className="text-sm">• {strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium text-red-600">จุดอ่อน:</span>
                  <ul className="ml-4 mt-1">
                    {candidate.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-sm">• {weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">นโยบายทั้งหมด</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {candidate.policies.map((policy, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-blue-800 font-medium">{index + 1}. {policy}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supporters */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">ผู้สนับสนุนหลัก</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {candidate.supporters.map((supporter, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                  <span className="text-green-800 font-medium">{supporter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDatabase;