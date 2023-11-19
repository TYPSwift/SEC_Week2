// Objects
// key-value pairs in curly braces
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
  };
  // destructuring objects
  const { vocals, guitar, bass, drums } = band;
  console.log (guitar);
  console.log(vocals);

  const vehicle = {
    wheels: 4,
    engine: function () {
    return "Vrroooom! ";
    }
    };
    const car = Object.create (vehicle);
    car.doors = 4;
    car.engine = function () {
    return "Whoooosh!";
    };
    console.log(car.engine());
    console.log (car.wheels);
    const tesla = Object.create(car);
    console.log(tesla.wheels);
    console.log(tesla.engine());