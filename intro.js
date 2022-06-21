function intro() {
  let name = (document.getElementById("name").innerHTML =
      "I am: kayode Owolabi Jesuseun"),
    height = (document.getElementById("height").innerHTML =
      "My height is: 5.8ft"),
    country = (document.getElementById("country").innerHTML =
      "I live in: Nigeria");
  return name, height, country;
}
