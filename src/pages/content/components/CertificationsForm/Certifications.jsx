import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  EditEntryFooter,
} from "../EntryEditor";

export default function Certificates({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Certificate"
        value={entry.certificate}
        onChange={(v) => update("certificate", v)}
        placeholder="Enter certificate"
        trailingAction="Link"
        onTrailingActionClick={() => {
          /* open a link input, if you want that behavior */
        }}
      />

      <RichTextField
        label="Additional information"
        value={entry.additionalInfo}
        onChange={(v) => update("additionalInfo", v)}
        placeholder="eg. Level 1 and 2"
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
