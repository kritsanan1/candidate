import React, { useState } from 'react';
import { User, TrendingUp, Calendar, MessageSquare, Eye, Search, Filter, Download, AlertTriangle, Target, CheckCircle } from 'lucide-react';
import { candidatesComplete, getAllCandidates } from '../../data/candidatesComplete';

const CandidateIntelligence = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [analysisType, setAnalysisType] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const candidates = getAllCandidates();
  
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
        <h2 className="text-2xl font-bold text-gray-900">ระบบข่าวกรองการเมือง - อุดรธานี เขต 6</h2>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
            <Download className="w-4 h-4" />
            <span>ส่งออกรายงาน</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาผู้สมัคร, พรรค, หรือนโยบาย..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={analysisType}
              onChange={(e) => setAnalysisType(e.target.value)}
            >
              <option value="overview">ภาพรวม</option>
              <option value="swot">การวิเคราะห์ SWOT</option>
              <option value="social">สื่อสังคมออนไลน์</option>
              <option value="events">กิจกรรมการหาเสียง</option>
              <option value="policies">นโยบายและจุดยืน</option>
            </select>
          </div>
        </div>
      </div>

      {/* Analysis Type: Overview */}
      {analysisType === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
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
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      เป้าหมายหลัก
                    </span>
                  </div>
                )}

                {/* Rating and Trend */}
                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{candidate.currentRating}%</span>
                    <span className="text-sm text-gray-600 ml-2">ความนิยม</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    candidate.trend.startsWith('+') ? 'text-green-600' : 
                    candidate.trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{candidate.trend}</span>
                  </div>
                </div>

                {/* Key Info */}
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">อายุ:</span> {candidate.age} ปี
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">งบประมาณ:</span> {candidate.budget}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">ผู้สนับสนุนหลัก:</span> {candidate.supporters.length} กลุ่ม
                  </div>
                </div>

                {/* Social Media Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="text-sm font-bold text-blue-600">{candidate.socialMediaSentiment.reach.toLocaleString()}</div>
                    <div className="text-xs text-blue-600">Reach</div>
                  </div>
                  <div className="bg-purple-50 p-2 rounded">
                    <div className="text-sm font-bold text-purple-600">{candidate.socialMediaSentiment.engagement}</div>
                    <div className="text-xs text-purple-600">Engagement</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <div className="text-sm font-bold text-green-600">{candidate.socialMediaSentiment.mentions}</div>
                    <div className="text-xs text-green-600">Mentions</div>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => setSelectedCandidate(candidate)}
                  className="w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 flex items-center justify-center space-x-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>ดูรายละเอียดเต็ม</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analysis Type: SWOT */}
      {analysisType === 'swot' && (
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  การวิเคราะห์ SWOT - {candidate.name} ({candidate.party})
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{candidate.currentRating}%</span>
                  <span className={`text-sm font-medium ${
                    candidate.trend.startsWith('+') ? 'text-green-600' : 
                    candidate.trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {candidate.trend}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['strengths', 'weaknesses', 'opportunities', 'threats'].map((type) => (
                  <div key={type} className={`border rounded-lg p-4 ${getSWOTColor(type)}`}>
                    <h4 className="font-bold mb-3 flex items-center space-x-2">
                      {getSWOTIcon(type)}
                      <span>{getSWOTTitle(type)}</span>
                    </h4>
                    <ul className="space-y-2">
                      {candidate[type].map((item, index) => (
                        <li key={index} className="text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analysis Type: Social Media */}
      {analysisType === 'social' && (
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                การวิเคราะห์สื่อสังคมออนไลน์ - {candidate.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{candidate.socialMediaSentiment.reach.toLocaleString()}</div>
                  <div className="text-sm text-blue-600">การเข้าถึง (Reach)</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{candidate.socialMediaSentiment.engagement}</div>
                  <div className="text-sm text-purple-600">การมีส่วนร่วม</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{candidate.socialMediaSentiment.mentions}</div>
                  <div className="text-sm text-green-600">การกล่าวถึง</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">คำสำคัญเชิงบวก</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidate.socialMediaSentiment.positiveKeywords.map((keyword, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">คำสำคัญเชิงลบ</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidate.socialMediaSentiment.negativeKeywords.map((keyword, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">โพสต์ล่าสุด</h4>
                <div className="space-y-3">
                  {candidate.facebookPosts.map((post) => (
                    <div key={post.id} className="border border-gray-100 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2">{post.content}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString('th-TH')}</span>
                        <div className="flex space-x-4">
                          <span>👍 {post.likes}</span>
                          <span>🔄 {post.shares}</span>
                          <span>💬 {post.comments}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analysis Type: Events */}
      {analysisType === 'events' && (
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                กิจกรรมการหาเสียง - {candidate.name}
              </h3>
              
              <div className="space-y-4">
                {candidate.campaignEvents.map((event) => (
                  <div key={event.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-2">{event.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(event.date).toLocaleDateString('th-TH')}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {event.attendees} คน
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        event.type === 'rally' ? 'bg-red-100 text-red-800' :
                        event.type === 'meeting' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'visit' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type === 'rally' ? 'ชุมนุม' :
                         event.type === 'meeting' ? 'ประชุม' :
                         event.type === 'visit' ? 'เยี่ยมชม' : 'อื่นๆ'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analysis Type: Policies */}
      {analysisType === 'policies' && (
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                นโยบายและจุดยืน - {candidate.name} ({candidate.party})
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">นโยบายหลัก</h4>
                  <div className="space-y-2">
                    {candidate.policies.map((policy, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg">
                        <span className="text-blue-800 font-medium">{index + 1}. {policy}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">ผู้สนับสนุนหลัก</h4>
                  <div className="space-y-2">
                    {candidate.supporters.map((supporter, index) => (
                      <div key={index} className="bg-green-50 p-3 rounded-lg">
                        <span className="text-green-800 font-medium">• {supporter}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-3">ข้อมูลเพิ่มเติม</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">การศึกษา:</span> {candidate.education}</div>
                      <div><span className="font-medium">ประสบการณ์:</span> {candidate.experience}</div>
                      <div><span className="font-medium">งบประมาณ:</span> {candidate.budget}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{candidate.name} ({candidate.nickname})</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-4">ข้อมูลส่วนตัว</h3>
              <div className="space-y-3">
                <div><span className="font-medium">พรรค:</span> {candidate.party} (เบอร์ {candidate.number})</div>
                <div><span className="font-medium">อายุ:</span> {candidate.age} ปี</div>
                <div><span className="font-medium">การศึกษา:</span> {candidate.education}</div>
                <div><span className="font-medium">ประสบการณ์:</span> {candidate.experience}</div>
                <div><span className="font-medium">งบประมาณ:</span> {candidate.budget}</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{candidate.currentRating}%</div>
                <div className="text-sm text-gray-600 mb-2">ความนิยม</div>
                <div className={`text-sm font-medium ${
                  candidate.trend.startsWith('+') ? 'text-green-600' : 
                  candidate.trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {candidate.trend}
                </div>
              </div>
            </div>
          </div>

          {/* SWOT Analysis */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">การวิเคราะห์ SWOT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['strengths', 'weaknesses', 'opportunities', 'threats'].map((type) => (
                <div key={type} className={`border rounded-lg p-4 ${getSWOTColor(type)}`}>
                  <h4 className="font-bold mb-3 flex items-center space-x-2">
                    {getSWOTIcon(type)}
                    <span>{getSWOTTitle(type)}</span>
                  </h4>
                  <ul className="space-y-2">
                    {candidate[type].map((item, index) => (
                      <li key={index} className="text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Policies and Supporters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">นโยบายทั้งหมด</h3>
              <div className="space-y-2">
                {candidate.policies.map((policy, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-blue-800 font-medium">{index + 1}. {policy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">ผู้สนับสนุนหลัก</h3>
              <div className="space-y-2">
                {candidate.supporters.map((supporter, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg">
                    <span className="text-green-800 font-medium">• {supporter}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Analysis */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">การวิเคราะห์สื่อสังคมออนไลน์</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">{candidate.socialMediaSentiment.reach.toLocaleString()}</div>
                <div className="text-sm text-blue-600">การเข้าถึง</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-xl font-bold text-purple-600">{candidate.socialMediaSentiment.engagement}</div>
                <div className="text-sm text-purple-600">การมีส่วนร่วม</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">{candidate.socialMediaSentiment.mentions}</div>
                <div className="text-sm text-green-600">การกล่าวถึง</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">คำสำคัญเชิงบวก</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.socialMediaSentiment.positiveKeywords.map((keyword, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">คำสำคัญเชิงลบ</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.socialMediaSentiment.negativeKeywords.map((keyword, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Events */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">กิจกรรมการหาเสียง</h3>
            <div className="space-y-4">
              {candidate.campaignEvents.map((event) => (
                <div key={event.id} className="border border-gray-100 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-500">
                    <div>📅 {new Date(event.date).toLocaleDateString('th-TH')}</div>
                    <div>📍 {event.location}</div>
                    <div>👥 {event.attendees} คน</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateIntelligence;