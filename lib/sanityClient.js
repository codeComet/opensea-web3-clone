import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "x96bumgb",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-05",
  token:
    "sk5bfUtXQozv0WxytGl9HW9ub6r6Kfl73Ke7LhKm9GKBnIhY9KL3QQaA0zZsjsH0V2tCzDMbsQym5qWig3dIQCEM3N792NsCMFzUBGkxsIUSEGCbhl2RpDkjaxncyo9q97SC5wszcPUMhNCb1dkeWCSA3WkeLyAOEYpmkB0CJBHpeQ7MxyMz",
});
