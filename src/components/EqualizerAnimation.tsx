import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const EqualizerAnimation = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <style>
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #ffffff;
          }
          canvas {
            display: block;
          }
        </style>
      </head>
      <body>
        <canvas id="c"></canvas>
        <script>
          const canvas = document.getElementById("c");
          const ctx = canvas.getContext("2d");
          let W, H, cx, cy, dpr;
          let baseRadius;
          const amp = 45;
          const segments = 360;
          let t = 0;

          function resize() {
            dpr = window.devicePixelRatio || 1;
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = W + "px";
            canvas.style.height = H + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cx = W / 2;
            cy = H / 2;

            baseRadius = Math.min(W, H) * 0.95 / 2 - amp;
          }
          resize();

          function wave(angle, time) {
            return (
              (Math.sin(angle * 3 + time * 1.2) * 0.4 +
                Math.sin(angle * 5 - time * 0.7) * 0.3 +
                Math.sin(angle * 7 + time * 0.9) * 0.2) *
              amp
            );
          }

          function draw() {
            ctx.clearRect(0, 0, W, H);

            ctx.beginPath();
            ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(77,124,15,0.5)";
            ctx.lineWidth = 20;
            ctx.stroke();

            ctx.beginPath();
            for (let i = 0; i <= segments; i++) {
              const angle = (i / segments) * Math.PI * 2;
              const r = baseRadius + wave(angle, t);
              const x = cx + Math.cos(angle) * r;
              const y = cy + Math.sin(angle) * r;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = "#4D7C0F";
            ctx.lineWidth = 10;
            ctx.stroke();

            t += 0.02;
            requestAnimationFrame(draw);
          }
          draw();
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html: htmlContent }}
        style={styles.webview}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 280,
  },
  webview: {
    width: 280,
    height: 280,
  },
});

export default EqualizerAnimation;
