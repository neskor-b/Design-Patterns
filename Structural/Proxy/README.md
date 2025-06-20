# Proxy Pattern

## Description

Proxy is a structural design pattern that allows you to substitute special proxy objects for real objects (refactoring.guru). The proxy class has the same interface as the real one, but controls access to the real object: it can intercept calls, perform additional actions (such as caching, lazy creation, access control) and only then delegate them to the real object. This achieves additional logic around the object without changing its code.

## Key Benefits

- **Access control**: Control access to the real object
- **Lazy initialization**: Defer expensive object creation until needed
- **Caching**: Cache results of expensive operations
- **Logging**: Add logging without modifying the real object
- **Remote access**: Access objects in different address spaces

## Use Cases

- Lazy loading of large resources
- Access control and authentication
- Caching expensive operations
- Remote service access
- Logging and monitoring
- Virtual proxies for expensive objects

## Structure

The pattern consists of:
- **Subject**: Interface that both RealSubject and Proxy implement
- **RealSubject**: The real object that the proxy represents
- **Proxy**: Maintains a reference to the real subject and controls access to it
- **Client**: Works with the subject interface

## Types of Proxies

- **Virtual Proxy**: For lazy initialization of expensive objects
- **Remote Proxy**: For working with objects in different address spaces
- **Protection Proxy**: For access control and authentication
- **Caching Proxy**: For caching results of expensive operations
- **Logging Proxy**: For logging method calls

## Example

The example demonstrates a virtual proxy: there is an object whose creation is expensive (e.g., loading data), so it is initialized on first access through the proxy. This shows how the proxy can control when the real object is created and provide additional functionality around it. 