import { DegreeSchoolFields, DateLocationRow } from "./components/index";
import EntryCard from "../EntryCard";
import RichTextField from "../fields/RichTextField";

const defaultEntry = {
  degree: "",
  school: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
};

const Education = ({ data = defaultEntry, onChange, onDone, onDelete }) => {
  const handleField = (field) => (value) =>
    onChange({ ...data, [field]: value });

  return (
    <EntryCard title="Edit Entry" onDone={onDone} onDelete={onDelete}>
      <DegreeSchoolFields
        degree={data.degree}
        school={data.school}
        onDegreeChange={handleField("degree")}
        onSchoolChange={handleField("school")}
      />
      <DateLocationRow
        startDate={data.startDate}
        endDate={data.endDate}
        location={data.location}
        onStartDateChange={handleField("startDate")}
        onEndDateChange={handleField("endDate")}
        onLocationChange={handleField("location")}
      />
      <RichTextField
        label="Description"
        value={data.description}
        onChange={handleField("description")}
        placeholder="Add a description of your education entry..."
        aiActions={[
          "Improve Writing",
          "Suggest Content",
          "Grammar Check",
          "Shorter",
        ]}
      />
    </EntryCard>
  );
};

export default Education;
