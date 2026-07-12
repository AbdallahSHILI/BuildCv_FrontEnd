import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  SelectField,
  EditEntryFooter,
  PROFICIENCY_LEVELS,
} from "../EntryEditor";

export default function Skills({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Skill"
        value={entry.skill}
        onChange={(v) => update("skill", v)}
        placeholder="Enter Skill"
      />

      <RichTextField
        label="Information / Sub-skills"
        value={entry.info}
        onChange={(v) => update("info", v)}
        placeholder="Enter information or sub-skills"
        align={align}
        onAlignChange={setAlign}
      />

      <SelectField
        label="Skill level"
        value={entry.level}
        onChange={(v) => update("level", v)}
        options={PROFICIENCY_LEVELS}
        placeholder="Select skill level"
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
