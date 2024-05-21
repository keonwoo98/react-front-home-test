import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";

interface TagListProps {
  tags: TagType[];
  selectedTags: string[];
  setFilter: (tagId: string) => void;
}

export const TagList = ({ tags, selectedTags, setFilter }: TagListProps): JSX.Element => {
  return <Tags tags={tags} selectedTags={selectedTags} setFilter={setFilter} />;
};
