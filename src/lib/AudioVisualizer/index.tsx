import React, {
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
    ForwardedRef,
  } from "react";
  import { calculateBarData, draw } from "./utils";
  import { dataPoint } from './types'
  
  interface Props {
    blob: Blob;
    width: number;
    height: number;
    barWidth?: number;
    gap?: number;
    backgroundColor?: string;
    barColor?: string;
    barPlayedColor?: string;
    currentTime?: number;
    style?: React.CSSProperties;
  }
  
  const AudioVisualizer = forwardRef<HTMLCanvasElement, Props>(
    (
      {
        blob,
        width,
        height,
        barWidth = 2,
        gap = 1,
        currentTime,
        style,
        backgroundColor = "transparent",
        barColor = "rgb(184, 184, 184)",
        barPlayedColor = "rgb(160, 198, 255)",
      }: Props,
      ref: ForwardedRef<HTMLCanvasElement>
    ) => {
      const canvasRef = useRef<HTMLCanvasElement>(null);
      const [data, setData] = useState<dataPoint[]>([]);
      const [duration, setDuration] = useState<number>(0);
  
      useImperativeHandle(ref, () => canvasRef.current ?? document.createElement('canvas'), []);
  
      useEffect(() => {
        const processBlob = async (): Promise<void> => {
          if (!canvasRef.current) return;
  
          if (!blob) {
            const barsData = Array.from({ length: 100 }, () => ({
              max: 0,
              min: 0,
            }));
            draw(
              barsData,
              canvasRef.current,
              barWidth,
              gap,
              backgroundColor,
              barColor,
              barPlayedColor
            );
            return;
          }
  
          const audioBuffer = await blob.arrayBuffer();
          const audioContext = new AudioContext();
          await audioContext.decodeAudioData(audioBuffer, (buffer) => {
            if (!canvasRef.current) return;
            setDuration(buffer.duration);
            const barsData = calculateBarData(
              buffer,
              height,
              width,
              barWidth,
              gap
            );
            setData(barsData);
            draw(
              barsData,
              canvasRef.current,
              barWidth,
              gap,
              backgroundColor,
              barColor,
              barPlayedColor
            );
          });
        };
  
        processBlob();
      }, [blob, canvasRef.current, height, width, barWidth, gap]);
  
      useEffect(() => {
        if (!canvasRef.current) return;
  
        draw(
          data,
          canvasRef.current,
          barWidth,
          gap,
          backgroundColor,
          barColor,
          barPlayedColor,
          currentTime,
          duration
        );
      }, [currentTime, duration, data]);
  
      return (
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            ...style,
          }}
        />
      );
    }
  );
  
  AudioVisualizer.displayName = "AudioVisualizer";
  
  export { AudioVisualizer };
  