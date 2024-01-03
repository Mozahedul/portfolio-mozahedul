import { v2 as cloudinary } from "cloudinary";

// conffigure the cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

/**
 * @param {*} imagePath
 * @returns public_id of the image
 * @description return a larget object with the image information
 */
const uploadImageToCloudinary = async imagePath => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: "portfolio-mozahedul",
  };

  const result = await cloudinary.uploader.upload(imagePath, options);
  return result.public_id;
};

/**
 * @param {string} imagePath
 * @return cloudinary image url from public_id of the image
 */
export const viewImageFromCloudinary = imgPath => {
  const imgUrl = cloudinary.url(imgPath);
  return imgUrl;
};

/**
 * @param {string} image path
 * @return Delete image from cloudinary
 */
export const deleteCloudinaryImage = async imagePath => {
  await cloudinary.uploader.destroy(imagePath, { invalidate: true });
};

export default uploadImageToCloudinary;
