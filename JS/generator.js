// generator function
function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
  }
//  returns generator object
  const generatorObject = simpleGenerator()
  console.log(generatorObject.next())
  // { value: 1, done: false }
  console.log(generatorObject.next())
  // { value: 2, done: false }
  console.log(generatorObject.next())
  // { value: 3, done: false }
 //   returns false until no more code is there to be executed
  console.log(generatorObject.next())
  // { value: undefined, done: true }


  function* simpleGenerator1() {
    console.log("Before 1")
    yield 1
    console.log("Before 2")
    yield 2
    console.log("End of Generator")
  }
  
  const generatorObject1 = simpleGenerator1()
  console.log(generatorObject1.next().value)
//   executes code until yield 1
  console.log(generatorObject1.next().value)
  //   executes code until yield 2
  function* generateId() {
    let id = 1
  
    while (true) {
      yield id
      id++
    }
  }
  
  const gen1 = generateId()
  console.log(gen1.next().value)
  // 1
  console.log(gen1.next().value)
  // 2
  console.log(gen1.next().value)
  // 3

  function* generateId() {
    let id = 1
  
    while (true) {
      const increment = yield id
      if (increment != null) {
        id = id + increment
      } else {
        id++
      }
    }
  }
  
  const gen2 = generateId()
  console.log(gen2.next().value)
  // 1
  console.log(gen2.next(3).value)
  // 4
  console.log(gen2.next().value)

  function* generateId() {
    let id = 1
  
    while (true) {
      yield id
      id++
    }
  }
  
  const gen3 = generateId()
  console.log(gen3.next())
  // { value: 1, done: false }
  console.log(gen3.return(10))
  // { value: 10, done: true }
  console.log(gen3.next())