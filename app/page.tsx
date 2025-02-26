import Carousel from "@/components/carousels/Carousel";
import { img1, img2, img3 } from "@/public/images";

// slider data 
// Make sure tha data is more than 5 to see the effect of the carousel and minimum 3
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
      "Duis vulputate orci ut lectus lacinia, nec bibendum nunc pharetra. Nulla ut ipsum id augue venenatis hendrerit. Sed eleifend fermentum nibh at pulvinar. Cras vehicula velit auctor molestie lobortis. Suspendisse vestibulum tincidunt nisl ut porta. Etiam eleifend congue vehicula. Donec convallis vel augue ac vestibulum. Nam ut lectus vel lectus auctor elementum eget sed quam. Aliquam at lacus iaculis, ultrices sem et, luctus tortor. Ut et erat nisl.2",
  },
  {
    img: img3,
    name: "Gertrude Haynes",
    description:
      "Maecenas commodo finibus venenatis. Duis vitae laoreet lectus. Suspendisse vitae tincidunt mauris. Maecenas neque ipsum, dignissim eget quam blandit, gravida maximus velit. Aliquam non mi elit. Nulla bibendum erat ac sollicitudin blandit. Duis augue ligula, porta nec elit vel, placerat aliquet magna. Duis pulvinar massa eu neque tincidunt fringilla. Proin pharetra tellus sed mauris blandit eleifend.3",
  },
  {
    img: img1,
    name: "Christine Robinson",
    description:
      "Suspendisse id nulla nec sem eleifend venenatis. Vivamus facilisis eleifend suscipit. Sed dui felis, aliquam quis nisi id, vulputate pellentesque quam. Phasellus consectetur diam turpis, sit amet placerat nunc vestibulum nec. Morbi iaculis interdum euismod. Maecenas fringilla porttitor purus, nec dapibus leo iaculis eget. Quisque vehicula, libero eget malesuada viverra, leo lectus condimentum ligula, at laoreet dui massa sed nulla. 4",
  },
  {
    img: img2,
    name: "Frederick Hansen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.5",
  },
  {
    img: img1,
    name: "Nancy Nunez",
    description:
      "Suspendisse id nulla nec sem eleifend venenatis. Vivamus facilisis eleifend suscipit. Sed dui felis, aliquam quis nisi id, vulputate pellentesque quam. Phasellus consectetur diam turpis, sit amet placerat nunc vestibulum nec. Morbi iaculis interdum euismod. Maecenas fringilla porttitor purus, nec dapibus leo iaculis eget. Quisque vehicula, libero eget malesuada viverra, leo lectus condimentum ligula, at laoreet dui massa sed nulla.6",
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
      "Suspendisse id nulla nec sem eleifend venenatis. Vivamus facilisis eleifend suscipit. Sed dui felis, aliquam quis nisi id, vulputate pellentesque quam. Phasellus consectetur diam turpis, sit amet placerat nunc vestibulum nec. Morbi iaculis interdum euismod. Maecenas fringilla porttitor purus, nec dapibus leo iaculis eget. Quisque vehicula, libero eget malesuada viverra, leo lectus condimentum ligula, at laoreet dui massa sed nulla.8",
  },
];
export default function Home() {
  return (
    <main className="flex-center ">
      <Carousel
        sliderData={sliderData}
        // you can also pass the number of wheels like but
        // numberOfWheelsInSlider={5}
        // you can also pass the delay in auto rotation like now it will rotate after each passed 1.5s
        delayInAutoRotation={1500}
      />
    </main>
  );
}
