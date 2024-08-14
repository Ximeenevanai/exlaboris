// Example object SORT_BY_CHANNEL_INDEX
const SORT_BY_CHANNEL_INDEX = {
    "channel1": 0,
    "channel2": 1,
    "channel3": 2,
    // ... other channels
};

// Function to check if a channel key exists in SORT_BY_CHANNEL_INDEX
function isChannelIndexAvailable(c) {
    return c in SORT_BY_CHANNEL_INDEX;
}

// Example usage
console.log(isChannelIndexAvailable("channel1"));  // Output: true
console.log(isChannelIndexAvailable("channel4"));  // Output: false
