"use client"
import { useSpeech } from "@/shared/hooks/useSpeech";

export default function SpeechPage() {
  const { text, isListening, startListening, hasRecognitionSupport } = useSpeech();

  return (
    <div className="bg-white w-full text-xl">
      <h1>Speech</h1>

      {hasRecognitionSupport ? (
        <div>
          <button onClick={startListening} disabled={isListening}>
            Start
          </button>
          {isListening && (
            <div>
              <p>Listening...</p>
              <p>{text}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Speech recognition is not supported in this browser</p>
        </div>
      )}
    </div>
  );
}
