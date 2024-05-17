if (queueElement) {
  processQueueElement(queueElement);
}

function processQueueElement(element) {
  // Check if the element meets certain criteria
  if (isValidElement(element)) {
    // Process the valid element
    handleValidElement(element);
  } else {
    // Handle invalid element case
    handleInvalidElement(element);
  }
}

function isValidElement(element) {
  // Define the criteria for a valid element
  return element !== null && typeof element === 'object';
}

function handleValidElement(element) {
  // Implement the logic to process the valid element
  console.log('Processing element:', element);
}

function handleInvalidElement(element) {
  // Implement the logic for when the element is invalid
  console.log('Invalid element:', element);
}
