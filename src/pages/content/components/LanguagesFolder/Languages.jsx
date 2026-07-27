import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  SelectField,
  EditEntryFooter,
  PROFICIENCY_LEVELS,
} from "../EntryEditor";

export default function Languages({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Language"
        value={entry.language}
        onChange={(v) => update("language", v)}
        placeholder="Enter language"
      />

      <RichTextField
        label="Additional information"
        value={entry.additionalInfo}
        onChange={(v) => update("additionalInfo", v)}
        placeholder="e.g. C2, 4+, TOEFL, IELTS,..."
        align={align}
        onAlignChange={setAlign}
      />

      <SelectField
        label="Language level"
        value={entry.level}
        onChange={(v) => update("level", v)}
        options={PROFICIENCY_LEVELS}
        placeholder="Select language level"
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
