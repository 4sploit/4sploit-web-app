const isExternalUrl = (url: string) => {
  return /^https?:\/\//.test(url);
};

export default {
  isExternalUrl,
};
