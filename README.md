# 🛡️ Real-Time Intruder Detection System

> A real-time object detection system powered by TensorFlow.js and the COCO-SSD model to detect intruders (humans) using a webcam. When a person is detected, the system highlights the subject and plays an alert sound.

---

## 🚀 Features

- ✅ Real-time object detection using webcam
- ✅ Pre-trained **COCO-SSD** model from TensorFlow.js
- ✅ Detects multiple object classes, with a focus on **person detection**
- ✅ Plays an audible alarm when a person is detected
- ✅ Fully responsive and modern UI built with **Next.js + TailwindCSS**
- ✅ Canvas overlay on live video feed
- ✅ Optimized performance using `lodash.throttle` for alert control

---

## 🖼️ Demo Preview

> *Add a screenshot or a screen recording of the app in action here.*

---

## ⚙️ Tech Stack

- **Framework:** Next.js (React)
- **UI:** TailwindCSS
- **AI Model:** TensorFlow.js - COCO-SSD
- **Camera Feed:** `react-webcam`
- **Canvas Rendering:** HTML5 Canvas API
- **Utilities:** Lodash (`throttle` for sound control)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/intruder-detection-system.git
cd intruder-detection-system
npm install
npm run dev

