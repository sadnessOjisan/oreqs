const DEFAULT_DELIMITER = "&";

export const parse = (input: string) => {
  const parts = input.split(DEFAULT_DELIMITER);
  const result = {};
  parts.forEach((part) => {
    const arrayPos = part.indexOf("]=");
    if (arrayPos === -1) {
      const pos = part.indexOf("=");
      const key = part.slice(0, pos);
      const value = part.slice(pos + 1);
      result[key] = value;
    } else {
      const pos = part.indexOf("[]=");
      const key = part.slice(0, pos);
      const value = part.slice(pos + 3);
      result[key] =
        result[key] === undefined ? [value] : [...result[key], value];
    }
  });
  return result;
};
