import ImageKit from "imagekit";
import fs from "fs";
import { useContext } from "react";
import { AllArticles } from "../../App";

 export const ImagekitFunction = (image) => {
const { setImageUrl} = useContext(AllArticles);
var imagekit = new ImageKit({
  publicKey: "public_l7WELbYilQ+zb6D8OnLswr/KfkI=",
  privateKey: "private_XeiM6u1n4i8yNKc6HT4cfFr27TI=",
  urlEndpoint: "https://ik.imagekit.io/sunny23/sunny23/",
});
var path =`./assets/img/${image}`;
// For URL Generation, works for both images and videos
var imageURL = imagekit.url({
  path: path,
  urlEndpoint: "https://ik.imagekit.io/your_imagekit_id/endpoint/",
  transformation: [
    {
      height: "300",
      width: "400",
    },
  ],
});

fs.readFile(path, function (err, data) {
  if (err) throw err; // Fail if the file can't be read.
  imagekit.upload(
    {
      file: data, //required
      fileName: "sunny", //required
      tags: ["sunny", "tag2"],
    },
    function (error, result) {
      if (error) console.log(error);
      else setImageUrl(result.url);
    }
  );
});
console.log(imageURL);
}