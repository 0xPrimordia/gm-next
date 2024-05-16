"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function AIGNMachine() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="accordion3-container">
            <div className="accordion3-section3">
                <button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} className="accordion3">
                    <span><h2>AI GN Machine</h2></span>
                    {isOpen ? (
                        <ChevronUpIcon className="h-20" />
                    ):(
                        <ChevronDownIcon className="h-20" />
                    )}
                    <i className="fas fa-chevron-down"></i>
                </button>
                <div className={(isOpen ? "visible max-h-auto " : "invisible max-h-0 ")+"panel3"}>
                        
                    <div className="container ai-text-container">
                            <div className="recessed-field">
                                <p id="aiGeneratedText">Your inspirational quote will appear here...</p>
                            </div>
                            <button id="generateTextButton" className="action-button">Generate</button>
                            <button id="copyTextButton" className="action-button">Copy</button>
                    </div>
            
                    <div className="container ai-image-container">
                        <div className="recessed-field">
                            <img id="aiGeneratedImage" src="" alt="AI-generated visual content" />
                        </div>
                        <button id="generateImageButton" className="action-button">Generate</button>
                        <button id="copyImageButton" className="action-button">Copy</button>
                    </div>
                </div>
            </div>
        </section>
    )
}