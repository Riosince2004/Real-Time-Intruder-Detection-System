import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12 bg-gray-50">
      <h1 className="bg-gradient-to-br from-black to-zinc-700 bg-clip-text text-transparent font-bold text-4xl md:text-6xl text-center tracking-tight mb-6">
        Real-Time Intruder Detection System
      </h1>
      <p className="text-gray-500 text-center text-lg mb-10 max-w-xl">
        AI-powered system to detect unauthorized presence using object recognition.
      </p>
      <ObjectDetection />
    </main>
  );
}
