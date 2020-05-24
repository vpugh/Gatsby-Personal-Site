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

export const selectedColor = (color, type, opacity) => {
  if (type === "base") {
    switch (color) {
      case "orange":
        return opacity ? `rgba(#ffb64d, ${opacity})` : "#ffb64d"
      case "green":
        return opacity ? `rgba(#aed87c, ${opacity})` : "#aed87c"
      case "blue":
        return opacity ? `rgba(#4dd8ff, ${opacity})` : "#4dd8ff"
      default:
        return "#ddd"
    }
  }
  if (type === "darker") {
    switch (color) {
      case "orange":
        return "#FFA11A"
      case "green":
        return "#97CD56"
      case "blue":
        return "#1ACDFF"
      default:
        return "#ddd"
    }
  }
  if (type === "darkest") {
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
  if (type === "light") {
    switch (color) {
      case "orange":
        return "#FFCA80"
      case "green":
        return "#C7E4A5"
      case "blue":
        return "#80E3FF"
      default:
        return "#ddd"
    }
  }
}
