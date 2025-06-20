# Factory Method

## Description

Factory Method is a creational design pattern that defines a common interface for creating objects in a superclass, allowing subclasses to change the type of objects being created.

The idea is to extract the instantiation process into a separate "factory" method. This allows centralizing the creation logic and letting subclasses decide which specific class of object to create.

The Factory Method helps make code more flexible: client code works with abstraction and doesn't depend on specific classes of products being created.

