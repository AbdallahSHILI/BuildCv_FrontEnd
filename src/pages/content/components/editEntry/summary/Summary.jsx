import EntryCard from "../editEntry/EntryCard";
import RichTextField from "../editEntry/fields/RichTextField";

const Summary = ({ data, onChange, onDone, onDelete }) => {
  return (
    <EntryCard
      title="Edit Summary"
      onDone={onDone}
      onDelete={onDelete}
      showPreview={false}
    >
      <RichTextField
        label="Professional Summary"
        value={data}
        onChange={onChange}
        placeholder="Write a professional summary or objective statement that highlights your key qualifications and career goals..."
        aiActions={["Improve Writing", "Grammar Check", "Shorter"]}
      />
    </EntryCard>
  );
};

export default Summary;
