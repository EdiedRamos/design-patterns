// * Notifications system that support emails, SMS and push

// * Interface

// ! "Notification" is an interface of the Notifications API so the prefix "X" is just for solving this conflict 😎

interface XNotification {
  send(message: string): void;
}

// * Concrete class

class EmailNotification implements XNotification {
  send(message: string): void {
    console.log(`${message}\n[EMAIL]`);
  }
}

class SMSNotification implements XNotification {
  send(message: string): void {
    console.log(`${message}\n[SMS]`);
  }
}

class PushNotification implements XNotification {
  send(message: string): void {
    console.log(`${message}\n[PUSH]`);
  }
}

// * Factory
class NotificationFactory {
  createNotification(type: string): XNotification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Not type supported");
    }
  }
}

// * Service
class NotificationService {
  constructor(private factory: NotificationFactory) {}

  sendNotification(type: string, message: string): void {
    this.factory.createNotification(type).send(message);
  }
}

// * Main
const notificationFactory = new NotificationFactory();
const notificationService = new NotificationService(notificationFactory);

notificationService.sendNotification(
  "sms",
  "Hi, this is Edied how is it going?"
);
notificationService.sendNotification(
  "email",
  "Greetings, I hope you are well, this is for reporting a new issue..."
);
notificationService.sendNotification("push", "Your order is ready");
