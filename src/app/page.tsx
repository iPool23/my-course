import { SplineScene } from "@/components/spline-scene";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-400 to-gray-700">
      <SplineScene 
        scene={"https://prod.spline.design/q13GZ6WZdlsPRweI/scene.splinecode"}
        className={"w-full h-full"}
      />
    </main>
  );
}