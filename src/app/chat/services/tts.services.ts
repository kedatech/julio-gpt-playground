import soundModels from "@/app/tts/constants"
const ENDPOINT = "/api/tss"

interface IgetTTSParams {
	input: string
}

export interface IgetTTSResponse {
	success: boolean
	audio: string
	blob: Blob
}
export const getTTS = async (
	params: IgetTTSParams
): Promise<IgetTTSResponse> => {

  const bodyData = JSON.stringify({
    input: params.input,
    modelUrl: "https://api-inference.huggingface.co/models/facebook/mms-tts-spa",
  })
  
  console.log(bodyData)
	const response = await fetch("/api/tts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: bodyData,
	})

	if (!response.ok) {
		return {
			success: false,
			audio: "",
			blob: new Blob
		}
	}
	const data = await response.arrayBuffer()

	// Convert ArrayBuffer to Blob and create a URL for the audio
	const blob = new Blob([data], { type: "audio/mpeg" })
	const audioUrl = URL.createObjectURL(blob)

	return {
		success: true,
		audio: audioUrl,
		blob
	}
}
