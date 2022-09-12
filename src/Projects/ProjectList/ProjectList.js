import GalleryView from "./GalleryView/GalleryView";
import ListView from "./ListView/ListView";

function ProjectList(props) {
  const galleryView = props.galleryView;

  if (galleryView) {
    return <GalleryView />;
  } else {
    return <ListView />;
  }
}

export default ProjectList;
