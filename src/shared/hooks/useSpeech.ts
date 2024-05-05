"use client"
import { useEffect, useState } from "react"

export const useSpeech = () => {
	const [text, setText] = useState<string>("")
	const [isListening, setIsListening] = useState<boolean>(false)
	const [recognition, setRecognition] = useState<any>(null)

	useEffect(() => {
		if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
			const newRecognition = new window.webkitSpeechRecognition()
			newRecognition.continuous = true
			newRecognition.interimResults = true
			newRecognition.lang = "es-ES"
            console.log("newRecognition:", newRecognition)
			newRecognition.onresult = (event: SpeechRecognitionEvent) => {
				console.log("onresult event:", event)
				recognition.stop()
				setIsListening(false)
			}

			setRecognition(newRecognition)
		}
	}, [])

	const startListening = () => {
		setText("")
		setIsListening(true)
		recognition.start()
	}

	const stopListening = () => {
		setIsListening(false)
		recognition.stop()
	}

	return {
		text,
		isListening,
		startListening,
		hasRecognitionSupport: !!recognition,
	}
}
