function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + blue + "," + green + ")";
}
function createRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let rectangle = new Rectangle(400, 300);
    let color = randomColor();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, rectangle.width, rectangle.height);



}
createRectangle();