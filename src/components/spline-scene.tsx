"use client";

import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center bg-black/10 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-gray-500"></div>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}