/********************************************************
 * Filename: sophisticated_code.js
 * Content: Complex JavaScript code demonstrating a dynamic data visualization
 ********************************************************/

// Define the canvas dimensions
const canvasWidth = 800;
const canvasHeight = 600;

// Create a canvas element
const canvas = document.createElement("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);

// Get the canvas context
const context = canvas.getContext("2d");

// Generate random data
const numDataPoints = 1000;
const data = [];
for (let i = 0; i < numDataPoints; i++) {
    data.push(Math.random() * canvasHeight);
}

// Create a function to draw the data
function drawData() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw the data points as circles
    for (let i = 0; i < numDataPoints; i++) {
        const x = i * (canvasWidth / numDataPoints);
        const y = canvasHeight - data[i];
        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    }
    
    // Draw lines between adjacent data points
    for (let i = 1; i < numDataPoints; i++) {
        const x1 = (i - 1) * (canvasWidth / numDataPoints);
        const y1 = canvasHeight - data[i - 1];
        const x2 = i * (canvasWidth / numDataPoints);
        const y2 = canvasHeight - data[i];
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.stroke();
        context.closePath();
    }
}

// Create an animation loop to continuously update and redraw the data
function animate() {
    // Update the data
    for (let i = 0; i < numDataPoints; i++) {
        data[i] += Math.random() * 10 - 5;
        if (data[i] < 0) data[i] = 0;
        if (data[i] > canvasHeight) data[i] = canvasHeight;
    }
    
    // Redraw the data
    drawData();
    
    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();