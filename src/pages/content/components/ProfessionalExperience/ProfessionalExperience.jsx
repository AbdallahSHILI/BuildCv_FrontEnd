import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  MonthYearField,
  RichTextField,
  EditEntryFooter,
  FieldRow,
} from "../EntryEditor";

export default function ProfessionalExperience({
  entry,
  onChange,
  onDone,
  onDelete,
}) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Job Title"
        value={entry.jobTitle}
        onChange={(v) => update("jobTitle", v)}
        placeholder="Enter Job Title"
      />

      <TextField
        label="Employer"
        value={entry.employer}
        onChange={(v) => update("employer", v)}
        placeholder="Enter employer"
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
          maxValue={entry.endDate}
        />
        <MonthYearField
          label="End Date"
          value={entry.endDate}
          onChange={(v) => update("endDate", v)}
          minValue={entry.startDate}
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
        placeholder="Describe your responsibilities, achievements, and skills gained."
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
