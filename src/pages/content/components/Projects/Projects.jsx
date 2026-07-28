import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  EditEntryFooter,
  FieldRow,
} from "../EntryEditor";

export default function Projects({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Project title"
        value={entry.projectTitle}
        onChange={(v) => update("projectTitle", v)}
        placeholder="Enter Project title"
        trailingAction="Link"
        onTrailingActionClick={() => {
          /* open a link input, if you want that behavior */
        }}
      />

      <TextField
        label="Sub title"
        value={entry.subTitle}
        onChange={(v) => update("subTitle", v)}
        placeholder="Enter sub title"
      />

      <FieldRow>
        <TextField
          label="Start Date"
          value={entry.startDate}
          onChange={(v) => update("startDate", v)}
          placeholder="MM/YYYY"
        />
        <TextField
          label="End Date"
          value={entry.endDate}
          onChange={(v) => update("endDate", v)}
          placeholder="MM/YYYY"
        />
      </FieldRow>

      <RichTextField
        label="Description"
        value={entry.description}
        onChange={(v) => update("description", v)}
        placeholder="Describe the project and its outcomes..."
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
