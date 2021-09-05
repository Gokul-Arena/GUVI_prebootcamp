1.

(a)

Statically typed language:
   - A programming language is said to use static typing when type checking is performed during compile-time as opposed to run-time.
   - In static typing, types are associated with variables not values.
   - Statically typed languages have better performance at run-time.

Dynamically typed language:
   - A programming language is said to be dynamically typed, or just 'dynamic', when the majority of its type checking is performed at run-time as opposed to at compile-time.
   - In dynamic typing, types are associated with values not variables.
   - Dynamic typed language have lower performance at run-time.


(b)

Programming Language:
   - Programming Language is compiled to machine code and run on the hardware of the underlying operating system.
   - Programming languages have to be compiled before execution.
        Example: C, C++, Java, Pascal, etc.

Scripting Language:
   - It is a subset of programming language where you don't have to compile a program before you run it and almost all errors are detected at runtime.
        Example: Lua, JavaScript, Perl, etc.


2.

Difference between HTTP1.1 vs HTTP2

- Hypertext Transfer Protocol (HTTP) is an application protocol that is, currently, the foundation of data communication for the World Wide Web.

- A simple and abstract example would be a restaurant guest and a waiter. The guest (Client) asks (sends request) waiter (Server) for a meal, then the waiter gets the meal 
  from the restaurant chef (your application logic) and brings the meal to the guest.

- The first usable version of HTTP was created in 1997. Because it went through several stages of development, this first version of HTTP was called HTTP/1.1.
  This version is still in use on the web. In 2015, a new version of HTTP called HTTP/2 was created.

- HTTP/2 solves several problems that the creators of HTTP/1.1 did not anticipate. In particular, HTTP/2 is much faster and more efficient than HTTP/1.1.
  One of the ways in which HTTP/2 is faster is in how it prioritizes content during the loading process.

- In the context of web performance, prioritization refers to the order in which pieces of content are loaded. Suppose a user visits a news website and navigates to an article.
  Should the photo at the top of the article load first? Should the text of the article load first? Should the banner ads load first?

  Differences:
  
- Multiplexing: 
  HTTP/1.1 loads resources one after the other, so if one resource cannot be loaded, it blocks all the other resources behind it.
  In contrast, HTTP/2 is able to use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource.
  HTTP/2 does this by splitting data into binary-code messages and numbering these messages so that the client knows which stream each binary message belongs to.

- Server push:
  Typically, a server only serves content to a client device if the client asks for it.
  However, this approach is not always practical for modern webpages, which often involve several dozen separate resources that the client must request.
  HTTP/2 solves this problem by allowing a server to "push" content to a client before the client asks for it.
  The server also sends a message letting the client know what pushed content to expect – like if Bob had sent Alice a Table of Contents of his novel before sending the whole thing.

- Header compression:
  Small files load more quickly than large ones.
  To speed up web performance, both HTTP/1.1 and HTTP/2 compress HTTP messages to make them smaller.
  However, HTTP/2 uses a more advanced compression method called HPACK that eliminates redundant information in HTTP header packets.
  This eliminates a few bytes from every HTTP packet. Given the volume of HTTP packets involved in loading even a single webpage, those bytes add up quickly, resulting in faster loading.