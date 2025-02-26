import Carousel from "@/components/carousels/Carousel";
import { file, globe, img1, img2, img3 } from "@/public/images";

// data
const sliderData = [
  {
    img: img1,
    name: "Earl Moore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.1",
  },
  {
    img: img2,
    name: "Caroline Underwood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.2",
  },
  {
    img: img3,
    name: "Gertrude Haynes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.3",
  },
  {
    img: img1,
    name: "Christine Robinson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.4",
  },
  {
    img: globe,
    name: "Frederick Hansen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.5",
  },
  {
    img: file,
    name: "Nancy Nunez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.6",
  },
  {
    img: img3,
    name: "Frances Kelley",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.7",
  },
  {
    img: img1,
    name: "Hannah Webb",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.",
  },
];
export default function Home() {
  return (
    <main className="flex-center ">
      <Carousel sliderData={sliderData} numberOfWheelsInSlider={8} />
    </main>
  );
}
