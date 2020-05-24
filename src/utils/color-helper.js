export const baseColor = color => {
  switch (color) {
    case "orange":
      return "#ffb64d"
    case "green":
      return "#aed87c"
    case "blue":
      return "#4dd8ff"
    default:
      return "#ddd"
  }
}

export const darkColor = color => {
  switch (color) {
    case "orange":
      return "#452c07"
    case "green":
      return "#1a2d04"
    case "blue":
      return "#052d38"
    default:
      return "#ddd"
  }
}
