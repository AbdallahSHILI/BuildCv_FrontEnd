import { useState } from "react";
import {
  EditEntryHeader,
  RichTextField,
  EditEntryFooter,
} from "../EntryEditor";

export default function Summary({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const handleAiAction = (action) => {
    // e.g. call your AI endpoint with entry.summary and the chosen action
    console.log("AI action:", action, entry.summary);
  };

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <RichTextField
        label="Professional Summary"
        value={entry.summary}
        onChange={(v) => onChange({ ...entry, summary: v })}
        placeholder="Write a professional summary or objective statement that highlights your key qualifications and career goals…"
        align={align}
        onAlignChange={setAlign}
        aiActions={["Improve Writing", "Grammar Check", "Shorter"]}
        onAiAction={handleAiAction}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
