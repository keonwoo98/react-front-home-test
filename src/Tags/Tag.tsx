import { TagType } from "./TagType";

interface TagProps {
  tag: TagType;
  selectedTags: string[];
  setFilter?: (tagId: string) => void;
  isClickable?: boolean;
}

export const Tag = ({ tag, selectedTags, setFilter, isClickable = true }: TagProps): JSX.Element => {
  const isSelected = selectedTags.includes(tag.id);

  return (
    <div
      onClick={isClickable ? () => setFilter?.(tag.id) : undefined}
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: isSelected ? '#DDEEFF' : tag.color,
        cursor: isClickable ? 'pointer' : 'default'
      }}
    >
      {tag.name.fr}
    </div>
  );
};
