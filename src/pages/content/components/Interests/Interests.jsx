import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  EditEntryFooter,
} from "../EntryEditor";

export default function Interests({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Interest"
        value={entry.interest}
        onChange={(v) => update("interest", v)}
        placeholder="Enter Interest / Hobby"
        trailingAction="Link"
        onTrailingActionClick={() => {
          /* open a link input, if you want that behavior */
        }}
      />

      <RichTextField
        label="Additional information"
        value={entry.additionalInfo}
        onChange={(v) => update("additionalInfo", v)}
        placeholder="Enter additional information"
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
