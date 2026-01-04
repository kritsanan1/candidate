import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Heart, Share, Eye, Calendar, Filter, Search, Download, AlertTriangle } from 'lucide-react';
import { candidatesComplete } from '../../data/candidatesComplete';

const SocialMediaMonitoring = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('all');
  const [timeRange, setTimeRange] = useState('7days');
  const [sentimentFilter, setSentimentFilter] = useState('all');

  const candidates = candidatesComplete;

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      case 'neutral': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive': return '😊';
      case 'negative': return '😞';
      case 'neutral': return '😐';
      default: return '😐';
    }
  };

  const filteredCandidates = selectedCandidate === 'all' 
    ? candidates 
    : candidates.filter(c => c.id === selectedCandidate);

  const allPosts = filteredCandidates.flatMap(candidate => 
    candidate.facebookPosts.map(post => ({
      ...post,
      candidateName: candidate.name,
      candidateParty: candidate.party,
      candidateId: candidate.id
    }))
  ).filter(post => 
    sentimentFilter === 'all' || post.sentiment === sentimentFilter
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalEngagement = allPosts.reduce((sum, post) => sum + post.likes + post.shares + post.comments, 0);
  const averageSentiment = allPosts.length > 0 
    ? allPosts.filter(p => p.sentiment === 'positive').length / allPosts.length * 100 
    : 0;

  const sentimentDistribution = {
    positive: allPosts.filter(p => p.sentiment === 'positive').length,
    negative: allPosts.filter(p => p.sentiment === 'negative').length,
    neutral: allPosts.filter(p => p.sentiment === 'neutral').length
  };

  const topKeywords = candidates.flatMap(c => [
    ...c.socialMediaSentiment.positiveKeywords,
    ...c.socialMediaSentiment.negativeKeywords
  ]).reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});

  const sortedKeywords = Object.entries(topKeywords)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">ระบบติดตามสื่อสังคมออนไลน์</h2>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
            <Download className="w-4 h-4" />
            <span>ส่งออกรายงาน</span>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ผู้สมัคร</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
            >
              <option value="all">ทั้งหมด</option>
              {candidates.map(candidate => (
                <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ช่วงเวลา</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="7days">7 วันที่ผ่านมา</option>
              <option value="30days">30 วันที่ผ่านมา</option>
              <option value="90days">90 วันที่ผ่านมา</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ความรู้สึก</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={sentimentFilter}
              onChange={(e) => setSentimentFilter(e.target.value)}
            >
              <option value="all">ทั้งหมด</option>
              <option value="positive">เชิงบวก</option>
              <option value="neutral">เป็นกลาง</option>
              <option value="negative">เชิงลบ</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
              <Search className="w-4 h-4" />
              <span>ค้นหา</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">โพสต์ทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{allPosts.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">การมีส่วนร่วมรวม</p>
              <p className="text-2xl font-bold text-gray-900">{totalEngagement.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ความรู้สึกเชิงบวก</p>
              <p className="text-2xl font-bold text-gray-900">{averageSentiment.toFixed(1)}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">การเข้าถึงรวม</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredCandidates.reduce((sum, c) => sum + c.socialMediaSentiment.reach, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">การกระจายความรู้สึก</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">😊</span>
                <span className="text-sm text-gray-600">เชิงบวก</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(sentimentDistribution.positive / allPosts.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{sentimentDistribution.positive}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">😐</span>
                <span className="text-sm text-gray-600">เป็นกลาง</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-500 h-2 rounded-full"
                    style={{ width: `${(sentimentDistribution.neutral / allPosts.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{sentimentDistribution.neutral}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-red-600">😞</span>
                <span className="text-sm text-gray-600">เชิงลบ</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${(sentimentDistribution.negative / allPosts.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{sentimentDistribution.negative}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">คำสำคัญยอดนิยม</h3>
          <div className="space-y-3">
            {sortedKeywords.map(([keyword, count], index) => (
              <div key={keyword} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{keyword}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(count / sortedKeywords[0][1]) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Candidate Performance */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">ประสิทธิภาพผู้สมัครแต่ละคน</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">ผู้สมัคร</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">การเข้าถึง</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">การมีส่วนร่วม</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">การกล่าวถึง</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">ความรู้สึกโดยรวม</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{candidate.name}</div>
                      <div className="text-sm text-gray-600">{candidate.party}</div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-sm font-medium">{candidate.socialMediaSentiment.reach.toLocaleString()}</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-sm font-medium">{candidate.socialMediaSentiment.engagement}</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-sm font-medium">{candidate.socialMediaSentiment.mentions}</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(candidate.socialMediaSentiment.overall)}`}>
                      {getSentimentIcon(candidate.socialMediaSentiment.overall)} {
                        candidate.socialMediaSentiment.overall === 'positive' ? 'เชิงบวก' :
                        candidate.socialMediaSentiment.overall === 'negative' ? 'เชิงลบ' : 'เป็นกลาง'
                      }
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">โพสต์ล่าสุด</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {allPosts.slice(0, 10).map((post) => (
            <div key={`${post.candidateId}-${post.id}`} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{post.candidateName}</h4>
                      <p className="text-xs text-gray-500">{post.candidateParty}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('th-TH')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(post.sentiment)}`}>
                        {getSentimentIcon(post.sentiment)}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{post.content}</p>
                  
                  <div className="flex items-center space-x-6 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMonitoring;