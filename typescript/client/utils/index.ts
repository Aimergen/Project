export function cutTextToLength(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
