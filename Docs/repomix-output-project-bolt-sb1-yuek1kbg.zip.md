This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
project/
  .bolt/
    config.json
    prompt
  src/
    components/
      ChatMessage.tsx
      ComplaintForm.tsx
      ComplaintInfo.tsx
      ComplaintSuccess.tsx
      Footer.tsx
      Header.tsx
      Layout.tsx
      LoadingBubble.tsx
      MobileMenu.tsx
      PosterGenerator.tsx
      Sidebar.tsx
      VisionGenerator.tsx
    context/
      TabContext.tsx
    hooks/
      useChat.ts
      useMagicDraft.ts
      useMap.ts
      usePoster.ts
      useTTS.ts
      useVision.ts
    pages/
      ChatPage.tsx
      ComplaintPage.tsx
      FunPage.tsx
      HomePage.tsx
      MapPage.tsx
      PoliciesPage.tsx
    services/
      geminiService.ts
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
  vite.config.ts.timestamp-1767161960398-553e6ae8750bd.mjs
```

# Files

## File: project/.bolt/config.json
```json
{
  "template": "bolt-vite-react-ts"
}
```

## File: project/.bolt/prompt
```
For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.

By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.

Use icons from lucide-react for logos.
```

## File: project/src/components/ChatMessage.tsx
```typescript
import React from 'react';

interface ChatMessageProps {
  message: {
    text: string;
    sender: 'user' | 'bot';
  };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, sender } = message;

  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      {sender === 'bot' && (
        <div className="w-8 h-8 bg-kla-main rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm border border-kla-gold mb-1 shadow-sm mr-2 self-end">
          ก
        </div>
      )}
      <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
        sender === 'user' 
        ? 'bg-gradient-to-r from-kla-main to-green-700 text-white rounded-br-none font-medium' 
        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
      }`}>
        {sender === 'bot' ? (
          <div dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          text
        )}
      </div>
    </div>
  );
};
```

## File: project/src/components/ComplaintForm.tsx
```typescript
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useMagicDraft } from '../hooks/useMagicDraft';

interface ComplaintFormProps {
  onSubmitSuccess: () => void;
}

export const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    details: ''
  });

  const { enhanceText, isLoading: isDraftLoading } = useMagicDraft();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMagicDraft = async () => {
    if (!formData.details.trim()) {
      alert('กรุณาพิมพ์รายละเอียดปัญหาสั้นๆ ก่อนครับ');
      return;
    }

    const enhanced = await enhanceText(formData.details);
    if (enhanced) {
      setFormData(prev => ({ ...prev, details: enhanced }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to your database
    onSubmitSuccess();
  };

  const districts = [
    'อำเภอศรีธาตุ',
    'อำเภอวังสามหมอ', 
    'อำเภอไชยวาน',
    'อำเภอกู่แก้ว',
    'อื่นๆ ในเขต 6'
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-red-500 flex-1 w-full">
      <h3 className="font-bold text-xl mb-6 text-gray-800">แบบฟอร์มรับเรื่องร้องทุกข์</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              ชื่อ-นามสกุล <span className="text-red-500">*</span>
            </label>
            <input 
              required 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" 
              placeholder="ระบุชื่อของท่าน"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              เบอร์โทรศัพท์ติดต่อ <span className="text-red-500">*</span>
            </label>
            <input 
              required 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" 
              placeholder="เพื่อให้ทีมงานติดต่อกลับ"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            พื้นที่ (อำเภอ/ตำบล) <span className="text-red-500">*</span>
          </label>
          <select 
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition pr-10"
            required
          >
            <option value="">-- กรุณาเลือกอำเภอ --</option>
            {districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div>
          <div className="flex justify-between items-end mb-2">
            <label className="block text-sm font-bold text-gray-700">
              รายละเอียดปัญหา <span className="text-red-500">*</span>
            </label>
            <button 
              type="button" 
              onClick={handleMagicDraft}
              disabled={isDraftLoading}
              className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1.5 rounded-full hover:shadow-lg transition flex items-center gap-1 disabled:opacity-50"
            >
              {isDraftLoading ? (
                <div className="animate-spin w-3 h-3 border border-white border-t-transparent rounded-full"></div>
              ) : (
                <Sparkles size={12} />
              )}
              ให้ AI ช่วยเรียบเรียง
            </button>
          </div>
          <textarea 
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            required 
            rows={6} 
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none" 
            placeholder="เช่น ถนนเป็นหลุมบ่อสายไหน, น้ำประปาไม่ไหลที่หมู่บ้านใด..."
          />
          <p className="text-xs text-gray-400 mt-1">*เคล็ดลับ: พิมพ์สั้นๆ แล้วกดปุ่ม ✨ เพื่อให้ AI เขียนภาษาทางการให้ครับ</p>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-bold hover:from-red-700 hover:to-red-600 transition-all shadow-lg text-lg flex items-center justify-center gap-2"
        >
          ส่งเรื่องถึงทนายโตโต้ <span>📤</span>
        </button>
      </form>
    </div>
  );
};
```

## File: project/src/components/ComplaintInfo.tsx
```typescript
import React from 'react';
import { MapPin, Phone, Facebook } from 'lucide-react';

export const ComplaintInfo: React.FC = () => {
  return (
    <div className="md:w-80 bg-green-50 p-6 rounded-3xl border border-green-100 shadow-inner">
      <h4 className="font-bold text-kla-main text-lg mb-4 flex items-center gap-2">
        <span className="text-kla-main">ℹ️</span>
        ศูนย์ประสานงาน
      </h4>
      <ul className="space-y-4 text-sm text-gray-700">
        <li className="flex items-start gap-3">
          <span className="bg-white p-2 rounded-full shadow-sm text-kla-main">
            <MapPin size={16} />
          </span>
          <span>ที่ทำการพรรคกล้าธรรม เขต 6 จ.อุดรธานี</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-white p-2 rounded-full shadow-sm text-green-600">
            <Phone size={16} />
          </span>
          <span className="font-bold">08X-XXXXXXX</span> (สายด่วนทีมงาน)
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-white p-2 rounded-full shadow-sm text-blue-600">
            <Facebook size={16} />
          </span>
          <a 
            href="https://www.facebook.com/thanaana.menasahwat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition underline font-bold"
          >
            Facebook: ทนายโตโต้
          </a>
        </li>
      </ul>
    </div>
  );
};
```

## File: project/src/components/ComplaintSuccess.tsx
```typescript
import React from 'react';
import { Check } from 'lucide-react';

interface ComplaintSuccessProps {
  onReset: () => void;
}

export const ComplaintSuccess: React.FC<ComplaintSuccessProps> = ({ onReset }) => {
  return (
    <div className="bg-white border-2 border-green-400 p-12 rounded-3xl text-center mt-8 shadow-xl max-w-2xl mx-auto animate-fade-in">
      <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-sm ring-4 ring-green-50">
        <Check size={48} />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-800 mb-4">ได้รับเรื่องแล้วครับ!</h3>
      <p className="text-gray-600 text-lg mb-8">ทีมงานทนายโตโต้จะรีบตรวจสอบและประสานงานแก้ไขให้พี่น้องโดยเร็วที่สุดครับ</p>
      <button 
        onClick={onReset}
        className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
      >
        ส่งเรื่องอื่นเพิ่มเติม
      </button>
    </div>
  );
};
```

## File: project/src/components/Footer.tsx
```typescript
import React from 'react';
import { Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-12 text-center text-sm border-t-4 border-kla-gold">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-center gap-3 opacity-50 hover:opacity-100 transition">
          <div className="text-left">
            <h4 className="font-bold text-white text-base">พรรคกล้าธรรม</h4>
            <p className="text-xs">Kla Tham Party</p>
          </div>
          <a 
            href="https://www.facebook.com/thanaana.menasahwat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <Facebook size={24} />
          </a>
        </div>
        <p className="font-medium text-gray-300">© 2025 ทีมงานทนายโตโต้ ธนอนันต์ เมนะสวัสดิ์</p>
        <p>ผู้สมัคร ส.ส. เขต 6 จ.อุดรธานี พรรคกล้าธรรม</p>
      </div>
    </footer>
  );
};
```

## File: project/src/components/Header.tsx
```typescript
import React from 'react';
import { Menu } from 'lucide-react';
import { useTab } from '../context/TabContext';

export const Header: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useTab();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white shadow-md p-3 flex justify-between items-center sticky top-0 z-50 md:hidden border-b-2 border-kla-main">
      <div className="font-bold text-lg text-kla-main flex items-center gap-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-kla-gold bg-green-100">
          <img 
            src="https://i.postimg.cc/tTWq33tF/ดาวน_โหลด.png" 
            alt="ทนายโตโต้" 
            className="w-full h-full object-cover object-top scale-110 translate-y-1"
          />
        </div>
        <div className="leading-none">
          <span className="block">ทนายโตโต้</span>
          <span className="text-[10px] font-normal text-gray-500">เบอร์ 1 พรรคกล้าธรรม</span>
        </div>
      </div>
      <button 
        onClick={toggleMobileMenu} 
        className="text-kla-main focus:outline-none p-2 rounded-md hover:bg-green-50"
      >
        <Menu size={24} />
      </button>
    </div>
  );
};
```

## File: project/src/components/Layout.tsx
```typescript
import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileMenu } from './MobileMenu';
import { Footer } from './Footer';
import { useTab } from '../context/TabContext';

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { isMobileMenuOpen } = useTab();

  return (
    <>
      <Header />
      {isMobileMenuOpen && <MobileMenu activeTab={activeTab} setActiveTab={setActiveTab} />}
      
      <div className="max-w-6xl mx-auto w-full md:py-10 flex flex-col md:flex-row gap-8 p-4 md:p-6 flex-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 min-h-[600px]">
          {children}
        </div>
      </div>
      
      <Footer />
    </>
  );
};
```

## File: project/src/components/LoadingBubble.tsx
```typescript
import React from 'react';

export const LoadingBubble: React.FC = () => {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="w-8 h-8 bg-kla-main rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm border border-kla-gold mb-1 shadow-sm mr-2 self-end">
        ก
      </div>
      <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-none p-4 shadow-sm">
        <div className="typing-indicator flex gap-1">
          <span className="w-2 h-2 bg-kla-main rounded-full animate-pulse"></span>
          <span className="w-2 h-2 bg-kla-main rounded-full animate-pulse delay-100"></span>
          <span className="w-2 h-2 bg-kla-main rounded-full animate-pulse delay-200"></span>
        </div>
      </div>
    </div>
  );
};
```

## File: project/src/components/MobileMenu.tsx
```typescript
import React from 'react';
import { Home, Scroll, MapPin, Sparkles, MessageCircle, AlertTriangle } from 'lucide-react';
import { useTab } from '../context/TabContext';

interface MobileMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ activeTab, setActiveTab }) => {
  const { setIsMobileMenuOpen } = useTab();

  const menuItems = [
    { id: 'home', label: 'หน้าหลัก (ประวัติ)', icon: Home, className: 'bg-gradient-to-r from-kla-main to-kla-light text-white' },
    { id: 'policies', label: 'นโยบายรายอำเภอ', icon: Scroll, className: 'text-kla-main bg-green-50 hover:bg-green-100 border border-green-100' },
    { id: 'map', label: 'แผนที่ยุทธศาสตร์', icon: MapPin, className: 'text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100' },
    { id: 'fun', label: 'กิจกรรม AI', icon: Sparkles, className: 'text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100' },
    { id: 'chat', label: 'คุยกับน้องกล้า (AI)', icon: MessageCircle, className: 'text-kla-main bg-green-50 hover:bg-green-100 border border-green-100' },
    { id: 'complaint', label: 'แจ้งเรื่องด่วน', icon: AlertTriangle, className: 'text-red-600 bg-red-50 hover:bg-red-100 border border-red-100' },
  ];

  const handleTabSwitch = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-40 pt-20 px-6 space-y-3 md:hidden animate-fade-in">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTabSwitch(item.id)}
          className={`block w-full text-left py-4 px-4 rounded-xl font-medium ${
            activeTab === item.id ? 'font-bold shadow-lg' : ''
          } ${item.className}`}
        >
          <item.icon className="inline mr-2" size={20} />
          {item.label}
        </button>
      ))}
    </div>
  );
};
```

## File: project/src/components/PosterGenerator.tsx
```typescript
import React, { useState } from 'react';
import { Image } from 'lucide-react';
import { usePoster } from '../hooks/usePoster';

export const PosterGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const { generatePoster, isLoading, posterUrl } = usePoster();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert('กรุณาบอกแนวคิดโปสเตอร์ก่อนนะครับ');
      return;
    }
    await generatePoster(prompt);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-kla-gold">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl">
          <Image size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">🎨 สร้างโปสเตอร์เชียร์ (AI Poster)</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        อยากได้โปสเตอร์เชียร์แบบไหน? บอก AI ได้เลย (เช่น "ชาวนาเชียร์ทนายโตโต้", "พัฒนาถนน")
      </p>
      
      <div className="space-y-3">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="แนวคิดโปสเตอร์ (เช่น ทุ่งนาสีทอง, ถนน 4 เลนสวยๆ)" 
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none"
          disabled={isLoading}
        />
        <button 
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-kla-gold to-yellow-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
              AI กำลังวาดภาพ...
            </>
          ) : (
            <>
              🎨 วาดโปสเตอร์
            </>
          )}
        </button>
      </div>

      {(posterUrl || isLoading) && (
        <div className="mt-6 flex justify-center items-center bg-gray-100 rounded-xl min-h-[250px] relative overflow-hidden">
          {posterUrl && (
            <img 
              src={posterUrl} 
              className="w-full h-full object-cover rounded-xl" 
              alt="AI Generated Poster"
            />
          )}
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center">
              <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full mb-2"></div>
              <span className="text-sm font-bold text-gray-500">AI กำลังวาดภาพ...</span>
            </div>
          )}
        </div>
      )}
      {posterUrl && (
        <p className="text-xs text-center text-gray-400 mt-2">*สร้างโดย Imagen 3 (AI)</p>
      )}
    </div>
  );
};
```

## File: project/src/components/Sidebar.tsx
```typescript
import React from 'react';
import { Home, Scroll, MapPin, Sparkles, MessageCircle, AlertTriangle } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', label: 'หน้าหลัก', icon: Home },
    { id: 'policies', label: 'นโยบาย', icon: Scroll },
    { id: 'map', label: 'แผนที่ยุทธศาสตร์', icon: MapPin },
    { id: 'fun', label: 'กิจกรรม AI', icon: Sparkles, badge: 'ใหม่!' },
    { id: 'chat', label: 'ถามน้องกล้า', icon: MessageCircle },
    { id: 'complaint', label: 'ร้องเรียน', icon: AlertTriangle },
  ];

  const getButtonClass = (itemId: string) => {
    const baseClass = "w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300";
    
    if (activeTab === itemId) {
      return `${baseClass} bg-gradient-to-r from-kla-main to-kla-light text-white shadow-lg font-bold text-lg ring-2 ring-green-200`;
    }

    const colorClasses = {
      map: 'hover:bg-blue-50 text-blue-600 hover:border-blue-100',
      fun: 'hover:bg-purple-50 text-purple-600 hover:border-purple-100',
      complaint: 'hover:bg-red-50 text-red-500 hover:border-red-100',
    };

    return `${baseClass} hover:bg-green-50 text-gray-600 font-medium border border-transparent hover:border-green-100 ${colorClasses[itemId as keyof typeof colorClasses] || ''}`;
  };

  return (
    <div className="hidden md:block w-72 flex-shrink-0 relative">
      <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-10 border-t-4 border-kla-main">
        <div className="text-center mb-8 relative">
          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center bg-white rounded-full p-2 shadow-sm border border-gray-100 relative z-10 overflow-hidden">
            <img 
              src="https://i.postimg.cc/Y9Yr66fh/image_removebg_preview.png" 
              alt="โลโก้พรรคกล้าธรรม" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="font-bold text-2xl text-kla-main leading-tight mt-2">ทนายโตโต้</h2>
          <p className="text-sm text-gray-500 font-medium">ธนอนันต์ เมนะสวัสดิ์</p>
          <div className="mt-3 inline-block bg-kla-gold/20 text-yellow-800 text-sm px-4 py-1 rounded-full font-bold border border-kla-gold">
            เบอร์ 1 ✅ เขต 6
          </div>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={getButtonClass(item.id)}
            >
              <item.icon size={20} className="w-6" />
              {item.label}
              {item.badge && (
                <span className="bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded ml-auto">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
```

## File: project/src/components/VisionGenerator.tsx
```typescript
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useVision } from '../hooks/useVision';

export const VisionGenerator: React.FC = () => {
  const [village, setVillage] = useState('');
  const [job, setJob] = useState('');
  const { generateVision, isLoading, result } = useVision();

  const handleGenerate = async () => {
    if (!village.trim() || !job.trim()) {
      alert('กรุณากรอกข้อมูลให้ครบก่อนนะครับ');
      return;
    }
    await generateVision(village, job);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-purple-500">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl">
          <Eye size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">🔮 ภาพอนาคต 2573 (Vision 2573)</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        พิมพ์ชื่อหมู่บ้านและอาชีพของคุณ AI จะฉายภาพชีวิตในอีก 4 ปีข้างหน้า เมื่อนโยบายทนายโตโต้สำเร็จ!
      </p>
      
      <div className="space-y-3">
        <input 
          type="text" 
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          placeholder="ชื่อหมู่บ้าน (เช่น บ้านหนองหาน)" 
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          disabled={isLoading}
        />
        <input 
          type="text" 
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="อาชีพ (เช่น ชาวนา, ค้าขาย)" 
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          disabled={isLoading}
        />
        <button 
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
              กำลังสร้างภาพอนาคต...
            </>
          ) : (
            <>
              ✨ ฉายภาพอนาคต
            </>
          )}
        </button>
      </div>
      
      {result && (
        <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100 text-purple-900 leading-relaxed italic relative">
          <div className="text-purple-300 text-4xl absolute -top-4 -left-2 opacity-50">"</div>
          <div dangerouslySetInnerHTML={{ __html: result }} />
        </div>
      )}
    </div>
  );
};
```

## File: project/src/context/TabContext.tsx
```typescript
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </TabContext.Provider>
  );
};
```

## File: project/src/hooks/useChat.ts
```typescript
import { useState } from 'react';
import { callGemini } from '../services/geminiService';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: '<p><strong class="text-kla-main">สวัสดีครับพี่น้องชาวอุดรเขต 6! 🙏</strong></p><p>ผม <strong>\'น้องกล้า\'</strong> ผู้ช่วย AI ของทนายโตโต้ครับ</p><ul class="list-disc list-inside mt-2 text-gray-600 space-y-1"><li>ถามเรื่องนโยบายเปลี่ยน ส.ป.ก. เป็นโฉนด</li><li>สอบถามเส้นทางถนน 4 เลน</li><li>ปรึกษากฎหมายเบื้องต้น</li><li>ให้ผมช่วยร่างหนังสือร้องเรียนก็ได้นะครับ!</li></ul>',
      sender: 'bot'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage: string) => {
    // Add user message immediately
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    try {
      const response = await callGemini(userMessage);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: 'ขออภัยครับ มีข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้งครับ', 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};
```

## File: project/src/hooks/useMagicDraft.ts
```typescript
import { useState } from 'react';
import { callGemini } from '../services/geminiService';

export const useMagicDraft = () => {
  const [isLoading, setIsLoading] = useState(false);

  const enhanceText = async (userText: string): Promise<string> => {
    if (!userText.trim()) return '';

    setIsLoading(true);

    try {
      const prompt = `Rewrite the following complaint text to be formal, polite, and official (Thai language) suitable for submitting to a lawyer/MP candidate: "${userText}"`;
      const refinedText = await callGemini(prompt, "You are a professional legal secretary.");
      
      // Clean up any quotes
      return refinedText.replace(/['"]/g, '');
    } catch (error) {
      console.error('Error enhancing text:', error);
      return userText; // Return original text if enhancement fails
    } finally {
      setIsLoading(false);
    }
  };

  return { enhanceText, isLoading };
};
```

## File: project/src/hooks/useMap.ts
```typescript
import { useMemo } from 'react';
import L from 'leaflet';

export interface MapPoint {
  name: string;
  lat: number;
  lng: number;
  type: 'district' | 'market' | 'temple' | 'subdistrict';
  policy: string;
  link3d: string;
}

export const useMap = () => {
  const mapData: MapPoint[] = useMemo(() => [
    { 
      name: "ที่ว่าการอำเภอศรีธาตุ", 
      lat: 16.9958, 
      lng: 103.2111, 
      type: "district", 
      policy: "ขยายถนน 4 เลน (Logistics)", 
      link3d: "https://www.google.com/maps/@16.97278,103.21667,500m/data=!3m1!1e3" 
    },
    { 
      name: "ตลาดสดศรีธาตุ", 
      lat: 16.9965, 
      lng: 103.2125, 
      type: "market", 
      policy: "ตลาดชุมชนเข้มแข็ง", 
      link3d: "https://www.google.com/maps/@16.9965,103.2125,500m/data=!3m1!1e3" 
    },
    { 
      name: "ที่ว่าการอำเภอวังสามหมอ", 
      lat: 16.9654, 
      lng: 103.4452, 
      type: "district", 
      policy: "ราคายางพาราเป็นธรรม", 
      link3d: "https://www.google.com/maps/@16.94972,103.42861,500m/data=!3m1!1e3" 
    },
    { 
      name: "ตลาดสดวังสามหมอ", 
      lat: 16.9662, 
      lng: 103.4468, 
      type: "market", 
      policy: "กระตุ้นเศรษฐกิจฐานราก", 
      link3d: "https://www.google.com/maps/@16.9662,103.4468,500m/data=!3m1!1e3" 
    },
    { 
      name: "ที่ว่าการอำเภอไชยวาน", 
      lat: 17.2845, 
      lng: 103.2145, 
      type: "district", 
      policy: "ส่งเสริมการท่องเที่ยววิถีธรรม", 
      link3d: "https://www.google.com/maps/@17.28667,103.22333,500m/data=!3m1!1e3" 
    },
    { 
      name: "ทต.โนนทองอินทร์ (กู่แก้ว)", 
      lat: 17.1542, 
      lng: 103.0541, 
      type: "subdistrict", 
      policy: "แหล่งน้ำเพื่อการเกษตร", 
      link3d: "https://www.google.com/maps/@17.14500,103.05500,500m/data=!3m1!1e3" 
    },
    { 
      name: "วัดป่าศรีคุณาราม", 
      lat: 17.0012, 
      lng: 103.2085, 
      type: "temple", 
      policy: "ทำนุบำรุงศาสนา", 
      link3d: "https://www.google.com/maps/@17.0012,103.2085,500m/data=!3m1!1e3" 
    }
  ], []);

  const createCustomIcon = (type: string) => {
    let iconClass = 'fa-map-marker-alt';
    let colorClass = '';
    
    switch (type) {
      case 'market':
        iconClass = 'fa-shopping-basket';
        colorClass = 'bg-yellow-500';
        break;
      case 'temple':
        iconClass = 'fa-vihara';
        colorClass = 'bg-orange-600';
        break;
      default:
        iconClass = 'fa-map-marker-alt';
        colorClass = 'bg-green-700';
    }
    
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="w-10 h-10 ${colorClass} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white transform -translate-y-5"><i class="fas ${iconClass}"></i></div>`,
      iconSize: [40, 42],
      iconAnchor: [20, 42],
      popupAnchor: [0, -45]
    });
  };

  return { mapData, createCustomIcon };
};
```

## File: project/src/hooks/usePoster.ts
```typescript
import { useState } from 'react';

export const usePoster = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string>('');

  const generatePoster = async (promptInput: string) => {
    setIsLoading(true);
    setPosterUrl('');

    // Simulate API call since we don't have a real Imagen API key
    try {
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For demo purposes, use a placeholder image
      const demoImageUrl = `https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400`;
      setPosterUrl(demoImageUrl);
      
    } catch (error) {
      alert("ขออภัยครับ ไม่สามารถสร้างรูปภาพได้ในขณะนี้");
    } finally {
      setIsLoading(false);
    }
  };

  return { generatePoster, isLoading, posterUrl };
};
```

## File: project/src/hooks/useTTS.ts
```typescript
import { useState } from 'react';

export const useTTS = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const playPolicyAudio = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsPlaying(true);
      
      // Simulate audio ending
      setTimeout(() => {
        setIsPlaying(false);
      }, 10000);
      
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการสร้างเสียง");
    } finally {
      setIsLoading(false);
    }
  };

  return { playPolicyAudio, isPlaying, isLoading };
};
```

## File: project/src/hooks/useVision.ts
```typescript
import { useState } from 'react';
import { callGemini } from '../services/geminiService';
import { marked } from 'marked';

export const useVision = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const generateVision = async (village: string, job: string) => {
    setIsLoading(true);
    setResult('');

    const prompt = `Write a short, inspiring narrative (4-5 sentences, Thai language, mixed with Isan dialect) about a person living in "${village}" working as "${job}" in the year 2029 (end of Lawyer Toto's term). Describe how Lawyer Toto's policies (Land titles, 4-lane roads, debt relief) have specifically improved their life. Tone: Hopeful, Warm, Realistic.`;

    try {
      const response = await callGemini(prompt);
      const parsedResponse = marked.parse(response);
      setResult(parsedResponse);
    } catch (error) {
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่ครับ');
    } finally {
      setIsLoading(false);
    }
  };

  return { generateVision, isLoading, result };
};
```

## File: project/src/pages/ChatPage.tsx
```typescript
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../hooks/useChat';
import { ChatMessage } from '../components/ChatMessage';
import { LoadingBubble } from '../components/LoadingBubble';

export const ChatPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');
    await sendMessage(message);
  };

  const quickPrompts = [
    { text: 'ทนายโตโต้เป็นลูกใคร?', label: '👨‍👩‍👦 ครอบครัว?' },
    { text: 'สปก. เปลี่ยนเป็นโฉนดได้จริงไหม?', label: '📜 สปก. เป็นโฉนด?' },
    { text: 'ช่วยร่างหนังสือร้องเรียนเรื่องถนนเป็นหลุมบ่อหน่อย', label: '✍️ ช่วยเขียนร้องเรียน' },
  ];

  const handleQuickPrompt = (text: string) => {
    setInputValue(text);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="bg-green-100 text-kla-main p-2 rounded-xl">🤖</span> แชทกับน้องกล้า
        </h2>
        <p className="text-gray-600 mt-2 pl-12 flex items-center gap-2">
          <span>ผู้ช่วย AI อัจฉริยะ รู้จริงเรื่องพื้นที่และนโยบาย</span>
          <span className="bg-gradient-to-r from-pink-500 to-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">✨ Powered by Gemini</span>
        </p>
      </div>
      
      <div className="flex flex-col h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl border border-green-100">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-kla-main to-green-700 text-white p-4 px-6 flex items-center justify-between shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-kla-main font-extrabold border-2 border-kla-gold text-xl shadow-sm">
              ก
            </div>
            <div>
              <h3 className="font-bold text-lg">น้องกล้า (AI ทนายโตโต้)</h3>
              <p className="text-xs text-green-200 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse ring-2 ring-green-200"></span> Online (Gemini 2.5 Flash)
              </p>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 chat-scroll">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && <LoadingBubble />}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSubmit} className="flex gap-3 relative">
            <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text" 
              placeholder="พิมพ์คำถาม... (เช่น 'พ่อทนายโตโต้คือใคร?', 'สปก.ทำยังไง?')" 
              className="flex-1 p-4 pr-16 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kla-main focus:border-transparent shadow-sm bg-gray-50" 
              autoComplete="off"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2 top-2 bottom-2 bg-kla-main text-white p-2 md:px-6 rounded-xl hover:bg-green-800 transition-all font-bold shadow-md flex items-center justify-center gap-1 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden md:inline">ส่ง</span>
              <Send className="md:hidden" size={16} />
            </button>
          </form>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500 justify-center">
            {quickPrompts.map((prompt, index) => (
              <span 
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:bg-green-100 hover:text-kla-main transition" 
                onClick={() => handleQuickPrompt(prompt.text)}
              >
                {prompt.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
```

## File: project/src/pages/ComplaintPage.tsx
```typescript
import React, { useState } from 'react';
import { ComplaintForm } from '../components/ComplaintForm';
import { ComplaintSuccess } from '../components/ComplaintSuccess';
import { ComplaintInfo } from '../components/ComplaintInfo';

export const ComplaintPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="bg-red-100 text-red-600 p-2 rounded-xl animate-pulse">⚠️</span> แจ้งปัญหาในพื้นที่
        </h2>
        <p className="text-gray-600 mt-3 text-lg leading-relaxed max-w-2xl">
          ทนายโตโต้พร้อมรับฟังทุกปัญหา และใช้ความรู้ทางกฎหมายเข้าช่วยเหลือ แจ้งเรื่องได้เลยครับ
        </p>
      </div>
      
      {!isSubmitted ? (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <ComplaintForm onSubmitSuccess={handleSubmitSuccess} />
          <ComplaintInfo />
        </div>
      ) : (
        <ComplaintSuccess onReset={handleReset} />
      )}
    </div>
  );
};
```

## File: project/src/pages/FunPage.tsx
```typescript
import React from 'react';
import { VisionGenerator } from '../components/VisionGenerator';
import { PosterGenerator } from '../components/PosterGenerator';

export const FunPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="bg-purple-100 text-purple-600 p-2 rounded-xl">✨</span> กิจกรรมสนุกๆ กับ AI
        </h2>
        <p className="text-gray-600 mt-2">สัมผัสอนาคตไปกับทนายโตโต้ ด้วยพลังของ Gemini AI และ Imagen</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <VisionGenerator />
        <PosterGenerator />
      </div>
    </div>
  );
};
```

## File: project/src/pages/HomePage.tsx
```typescript
import React from 'react';
import { MapPin, Megaphone } from 'lucide-react';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const handleTabSwitch = (tab: string) => {
    // This will be implemented with context or props
    console.log(`Switch to ${tab}`);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-kla-main via-green-800 to-green-900 rounded-3xl overflow-hidden shadow-2xl text-white relative mb-10 min-h-[300px] flex items-center">
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        
        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 w-full">
          {/* Candidate Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[6px] border-kla-gold shadow-2xl overflow-hidden flex-shrink-0 bg-gradient-to-b from-green-400 to-white relative z-20 ring-4 ring-green-900/50 group flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/tTWq33tF/ดาวน_โหลด.png" 
              alt="ธนอนันต์ เมนะสวัสดิ์" 
              className="w-full h-full object-contain object-bottom scale-110 translate-y-2 transition-transform duration-500 group-hover:scale-115"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Thanonan+Menasawat&background=15803d&color=fff&size=256';
              }}
            />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-kla-gold text-green-900 font-extrabold rounded-full text-base mb-4 shadow-lg animate-pulse">
              <span className="text-xl">🗳️</span> เบอร์ 1 ✅ เขต 6 อุดรธานี
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">ธนอนันต์ เมนะสวัสดิ์</h1>
            <h2 className="text-xl md:text-3xl text-kla-gold mb-4 font-bold drop-shadow-sm">(ทนายโตโต้)</h2>
            <div className="space-y-2 mb-6">
              <p className="text-lg md:text-xl font-medium italic opacity-95 leading-relaxed text-green-100">
                "ทนายความของประชาชน... คนรุ่นใหม่ หัวใจดั้งเดิม"
              </p>
              <p className="text-sm bg-white/10 inline-block px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="mr-1">👨‍💼</span> บุตรชาย <strong className="text-yellow-300">นายเกียรติอุดม เมนะสวัสดิ์</strong> (อดีต ส.ส. อุดรธานี)
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => handleTabSwitch('map')} 
                className="bg-white text-kla-main px-8 py-3 rounded-full font-extrabold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 flex items-center gap-2 border-2 border-white"
              >
                ดูแผนที่เขต 6 <MapPin size={20} />
              </button>
              <button 
                onClick={() => handleTabSwitch('complaint')} 
                className="bg-transparent border-2 border-kla-gold text-kla-gold px-8 py-3 rounded-full font-bold hover:bg-kla-gold/20 transition transform hover:-translate-y-1 flex items-center gap-2"
              >
                ร้องทุกข์ <Megaphone size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Family & Legacy Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl shadow-md border-l-4 border-kla-main col-span-2">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-kla-main">🏛️</span> สานต่ออุดมการณ์ พ่อเกียรติอุดม
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            ทนายโตโต้ เป็นบุตรชายของ <strong>นายเกียรติอุดม เมนะสวัสดิ์</strong> อดีต ส.ส. อุดรธานี ผู้เป็นที่รักของพี่น้องชาวอุดรฯ 
            ซึมซับการทำงานเพื่อประชาชนมาตั้งแต่เด็ก "เดินตามพ่อไปหาเสียง เรียนรู้งานสภา" 
            วันนี้พร้อมแล้วที่จะนำความรู้ด้านกฎหมายมาช่วยเหลือพี่น้อง สืบสานเจตนารมณ์ของคุณพ่อ
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-green-50 text-kla-main text-xs px-3 py-1 rounded-full font-bold">#ลูกไม้ใต้ต้น</span>
            <span className="bg-green-50 text-kla-main text-xs px-3 py-1 rounded-full font-bold">#คนอุดรแท้</span>
            <span className="bg-green-50 text-kla-main text-xs px-3 py-1 rounded-full font-bold">#ทนายความจิตอาสา</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            ⚖️ ทำไมต้อง "ทนาย"?
          </h3>
          <p className="text-blue-900 text-sm leading-relaxed">
            "เพราะกฎหมายคือเครื่องมือที่คนตัวเล็กๆ เข้าไม่ถึง" ทนายโตโต้จึงอาสาเป็นทนายแก้ต่างให้คนจนฟรี
            เปิดศูนย์ปรึกษากฎหมายประจำตำบล เพื่อให้ความยุติธรรมจับต้องได้จริง
          </p>
        </div>
      </div>

      {/* Video Profile Section */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-10 border border-green-100">
        <div className="bg-green-50 p-4 border-b border-green-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-kla-main rounded-full flex items-center justify-center text-white text-lg">
            <span>🎥</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">แนะนำตัว ทนายโตโต้</h3>
        </div>
        <div className="aspect-video w-full bg-black relative">
          <iframe 
            src="https://share.zight.com/Jru98vEz?embed=true&title=true&branding=true" 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="แนะนำตัว ทนายโตโต้"
          />
        </div>
      </div>
    </div>
  );
};
```

## File: project/src/pages/MapPage.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMap } from '../hooks/useMap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const MapPage: React.FC = () => {
  const mapRef = useRef<any>(null);
  const { mapData, createCustomIcon } = useMap();

  // Fix for default markers in react-leaflet
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const legendItems = [
    { color: 'bg-kla-main', label: 'ที่ว่าการอำเภอ/ศูนย์กลาง' },
    { color: 'bg-yellow-500', label: 'ตลาดชุมชน/เศรษฐกิจ' },
    { color: 'bg-orange-600', label: 'ศาสนสถาน/ศูนย์รวมใจ' },
    { color: 'bg-blue-500', label: 'โครงการพัฒนา (ถนน/น้ำ)' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-xl">🗺️</span> แผนที่ยุทธศาสตร์ เขต 6
          </h2>
          <p className="text-gray-600 mt-2">แสดงจุดยุทธศาสตร์สำคัญ และพื้นที่เป้าหมายการพัฒนาตามนโยบายพรรค</p>
        </div>
        <div className="text-sm bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg border border-yellow-200">
          ℹ️ กดที่หมุดเพื่อดูนโยบายเฉพาะจุด และมุมมอง 3D
        </div>
      </div>

      <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-200 mb-6">
        <MapContainer
          center={[17.12, 103.25]}
          zoom={10}
          style={{ height: '500px', borderRadius: '1.5rem' }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          
          {mapData.map((point, index) => (
            <Marker
              key={index}
              position={[point.lat, point.lng]}
              icon={createCustomIcon(point.type)}
            >
              <Popup className="font-sans">
                <div className="text-center p-2">
                  <h3 className="font-bold text-lg text-green-800 mb-1">{point.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">📌 นโยบายที่เกี่ยวข้อง:</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-3 text-sm font-medium text-green-700">
                    {point.policy}
                  </div>
                  <a 
                    href={point.link3d} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
                  >
                    🧊 ดูมุมมอง 3D (ของจริง)
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className={`w-4 h-4 ${item.color} rounded-full`}></div> 
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
```

## File: project/src/pages/PoliciesPage.tsx
```typescript
import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../hooks/useTTS';

export const PoliciesPage: React.FC = () => {
  const { playPolicyAudio, isPlaying, isLoading } = useTTS();

  const policies = [
    {
      id: 1,
      title: 'เปลี่ยน ส.ป.ก. เป็นโฉนด',
      icon: '🏆',
      badge: 'ทำทันที',
      badgeClass: 'bg-red-100 text-red-600',
      borderColor: 'border-kla-gold',
      iconBg: 'bg-yellow-50 text-kla-gold',
      description: 'สานต่อนโยบายหลักของพรรค เปลี่ยน ส.ป.ก. 4-01 ให้เป็นโฉนดเพื่อการเกษตร เพื่อให้พี่น้องใช้ค้ำประกันเงินกู้ได้จริง เพิ่มมูลค่าทรัพย์สินทันที'
    },
    {
      id: 2,
      title: 'กองทุนแก้หนี้สิน',
      icon: '💰',
      borderColor: 'border-kla-main',
      iconBg: 'bg-green-50 text-kla-main',
      description: 'ใช้ความรู้ทนายช่วยไกล่เกลี่ยหนี้นอกระบบ และจัดตั้งกองทุนหมุนเวียนเพื่อลดต้นทุนการผลิต ปุ๋ยยาต้องราคาเป็นธรรม'
    },
    {
      id: 3,
      title: 'ถนน 4 เลน',
      subtitle: 'ศรีธาตุ - วังสามหมอ',
      icon: '🛣️',
      borderColor: 'border-blue-500',
      iconBg: 'bg-blue-50 text-blue-600',
      description: 'ผลักดันการขยายถนนเป็น 4 เลน เส้นทางหลัก "ศรีธาตุ-วังสามหมอ" เพื่อรองรับการขนส่งพืชผลการเกษตรและลดอุบัติเหตุ'
    },
    {
      id: 4,
      title: 'ทนายความประจำบ้าน',
      icon: '⚖️',
      borderColor: 'border-green-500',
      iconBg: 'bg-green-50 text-green-600',
      description: 'ศูนย์ปรึกษากฎหมายฟรีทุกอำเภอ ดูแลคดีที่ดิน คดีมรดก คดีไม่ได้รับความเป็นธรรม โดยทีมงานทนายมืออาชีพ'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-2xl text-kla-main shadow-sm border border-gray-100">
            📋
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-kla-main">นโยบายเพื่อพี่น้องเขต 6</h2>
            <p className="text-gray-500 font-medium">ทำจริง ทำไว กล้าคิด กล้าทำ</p>
          </div>
        </div>
        
        <button 
          onClick={playPolicyAudio}
          disabled={isLoading}
          className="bg-kla-main text-white px-5 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition flex items-center gap-2 min-w-[180px] justify-center"
        >
          <Volume2 size={20} />
          <span>{isPlaying ? 'หยุดฟัง' : 'ฟังเสียงนโยบาย (AI)'}</span>
          {isLoading && (
            <div className="flex gap-0.5 h-3 items-end ml-2">
              <div className="w-1 bg-white animate-pulse"></div>
              <div className="w-1 bg-white animate-pulse delay-100"></div>
              <div className="w-1 bg-white animate-pulse delay-200"></div>
              <div className="w-1 bg-white animate-pulse delay-300"></div>
            </div>
          )}
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {policies.map((policy) => (
          <div 
            key={policy.id}
            className={`bg-white p-6 rounded-2xl shadow-md border-t-4 ${policy.borderColor} hover:shadow-xl transition-all group`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 ${policy.iconBg} rounded-full flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition border ${policy.iconBg.includes('yellow') ? 'border-yellow-100' : policy.iconBg.includes('blue') ? 'border-blue-100' : 'border-green-100'}`}>
                {policy.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{policy.title}</h3>
                {policy.subtitle && (
                  <div className="text-xs text-gray-500">{policy.subtitle}</div>
                )}
                {policy.badge && (
                  <span className={`text-xs ${policy.badgeClass} px-2 py-0.5 rounded-full font-bold`}>
                    {policy.badge}
                  </span>
                )}
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
```

## File: project/src/services/geminiService.ts
```typescript
// Note: In a production environment, you would store the API key securely
const GEMINI_API_KEY = ""; // Add your API key here

const systemInstruction = `
You are 'Nong Kla' (น้องกล้า), an AI digital campaign assistant for Thanonan Menasawat (Lawyer Toto), Candidate No. 1, Kla Tham Party, District 6 Udon Thani.
Tone: Polite Thai (ends with Krub), helpful, sincere. Can use a bit of Isan dialect.
Key Info: Lawyer Toto is the son of former MP Kiatudom Menasawat.
Policies: Convert SPK to Title Deed, Debt Relief Fund, 4-Lane Road (Sri That-Wang Sam Mo), Home Lawyer.
`;

export const callGemini = async (
  userPrompt: string, 
  specificInstruction?: string
): Promise<string> => {
  if (!GEMINI_API_KEY) {
    return "ขออภัยครับ ระบบ AI กำลังปรับปรุง (กรุณาใส่ API Key)";
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          systemInstruction: { 
            parts: [{ text: specificInstruction || systemInstruction }] 
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error('API Error');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "ขออภัยครับ มีข้อผิดพลาดในการเชื่อมต่อ";
  }
};
```

## File: project/src/App.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PoliciesPage } from './pages/PoliciesPage';
import { MapPage } from './pages/MapPage';
import { FunPage } from './pages/FunPage';
import { ChatPage } from './pages/ChatPage';
import { ComplaintPage } from './pages/ComplaintPage';
import { TabProvider } from './context/TabContext';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'policies':
        return <PoliciesPage />;
      case 'map':
        return <MapPage />;
      case 'fun':
        return <FunPage />;
      case 'chat':
        return <ChatPage />;
      case 'complaint':
        return <ComplaintPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <TabProvider>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans">
        <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
          {renderActiveTab()}
        </Layout>
      </div>
    </TabProvider>
  );
}

export default App;
```

## File: project/src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --kla-main: #15803d;
  --kla-light: #22c55e;
  --kla-gold: #FBBF24;
  --kla-yellow: #F59E0B;
  --kla-dark: #052e16;
}

body { 
  font-family: 'Sarabun', sans-serif; 
}

.animate-fade-in { 
  animation: fadeIn 0.5s ease-in-out; 
}

@keyframes fadeIn { 
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  } 
  to { 
    opacity: 1; 
    transform: translateY(0); 
  } 
}

/* Custom Scrollbar */
.chat-scroll::-webkit-scrollbar { 
  width: 6px; 
}
.chat-scroll::-webkit-scrollbar-track { 
  background: #f0fdf4; 
}
.chat-scroll::-webkit-scrollbar-thumb { 
  background: #15803d; 
  border-radius: 10px; 
}
.chat-scroll::-webkit-scrollbar-thumb:hover { 
  background: #166534; 
}

/* Background Pattern */
.bg-pattern {
  background-image: radial-gradient(#FBBF24 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Loading Dots Animation */
.typing-indicator span {
  animation: blink 1.4s infinite both;
  height: 5px;
  width: 5px;
  background-color: #15803d;
  border-radius: 50%;
  display: inline-block;
  margin: 0 1px;
}
.typing-indicator span:nth-child(2) { 
  animation-delay: 0.2s; 
}
.typing-indicator span:nth-child(3) { 
  animation-delay: 0.4s; 
}
@keyframes blink { 
  0% { opacity: 0.1; } 
  20% { opacity: 1; } 
  100% { opacity: 0.1; } 
}

/* Audio Player Animation */
.audio-wave span {
  display: inline-block;
  width: 3px;
  height: 10px;
  background-color: white;
  animation: wave 1s infinite ease-in-out;
  margin: 0 1px;
}
.audio-wave span:nth-child(1) { animation-delay: 0.1s; }
.audio-wave span:nth-child(2) { animation-delay: 0.2s; }
.audio-wave span:nth-child(3) { animation-delay: 0.3s; }
.audio-wave span:nth-child(4) { animation-delay: 0.4s; }
@keyframes wave {
  0%, 100% { height: 5px; }
  50% { height: 15px; }
}

/* Custom Tailwind Colors */
.text-kla-main { color: var(--kla-main); }
.bg-kla-main { background-color: var(--kla-main); }
.text-kla-light { color: var(--kla-light); }
.bg-kla-light { background-color: var(--kla-light); }
.text-kla-gold { color: var(--kla-gold); }
.bg-kla-gold { background-color: var(--kla-gold); }
.border-kla-main { border-color: var(--kla-main); }
.border-kla-gold { border-color: var(--kla-gold); }

/* Custom Leaflet Popup Styles */
.leaflet-popup-content-wrapper {
  border-radius: 1rem !important;
  padding: 0 !important;
  overflow: hidden !important;
}
.leaflet-popup-content {
  margin: 0 !important;
  width: 280px !important;
}

.custom-div-icon {
  background: transparent !important;
  border: none !important;
}
```

## File: project/src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## File: project/src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

## File: project/.gitignore
```
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
```

## File: project/eslint.config.js
```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

## File: project/index.html
```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ผู้ช่วยหาเสียงดิจิทัล (AI Powered) - ธนอนันต์ เมนะสวัสดิ์</title>
    <meta property="og:image" content="https://bolt.new/static/og_default.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
    <!-- Google Fonts: Sarabun -->
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: project/package.json
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.344.0",
    "marked": "^12.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-leaflet": "^4.2.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/leaflet": "^1.9.21",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

## File: project/postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## File: project/tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kla: {
          main: '#15803d',
          light: '#22c55e', 
          gold: '#FBBF24',
          yellow: '#F59E0B',
          dark: '#052e16',
        }
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
```

## File: project/tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## File: project/tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## File: project/tsconfig.node.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## File: project/vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## File: project/vite.config.ts.timestamp-1767161960398-553e6ae8750bd.mjs
```
// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
```
