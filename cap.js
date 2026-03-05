function capitalize(string) {
   return string
      .split(" ")
      .map((w) => w.slice(0,1).toUpperCase() + w.slice(1))
      .join(" ");
}

module.exports = capitalize;
