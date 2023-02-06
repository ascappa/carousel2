import Image from "next/image";
async function fetchImages() {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_KEY}&query=flower&count=3`
  );
  return res.json();
}
export default async function Home() {
  const images = await fetchImages();
  console.log(images);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxWidth: 1000,
        flexWrap: "wrap",
      }}
    >
      {Array.from(images).map((image) => (
        <Image
          key={image.id}
          style={{
            minWidth: 0,
            objectFit: "cover",
            aspectRatio: 1,
            flexGrow: 1,
            flexBasis: 300,
          }}
          src={image.urls.regular}
          alt={image["alt_description"]}
          width={20}
          height={20}
        />
      ))}
    </div>
  );
}
