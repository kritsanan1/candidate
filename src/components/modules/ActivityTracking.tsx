import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Camera, MessageSquare, TrendingUp, Plus, Filter, Search, Eye } from 'lucide-react';

const ActivityTracking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedCandidate, setSelectedCandidate] = useState('all');
  const [activityType, setActivityType] = useState('all');

  const candidates = [
    { id: 'all', name: 'ทั้งหมด', color: 'gray' },
    { id: 'adisak', name: 'อดิศักดิ์', color: 'green' },
    { id: 'prachachat', name: 'ประชาชาติ', color: 'blue' },
    { id: 'sorawich', name: 'สรวิชญ์', color: 'purple' }
  ];

  const activities = [
    {
      id: 1,
      candidate: 'adisak',
      candidateName: 'อดิศักดิ์ แก้วมุงคุณทรัพย์',
      type: 'กิจกรรมชุมชน',
      title: 'พบปะเกษตรกรปลูกอ้อยอำเภอศรีธาตุ',
      description: 'แก้ไขปัญหาต้นทุนการผลิตทางการเกษตร',
      location: 'ศาลาประชาคม ตำบลศรีธาตุ',
      district: 'ศรีธาตุ',
      startTime: '09:00',
      endTime: '11:30',
      date: '2026-01-03',
      attendees: 320,
      media: ['Facebook Live', 'Line Official'],
      engagement: { likes: 1250, shares: 89, comments: 234 },
      sentiment: 'positive',
      status: 'completed'
    },
    {
      id: 2,
      candidate: 'prachachat',
      candidateName: 'ประชาชาติ แสนแก้ว',
      type: 'เดินสำรวจ',
      title: 'พบปะเกษตรกรปลูกอ้อยและสมาคมเกษตรกรปลูกอ้อย',
      description: 'นำเสนอนโยบายเพิ่มราคาอ้อยเป็น 1,200-1,300 บาทต่อตัน',
      location: 'ตลาดสดวังสามหมอ',
      district: 'วังสามหมอ',
      startTime: '06:00',
      endTime: '08:00',
      date: '2026-01-03',
      attendees: 280,
      media: ['TikTok', 'Facebook'],
      engagement: { likes: 890, shares: 45, comments: 123 },
      sentiment: 'positive',
      status: 'completed'
    },
    {
      id: 3,
      candidate: 'sorawich',
      candidateName: 'สรวิชญ์ นาแพงสอน',
      type: 'กิจกรรมพรรค',
      title: 'กิจกรรมรณรงค์พรรคประชาชนภาคตะวันออกเฉียงเหนือ',
      description: 'การจัดระเบียบฐานรากและการเข้าถึงชุมชนในอุดรธานี',
      location: 'ศูนย์ชุมชนอำเภอไชยวาน',
      district: 'ไชยวาน',
      startTime: '13:00',
      endTime: '16:00',
      date: '2026-01-03',
      attendees: 150,
      media: ['Facebook', 'Line'],
      engagement: { likes: 1580, shares: 156, comments: 89 },
      sentiment: 'very_positive',
      status: 'in_progress'
    },
    {
      id: 4,
      candidate: 'prachachat',
      candidateName: 'ประชาชาติ แสนแก้ว',
      type: 'ประชุมหาเสียง',
      title: 'การเยี่ยมชุมชนในตำบลบ้านโปรง อำเภอศรีธาตุ',
      description: 'กิจกรรมรณรงค์ทั่วอำเภอไชยวาน',
      location: 'ตำบลบ้านโปรง อำเภอศรีธาตุ',
      district: 'ศรีธาตุ',
      startTime: '19:00',
      endTime: '21:00',
      date: '2026-01-03',
      attendees: 200,
      media: ['YouTube Live', 'Facebook Live'],
      engagement: { likes: 2340, shares: 234, comments: 567 },
      sentiment: 'positive',
      status: 'upcoming'
    }
  ];

  const mediaMetrics = {
    facebook: {
      followers: 15200,
      engagement: 4.2,
      reach: 89000,
      trend: '+12%'
    },
    tiktok: {
      followers: 8900,
      engagement: 8.7,
      reach: 45000,
      trend: '+28%'
    },
    line: {
      friends: 12800,
      messagesSent: 45600,
      openRate: 78.5,
      trend: '+5%'
    },
    youtube: {
      subscribers: 8900,
      views: 234000,
      watchTime: '1.2ชม.',
      trend: '+15%'
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'very_positive': return 'text-green-600 bg-green-100';
      case 'positive': return 'text-green-600 bg-green-50';
      case 'neutral': return 'text-gray-600 bg-gray-50';
      case 'negative': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'upcoming': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'เสร็จสิ้น';
      case 'in_progress': return 'กำลังดำเนินการ';
      case 'upcoming': return 'กำหนดการต่อไป';
      default: return 'ไม่ระบุ';
    }
  };

  const filteredActivities = activities.filter(activity => {
    const matchesCandidate = selectedCandidate === 'all' || activity.candidate === selectedCandidate;
    const matchesType = activityType === 'all' || activity.type === activityType;
    const matchesDate = activity.date === selectedDate;
    return matchesCandidate && matchesType && matchesDate;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">ติดตามกิจกรรมการหาเสียงแบบเรียลไทม์</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
          <Plus className="w-4 h-4" />
          <span>เพิ่มกิจกรรม</span>
        </button>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">วันที่</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ผู้สมัคร</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
            >
              {candidates.map(candidate => (
                <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ประเภทกิจกรรม</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
            >
              <option value="all">ทั้งหมด</option>
              <option value="ประชุมหาเสียง">ประชุมหาเสียง</option>
              <option value="เดินสำรวจ">เดินสำรวจ</option>
              <option value="บริการสาธารณะ">บริการสาธารณะ</option>
              <option value="สื่อออนไลน์">สื่อออนไลน์</option>
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

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">กิจกรรมวันนี้</p>
              <p className="text-2xl font-bold text-gray-900">{filteredActivities.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ผู้เข้าร่วมรวม</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredActivities.reduce((sum, act) => sum + act.attendees, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Engagement รวม</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredActivities.reduce((sum, act) => sum + act.engagement.likes, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">กิจกรรมที่กำลังดำเนินการ</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredActivities.filter(act => act.status === 'in_progress').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">กิจกรรมประจำวัน</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.candidate === 'thanonan' ? 'bg-green-500' :
                    activity.candidate === 'somchai' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-medium text-gray-900">{activity.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                          {getStatusText(activity.status)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {activity.startTime} - {activity.endTime}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {activity.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {activity.attendees} คน
                        </div>
                      </div>

                      {/* Media & Engagement */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center space-x-4 mb-2 md:mb-0">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">สื่อ:</span>
                            <div className="flex space-x-1">
                              {activity.media.map((platform, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {activity.engagement.likes} ไลค์
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {activity.engagement.shares} แชร์
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(activity.sentiment)}`}>
                            {activity.sentiment === 'positive' ? 'ปฏิกิริยาดี' : 
                             activity.sentiment === 'very_positive' ? 'ปฏิกิริยาดีมาก' : 'เป็นกลาง'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="ml-4 text-gray-400 hover:text-gray-600">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Metrics */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">การวิเคราะห์สื่อสังคมออนไลน์</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(mediaMetrics).map(([platform, metrics]) => (
            <div key={platform} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900 capitalize">{platform}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  metrics.trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {metrics.trend}
                </span>
              </div>
              
              <div className="space-y-2">
                {platform === 'facebook' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ผู้ติดตาม</span>
                      <span className="font-medium">{metrics.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Engagement</span>
                      <span className="font-medium">{metrics.engagement}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Reach</span>
                      <span className="font-medium">{metrics.reach.toLocaleString()}</span>
                    </div>
                  </>
                )}
                
                {platform === 'line' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">เพื่อน</span>
                      <span className="font-medium">{metrics.friends.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ข้อความส่ง</span>
                      <span className="font-medium">{metrics.messagesSent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">อัตราเปิด</span>
                      <span className="font-medium">{metrics.openRate}%</span>
                    </div>
                  </>
                )}

                {platform === 'youtube' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ผู้สมัครสมาชิก</span>
                      <span className="font-medium">{metrics.subscribers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ยอดชม</span>
                      <span className="font-medium">{metrics.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">เวลาชม</span>
                      <span className="font-medium">{metrics.watchTime}</span>
                    </div>
                  </>
                )}

                {platform === 'tiktok' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ผู้ติดตาม</span>
                      <span className="font-medium">{metrics.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Engagement</span>
                      <span className="font-medium">{metrics.engagement}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Reach</span>
                      <span className="font-medium">{metrics.reach.toLocaleString()}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTracking;