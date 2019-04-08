1. Security Concepts
- Most common threats 
    Cross-site scripting(XSS) 
    Cross-site request forgery(CSRF) 
    Sensitive data exposure
    Injection attacks SSJI
    Obfuscation

2. Security Applied: XSS
- Cross-site scripting (XSS) is when a malicious script is injected into a trusted site.
- Example of XSS in code, XSS can pass any malicious code they want inside of that function.
- Final syntax applied XSS  
    Escape untrusted data before pass into the function.

3. Security Applied: CSRF
- Cross-site request forgery (CSRF)
    CSRF is any form of malicious code that is executed when a user is authenticated to a trusted website. There are two ways to prevent SCRF. First, checking headers to validate the request is from the same origin. The header of the request website client needs to be from the same HTTP URL as the server. Second, we need to check for an encrypted or signed token.
- JSON Web Token (JWT) is an open standard that is used to securely information in between parties. The JSON object primarily consists of three items: a header, the payload, and the signature.
- Auth0 is the library to use to make your development of secure authentication a walk in the park.

4. Security Applied: Sensitive Data
- Sensitive data risks
    The users identities, credentials, personal information, credit card information was breached.
- encryption
    The main priciple of cryptography is only through passing the key or passphrase, can encrypted the data, referred to as ciphertext be decrypted and read normally.

- List of crypto libraries
    Use the crypto module within the Node.js build-in into Node.js or standard JS crypto library.

5. Security Applied: SSJI
- server-side JavaScript injection (SSJI)
    Malicious code injected into a vulnerable server and can be done through forms on the client side where the form or function makes a request to the server, to make the server run in loops, or in the case of SQL or NoSQL injection can be used to get user data. Don't use
    eval(), setTimeout(), setInterval(), or function(), it can be exploited for a DDOS or a denial service attack to render your server useless or send any kind of malicious code into your server.
- SSJI code
    SQL and NoSQL queries can be used to inject commands.
    eval(req.body.preTax), SELECT * FROM WHERE  usename = 'admin' -- AND password = ''
- prevent SSJI
    Never use eval(), setTimeout(), setInterval(), and function() in you code.
    Validate all user input before processing with type checking and other mechanisms.
    For parsing JSON input, use safer JSON.parse() instead of eval().
    Use strict mode.
    Use prepared statements versus dynamic queries using string concatenation.
    Do no assign admin rights for your database to your application.

6. Security Applied: Obfuscation
- Obfuscation(代码混淆)
    Obfuscation is relation to JS is the art of hiding your code behind a algorithm. Hiding all the logic of your application for hackers to read and exploit.
- Tools for scrambling your data
    Javascript Obfuscator Tool: https://obfuscator.io/  You can by copy & paste JS code or upload JS file, obfuscate you code.
    Embed your JS code in a img: http://javascript2img.com/

- Best practices for scrambling data
    Unauthorized users shouldn't be able to see any sensitive data or be able to insert commands into the code that isn't safe.
    Make your code unreadable.
    Use the cryptography techniques protected between your server and your client readable data.




