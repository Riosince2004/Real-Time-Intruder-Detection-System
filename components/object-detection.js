"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-predictions";

let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 10);
  };

  const runObjectDetection = async (net) => {
    if (
      canvasRef.current &&
      webcamRef.current?.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const detectedObjects = await net.detect(webcamRef.current.video, undefined, 0.6);

      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="w-full max-w-5xl">
      {isLoading ? (
        <div className="text-xl text-gray-600 text-center mt-16 animate-pulse">
          Loading detection model, please wait...
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Webcam
            ref={webcamRef}
            className="w-full h-auto"
            muted
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-10 w-full h-full pointer-events-none"
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
