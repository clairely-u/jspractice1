actualTemp = 60;
desiredTemp = 75;

if (actualTemp === desiredTemp) {
    console.log("Standby yall");
} else if (actualTemp > desiredTemp) {
    console.log("Turning on AC");
} else if (actualTemp < desiredTemp) {
    console.log("it's gettin hot in hereeee");
}