export const getNBuitsColor = (nLocalBuits) => {
    if (nLocalBuits >= 0 && nLocalBuits <= 50) {
        return "green";
    } else if (nLocalBuits >= 51 && nLocalBuits <= 149) {
        return "orange";
    } else if (nLocalBuits >= 150) {
        return "red";
    } else {
        return "blue";
    }
};