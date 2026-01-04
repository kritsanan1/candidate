import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Target, AlertTriangle, CheckCircle, Users, DollarSign } from 'lucide-react';

const CompetitiveAnalysis = () => {
  const [analysisType, setAnalysisType] = useState('comparison');
  const [predictionModel, setPredictionModel] = useState('advanced');

  const swotData = {
    adisak: {
      strengths: [
        'ส.ส.ปัจจุบันที่มีความสามารถในการได้รับคะแนนเสียงที่พิสูจน์แล้ว (ชนะปี 2023)',
        'ความสัมพันธ์ครอบครัวท้องถิ่นที่แข็งแกร่งและรากเหง้าหลายชั่วอายุ',
        'การสนับสนุนจากพรรคภูมิใจไทย (พรรครองนายกรัฐมนตรีอนุทิน ในรัฐบาล)',
        'การเข้าถึงทรัพยากรรัฐบาลและกองทุนพัฒนาเขตเลือกตั้ง',
        'ประสบการณ์ในฐานะสมาชิกรัฐสภาปัจจุบัน'
      ],
      weaknesses: [
        'ผู้เปลี่ยนพรรคจากไทยสร้างไทยเป็นภูมิใจไทย (ความกังวลเรื่องความน่าเชื่อถือ)',
        'ชนะปี 2023 ด้วยเพียง 34% - 66% โหวตให้ผู้สมัครคนอื่น',
        'พรรคเดิม (ไทยสร้างไทย) วิพากษ์วิจารณ์ปัญหาความภักดี',
        'เสี่ยงต่อการโจมตีเรื่องฉวยโอกาสและขาดหลักการ'
      ],
      opportunities: [
        'สามารถใช้ประโยชน์จากทรัพยากรรัฐบาลสำหรับโครงการเขตเลือกตั้ง',
        'การเยือนรณรงค์ของรองนายกรัฐมนตรีอนุทินและการสนับสนุนเครื่องจักรพรรค',
        'การมองเห็นของผู้ดำรงตำแหน่งผ่านการทำงานในรัฐสภา',
        'แบรนด์ภูมิใจไทยระดับชาติที่แข็งแกร่งและความนิยมนโยบายกัญชา'
      ],
      threats: [
        'ผู้ท้าชิงที่แข็งแกร่งจากเพื่อไทย (ราชวงศ์การเมืองที่โดดเด่น)',
        'เขตที่มีลักษณะเป็น "สนามรบการแข่งขัน" โดยนักวิเคราะห์',
        'การวิพากษ์วิจารณ์การเปลี่ยนพรรคอาจกัดเซาะความไว้วางใจ',
        'วิกฤตการเกษตรอาจทำร้ายผู้สมัครพรรครัฐบาลผสม'
      ]
    }
  };

  const comparisonData = [
    {
      candidate: 'อดิศักดิ์ แก้วมุงคุณทรัพย์',
      party: 'ภูมิใจไทย',
      currentRating: 34,
      budget: 'ไม่เปิดเผย',
      experience: 4,
      socialMedia: 8.5,
      policies: 9,
      organization: 8,
      trends: {
        week: +2,
        month: +3,
        overall: 'rising'
      }
    },
    {
      candidate: 'ประชาชาติ แสนแก้ว',
      party: 'เพื่อไทย',
      currentRating: 28,
      budget: 'ไม่เปิดเผย',
      experience: 1,
      socialMedia: 9.2,
      policies: 8,
      organization: 9,
      trends: {
        week: +4,
        month: +6,
        overall: 'rising'
      }
    },
    {
      candidate: 'สรวิชญ์ นาแพงสอน',
      party: 'ประชาชน',
      currentRating: 22,
      budget: 1300,
      experience: 2,
      socialMedia: 6.8,
      policies: 7,
      organization: 5,
      trends: {
        week: +1,
        month: +2,
        overall: 'stable'
      }
    }
  ];

  const predictionModels = {
    basic: {
      name: 'โมเดลพื้นฐาน',
      accuracy: 82.3,
      results: [
        { candidate: 'อดิศักดิ์', probability: 36.2, votes: 30770 },
        { candidate: 'ประชาชาติ', probability: 32.8, votes: 27880 },
        { candidate: 'สรวิชญ์', probability: 24.1, votes: 20480 },
        { candidate: 'อื่นๆ', probability: 6.9, votes: 5870 }
      ]
    },
    advanced: {
      name: 'โมเดลขั้นสูง (ML)',
      accuracy: 87.4,
      results: [
        { candidate: 'อดิศักดิ์', probability: 38.7, votes: 32895 },
        { candidate: 'ประชาชาติ', probability: 35.2, votes: 29920 },
        { candidate: 'สรวิชญ์', probability: 21.3, votes: 18105 },
        { candidate: 'อื่นๆ', probability: 4.8, votes: 4080 }
      ]
    }
  };

  const riskAlerts = [
    {
      type: 'high',
      title: 'วิกฤตราคาอ้อยส่งผลกระทบต่อเกษตรกร',
      description: 'เกษตรกรปลูกอ้อยขายขาดทุน ส่งผลกระทบต่อความนิยมรัฐบาล',
      impact: 'สูง',
      recommendation: 'เร่งแก้ไขปัญหาราคาอ้อยและต้นทุนการผลิต',
      timeline: 'ต้องดำเนินการภายใน 2 สัปดาห์'
    },
    {
      type: 'medium',
      title: 'ประชาชาติเพิ่มกิจกรรมสื่อสังคมออนไลน์',
      description: 'ประชาชาติใช้ TikTok และ Facebook อย่างแข็งขันเพื่อเข้าถึงผู้มีสิทธิเลือกตั้งรุ่นใหม่',
      impact: 'ปานกลาง',
      recommendation: 'ปรับกลยุทธ์สื่อสังคมออนไลน์',
      timeline: 'ควรดำเนินการภายใน 1 สัปดาห์'
    },
    {
      type: 'low',
      title: 'สรวิชญ์ประสบปัญหาการระดมทุนอย่างรุนแรง',
      description: 'ระดมทุนได้เพียง 1,300 บาทจากเป้าหมาย 1 ล้านบาท (0.13%)',
      impact: 'ต่ำ',
      recommendation: 'ติดตามการพัฒนาการระดมทุนและผลกระทบต่อการรณรงค์',
      timeline: 'ไม่เร่งด่วน'
    }
  ];

  const opportunities = [
    {
      title: 'เกษตรกรปลูกอ้อยไม่พอใจราคาปัจจุบัน',
      description: 'โอกาสสำหรับผู้สมัครที่เสนอโซลูชันราคาอ้อยที่เป็นรูปธรรม',
      potential: 'สูง',
      action: 'นำเสนอแผนการแทรกแซงราคาอ้อยที่ชัดเจน',
      timeframe: 'สัปดาหน์หน้า'
    },
    {
      title: 'ผู้มีสิทธิเลือกตั้งรุ่นใหม่สนใจการเปลี่ยนแปลง',
      description: 'ผู้มีสิทธิเลือกตั้งครั้งแรกและรุ่นใหม่แสวงหาทางเลือกใหม่',
      potential: 'สูง',
      action: 'เพิ่มการมีส่วนร่วมของเยาวชนและการรณรงค์ดิจิทัล',
      timeframe: '2 สัปดาห์'
    },
    {
      title: 'ความเหนื่อยล้าจากการเมืองราชวงศ์',
      description: 'ผู้มีสิทธิเลือกตั้งบางส่วนแสวงหาทางเลือกที่ไม่ใช่ราชวงศ์การเมือง',
      potential: 'ปานกลาง',
      action: 'เน้นผู้สมัครใหม่และข้อความต่อต้านสถาบัน',
      timeframe: '3 สัปดาห์'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">เปรียบเทียบและพยากรณ์ผล</h2>
        <div className="flex space-x-3">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
          >
            <option value="comparison">เปรียบเทียบผู้สมัคร</option>
            <option value="swot">การวิเคราะห์ SWOT</option>
            <option value="prediction">พยากรณ์ผล</option>
            <option value="alerts">เตือนภัยและโอกาส</option>
          </select>
        </div>
      </div>

      {/* Analysis Type: Comparison */}
      {analysisType === 'comparison' && (
        <div className="space-y-6">
          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">ตารางเปรียบเทียบผู้สมัครทุกคน</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">ผู้สมัคร</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">ความนิยม</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">งบประมาณ</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">ประสบการณ์</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">สื่อสังคม</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">นโยบาย</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">องค์กร</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">แนวโน้ม</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((candidate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium text-gray-900">{candidate.candidate}</div>
                          <div className="text-sm text-gray-600">{candidate.party}</div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-lg font-bold">{candidate.currentRating}%</span>
                          {candidate.trends.week > 0 ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : candidate.trends.week < 0 ? (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          ) : null}
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className="text-sm font-medium">
                          {(candidate.budget / 1000000).toFixed(1)}M
                        </span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="flex justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${(candidate.experience / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="flex justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${(candidate.socialMedia / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="flex justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(candidate.policies / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="flex justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-orange-500 h-2 rounded-full"
                              style={{ width: `${(candidate.organization / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          candidate.trends.overall === 'rising' ? 'bg-green-100 text-green-800' :
                          candidate.trends.overall === 'falling' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {candidate.trends.overall === 'rising' ? 'เพิ่มขึ้น' :
                           candidate.trends.overall === 'falling' ? 'ลดลง' : 'คงที่'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Analysis Type: SWOT */}
      {analysisType === 'swot' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">การวิเคราะห์ SWOT - ธนอนันต์ เมนะสวัสดิ์</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                จุดแข็ง (Strengths)
              </h4>
              <ul className="space-y-2">
                {swotData.thanonan.strengths.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">• {item}</li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="border border-red-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                จุดอ่อน (Weaknesses)
              </h4>
              <ul className="space-y-2">
                {swotData.thanonan.weaknesses.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">• {item}</li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-blue-700 mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                โอกาส (Opportunities)
              </h4>
              <ul className="space-y-2">
                {swotData.thanonan.opportunities.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">• {item}</li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="border border-orange-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-orange-700 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                ภัยคุกคาม (Threats)
              </h4>
              <ul className="space-y-2">
                {swotData.thanonan.threats.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Analysis Type: Prediction */}
      {analysisType === 'prediction' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">โมเดลพยากรณ์ผลการเลือกตั้ง</h3>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                value={predictionModel}
                onChange={(e) => setPredictionModel(e.target.value)}
              >
                <option value="basic">โมเดลพื้นฐาน</option>
                <option value="advanced">โมเดลขั้นสูง (ML)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">
                  {predictionModels[predictionModel].name} (ความแม่นยำ: {predictionModels[predictionModel].accuracy}%)
                </h4>
                <div className="space-y-3">
                  {predictionModels[predictionModel].results.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">{result.candidate}</span>
                        <div className="text-sm text-gray-600">{result.votes.toLocaleString()} เสียง</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${
                              result.candidate === 'ธนอนันต์' ? 'bg-green-500' :
                              result.candidate === 'สมชาย' ? 'bg-blue-500' :
                              result.candidate === 'วิชัย' ? 'bg-purple-500' :
                              'bg-gray-400'
                            }`}
                            style={{ width: `${result.probability}%` }}
                          ></div>
                        </div>
                        <span className="font-bold text-gray-900">{result.probability.toFixed(1)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4">ปัจจัยที่ใช้ในการพยากรณ์</h4>
                <div className="space-y-2 text-sm">
                  <div>• ผลสำรวจความคิดเห็นรายเดือน</div>
                  <div>• การกระจายตัวทางประชากรศาสตร์</div>
                  <div>• ประวัติการเลือกตั้งพื้นที่</div>
                  <div>• การวิเคราะห์ Sentiment ออนไลน์</div>
                  <div>• ข้อมูลกิจกรรมการหาเสียง</div>
                  {predictionModel === 'advanced' && (
                    <>
                      <div>• การวิเคราะห์เครือข่ายสังคม</div>
                      <div>• ปัจจัยทางเศรษฐกิจท้องถิ่น</div>
                      <div>• แบบจำลองการเปลี่ยนแปลงความนิยม</div>
                    </>
                  )}
                </div>

                <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium text-yellow-800">ข้อควรระวัง</div>
                      <div className="text-yellow-700 mt-1">
                        การพยากรณ์นี้อิงจากข้อมูลปัจจุบันและอาจเปลี่ยนแปลงได้
                        ควรอัปเดตข้อมูลและวิเคราะห์ใหม่ทุกสัปดาห์
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analysis Type: Alerts */}
      {analysisType === 'alerts' && (
        <div className="space-y-6">
          {/* Risk Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              การเตือนความเสี่ยง
            </h3>
            <div className="space-y-4">
              {riskAlerts.map((alert, index) => (
                <div key={index} className={`border-l-4 p-4 rounded-r-lg ${
                  alert.type === 'high' ? 'border-red-500 bg-red-50' :
                  alert.type === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        alert.type === 'high' ? 'text-red-800' :
                        alert.type === 'medium' ? 'text-yellow-800' :
                        'text-blue-800'
                      }`}>
                        {alert.title}
                      </h4>
                      <p className={`text-sm mt-1 ${
                        alert.type === 'high' ? 'text-red-700' :
                        alert.type === 'medium' ? 'text-yellow-700' :
                        'text-blue-700'
                      }`}>
                        {alert.description}
                      </p>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="font-medium">ผลกระทบ:</span> {alert.impact}
                        </div>
                        <div>
                          <span className="font-medium">แนะนำ:</span> {alert.recommendation}
                        </div>
                        <div>
                          <span className="font-medium">กำหนดเวลา:</span> {alert.timeline}
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.type === 'high' ? 'bg-red-100 text-red-800' :
                      alert.type === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.type === 'high' ? 'สูง' : alert.type === 'medium' ? 'ปานกลาง' : 'ต่ำ'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-5 h-5 text-green-500 mr-2" />
              โอกาสทางการเมือง
            </h3>
            <div className="space-y-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-green-800">{opportunity.title}</h4>
                      <p className="text-sm text-green-700 mt-1">{opportunity.description}</p>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-green-700">
                        <div>
                          <span className="font-medium">ศักยภาพ:</span> {opportunity.potential}
                        </div>
                        <div>
                          <span className="font-medium">การดำเนินการ:</span> {opportunity.action}
                        </div>
                        <div>
                          <span className="font-medium">กรอบเวลา:</span> {opportunity.timeframe}
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      opportunity.potential === 'สูง' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {opportunity.potential}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitiveAnalysis;