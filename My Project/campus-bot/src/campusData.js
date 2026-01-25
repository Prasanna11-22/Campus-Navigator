export const campusData = {
  /* =====================================================
     A BLOCK – S&H DEPARTMENT (ENTRANCE)
  ====================================================== */
  BLOCK_A: {
    official_name: "Block A (Science & Humanities Department)",
    aliases: [
      "block a", "a block",
      "s&h", "science and humanities", "sh department",

      // Tamil
      "ப்ளாக் ஏ", "அறிவியல் மனிதவியல்",

      // Telugu
      "బ్లాక్ ఏ",

      // Hindi
      "ब्लॉक ए",

      // Kannada
      "ಬ್ಲಾಕ್ ಎ",

      // Malayalam
      "ബ്ലോക്ക് എ"
    ],
    location: "Main Entrance Area",
    guidance:
      "Enter through the main gate. Block A is the first building at the entrance. " +
      "Use the central staircase or lift to reach the respective floors.",
    floor_guide: {
      ground: "Administrative classrooms and common halls",
      first: "Mathematics and Physics departments",
      second: "Chemistry and English departments"
    },
    map: { query: "10.8797825,77.0220499" }
  },

  /* =====================================================
     B BLOCK – MBA & MCA
  ====================================================== */
  BLOCK_B: {
    official_name: "Block B (MBA & MCA Department)",
    aliases: [
      "block b", "b block",
      "mba", "mca", "mba department", "mca department",

      "ப்ளாக் பி",
      "బ్లాక్ బీ",
      "ब्लॉक बी",
      "ಬ್ಲಾಕ್ ಬಿ",
      "ബ്ലോക്ക് ബി"
    ],
    location: "Left side of main gate entrance",
    guidance:
      "After entering the campus, turn left from the main gate to reach Block B.",
    floor_guide: {
      ground: "Seminar halls and admin offices",
      first: "MBA classrooms",
      second: "MCA classrooms and labs"
    },
    map: { query: "10.8788764,77.0225028" }
  },

  /* =====================================================
     C BLOCK – CS & IT
  ====================================================== */
  BLOCK_C: {
    official_name: "Block C (Computer Science & IT Department)",
    aliases: [
      "block c", "c block",
      "cs", "it", "computer science", "information technology",

      "ப்ளாக் சி",
      "బ్లాక్ సీ",
      "ब्लॉक सी",
      "ಬ್ಲಾಕ್ ಸಿ",
      "ബ്ലോക്ക് സി"
    ],
    location: "Near Block D and Auditorium",
    guidance:
      "Proceed towards the auditorium area. Block C is located beside Block D.",
    floor_guide: {
      ground: "IT laboratories",
      first: "Computer Science classrooms",
      second: "Advanced computing labs",
      third: "Research and project labs"
    },
    map: { query: "10.879015,77.020482" }
  },

  /* =====================================================
     D BLOCK – CIVIL & AIDS
  ====================================================== */
  BLOCK_D: {
    official_name: "Block D (Civil & AIDS Department)",
    aliases: [
      "block d", "d block",
      "civil", "civil department", "aids",

      "ப்ளாக் டி",
      "బ్లాక్ డీ",
      "ब्लॉक डी",
      "ಬ್ಲಾಕ್ ಡಿ",
      "ബ്ലോക്ക് ഡി"
    ],
    location: "Near Block A",
    guidance:
      "From Block A, move towards the academic zone to reach Block D.",
    floor_guide: {
      ground: "Civil engineering labs",
      first: "Civil classrooms",
      second: "AIDS department labs"
    },
    map: { query: "10.879215,77.021549" }
  },

  /* =====================================================
     E BLOCK – ECE, EEE, VLSI, CYBER
  ====================================================== */
  BLOCK_E: {
    official_name: "Block E (ECE, EEE, VLSI & Cyber Department)",
    aliases: [
      "block e", "e block",
      "ece", "eee", "vlsi", "cyber", "cyber security",

      "ப்ளாக் ஈ",
      "బ్లాక్ ఈ",
      "ब्लॉक ई",
      "ಬ್ಲಾಕ್ ಇ",
      "ബ്ലോക്ക് ഇ"
    ],
    location: "Backside of Auditorium",
    guidance:
      "Walk behind the auditorium to reach Block E.",
    floor_guide: {
      ground: "Basic electronics labs",
      first: "ECE & EEE classrooms",
      second: "VLSI and embedded labs",
      third: "Cyber security labs"
    },
    map: { query: "10.877071,77.020843" }
  },

  /* =====================================================
     M BLOCK – MECHANICAL
  ====================================================== */
  BLOCK_M: {
    official_name: "Block M (Mechanical Engineering Department)",
    aliases: [
      "block m", "m block",
      "mech", "mechanical",

      "ப்ளாக் எம்",
      "బ్లాక్ ఎం",
      "ब्लॉक एम",
      "ಬ್ಲಾಕ್ ಎಂ",
      "ബ്ലോക്ക് എം"
    ],
    location: "Near College Ground",
    guidance:
      "Proceed towards the college ground. Block M is adjacent to it.",
    floor_guide: {
      ground: "Workshops and machining labs",
      first: "Mechanical classrooms",
      second: "Thermal and CAD labs"
    },
    map: { query: "10.8802599,77.0209488" }
  },

  /* =====================================================
     OPERATING SYSTEMS LAB
  ====================================================== */
  OS_LAB: {
    official_name: "Operating Systems Laboratory",
    aliases: [
      "os", "os lab", "operating systems lab",
      "jk", "jk lab", "system lab",

      // Tamil
      "ஓஎஸ்", "ஓஎஸ் லேப்",

      // Telugu
      "ఓఎస్ ల్యాబ్",

      // Hindi
      "ओएस लैब",

      // Kannada
      "ಓಎಸ್ ಲ್ಯಾಬ್",

      // Malayalam
      "ഒഎസ് ലാബ്"
    ],
    location: "Block C, Room K12, Second Floor",
    guidance:
      "Enter Block C, take the stairs or lift to the second floor, and proceed to Room K12.",
    floor_guide: {
      second: "OS Lab and Advanced OS Lab"
    },
    map: { query: "Block C, Karpagam College of Engineering" }
  },

  /* =====================================================
     PLACEMENT BLOCK
  ====================================================== */
  PLACEMENT_BLOCK: {
    official_name: "Placement & Training Block",
    aliases: [
      "placement", "placement block", "training and placement",

      "பிளேஸ்மெண்ட்",
      "ప్లేస్‌మెంట్",
      "प्लेसमेंट",
      "ಪ್ಲೇಸ್‌ಮೆಂಟ್",
      "പ്ലേസ്‌മെന്റ്"
    ],
    location: "Near Block C",
    guidance:
      "From Block C, walk towards the training wing to reach the placement block.",
    floor_guide: {
      ground: "Training halls",
      first: "Interview and HR rooms"
    },
    map: { query: "10.879355,77.020408" }
  },

  /* =====================================================
     CAFETERIAS
  ====================================================== */
  CAFETERIA_1: {
    official_name: "Cafeteria (E Block Side)",
    aliases: [
      "canteen", "cafeteria", "food court",

      "கேண்டீன்",
      "క్యాంటీన్",
      "कैंटीन",
      "ಕ್ಯಾಂಟೀನ್",
      "കാന്റീൻ"
    ],
    location: "Near Block E and beside Block C",
    guidance:
      "Located between Block C and Block E.",
    floor_guide: {
      ground: "Dining area"
    },
    map: { query: "10.878854,77.021576" }
  },

  CAFETERIA_2: {
    official_name: "Cafeteria (Auditorium Side)",
    aliases: [
      "auditorium canteen", "backside d block canteen",

      "ஆடிடோரியம் கேண்டீன்",
      "ఆడిటోరియం క్యాంటీన్",
      "ऑडिटोरियम कैंटीन",
      "ಆಡಿಟೋರಿಯಂ ಕ್ಯಾಂಟೀನ್",
      "ഓഡിറ്റോറിയം കാന്റീൻ"
    ],
    location: "Near Auditorium, backside of Block D",
    guidance:
      "Located behind Block D near the auditorium.",
    floor_guide: {
      ground: "Dining area"
    },
    map: { query: "10.878288,77.020416" }
  },

  /* =====================================================
     CENTRAL LIBRARY
  ====================================================== */
  CENTRAL_LIBRARY: {
    official_name: "Central Library",
    aliases: [
      "library", "central library", "college library",

      "நூலகம்", "noolagam", "nulagam",
      "గ్రంథాలయం",
      "पुस्तकालय",
      "ಗ್ರಂಥಾಲಯ",
      "ലൈബ്രറി"
    ],
    location: "Opposite to Block A",
    guidance:
      "From Block A, cross the main pathway to reach the central library.",
    floor_guide: {
      ground: "Reference section",
      first: "Textbooks and journals",
      second: "Digital library"
    },
    map: { query: "10.880350,77.021481" }
  },

  /* =====================================================
     HOSTEL & OFFICE
  ====================================================== */
  STUDENT_HOSTEL: {
    official_name: "Student Hostel",
    aliases: [
      "hostel", "boys hostel", "girls hostel",
      "block f", "f block", "block i", "i block", "block j", "j block",

      "விடுதி",
      "హాస్టల్",
      "छात्रावास",
      "ಹಾಸ್ಟೆಲ್",
      "ഹോസ്റ്റൽ"
    ],
    location: "Residential Zone",
    guidance:
      "Proceed behind the academic blocks towards the residential zone.",
    floor_guide: {
      ground: "Reception and warden office",
      upper: "Student rooms"
    },
    map: { query: "10.877158,77.021662" }
  },

  ADMIN_OFFICE: {
    official_name: "Administrative Office",
    aliases: [
      "office", "admin office", "college office",

      "ஆபீஸ்",
      "ఆఫీస్",
      "कार्यालय",
      "ಕಚೇರಿ",
      "ഓഫീസ്"
    ],
    location: "Main Block, Ground Floor",
    guidance:
      "Located in the main block near the reception.",
    floor_guide: {
      ground: "Administration and accounts"
    },
    map: { query: "10.8797825,77.0220499" }
  },

  /* =====================================================
     AUDITORIUM
  ====================================================== */
  AUDITORIUM: {
    official_name: "College Auditorium",
    aliases: [
      "auditorium", "college auditorium", "hall",

      "கூட்ட ஹால்",
      "ఆడిటోరియం",
      "ऑडिटोरियम",
      "ಆಡಿಟೋರಿಯಂ",
      "ഓഡിറ്റോറിയം"
    ],
    location: "Central Campus Area",
    guidance:
      "Located in the heart of the campus between academic blocks.",
    floor_guide: {
      ground: "Main auditorium seating"
    },
    map: { query: "10.8788478,77.0211587" }
  },

  /* =====================================================
     OPEN AMPHITHEATRE
  ====================================================== */
  OPEN_AMPHITHEATRE: {
    official_name: "Open Amphitheatre",
    aliases: [
      "amphitheatre", "open amphitheatre", "outdoor stage",

      "திறந்த நாடக மंच",
      "ఓపెన్ అంఫిథియేటర్",
      "खुला एम्फिथिएटर",
      "ತೆರೆದ ಆಂಫಿಥಿಯೇಟರ್",
      "തുറന്ന അമ്ഫിതിയേറ്റർ"
    ],
    location: "Campus Ground Area",
    guidance:
      "Located near the central campus ground for outdoor events and functions.",
    floor_guide: {
      ground: "Seating area with stage"
    },
    map: { query: "10.879396,77.020704" }
  },

  /* =====================================================
     CENTRAL STORE
  ====================================================== */
  CENTRAL_STORE: {
    official_name: "Central Store",
    aliases: [
      "store", "central store", "college store", "stationary store",

      "சேமிப்பு",
      "స్టోర్",
      "स्टोर",
      "ಸ್ಟೋರ್",
      "സ്റ്റോർ"
    ],
    location: "Near Main Campus",
    guidance:
      "Located near the academic blocks, accessible from the main campus area.",
    floor_guide: {
      ground: "Store counter and supplies"
    },
    map: { query: "10.878433,77.021065" }
  },

  /* =====================================================
     SPORTS GROUND
  ====================================================== */
  SPORTS_GROUND: {
    official_name: "Sports Ground",
    aliases: [
      "sports", "sports ground", "ground", "playground", "field",

      "விளையாட்டு மைதानം",
      "క్రీడల మైదానం",
      "खेल मैदान",
      "ಕ್ರೀಡಾ ಮೈದಾನ",
      "സ്പോർട്സ് ഗ്രൗണ്ട്"
    ],
    location: "College Ground Area",
    guidance:
      "Proceed towards the college ground for sports facilities and outdoor activities.",
    floor_guide: {
      ground: "Sports facilities and field"
    },
    map: { query: "10.877071,77.020843" }
  }
};
