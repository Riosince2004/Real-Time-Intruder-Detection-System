import { throttle } from "lodash";

export const renderPredictions = (predictions, ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const font = "16px 'Segoe UI', sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const isPerson = prediction.class === "person";

    // Draw bounding box
    ctx.strokeStyle = isPerson ? "#FF3B3B" : "#00BCD4";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, width, height);

    // Fill translucent red if person
    ctx.fillStyle = isPerson ? "rgba(255, 59, 59, 0.15)" : "transparent";
    ctx.fillRect(x, y, width, height);

    // Label background
    ctx.fillStyle = isPerson ? "#FF3B3B" : "#00BCD4";
    const textWidth = ctx.measureText(prediction.class).width;
    ctx.fillRect(x, y, textWidth + 6, 22);

    // Label text
    ctx.fillStyle = "#ffffff";
    ctx.fillText(prediction.class, x + 3, y + 3);

    if (isPerson) {
      playAudio();
    }
  });
};

const playAudio = throttle(() => {
  const audio = new Audio("/pols-aagyi-pols.mp3");
  audio.play();
}, 2000);
