"use client"
import { useState } from "react";
import SOUND_MODELS, { SoundModel } from "./constants";

// Define the props interface for the GenerateSoundForm component
interface GenerateSoundFormProps {
  handleGetAudio: (data: CreateSoundRequest) => void;
}

// Main component function
export function GenerateSoundForm({ handleGetAudio }: GenerateSoundFormProps) {
  // State for tracking form submission status
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);

  // State for form data
  const [formData, setFormData] = useState<CreateSoundRequest>({
    modelUrl: "",
    text: "",
  });
  console.log(formData)

  // Function to handle form submission
  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormSubmitting(true);
    
    // Call the provided handler function with the sound request
    handleGetAudio(formData);
    
    setFormSubmitting(false);
  }

  // Function to handle changes in form fields
  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className="ml-8 mr-8 bg-white">
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Select field for choosing a sound model */}
        <div className="space-y-2">
          <label htmlFor="modelUrl">Sound Model</label>
          <select
            name="modelUrl"
            onChange={handleInputChange}
            value={formData.modelUrl}
            disabled={formSubmitting}
          >
            <option value="" disabled>Select a sound model</option>
            {/* Map through available sound models */}
            {SOUND_MODELS.map((model: SoundModel, index: number) => (
              <option key={`${model.name}-${index}`} value={model.url}>
                {model.name}
              </option>
            ))}
          </select>
          <p>This model will generate your sound.</p>
        </div>

        {/* Textarea field for entering text */}
        <div className="space-y-2">
          <label htmlFor="text">Text</label>
          <textarea
            name="text"
            rows={6}
            placeholder="Enter your text here..."
            value={formData.text}
            onChange={handleInputChange}
            disabled={formSubmitting}
          />
          <p>The text used to convert to sound.</p>
        </div>

        {/* Submit button */}
        <button type="submit" disabled={formSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
