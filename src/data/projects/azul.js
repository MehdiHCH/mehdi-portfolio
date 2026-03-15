export const azulProject = {
  id: 3,
  slug: "3-azul-ocr",
  title: "Azul OCR - Tifinagh Handwritten Character Recognition",
  description:
    "Innovative hybrid OCR system designed to preserve and digitize Amazigh cultural heritage by recognizing handwritten Tifinagh script. The system combines Tesseract OCR, PaddleOCR, and custom CNN architectures to handle character, word, and sentence-level recognition with high accuracy.",
  image: "assets/img/projects/azul.jpeg",
  tags: ["OCR", "Tifinagh", "CNN", "PaddleOCR", "Cultural Heritage"],
  link: "/projects/3-azul-ocr",
  github: "https://github.com/MehdiHCH/Tesseract-OCR--Handwritten-Tifinagh-Character-Recognition",
  company: "Ibn Tofail University",
  period: "October 2024 — February 2025",
  location: "Kenitra, Morocco",
  role: "Academic Project",
  overview: {
    architectureImage: "assets/img/projects/architecture/azul_architecture.png",
    keyContributions: [
      "Built a custom 6-layer CNN from scratch, trained on all 33 Tifinagh characters, achieving 94.2% character-level recognition accuracy.",
      "Fine-tuned Tesseract OCR on the AMHCD (Amazigh Handwritten Character Dataset) in collaboration with IRCAM, optimizing it specifically for Amazigh word-level recognition.",
      "Adapted PaddleOCR with multi-scale detection for robust full-line and sentence-level Tifinagh recognition, reaching 91.2% sentence accuracy.",
      "Engineered a data augmentation pipeline (rotation, translation, zoom) that expanded the training dataset fivefold, compensating for the scarcity of annotated Amazigh data.",
      "Designed and implemented a hybrid prediction fusion mechanism combining outputs from all three engines, consistently outperforming any single-model approach.",
      "Delivered the first open-source Tifinagh OCR solution in Morocco, validated with 50+ real users and supporting PNG, JPG, and JPEG input formats.",
    ],
  },
  problemStatement: {
    title: "Tifinagh Digitization Challenge",
    description:
      "Tifinagh script is an essential element of Amazigh cultural heritage, but it remains underrepresented in modern technological tools.",
    challenges: [
      "Lack of dedicated OCR tools for Tifinagh manuscripts",
      "Character complexity with significant handwriting variability",
      "Risk of cultural loss for future generations",
      "Limited accuracy of existing solutions for Tifinagh",
      "Scarcity of annotated training data",
    ],
  },
  solution:
    "Hybrid system combining Tesseract OCR, PaddleOCR, and custom CNN for different text granularities (characters, words, sentences).",
  keyAchievements: [
    "94.2% character-level recognition accuracy",
    "91.2% sentence-level recognition accuracy (hybrid approach)",
    "First open-source Tifinagh OCR solution in Morocco",
    "Hybrid model: fusion of 3 recognition approaches",
    "Custom CNN architecture for Tifinagh character classification",
    "Tesseract fine-tuned on AMHCD dataset",
    "PaddleOCR adapted for Amazigh characters",
    "Intensive data augmentation: 5x data expansion",
    "Institutional collaboration with IRCAM",
    "Intuitive user interface tested by 50+ users",
    "Support for multiple image formats (PNG, JPG, JPEG)",
    "Multi-format export: TXT, JSON, CSV",
  ],
  techStack: [
    "TensorFlow", "Keras", "PyTorch", "Tesseract 4.0",
    "PaddleOCR", "OpenCV", "scikit-image", "React.js",
    "Flask", "FastAPI", "Docker",
  ],
  modules: [
    {
      id: 1,
      name: "Image Preprocessing",
      description: "Advanced image processing for Tifinagh manuscript preparation",
      metrics: {
        techniques: "Otsu Thresholding, Resizing, Filtering",
        resolution: "64×64 → 128×128 pixels",
        augmentation: "Rotation, Translation, Zoom",
      },
    },
    {
      id: 2,
      name: "Character Recognition (CNN)",
      description: "Custom CNN for individual character classification",
      metrics: {
        accuracy: "94.2%",
        classes: "33 characters",
        architecture: "6 Conv layers + Dropout",
      },
    },
    {
      id: 3,
      name: "Tesseract OCR Fine-tuning",
      description: "Fine-tuned Tesseract for Tifinagh word recognition",
      metrics: {
        accuracy: "Good precision",
        dataset: "AMHCD (Amazigh)",
      },
    },
    {
      id: 4,
      name: "PaddleOCR Integration",
      description: "Adapted PaddleOCR for text line and sentence recognition",
      metrics: {
        accuracy: "91.2% sentence-level",
        approach: "Multi-scale detection",
      },
    },
  ],
  results: {
    characterAccuracy: "94.2%",
    sentenceAccuracy: "91.2%",
    implementationTime: "8 months",
    teamSize: "5 developers",
    datasetSize: "Augmented 5x",
  },
  visualizations: [
    {
      title: "Azul OCR User Interface",
      description: "Intuitive interface for Tifinagh character and sentence recognition",
      image: "assets/img/projects/azul.jpeg",
    },
    {
      title: "Tifinagh Character Recognition System",
      description: "Complete workflow for handwritten character recognition with 94.2% accuracy",
      image: "assets/img/projects/azul_interface.jpeg",
    },
  ],
  challenges: {
    writingVariability: {
      problem: "Great diversity of writing styles",
      solution: "Intensive augmentation (×5), hybrid model, fine-tuning on real data",
    },
    limitedDataset: {
      problem: "Few annotated Tifinagh data available",
      solution: "IRCAM collaboration, aggressive augmentation, transfer learning",
    },
    sentenceRecognition: {
      problem: "Difficult word segmentation",
      solution: "PaddleOCR detection, post-processing with linguistic rules, contextual correction",
    },
  },
  team: [
    "Rima Daqch", "Adil Eddarif", "Brahim El Aboudi",
    "El Mehdi Hicham", "Zineb Lahraoui",
  ],
  supervisor: "Prof. Khadija Lekdioui",
  demos: [
    {
      id: 1,
      title: "Tifinagh Character Recognition",
      video: "assets/videos/azul_ocr_demo.mp4",
      description: "Real-time OCR for Tifinagh handwritten character and sentence recognition with 94.2% accuracy",
      category: "OCR",
    },
  ],
};