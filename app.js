
// ========================= PART 1: CALLBACKS  =========================

function task1(done) {
  // Task 1: Write a function greetStudent(name, callback) that greets the student and then calls the callback.
  console.log("\n Task 1 ");
  function greetStudent(name, callback) {
    console.log("Hello " + name);
    callback();
  }
  greetStudent("Ali", function () {
    console.log("Welcome to the class");
    done();
  });
}

function task2(done) {
  // Task 2  Write a function that adds the marks of two subjects and sends the total to a callback.
  console.log("\n--- Task 2 ---");
  function addMarks(mathMarks, englishMarks, callback) {
    const total = mathMarks + englishMarks;
    callback(total);
  }
  addMarks(80, 70, function (total) {
    console.log("Total marks: " + total);
    done();
  });
}

function task3(done) {
  // Task 3 (4 marks): Write a function showResult(callback) that waits 1 second using setTimeout and then calls the callback.
  console.log("\n--- Task 3 ---");
  function showResult(callback) {
    console.log("Checking result...");
    setTimeout(function () {
      callback("Result: Pass");
    }, 1000);
  }
  showResult(function (message) {
    console.log(message);
    done();
  });
}

// ====================== PART 2: CALLBACK HELL (12) ======================

function task4(done) {
  // Task 4 (4 marks): Use nested callbacks to do these steps in order: register student -> pay fee -> get ID card.
  console.log("\n--- Task 4 ---");
  function register(callback) {
    setTimeout(function () {
      console.log("Student registered");
      callback();
    }, 500);
  }
  function payFee(callback) {
    setTimeout(function () {
      console.log("Fee paid");
      callback();
    }, 500);
  }
  function getIdCard(callback) {
    setTimeout(function () {
      console.log("ID card received");
      callback();
    }, 500);
  }

  register(function () {
    payFee(function () {
      getIdCard(function () {
        console.log("All steps done");
        done();
      });
    });
  });
}

function task5(done) {
  // Task 5 (4 marks): Use nested callbacks for a student portal: login -> open dashboard -> show marks.
  console.log("\n--- Task 5 ---");
  setTimeout(function () {
    console.log("Login successful");
    setTimeout(function () {
      console.log("Dashboard opened");
      setTimeout(function () {
        console.log("Marks: Math 80, English 75");
        done();
      }, 500);
    }, 500);
  }, 500);
}

function task6(done) {
  // Task 6 (4 marks): Make a 4-level callback hell for a school day: wake up -> get ready -> reach school -> attend class.
  console.log("\n--- Task 6 ---");
  setTimeout(function () {
    console.log("Student woke up");
    setTimeout(function () {
      console.log("Student got ready");
      setTimeout(function () {
        console.log("Student reached school");
        setTimeout(function () {
          console.log("Student attended class");
          done();
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

// ========================= PART 3: PROMISES (14) =========================

function task7(done) {
  // Task 7 (4 marks): Write checkResult(marks) that returns a promise: resolve "Pass" if marks are 40 or more, else reject "Fail".
  console.log("\n--- Task 7 ---");
  function checkResult(marks) {
    return new Promise(function (resolve, reject) {
      if (marks >= 40) {
        resolve("Pass");
      } else {
        reject("Fail");
      }
    });
  }
  checkResult(75)
    .then(function (result) {
      console.log("75 marks:", result);
    })
    .catch(function (error) {
      console.log("75 marks:", error);
    });
  checkResult(30)
    .then(function (result) {
      console.log("30 marks:", result);
    })
    .catch(function (error) {
      console.log("30 marks:", error);
    })
    .finally(done);
}

function task8(done) {
  // Task 8 (5 marks): Write checkAdmission(age) that returns a promise and use then(), catch() and finally() with it.
  console.log("\n--- Task 8 ---");
  function checkAdmission(age) {
    return new Promise(function (resolve, reject) {
      if (age >= 18) {
        resolve("Admission granted");
      } else {
        reject("Admission denied");
      }
    });
  }
  checkAdmission(15)
    .then(function (message) {
      console.log(message);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("Admission check complete");
      done();
    });
}

function task9(done) {
  // Task 9 (5 marks): Write login(username, password) that returns a promise and shows a message for correct and wrong details.
  console.log("\n--- Task 9 ---");
  function login(username, password) {
    return new Promise(function (resolve, reject) {
      if (username === "ali" && password === "1234") {
        resolve("Welcome Ali");
      } else {
        reject("Invalid username or password");
      }
    });
  }
  login("ali", "1234")
    .then(function (message) {
      console.log(message);
    })
    .catch(function (error) {
      console.log(error);
    });
  login("ali", "0000")
    .then(function (message) {
      console.log(message);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(done);
}

// ===================== PART 4: PROMISE CHAINING (14) =====================

function task10(done) {
  // Task 10 (4 marks): Chain promises: start with 400 marks, then find the percentage out of 500, then print it.
  console.log("\n--- Task 10 ---");
  Promise.resolve(400)
    .then(function (marks) {
      return (marks / 500) * 100;
    })
    .then(function (percentage) {
      console.log("Percentage: " + percentage + "%");
      done();
    });
}

function task11(done) {
  // Task 11 (5 marks): Make three promise functions (takeAdmission, payFee, getCard) and run them one after another using chaining.
  console.log("\n--- Task 11 ---");
  function takeAdmission() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Admission taken");
      }, 500);
    });
  }
  function payFee() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Fee paid");
      }, 500);
    });
  }
  function getCard() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Student card received");
      }, 500);
    });
  }

  takeAdmission()
    .then(function (message) {
      console.log(message);
      return payFee();
    })
    .then(function (message) {
      console.log(message);
      return getCard();
    })
    .then(function (message) {
      console.log(message);
      done();
    });
}

function task12(done) {
  // Task 12 (5 marks): Make a chain where step 3 fails, so step 4 is skipped, then show the error in catch() and use finally().
  console.log("\n--- Task 12 ---");
  Promise.resolve("Step 1 done")
    .then(function (message) {
      console.log(message);
      return "Step 2 done";
    })
    .then(function (message) {
      console.log(message);
      throw "Step 3 failed";
    })
    .then(function () {
      console.log("Step 4 done");
    })
    .catch(function (error) {
      console.log("Error:", error);
      console.log("Step 4 was skipped");
    })
    .finally(function () {
      console.log("Chain finished");
      done();
    });
}

// ============================ RUN ALL TASKS ============================
// This small code runs the tasks one by one so the output stays in order.
const allTasks = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10, task11, task12];

function runTask(index) {
  if (index === allTasks.length) {
    console.log("\nAll 12 tasks completed.");
    return;
  }
  allTasks[index](function () {
    runTask(index + 1);
  });
}

runTask(0);