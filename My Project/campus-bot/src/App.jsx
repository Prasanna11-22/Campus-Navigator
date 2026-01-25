import React, { useState, useEffect } from "react";
import { campusData } from "./campusData";
import Header from "./components/Header";
import TabNavigation from "./components/TabNavigation";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import HomePage from "./components/HomePage";
import LabsPage from "./components/LabsPage";
import DepartmentsPage from "./components/DepartmentsPage";
import FacilitiesPage from "./components/FacilitiesPage";
import CampusMapPage from "./components/CampusMapPage";
import AboutPage from "./components/AboutPage";

/* ===============================
   🔁 TOGGLE: REAL GEMINI ON / OFF
================================ */
const USE_REAL_GEMINI = true;

/* ===============================
   FAQ DATA
================================ */
const FAQ_DATA = [
  {
    keywords: ["timing", "hours", "open"],
    answer: "The campus is open from 8:30 AM to 5:00 PM on working days."
  },
  {
    keywords: ["id", "identity", "card"],
    answer: "A valid college ID card is required to enter laboratories and offices."
  },
  {
    keywords: ["library", "library timing", "library hours"],
    answer: "The library is open from 9:00 AM to 4:30 PM on working days."
  }
];

/* ===============================
   LANGUAGE DETECTION
================================ */
function detectLanguage(text) {
  if (/[\u0B80-\u0BFF]/.test(text)) return "ta";
  if (/[\u0C00-\u0C7F]/.test(text)) return "te";
  if (/[\u0900-\u097F]/.test(text)) return "hi";
  if (/[\u0C80-\u0CFF]/.test(text)) return "kn";
  if (/[\u0D00-\u0D7F]/.test(text)) return "ml";
  return "en";
}

/* ===============================
   LEVENSHTEIN
================================ */
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

/* ===============================
   HELPERS
================================ */
function getCampusEntries() {
  return Object.values(campusData);
}

function resolveEntity(text) {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);

  for (const entity of getCampusEntries()) {
    if (!entity.aliases) continue;

    for (const alias of entity.aliases) {
      const a = alias.toLowerCase();
      if (lower.includes(a)) return entity;

      for (const w of words) {
        const lenDiff = Math.abs(w.length - a.length);
        if (w.length < 3) continue; // too short for fuzzy match
        if (lenDiff > 1) continue; // avoid matching multi-word aliases like "block a"
        if (levenshtein(w, a) <= 1) return entity;
      }
    }
  }
  return null;
}

function searchFAQ(text) {
  const lower = text.toLowerCase();
  for (const faq of FAQ_DATA) {
    for (const key of faq.keywords) {
      if (lower.includes(key)) return faq.answer;
    }
  }
  return null;
}

function extractBlockName(location) {
  const match = location?.match(/Block\s+[A-Z]/i);
  return match ? match[0] : null;
}

function mapPlaceToEntity(placeName) {
  if (!placeName) return null;
  return getCampusEntries().find(
    e => e.official_name?.toLowerCase() === placeName.toLowerCase()
  );
}

/* ===============================
   GEMINI
================================ */
function buildIntentPrompt(text) {
  return `
Identify the campus place.
If unsure respond ONLY: UNKNOWN
Input: "${text}"
`;
}

// TEST FUNCTION - RUN ONCE TO VERIFY API
async function testGeminiAPI() {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  console.log("🧪 Testing Gemini API...");
  console.log("Key:", key ? `${key.substring(0, 10)}...` : "NOT FOUND");
  
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models:list?key=${key}`
    );
    const data = await res.json();
    console.log("✅ API Response:", data);
    if (data.models) {
      console.log("📋 Available models:", data.models.map(m => m.name));
    }
  } catch (err) {
    console.error("❌ Test failed:", err.message);
  }
}

async function callGemini(prompt) {
  console.log("🔍 callGemini via backend");
  
  try {
    const res = await fetch('http://localhost:3001/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Backend error: ${error.error}`);
    }

    const data = await res.json();
    const text = data.result;
    
    if (!text) throw new Error("Invalid response from backend");
    
    console.log("✅ Gemini response received:", text.substring(0, 50) + "...");
    return text;
  } catch (err) {
    console.error("❌ Backend call failed:", err.message);
    throw err;
  }
}

async function geminiInterpretIntent(text) {
  const lower = text.toLowerCase();

  const mock = () => {
    if (lower.includes("os") || lower.includes("jk"))
      return "Operating Systems Laboratory";
    if (lower.includes("db"))
      return "Database Management Systems Laboratory";
    if (lower.includes("canteen") || lower.includes("food"))
      return "Campus Food Court";
    if (lower.includes("library"))
      return "Central Library";
    return null;
  };

  if (!USE_REAL_GEMINI) return mock();

  try {
    const res = (await callGemini(buildIntentPrompt(text)))?.trim();
    return res === "UNKNOWN" ? mock() : res;
  } catch {
    return mock();
  }
}

/* ===============================
   LOCALIZATION
================================ */
function buildLocalizationPrompt(text, lang) {
  const map = {
    ta: "Tamil",
    te: "Telugu",
    hi: "Hindi",
    kn: "Kannada",
    ml: "Malayalam"
  };
  return `Translate to ${map[lang]} without changing meaning:\n"${text}"`;
}

function getMockTranslation(text, lang) {
  // Simple mock translations for common campus bot responses
  const translations = {
    ta: {
      "Operating Systems Laboratory": "இயக்க அமைப்பு ஆய்வகம்",
      "Database Management Systems Laboratory": "தரவுசரணி ব்যবস்థாபனம் ஆய்வகம்",
      "Computer Networks Laboratory": "கணினி வலைப்பின்னல் ஆய்வகம்",
      "Block": "தொகுதி",
      "Location:": "இருப்பிடம்:",
      "How to reach:": "எப்படி செல்வது:",
      "Sorry, I could not find that information.": "மன்னிக்கவும், அந்த தகவலைக் கண்டறிய முடியவில்லை.",
      "Enter": "நுழையவும்",
      "take the stairs": "படிக்கட்டுகளை எடுக்கவும்",
      "proceed to": "செல்லவும்"
    },
    hi: {
      "Operating Systems Laboratory": "ऑपरेटिंग सिस्टम प्रयोगशाला",
      "Database Management Systems Laboratory": "डेटाबेस प्रबंधन प्रणाली प्रयोगशाला",
      "Computer Networks Laboratory": "कंप्यूटर नेटवर्क प्रयोगशाला",
      "Location:": "स्थान:",
      "How to reach:": "कैसे पहुंचे:",
      "Sorry, I could not find that information.": "क्षमा करें, मुझे वह जानकारी नहीं मिल सकी।"
    },
    te: {
      "Operating Systems Laboratory": "ఆపరేటింగ్ సిస్టమ్‌ల ప్రయోగశాల",
      "Database Management Systems Laboratory": "డేటాబేస్ నిర్వహణ సిస్టమ్‌ల ప్రయోగశాల",
      "Location:": "ప్రాంతం:",
      "How to reach:": "ఎలా చేరుకోవాలి:"
    },
    kn: {
      "Operating Systems Laboratory": "ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ ಪ್ರಯೋಗಾಲೆ",
      "Location:": "ಸ್ಥಾನ:",
      "How to reach:": "ಹೇಗೆ ತಲುಪಬೇಕು:"
    },
    ml: {
      "Operating Systems Laboratory": "ഓപ്പറേറ്റിംഗ് സിസ്റ്റം ലാബ്",
      "Location:": "സ്ഥാനം:",
      "How to reach:": "എങ്ങനെ പോകാം:"
    }
  };
  
  // Try exact match first
  if (translations[lang]?.[text]) {
    return translations[lang][text];
  }
  
  // Try partial matching for phrases
  for (const [key, val] of Object.entries(translations[lang] || {})) {
    if (text.includes(key)) {
      return text.replace(key, val);
    }
  }
  
  return text; // Fallback to original if no translation found
}

async function localizeResponse(text, lang) {
  if (lang === "en") return text;
  console.log("🌍 localizeResponse called with lang:", lang);
  
  try {
    if (!USE_REAL_GEMINI) {
      console.log("📋 Gemini disabled - keeping original text");
      return text;
    }
    
    const res = await callGemini(buildLocalizationPrompt(text, lang));
    const trimmed = res?.trim();
    if (!trimmed) {
      console.warn("⚠️ Localization returned empty response - keeping original");
      return text;
    }
    console.log("✨ Localized response from Gemini");
    return trimmed;
  } catch (err) {
    console.error("❌ Localization failed:", err.message, "- keeping original text");
    return text;
  }
}

/* ===============================
   RESPONSE HELPERS
================================ */
function generateResponse(entity) {
  return (
    `${entity.official_name}\n` +
    `Location: ${entity.location}\n\n` +
    `How to reach:\n${entity.guidance}`
  );
}

function getMapUrl(entity) {
  if (!entity?.map?.query) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    entity.map.query
  )}`;
}

/* ===============================
   MAIN APP
================================ */
export default function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [activeTab, setActiveTab] = useState('navigator');

  // Expose testGeminiAPI to window for console access
  useEffect(() => {
    window.testGeminiAPI = testGeminiAPI;
  }, []);

  const sendSystemMessage = async (text, isFollowUp = false) => {
    const lang = detectLanguage(text);

    setChat(prev => [...prev, { sender: "user", text }]);
    setLoading(true);

    // Handle follow-up ONLY when clicked
    if (isFollowUp && text.toLowerCase().startsWith("where is")) {
      const placeName = text.replace(/where is/i, "").trim();
      const block = mapPlaceToEntity(placeName);
      if (block) {
        const localized = await localizeResponse(
          generateResponse(block),
          lang
        );
        setChat(prev => [
          ...prev,
          { sender: "bot", text: localized, mapUrl: getMapUrl(block) }
        ]);
        setLoading(false);
        return;
      }
    }

    let entity = resolveEntity(text);
    if (!entity) {
      const place = await geminiInterpretIntent(text);
      entity = mapPlaceToEntity(place);
    }

    let botText = "Sorry, I could not find that information.";
    let mapUrl = null;
    let followUp = null;

    if (entity) {
      // Try to translate title (will only work if Gemini is enabled and working)
      const title = await localizeResponse(entity.official_name, lang);
      
      botText = 
        `${title}\n` +
        `Location: ${entity.location}\n\n` +
        `How to reach:\n${entity.guidance}`;
      mapUrl = getMapUrl(entity);
      followUp = extractBlockName(entity.location);
    } else {
      const faq = searchFAQ(text);
      if (faq) {
        botText = await localizeResponse(faq, lang);
      } else {
        botText = await localizeResponse(botText, lang);
      }
    }

    setChat(prev => [...prev, { sender: "bot", text: botText, mapUrl, followUp }]);
    setLoading(false);
  };

  const handleSend = () => {
    if (message.trim()) {
      sendSystemMessage(message, false);
      setMessage("");
    }
  };

  const handleFollowUpClick = (text) => {
    sendSystemMessage(text, true);
  };

  const handleGetStarted = () => {
    setShowHome(false);
    setActiveTab('navigator');
  };

  const scrollToFeatures = () => {
    setShowHome(true);
    setTimeout(() => {
      const element = document.getElementById('why-choose');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderContent = () => {
    if (showAbout) {
      return <AboutPage />;
    }

    if (showHome) {
      return <HomePage onGetStarted={handleGetStarted} />;
    }

    switch (activeTab) {
      case 'navigator':
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
            <div className="flex-1 overflow-hidden">
              <ChatWindow 
                messages={chat} 
                loading={loading} 
                onFollowUpClick={handleFollowUpClick}
              />
            </div>
            <ChatInput
              value={message}
              onChange={setMessage}
              onSend={handleSend}
              disabled={loading}
            />
          </div>
        );
      case 'labs':
        return <LabsPage setActiveTab={setActiveTab} />;
      case 'departments':
        return <DepartmentsPage setActiveTab={setActiveTab} />;
      case 'facilities':
        return <FacilitiesPage />;
      case 'map':
        return <CampusMapPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-950 dark">
      <Header
        onHome={() => {
          setShowHome(true);
          setShowAbout(false);
        }}
        onFeatures={scrollToFeatures}
        onAbout={() => {
          setShowAbout(true);
          setShowHome(false);
        }}
        isHome={showHome}
      />
      {!showHome && !showAbout && <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />}
      <div className="flex-1 overflow-y-auto relative z-10">
        {renderContent()}
      </div>
    </div>
  );
}
