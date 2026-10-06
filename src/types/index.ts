export interface Product {
  id: string;
  name: string;
  /** The design's line, e.g. "holding onto smoke and calling it a memory" */
  tagline: string;
  /** What is actually on the tee */
  description: string;
  /** Main image first, patch close-up second */
  images: string[];
  category: string;
  /** Fabric weight story, e.g. "~260 GSM combed cotton (target)" */
  gsm: string;
  /** Decoration type for this design */
  decoration: string;
  /** Fit description */
  fit: string;
}
