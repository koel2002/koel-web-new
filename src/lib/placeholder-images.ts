
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// By directly exporting the imported data, we help ensure that in a development
// or hot-reloading environment, the latest version of the JSON file is used,
// which can prevent server-client mismatches (hydration errors).
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
