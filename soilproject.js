function showMethodInfo() {
    var methodSelect = document.getElementById("testingMethods");
    var methodInfoDiv = document.getElementById("methodInfo");

    // Clear previous content
    methodInfoDiv.innerHTML = "";

    // Check the selected method and display corresponding information
    if (methodSelect.value === "feelMethod") {
        methodInfoDiv.innerHTML = "<h3>The Feel Method</h3><p>The Feel Method is a simple and traditional technique used by farmers and gardeners to assess soil texture...</p>";
    } else if (methodSelect.value === "ribbonMethod") {
        methodInfoDiv.innerHTML = "<h3>The Ribbon Method</h3><p>The Ribbon Method is another tactile approach to determine soil texture, especially the proportion of clay...</p>";
    } else if (methodSelect.value === "shakingTest") {
        methodInfoDiv.innerHTML = "<h3>The Shaking Test</h3><p>The Shaking Test is a method to evaluate soil structure and stability. It provides insights into the soil's aggregation...</p>";
    }
}






