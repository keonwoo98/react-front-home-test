import { Tag } from "./Tag";
import { TagType } from "./TagType";

interface TagsProps {
  tags: TagType[];
  selectedTags: string[];
  setFilter?: (tagId: string) => void;
  isClickable?: boolean;
}

export const Tags = ({ tags, selectedTags, setFilter, isClickable = true }: TagsProps): JSX.Element => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} selectedTags={selectedTags} setFilter={setFilter} isClickable={isClickable} />
      ))}
    </div>
  );
};
