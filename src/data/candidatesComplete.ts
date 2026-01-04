export interface Candidate {
  id: string;
  number: number;
  name: string;
  nickname?: string;
  party: string;
  partyColor: string;
  age?: number;
  education?: string;
  experience?: string;
  policies: string[];
  budget?: string;
  supporters: string[];
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  currentRating: number;
  trend: string;
  isTarget?: boolean;
  campaignEvents: CampaignEvent[];
  socialMediaSentiment: SocialMediaSentiment;
  facebookPosts: FacebookPost[];
}

export interface CampaignEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  attendees?: number;
  type: 'rally' | 'meeting' | 'visit' | 'debate' | 'other';
}

export interface SocialMediaSentiment {
  overall: 'positive' | 'negative' | 'neutral';
  engagement: number;
  reach: number;
  mentions: number;
  positiveKeywords: string[];
  negativeKeywords: string[];
}

export interface FacebookPost {
  id: string;
  content: string;
  date: string;
  likes: number;
  shares: number;
  comments: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  sourceUrl?: string;
}

export const candidatesComplete: Candidate[] = [
  {
    id: 'thanonan',
    number: 1,
    name: 'นายธนอนันต์ เมนะสวัสดิ์',
    nickname: 'ธนอนันต์',
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
    opportunities: [
      'ความต้องการเปลี่ยนแปลงของประชาชน',
      'การสนับสนุนจากรัฐบาลในนโยบายดิจิทัล',
      'ปัญหาเกษตรกรรมที่ต้องการโซลูชันใหม่'
    ],
    threats: [
      'การต่อต้านจากกลุ่มผลประโยชน์เดิม',
      'ความท้าทายในการสื่อสารเทคโนโลยีกับชาวบ้าน',
      'การแข่งขันจากผู้สมัครที่มีประสบการณ์การเมือง'
    ],
    currentRating: 28,
    trend: '+5',
    isTarget: true,
    campaignEvents: [
      {
        id: 'event1',
        title: 'เสวนาเกษตรอัจฉริยะ อำเภอศรีธาตุ',
        date: '2024-01-15',
        location: 'ศาลาประชาคม ตำบลศรีธาตุ',
        description: 'นำเสนอแนวทางการใช้เทคโนโลยีในการเกษตร',
        attendees: 150,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'positive',
      engagement: 8.5,
      reach: 25000,
      mentions: 450,
      positiveKeywords: ['นวัตกรรม', 'เทคโนโลยี', 'เปลี่ยนแปลง'],
      negativeKeywords: ['ไม่มีประสบการณ์', 'ทฤษฎี']
    },
    facebookPosts: [
      {
        id: 'post1',
        content: 'เกษตรกรต้องการโซลูชันที่จับต้องได้ ไม่ใช่คำสัญญาเปล่าๆ',
        date: '2024-01-10',
        likes: 320,
        shares: 45,
        comments: 67,
        sentiment: 'positive'
      }
    ]
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
    budget: '2,500,000 บาท',
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
      'ฐานเสียงในชนบทอาจจำกัด',
      'ขาดประสบการณ์การเมืองท้องถิ่น'
    ],
    opportunities: [
      'กระแสต่อต้านการเมืองเก่า',
      'ความต้องการปฏิรูปของคนรุ่นใหม่',
      'การสนับสนุนจากพรรคระดับชาติ'
    ],
    threats: [
      'การแข่งขันจากพรรคใหญ่',
      'ความไม่แน่นอนทางการเมือง',
      'ฐานเสียงจำกัดในชนบท'
    ],
    currentRating: 18,
    trend: '+1',
    campaignEvents: [
      {
        id: 'event2',
        title: 'พบปะเยาวชนอำเภอไชยวาน',
        date: '2024-01-12',
        location: 'โรงเรียนไชยวานวิทยา',
        description: 'เสวนาเรื่องอนาคตการเมืองไทยกับเยาวชน',
        attendees: 200,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'positive',
      engagement: 7.2,
      reach: 18000,
      mentions: 320,
      positiveKeywords: ['ปฏิรูป', 'เยาวชน', 'เปลี่ยนแปลง'],
      negativeKeywords: ['ไม่มีประสบการณ์', 'เด็ก']
    },
    facebookPosts: [
      {
        id: 'post2',
        content: 'เยาวชนคือพลังในการเปลี่ยนแปลงประเทศ',
        date: '2024-01-08',
        likes: 180,
        shares: 25,
        comments: 34,
        sentiment: 'positive'
      }
    ]
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
      'ธรรมาภิบาลในการบริหาร',
      'การอนุรักษ์ประเพณีและวัฒนธรรม'
    ],
    budget: '1,800,000 บาท',
    supporters: [
      'เครือข่ายพรรคประชาธิปัตย์',
      'กลุ่มอนุรักษ์นิยม',
      'ผู้สูงอายุในพื้นที่'
    ],
    strengths: [
      'แบรนด์พรรคประชาธิปัตย์',
      'นโยบายที่มั่นคง',
      'ประสบการณ์ในการทำงาน'
    ],
    weaknesses: [
      'ฐานเสียงในอีสานจำกัด',
      'การรับรู้ในพื้นที่ต่ำ',
      'แบรนด์พรรคไม่แข็งแกร่งในภาคอีสาน'
    ],
    opportunities: [
      'กลุ่มผู้สูงอายุที่ต้องการเสถียรภาพ',
      'ความต้องการธรรมาภิบาล',
      'การสนับสนุนจากส่วนกลาง'
    ],
    threats: [
      'การแข่งขันจากพรรคท้องถิ่น',
      'ภาพลักษณ์พรรคกรุงเทพฯ',
      'ฐานเสียงจำกัด'
    ],
    currentRating: 5,
    trend: '0',
    campaignEvents: [
      {
        id: 'event3',
        title: 'สัมมนาเศรษฐกิจพอเพียง',
        date: '2024-01-14',
        location: 'วัดศรีธาตุ',
        description: 'เสวนาเรื่องการพัฒนาตามแนวเศรษฐกิจพอเพียง',
        attendees: 80,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'neutral',
      engagement: 4.5,
      reach: 8000,
      mentions: 120,
      positiveKeywords: ['มั่นคง', 'ประสบการณ์'],
      negativeKeywords: ['เก่า', 'ไม่เข้าใจพื้นที่']
    },
    facebookPosts: [
      {
        id: 'post3',
        content: 'การพัฒนาที่ยั่งยืนต้องเริ่มจากหลักเศรษฐกิจพอเพียง',
        date: '2024-01-09',
        likes: 95,
        shares: 12,
        comments: 18,
        sentiment: 'neutral'
      }
    ]
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
      'สนับสนุนผู้หญิงในการเมือง',
      'การดูแลเด็กและผู้สูงอายุ'
    ],
    budget: '1,200,000 บาท',
    supporters: [
      'กลุ่มสตรีในพื้นที่',
      'เครือข่ายพรรคภูมิใจไทย',
      'องค์กรสวัสดิการชุมชน'
    ],
    strengths: [
      'การเป็นผู้หญิงในสนามการเมือง',
      'ความเข้าใจปัญหาสตรีและครอบครัว',
      'การทำงานในชุมชน'
    ],
    weaknesses: [
      'การรับรู้ในพื้นที่อาจจำกัด',
      'ขาดประสบการณ์การเมือง',
      'ทรัพยากรในการหาเสียงจำกัด'
    ],
    opportunities: [
      'การเพิ่มขึ้นของผู้หญิงในการเมือง',
      'ความต้องการสวัสดิการสังคม',
      'การสนับสนุนจากกลุ่มสตรี'
    ],
    threats: [
      'การแข่งขันจากผู้สมัครชาย',
      'ทรัพยากรจำกัด',
      'อคติทางเพศในการเมือง'
    ],
    currentRating: 8,
    trend: '0',
    campaignEvents: [
      {
        id: 'event4',
        title: 'ประชุมกลุ่มสตรีอำเภอวังสามหมอ',
        date: '2024-01-11',
        location: 'ศูนย์พัฒนาสตรีและครอบครัว',
        description: 'พบปะกลุ่มสตรีเพื่อรับฟังปัญหาและข้อเสนอแนะ',
        attendees: 120,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'positive',
      engagement: 6.8,
      reach: 12000,
      mentions: 180,
      positiveKeywords: ['สตรี', 'ครอบครัว', 'สวัสดิการ'],
      negativeKeywords: ['ไม่มีประสบการณ์']
    },
    facebookPosts: [
      {
        id: 'post4',
        content: 'ผู้หญิงต้องมีเสียงในการตัดสินใจเรื่องที่ส่งผลต่อครอบครัว',
        date: '2024-01-07',
        likes: 145,
        shares: 18,
        comments: 28,
        sentiment: 'positive'
      }
    ]
  },
  {
    id: 'banpot',
    number: 6,
    name: 'นายบรรพต จิกจักร์',
    nickname: 'บรรพต',
    party: 'อิสระ',
    partyColor: '#6B7280',
    age: 40,
    education: 'ปริญญาตรี',
    experience: 'ผู้สมัครอิสระ',
    policies: [
      'นโยบายท้องถิ่น',
      'การพัฒนาชุมชน',
      'การแก้ปัญหาเฉพาะพื้นที่',
      'ความโปร่งใสในการบริหาร'
    ],
    budget: '500,000 บาท',
    supporters: [
      'กลุ่มสนับสนุนท้องถิ่น',
      'เพื่อนบ้านและญาติมิตร'
    ],
    strengths: [
      'ความเป็นอิสระ',
      'ความใกล้ชิดกับชุมชน',
      'ไม่ผูกพันกับพรรคการเมือง'
    ],
    weaknesses: [
      'ขาดเครือข่ายการเมือง',
      'งบประมาณจำกัด',
      'ขาดการสนับสนุนจากพรรค'
    ],
    opportunities: [
      'ความเบื่อหน่ายการเมืองพรรค',
      'ความต้องการผู้แทนท้องถิ่น',
      'การสนับสนุนจากชุมชน'
    ],
    threats: [
      'การแข่งขันจากพรรคใหญ่',
      'ทรัพยากรจำกัด',
      'การรับรู้ต่ำ'
    ],
    currentRating: 3,
    trend: '0',
    campaignEvents: [
      {
        id: 'event5',
        title: 'พบปะชาวบ้านตำบลกู่แก้ว',
        date: '2024-01-13',
        location: 'ศาลาชุมชนตำบลกู่แก้ว',
        description: 'รับฟังปัญหาและความต้องการของชาวบ้าน',
        attendees: 50,
        type: 'visit'
      }
    ],
    socialMediaSentiment: {
      overall: 'neutral',
      engagement: 3.2,
      reach: 5000,
      mentions: 80,
      positiveKeywords: ['อิสระ', 'ท้องถิ่น'],
      negativeKeywords: ['ไม่รู้จัก', 'เงินน้อย']
    },
    facebookPosts: [
      {
        id: 'post5',
        content: 'การเมืองต้องเริ่มจากการรับฟังปัญหาของชาวบ้าน',
        date: '2024-01-06',
        likes: 45,
        shares: 8,
        comments: 12,
        sentiment: 'neutral'
      }
    ]
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
      'สิทธิเสรีภาพของประชาชน',
      'การต่อต้านการทุจริต'
    ],
    budget: '1,500,000 บาท',
    supporters: [
      'กลุ่มเยาวชนก้าวหน้า',
      'เครือข่ายพรรคประชาชน',
      'นักกิจกรรมสิทธิมนุษยชน'
    ],
    strengths: [
      'แบรนด์พรรคประชาชน',
      'ดึงดูดเยาวชน',
      'นโยบายปฏิรูป'
    ],
    weaknesses: [
      'ฐานเสียงในชนบทจำกัด',
      'ประสบการณ์น้อย',
      'การรับรู้ในพื้นที่ต่ำ'
    ],
    opportunities: [
      'กระแสต่อต้านการทุจริต',
      'ความต้องการปฏิรูป',
      'การสนับสนุนจากคนรุ่นใหม่'
    ],
    threats: [
      'การแข่งขันจากพรรคใหญ่',
      'ฐานเสียงจำกัดในชนบท',
      'ทรัพยากรจำกัด'
    ],
    currentRating: 7,
    trend: '+1',
    campaignEvents: [
      {
        id: 'event6',
        title: 'เสวนาประชาธิปไตยกับเยาวชน',
        date: '2024-01-16',
        location: 'มหาวิทยาลัยราชภัฏอุดรธานี',
        description: 'เสวนาเรื่องการมีส่วนร่วมทางการเมืองของเยาวชน',
        attendees: 180,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'positive',
      engagement: 7.8,
      reach: 15000,
      mentions: 250,
      positiveKeywords: ['ประชาธิปไตย', 'ปฏิรูป', 'โปร่งใส'],
      negativeKeywords: ['ไม่มีประสบการณ์', 'เด็ก']
    },
    facebookPosts: [
      {
        id: 'post6',
        content: 'ประชาธิปไตยที่แท้จริงต้องมาจากการมีส่วนร่วมของประชาชน',
        date: '2024-01-05',
        likes: 210,
        shares: 32,
        comments: 45,
        sentiment: 'positive'
      }
    ]
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
      'นวัตกรรมทางธุรกิจ',
      'การสร้างงานในชุมชน'
    ],
    budget: '2,000,000 บาท',
    supporters: [
      'กลุ่มนักธุรกิจท้องถิ่น',
      'เครือข่ายพรรคเศรษฐกิจไทย',
      'ผู้ประกอบการ SME'
    ],
    strengths: [
      'ความเข้าใจด้านเศรษฐกิจ',
      'เครือข่ายธุรกิจ',
      'ประสบการณ์การลงทุน'
    ],
    weaknesses: [
      'การรับรู้ในพื้นที่จำกัด',
      'ฐานเสียงน้อย',
      'ขาดประสบการณ์การเมือง'
    ],
    opportunities: [
      'ความต้องการพัฒนาเศรษฐกิจ',
      'การสนับสนุนจากนักธุรกิจ',
      'นโยบายส่งเสริมการลงทุน'
    ],
    threats: [
      'การแข่งขันจากพรรคใหญ่',
      'ภาพลักษณ์นักธุรกิจ',
      'ฐานเสียงจำกัด'
    ],
    currentRating: 4,
    trend: '0',
    campaignEvents: [
      {
        id: 'event7',
        title: 'สัมมนาการพัฒนาเศรษฐกิจท้องถิ่น',
        date: '2024-01-17',
        location: 'โรงแรมชัยพฤกษ์ อุดรธานี',
        description: 'เสวนาเรื่องการส่งเสริมการลงทุนและการสร้างงาน',
        attendees: 100,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'neutral',
      engagement: 5.5,
      reach: 10000,
      mentions: 150,
      positiveKeywords: ['เศรษฐกิจ', 'ลงทุน', 'งาน'],
      negativeKeywords: ['นักธุรกิจ', 'ไม่รู้จัก']
    },
    facebookPosts: [
      {
        id: 'post7',
        content: 'การพัฒนาเศรษฐกิจต้องเริ่มจากการสร้างงานในชุมชน',
        date: '2024-01-04',
        likes: 85,
        shares: 15,
        comments: 22,
        sentiment: 'neutral'
      }
    ]
  },
  {
    id: 'prachachat',
    number: 2,
    name: 'นายประชาชาติ แสนแก้ว',
    nickname: 'ตุง',
    party: 'เพื่อไทย',
    partyColor: '#DC2626',
    age: 32,
    education: 'ปริญญาตรี สาขาการจัดการ',
    experience: 'บุตรชายของธีรชัย แสนแก้ว (อี-โต้อีสาน) ส.ส.อุดรธานีปัจจุบัน',
    policies: [
      'เพิ่มราคาอ้อยเป็น 1,200-1,300 บาทต่อตัน',
      'มาตรการชดเชยรายได้สำหรับเกษตรกร',
      'แก้ไขต้นทุนการผลิตทางการเกษตร',
      'โปรแกรมบรรเทาหนี้สินเกษตรกร'
    ],
    budget: '3,500,000 บาท',
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
    opportunities: [
      'ความนิยมของพรรคเพื่อไทยในอีสาน',
      'ปัญหาราคาสินค้าเกษตรที่ต่ำ',
      'การสนับสนุนจากเครือข่ายพ่อ'
    ],
    threats: [
      'การแข่งขันจากผู้สมัครใหม่',
      'ภาพลักษณ์การเมืองราชวงศ์',
      'ความคาดหวังสูงจากผู้สนับสนุน'
    ],
    currentRating: 32,
    trend: '+3',
    campaignEvents: [
      {
        id: 'event8',
        title: 'ประชุมเกษตรกรปลูกอ้อย',
        date: '2024-01-18',
        location: 'สมาคมเกษตรกรปลูกอ้อยอุดรธานี',
        description: 'พบปะเกษตรกรปลูกอ้อยเพื่อรับฟังปัญหาและนำเสนอนโยบาย',
        attendees: 300,
        type: 'meeting'
      }
    ],
    socialMediaSentiment: {
      overall: 'positive',
      engagement: 9.2,
      reach: 35000,
      mentions: 580,
      positiveKeywords: ['อ้อย', 'เกษตรกร', 'เพื่อไทย', 'ช่วยเหลือ'],
      negativeKeywords: ['ลูกพ่อ', 'ไม่มีประสบการณ์']
    },
    facebookPosts: [
      {
        id: 'post8',
        content: 'เกษตรกรปลูกอ้อยต้องได้รับราคาที่เป็นธรรม ผมจะต่อสู้เพื่อพี่น้อง',
        date: '2024-01-03',
        likes: 450,
        shares: 78,
        comments: 95,
        sentiment: 'positive'
      }
    ]
  }
];

export const getMainCompetitors = () => {
  return candidatesComplete.filter(c => c.currentRating > 15).sort((a, b) => b.currentRating - a.currentRating);
};

export const getTargetCandidate = () => {
  return candidatesComplete.find(c => c.isTarget);
};

export const getAllCandidates = () => {
  return candidatesComplete.sort((a, b) => a.number - b.number);
};