import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  EditEntryFooter,
  MonthYearField,
  FieldRow,
} from "../EntryEditor";

export default function Education({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Degree"
        value={entry.degree}
        onChange={(v) => update("degree", v)}
        placeholder="Enter Degree / Field Of Study / Exchange Semester"
      />

      <TextField
        label="School"
        value={entry.school}
        onChange={(v) => update("school", v)}
        placeholder="Enter school / university"
        trailingAction="Link"
        onTrailingActionClick={() => {
          /* open a link input, if you want that behavior */
        }}
      />

      <FieldRow>
        <MonthYearField
          label="Start Date"
          value={entry.startDate}
          onChange={(v) => update("startDate", v)}
        />
        <MonthYearField
          label="End Date"
          value={entry.endDate}
          onChange={(v) => update("endDate", v)}
          allowPresent
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
        placeholder="Add a description of your education entry…"
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
