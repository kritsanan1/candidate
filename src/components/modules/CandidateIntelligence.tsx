import React, { useState } from 'react';
import { User, TrendingUp, Calendar, MessageSquare, Eye, Search, Filter, Download, AlertTriangle, Target, CheckCircle, BarChart3, PieChart, MapPin, Users } from 'lucide-react';
import { enhancedCandidates, getMainCompetitorsEnhanced, getTargetCandidateEnhanced, historicalElectionData, districtCoverage, campaignIntelligence } from '../../data/enhancedCandidates';

const CandidateIntelligence = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [analysisType, setAnalysisType] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const candidates = enhancedCandidates;
  
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSWOTColor = (type) => {
    switch (type) {
      case 'strengths': return 'border-green-200 bg-green-50';
      case 'weaknesses': return 'border-red-200 bg-red-50';
      case 'opportunities': return 'border-blue-200 bg-blue-50';
      case 'threats': return 'border-orange-200 bg-orange-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getSWOTIcon = (type) => {
    switch (type) {
      case 'strengths': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'weaknesses': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'opportunities': return <Target className="w-5 h-5 text-blue-600" />;
      case 'threats': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default: return null;
    }
  };

  const getSWOTTitle = (type) => {
    switch (type) {
      case 'strengths': return 'จุดแข็ง (Strengths)';
      case 'weaknesses': return 'จุดอ่อน (Weaknesses)';
      case 'opportunities': return 'โอกาส (Opportunities)';
      case 'threats': return 'ภัยคุกคาม (Threats)';
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ข่าวกรองการเมืองขั้นสูง</h1>
          <p className="text-gray-600 mt-1">วิเคราะห์เชิงลึกและข้อมูลเชิงยุทธศาสตร์</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>เลือกตั้ง 8 ก.พ. 2569</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>162,384 ผู้มีสิทธิ์</span>
          </div>
        </div>
      </div>

      {/* Historical Context */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
          บริบทประวัติศาสตร์ - การเลือกตั้ง 2566
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-900">{historicalElectionData.votes.toLocaleString()}</div>
            <div className="text-sm text-blue-700">คะแนนผู้ชนะ</div>
            <div className="text-xs text-blue-600 mt-1">{historicalElectionData.winner}</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-900">{historicalElectionData.percentage}%</div>
            <div className="text-sm text-green-700">เปอร์เซ็นต์ผู้ชนะ</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-900">{historicalElectionData.totalVotes.toLocaleString()}</div>
            <div className="text-sm text-purple-700">ผู้ออกเสียงทั้งหมด</div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <strong>บทเรียนสำคัญ:</strong> การแข่งขันสูสมมาก โดยผู้ชนะได้เพียง 34.1% ของคะแนน ผู้สมัครอันดับ 1-3 ต่างกันเพียง 5,600 คะแนน
        </div>
      </div>

      {/* District Coverage */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-green-600" />
          พื้นที่ครอบคลุมและประชากร
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {districtCoverage.map((district, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{district.name}</h3>
                <span className="text-sm text-gray-600">{district.population.toLocaleString()} คน</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{district.tambons} ตำบล</div>
              <div className="flex flex-wrap gap-1">
                {district.keyIssues.map((issue, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {issue}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="ค้นหาชื่อ, ชื่อเล่น, หรือพรรค..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
          >
            <option value="overview">ภาพรวม</option>
            <option value="swot">SWOT Analysis</option>
            <option value="social">Social Media</option>
            <option value="trends">แนวโน้ม</option>
          </select>
        </div>

        {/* Candidate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`border rounded-xl p-6 cursor-pointer transition-all ${
                selectedCandidate?.id === candidate.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedCandidate(candidate)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: candidate.partyColor }}
                  >
                    {candidate.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-600">{candidate.party}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{candidate.currentRating}%</div>
                  <div className={`text-sm font-medium ${
                    candidate.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {candidate.trend}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{candidate.age} ปี • {candidate.education}</span>
                </div>
                
                <div className="text-sm text-gray-600">
                  <strong>ประสบการณ์:</strong> {candidate.experience}
                </div>

                <div className="flex flex-wrap gap-1">
                  {candidate.policies.slice(0, 3).map((policy, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {policy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Candidate Details */}
      {selectedCandidate && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: selectedCandidate.partyColor }}
              >
                {selectedCandidate.number}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selectedCandidate.name}</h2>
                <p className="text-gray-600">{selectedCandidate.party} • อายุ {selectedCandidate.age} ปี</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCandidate(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SWOT Analysis */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                SWOT Analysis
              </h3>
              <div className="space-y-4">
                {['strengths', 'weaknesses', 'opportunities', 'threats'].map((type) => (
                  <div key={type} className={`border rounded-lg p-4 ${getSWOTColor(type)}`}>
                    <div className="flex items-center space-x-2 mb-2">
                      {getSWOTIcon(type)}
                      <h4 className="font-medium text-gray-900">{getSWOTTitle(type)}</h4>
                    </div>
                    <ul className="space-y-1">
                      {selectedCandidate[type]?.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies and Supporters */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">นโยบายหลัก</h3>
              <div className="space-y-2 mb-6">
                {selectedCandidate.policies.map((policy, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{policy}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">ฐานเสียงสนับสนุน</h3>
              <div className="space-y-2">
                {selectedCandidate.supporters.map((supporter, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <p className="text-sm text-gray-700">{supporter}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Campaign Intelligence */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
          ข่าวกรองการหาเสียง
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">กิจกรรมโซเชียลมีเดีย</h3>
            {campaignIntelligence.socialMediaActivity.map((activity, i) => (
              <div key={i} className="border border-gray-200 rounded p-3 mb-2">
                <div className="font-medium text-gray-900">{activity.candidate}</div>
                <div className="text-sm text-gray-600">{activity.platform}: {activity.handle}</div>
                <div className="text-xs text-gray-500">{activity.activity}</div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">กิจกรรมสำคัญ</h3>
            {campaignIntelligence.keyEvents.map((event, i) => (
              <div key={i} className="border border-gray-200 rounded p-3 mb-2">
                <div className="font-medium text-gray-900">{event.event}</div>
                <div className="text-sm text-gray-600">{event.date}</div>
                <div className="text-xs text-gray-500">{event.impact}</div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">แนวโน้มล่าสุด</h3>
            {campaignIntelligence.pollingData.map((poll, i) => (
              <div key={i} className="border border-gray-200 rounded p-3 mb-2">
                <div className="font-medium text-gray-900">{poll.candidate}</div>
                <div className="text-sm text-gray-600">{poll.support}% {poll.trend}</div>
                <div className="text-xs text-gray-500">{poll.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateIntelligence;