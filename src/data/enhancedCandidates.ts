import { Candidate } from './candidates';

export const enhancedCandidates: Candidate[] = [
  {
    id: 'thananan',
    number: 1,
    name: 'นายธนอนันต์ เมนะสวัสดิ์',
    nickname: 'ทนายโตโต้',
    party: 'พรรคกล้าธรรม',
    partyColor: '#10B981',
    age: 42,
    education: 'ปริญญาโท สาขาการจัดการ',
    experience: 'ผู้เชี่ยวชาญด้าน Data Analytics และ Digital Transformation, อดีต Head of Commercial Platform ธนาคารทหารไทยธนชาต',
    policies: [
      'ปฏิรูปโครงสร้างพื้นฐานด้วย Data-Driven Infrastructure',
      'เกษตรอัจฉริยะและเศรษฐกิจสีเขียว',
      'เปลี่ยน ส.ป.ก. เป็นโฉนดเพื่อการเกษตร',
      'สร้างแพลตฟอร์มเชื่อมโยงเกษตรกรกับตลาดโดยตรง',
      'ระบบ Credit Scoring ภาคเกษตร'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'กลุ่มเทคโนแครตรุ่นใหม่',
      'เกษตรกรที่ต้องการนวัตกรรม',
      'ผู้ประกอบการ SMEs',
      'เครือข่ายพรรคกล้าธรรมระดับจังหวัด'
    ],
    strengths: [
      'ความเชี่ยวชาญด้านเทคโนโลยีและข้อมูล',
      'การเข้าถึงกลไกอำนาจรัฐผ่านพรรคกล้าธรรม',
      'นโยบายที่แม่นยำและตอบโจทย์ปัญหาจริง',
      'ภาพลักษณ์นักบริหารรุ่นใหม่'
    ],
    weaknesses: [
      'ขาดประสบการณ์ทางการเมืองโดยตรง',
      'ต้องพิสูจน์ความสามารถในการลงพื้นที่',
      'การรับรู้ในพื้นที่อาจยังจำกัด'
    ],
    currentRating: 28,
    trend: '+5',
    isTarget: true
  },
  {
    id: 'prachachat',
    number: 2,
    name: 'นายประชาชาติ แสนแก้ว',
    nickname: 'ตุง',
    party: 'พรรคเพื่อไทย',
    partyColor: '#DC2626',
    age: 34,
    education: 'ปริญญาโท สาขาภาวะผู้นำ, ธุรกิจ และการเมือง (มหาวิทยาลัยรังสิต)',
    experience: 'บุตรชายของธีรชัย แสนแก้ว (อี-โต้อีสาน) ส.ส.อุดรธานีปัจจุบัน',
    policies: [
      'เพิ่มราคาอ้อยเป็น 1,200-1,300 บาทต่อตัน',
      'มาตรการชดเชยรายได้สำหรับเกษตรกร',
      'แก้ไขต้นทุนการผลิตทางการเกษตร',
      'โปรแกรมบรรเทาหนี้สินเกษตรกร'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'เกษตรกรปลูกอ้อยและแรงงานเกษตร',
      'ผู้สนับสนุนขบวนการเสื้อแดง',
      'สมาชิกสมาคมเกษตรกรปลูกอ้อย',
      'เครื่องจักรพรรคเพื่อไทยระดับจังหวัด'
    ],
    strengths: [
      'มรดกครอบครัวทางการเมืองที่ทรงพลัง',
      'แบรนด์พรรคเพื่อไทยที่แข็งแกร่ง',
      'เครือข่ายผู้สนับสนุนเสื้อแดงของพ่อ',
      'ความสัมพันธ์กับสมาคมเกษตรกรปลูกอ้อย'
    ],
    weaknesses: [
      'ไม่มีประวัติการทำงานทางการเมืองส่วนตัว',
      'ความเสี่ยงของการรับรู้ "การเมืองราชวงศ์"',
      'แพ้เขต 6 ในการเลือกตั้ง 2566'
    ],
    currentRating: 32,
    trend: '+3'
  },
  {
    id: 'sorawich',
    number: 3,
    name: 'นายสรวิชญ์ นาแพงสอน',
    nickname: 'สรวิชญ์',
    party: 'รวมไทยสร้างชาติ',
    partyColor: '#F59E0B',
    age: 38,
    education: 'ปริญญาโท สาขาการบริหารจัดการ',
    experience: 'ผู้สมัครพรรครวมไทยสร้างชาติ',
    policies: [
      'วาระการปฏิรูปแบบก้าวหน้า',
      'การปฏิรูปประชาธิปไตยและการเปลี่ยนแปลงสถาบัน',
      'มาตรการต่อต้านการทุจริตและความโปร่งใส',
      'นโยบายที่มุ่งเน้นเยาวชน'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'ผู้มีสิทธิเลือกตั้งรุ่นใหม่และนักเรียน',
      'ชุมชนก้าวหน้าในเมือง',
      'องค์กรฐานรากพรรครวมไทยสร้างชาติ'
    ],
    strengths: [
      'แบรนด์พรรครวมไทยสร้างชาติ',
      'ดึงดูดผู้มีสิทธิเลือกตั้งที่อายุน้อยกว่า',
      'สามารถดึงดูดคะแนนเสียงต่อต้านสถาบัน'
    ],
    weaknesses: [
      'การรับรู้ชื่อส่วนตัวที่จำกัดในเขต',
      'ฐานเสียงในชนบทอาจจำกัด'
    ],
    currentRating: 18,
    trend: '+1'
  },
  {
    id: 'maliwan',
    number: 4,
    name: 'นางมลิวรรณ แก้วสุข',
    nickname: 'มลิวรรณ',
    party: 'ภูมิใจไทย',
    partyColor: '#3B82F6',
    age: 45,
    education: 'ปริญญาตรี',
    experience: 'ผู้สมัครพรรคภูมิใจไทย',
    policies: [
      'นโยบายสวัสดิการสังคม',
      'การพัฒนาชุมชนท้องถิ่น',
      'สนับสนุนผู้หญิงในการเมือง'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'กลุ่มสตรีในพื้นที่',
      'เครือข่ายพรรคภูมิใจไทย'
    ],
    strengths: [
      'การเป็นผู้หญิงในสนามการเมือง',
      'ความเข้าใจปัญหาสตรีและครอบครัว'
    ],
    weaknesses: [
      'การรับรู้ในพื้นที่อาจจำกัด',
      'ขาดประสบการณ์การเมือง'
    ],
    currentRating: 8,
    trend: '0'
  },
  {
    id: 'adisak',
    number: 5,
    name: 'นายอดิศักดิ์ แก้วมุงคุณทรัพย์',
    nickname: 'ดูดี',
    party: 'เพื่อไทย',
    partyColor: '#DC2626',
    age: 45,
    education: 'ปริญญาตรี มหาวิทยาลัยในภูมิภาค',
    experience: 'ส.ส.เขต 6 อุดรธานี (คนปัจจุบัน), อดีตพรรคไทยสร้างไทย',
    policies: [
      'เศรษฐกิจการเกษตรและสวัสดิการเกษตรกร',
      'แก้ไขต้นทุนการผลิตสำหรับเกษตรกร',
      'พัฒนาโครงสร้างพื้นฐานท้องถิ่น',
      'พัฒนาเศรษฐกิจชนบท'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'ชุมชนเกษตรกรท้องถิ่นในศรีธาตุและวังสามหมอ',
      'องค์กรพรรคเพื่อไทยระดับจังหวัด',
      'ผู้สนับสนุนรัฐบาลผสม'
    ],
    strengths: [
      'ส.ส.ปัจจุบันที่มีความสามารถในการได้รับคะแนนเสียงที่พิสูจน์แล้ว',
      'ความสัมพันธ์ครอบครัวท้องถิ่นที่แข็งแกร่ง',
      'การสนับสนุนจากพรรคเพื่อไทย'
    ],
    weaknesses: [
      'ผู้เปลี่ยนพรรคจากไทยสร้างไทยเป็นเพื่อไทย',
      'ชนะในปี 2566 ด้วยเพียง 34%',
      'ความน่าเชื่อถือที่ถูกตั้งคำถาม'
    ],
    currentRating: 25,
    trend: '-2'
  },
  {
    id: 'banpot',
    number: 6,
    name: 'นายบรรพต จิกจักร์',
    nickname: 'บรรพต',
    party: 'พรรคอื่น',
    partyColor: '#6B7280',
    age: 40,
    education: 'ไม่ระบุ',
    experience: 'ผู้สมัครอิสระ',
    policies: [
      'นโยบายท้องถิ่น',
      'การพัฒนาชุมชน'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'กลุ่มสนับสนุนท้องถิ่น'
    ],
    strengths: [
      'ความเป็นอิสระ'
    ],
    weaknesses: [
      'ขาดเครือข่ายการเมือง',
      'งบประมาณจำกัด'
    ],
    currentRating: 3,
    trend: '0'
  },
  {
    id: 'suriwan',
    number: 7,
    name: 'นายสุริวรรณ คล้ายเพชร',
    nickname: 'สุริวรรณ',
    party: 'ประชาธิปัตย์',
    partyColor: '#1E40AF',
    age: 50,
    education: 'ปริญญาตรี',
    experience: 'ผู้สมัครพรรคประชาธิปัตย์',
    policies: [
      'นโยบายเศรษฐกิจพอเพียง',
      'การพัฒนาอย่างยั่งยืน',
      'ธรรมาภิบาลในการบริหาร'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'เครือข่ายพรรคประชาธิปัตย์',
      'กลุ่มอนุรักษ์นิยม'
    ],
    strengths: [
      'แบรนด์พรรคประชาธิปัตย์',
      'นโยบายที่มั่นคง'
    ],
    weaknesses: [
      'ฐานเสียงในอีสานจำกัด',
      'การรับรู้ในพื้นที่ต่ำ'
    ],
    currentRating: 5,
    trend: '0'
  },
  {
    id: 'thanapol',
    number: 8,
    name: 'นายธนพล คำศรี',
    nickname: 'ธนพล',
    party: 'ประชาชน',
    partyColor: '#F97316',
    age: 35,
    education: 'ปริญญาตรี',
    experience: 'ผู้สมัครพรรคประชาชน',
    policies: [
      'การปฏิรูปประชาธิปไตย',
      'ความโปร่งใสในการบริหาร',
      'สิทธิเสรีภาพของประชาชน'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'กลุ่มเยาวชนก้าวหน้า',
      'เครือข่ายพรรคประชาชน'
    ],
    strengths: [
      'แบรนด์พรรคประชาชน',
      'ดึงดูดเยาวชน'
    ],
    weaknesses: [
      'ฐานเสียงในชนบทจำกัด',
      'ประสบการณ์น้อย'
    ],
    currentRating: 7,
    trend: '+1'
  },
  {
    id: 'prakasit',
    number: 9,
    name: 'นายประกาศิต ปัญญาใส',
    nickname: 'ประกาศิต',
    party: 'เศรษฐกิจไทย',
    partyColor: '#8B5CF6',
    age: 42,
    education: 'ปริญญาโท',
    experience: 'ผู้สมัครพรรคเศรษฐกิจไทย',
    policies: [
      'การพัฒนาเศรษฐกิจท้องถิ่น',
      'การส่งเสริมการลงทุน',
      'นวัตกรรมทางธุรกิจ'
    ],
    budget: 'ไม่เปิดเผย',
    supporters: [
      'กลุ่มนักธุรกิจท้องถิ่น',
      'เครือข่ายพรรคเศรษฐกิจไทย'
    ],
    strengths: [
      'ความเข้าใจด้านเศรษฐกิจ',
      'เครือข่ายธุรกิจ'
    ],
    weaknesses: [
      'การรับรู้ในพื้นที่จำกัด',
      'ฐานเสียงน้อย'
    ],
    currentRating: 4,
    trend: '0'
  }
];

// 2023 Election Historical Data
export interface HistoricalElectionData {
  year: number;
  winner: string;
  votes: number;
  percentage: number;
  runnerUp: string;
  thirdPlace: string;
  totalVotes: number;
}

export const historicalElectionData: HistoricalElectionData = {
  year: 2023,
  winner: 'อดิศักดิ์ แก้วมุงคุณทรัพย์',
  votes: 27751,
  percentage: 34.1,
  runnerUp: 'จุฑาพัชร เมนะสวัสดิ์',
  thirdPlace: 'อนันต์ อมรินทร์',
  totalVotes: 81400
};

// Geographic Coverage Details
export interface DistrictCoverage {
  name: string;
  nameEn: string;
  population: number;
  tambons: number;
  keyIssues: string[];
}

export const districtCoverage: DistrictCoverage[] = [
  {
    name: 'อำเภอไชยวาน',
    nameEn: 'Amphoe Chai Wan',
    population: 35680,
    tambons: 12,
    keyIssues: ['ราคาอ้อย', 'การเกษตรอัจฉริยะ', 'โครงสร้างพื้นฐาน']
  },
  {
    name: 'อำเภอศรีธาตุ',
    nameEn: 'Amphoe Si That',
    population: 31420,
    tambons: 14,
    keyIssues: ['ถนนศรีธาตุ-ท่าคันโท', 'การเกษตร', 'สาธารณสุข']
  },
  {
    name: 'อำเภอวังสามหมอ',
    nameEn: 'Amphoe Wang Sam Mo',
    population: 28150,
    tambons: 12,
    keyIssues: ['การเกษตร', 'น้ำ', 'การศึกษา']
  },
  {
    name: 'อำเภอกู่แก้ว (บางส่วน)',
    nameEn: 'Amphoe Ku Kaeo (Partial)',
    population: 29600,
    tambons: 10,
    keyIssues: ['การเกษตร', 'โครงสร้างพื้นฐาน', 'การคมนาคม']
  }
];

// Campaign Intelligence Data
export interface CampaignIntelligence {
  socialMediaActivity: {
    candidate: string;
    platform: string;
    handle: string;
    activity: string;
    followers?: number;
  }[];
  
  keyEvents: {
    date: string;
    event: string;
    candidates: string[];
    impact: string;
  }[];
  
  pollingData: {
    date: string;
    candidate: string;
    support: number;
    trend: string;
  }[];
}

export const campaignIntelligence: CampaignIntelligence = {
  socialMediaActivity: [
    {
      candidate: 'ประชาชาติ แสนแก้ว',
      platform: 'TikTok',
      handle: '@tungburger',
      activity: 'Active campaign videos, farmer meetings',
      followers: 15000
    },
    {
      candidate: 'ธนอนันต์ เมนะสวัสดิ์',
      platform: 'Instagram',
      handle: '@thnnantemnaswasdi',
      activity: 'Agricultural focus, field visits',
      followers: 8500
    }
  ],
  
  keyEvents: [
    {
      date: '2025-12-27',
      event: 'Registration Day - Udon Thani Provincial Hall',
      candidates: ['All candidates'],
      impact: 'High energy, large crowds, intense atmosphere'
    },
    {
      date: '2026-01-01',
      event: 'Merit-making ceremonies',
      candidates: ['ประชาชาติ', 'อดิศักดิ์'],
      impact: 'Traditional campaign visibility'
    }
  ],
  
  pollingData: [
    {
      date: '2026-01-05',
      candidate: 'ประชาชาติ แสนแก้ว',
      support: 32,
      trend: '+3'
    },
    {
      date: '2026-01-05',
      candidate: 'ธนอนันต์ เมนะสวัสดิ์',
      support: 28,
      trend: '+5'
    },
    {
      date: '2026-01-05',
      candidate: 'อดิศักดิ์ แก้วมุงคุณทรัพย์',
      support: 25,
      trend: '-2'
    }
  ]
};

// Helper functions
export const getEnhancedCandidates = () => enhancedCandidates;

export const getHistoricalData = () => historicalElectionData;

export const getDistrictCoverage = () => districtCoverage;

export const getCampaignIntelligence = () => campaignIntelligence;

export const getMainCompetitorsEnhanced = () => {
  return enhancedCandidates
    .filter(c => c.currentRating > 15)
    .sort((a, b) => b.currentRating - a.currentRating);
};

export const getTargetCandidateEnhanced = () => {
  return enhancedCandidates.find(c => c.isTarget);
};