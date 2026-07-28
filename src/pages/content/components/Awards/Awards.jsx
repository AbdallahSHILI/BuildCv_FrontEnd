import { useState } from "react";
import {
  EditEntryHeader,
  TextField,
  RichTextField,
  DateField,
  EditEntryFooter,
} from "../EntryEditor";

export default function Awards({ entry, onChange, onDone, onDelete }) {
  const [align, setAlign] = useState("left");

  const update = (field, value) => onChange({ ...entry, [field]: value });

  return (
    <div>
      <EditEntryHeader onDelete={onDelete} />

      <TextField
        label="Award"
        value={entry.award}
        onChange={(v) => update("award", v)}
        placeholder="Enter award"
        trailingAction="Link"
        onTrailingActionClick={() => {
          /* open a link input, if you want that behavior */
        }}
      />

      <TextField
        label="Issuer"
        value={entry.issuer}
        onChange={(v) => update("issuer", v)}
        placeholder="Enter Issuer"
      />

      <DateField
        day={entry.day}
        month={entry.month}
        year={entry.year}
        onDayChange={(v) => update("day", v)}
        onMonthChange={(v) => update("month", v)}
        onYearChange={(v) => update("year", v)}
        hideDay={entry.hideDay}
        onHideDayChange={(v) => update("hideDay", v)}
        hideMonth={entry.hideMonth}
        onHideMonthChange={(v) => update("hideMonth", v)}
      />

      <RichTextField
        label="Description"
        value={entry.description}
        onChange={(v) => update("description", v)}
        placeholder="Describe the award..."
        align={align}
        onAlignChange={setAlign}
      />

      <EditEntryFooter onDone={onDone} />
    </div>
  );
}
