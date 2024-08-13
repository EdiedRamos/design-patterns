// * This is the Chain of Responsibility implementation
/**
 * This pattern is also known as:
 * 1. CoR
 * 2. Chain of Command
 */

// Handler class
abstract class Handler {
  protected successor?: Handler;

  constructor(successor?: Handler) {
    this.successor = successor;
  }

  public handleRequest(request: string): void {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

// Specific handler 1
class WelcomeEdied extends Handler {
  public handleRequest(request: string): void {
    if (request === "edied") {
      console.log("Welcome Edied!");
    } else {
      super.handleRequest(request);
    }
  }
}

// Specific handler 2
class ByeEdied extends Handler {
  public handleRequest(request: string): void {
    if (request === "edied-exit") {
      console.log("Bye Edied!");
    } else {
      super.handleRequest(request);
    }
  }
}

// Specific handler 3
class RunEdied extends Handler {
  public handleRequest(request: string): void {
    if (request === "edied-run") {
      console.log("Run Edied, run 🤣");
    } else {
      super.handleRequest(request);
    }
  }
}

const welcomeEdied = new WelcomeEdied();
const byeEdied = new ByeEdied(welcomeEdied);
const runEdied = new RunEdied(byeEdied);

runEdied.handleRequest("edied");
runEdied.handleRequest("edied-exit");
runEdied.handleRequest("edied-run");
