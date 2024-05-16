"use client"
import { useState } from "react"
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function AboutAccordion() {
    const itemClasses = {
        indicator:"text-amber-100 text-4xl",
        title: "text-amber-100 text-4xl"
    }
    
    return (
        <div className="accordion-container">
        <Accordion variant="splitted" itemClasses={itemClasses}>
            <AccordionItem style={{background: "#feb47b15"}} key="1" aria-label="GM.v1" title="GM.v1">
                <div className="panel"><p>This is the content of the accordion 1 - index 1.</p></div>
            </AccordionItem>
            <AccordionItem style={{background: "#feb47b15"}} key="2" aria-label="Claim Details" title="Claim Details">
                <div className="panel" ><p>This is the content of the accordion 1 - index 1.</p></div>
            </AccordionItem>
            <AccordionItem style={{background: "#feb47b15"}} key="3" aria-label="Hat Details" title="Hat Details">
                <div className="panel" ><p>This is the content of the accordion 1 - index 1.</p></div>
            </AccordionItem>
            <AccordionItem style={{background: "#feb47b15"}} key="4" aria-label="Optimism Superchain" title="Optimism Superchain">
                <div className="panel" ><p>This is the content of the accordion 1 - index 1.</p></div>
            </AccordionItem>
            <AccordionItem style={{background: "#feb47b15"}} key="5" aria-label="OTG.WTF" title="OTG.WTF">
                <div className="panel" ><p>This is the content of the accordion 1 - index 1.</p></div>
            </AccordionItem>
        </Accordion>
        
        
        </div>
        
    )
}