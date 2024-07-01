export function mapCategoryName(category: string): string {
  try {
    const categoryArray = category.split('>');
    const words = categoryArray[categoryArray.length - 1].toLowerCase().trim().split(' ');

    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');
  } catch (e) {
    console.error('Failed to parse category name: ', e);
  }

  return category;
}

export function pluralizeCategoryName(category: string): string {
  switch (category) {
    case mapCategoryName('READY TO DRINK'):
    case mapCategoryName('SPIRITS'):
      return category;
    default:
      return `${category}s`;
  }
}
