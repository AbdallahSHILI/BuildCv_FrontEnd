import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  EditEntryFooter,
  FieldRow,
} from "../EntryEditor";

export default function Courses({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Course title"
        value={entry.courseTitle}
        onChange={(v) => update("courseTitle", v)}
        placeholder="Enter course title"
        trailingAction="Link"
        onTrailingActionClick={() => {
          /* open a link input, if you want that behavior */
        }}
      />

      <TextField
        label="Institution"
        value={entry.institution}
        onChange={(v) => update("institution", v)}
        placeholder="Enter Institution"
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
        <TextField
          label="Location"
          value={entry.location}
          onChange={(v) => update("location", v)}
          placeholder="City, Country"
        />
      </FieldRow>

      <RichTextField
        label="Description"
        value={entry.description}
        onChange={(v) => update("description", v)}
        placeholder="Describe the course..."
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
