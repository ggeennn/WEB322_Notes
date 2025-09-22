# WEB322_Week4_Web_Server_Introduction (Web Server Introduction) 📚

## 1. 标题和概述 (Title and Overview)
本周笔记主要整理了HTTP协议概述、Node.js模块与NPM包管理器以及使用Express.js构建简单Web服务器的相关知识。
This week's notes primarily cover the HTTP Protocol overview, Node.js modules and NPM package manager, and building a simple web server using Express.js.

## 2. 学习路径图 (Learning Path)
- 理解HTTP协议的基本结构和工作原理。
- 掌握Node.js模块的创建与使用。
- 熟悉NPM包管理器的基本命令和`package.json`文件的作用。
- 学习使用Express.js框架搭建Web服务器，并配置路由、返回HTML文件和处理静态资源。

## 3. 目录 (Table of Contents)
1. HTTP协议概述 (HTTP Protocol Overview)
    - HTTP协议基础 (HTTP Protocol Basics)
    - HTTP请求 (HTTP Requests)
        - 请求起始行 (Start line)
        - 请求头 (Headers)
        - 请求体 (Body)
    - HTTP响应 (HTTP Responses)
        - 响应状态行 (Status line)
        - 响应头 (Headers)
        - 响应体 (Body)
2. Node.js模块与NPM包管理器 (Modules and Node Package Manager)
    - 模块 (Modules)
        - 编写模块 (Writing Modules)
    - NPM – Node包管理器 (NPM – Node Package Manager)
        - 全局安装包 (Globally installing packages)
        - `package.json`文件详解 (`package.json` explained)
3. 使用Express.js构建简单Web服务器 (Simple Web Server Using Express.js)
    - 项目结构 (Project Structure)
    - Express.js框架 (Express.js Framework)
        - 简单GET路由 (Simple 'GET' Routes)
        - 返回HTML文件 (Returning .html Files)
        - CSS与图片等静态资源 (CSS & Images)
    - 公共托管 (Vercel) (Public Hosting (Vercel))

## 4. 知识点详解 (Detailed Content)

### HTTP协议 (HTTP Protocol | HTTP Protocol) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP协议是应用层协议，它本质上位于底层网络协议（如TCP）之上。HTTP是人类可读且可扩展的，这使得该协议非常容易扩展和实验。
  - 英文解释：The HTTP Protocol itself is an Application layer protocol – that is, it essentially sits “on top” of an underlying network-level protocol such as the Transmission Control Protocol (TCP). HTTP is human-readable and extensible, which makes the protocol extremely easy to extend and to experiment with.
- 示例 | Example
  - 新功能可以通过客户端和服务器之间建立协议并指定新的“headers”来引入，这些“headers”将使客户端和服务器能够随请求或响应传递额外信息。
- 💡实践提示 | Practice Tips
  - 理解HTTP协议的分层特性有助于更好地理解网络通信。

### HTTP消息结构 (HTTP Message Structure | HTTP Message Structure) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP请求和响应共享相似的结构，由起始行、可选的HTTP头、一个空行和可选的消息体组成。
  - 英文解释：Both HTTP requests and responses share a similar structure and are composed of: A start-line that describes the requests to be performed, or its status that is a success or a failure. An optional set of HTTP headers specifying the request, or describing the body included in the message. A blank line indicating that all meta-information for the request has been sent. An optional body that contains data associated with the request (like the content of an HTML form), or the document associated with a response.
- 示例 | Example
  - 请求的起始行描述要执行的请求，响应的起始行描述其成功或失败状态。
- 💡实践提示 | Practice Tips
  - 消息体（payload content）如原始HTML在“message body”中发送。

### HTTP请求 (HTTP Requests | HTTP Requests) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP请求是客户端发送给服务器以启动操作的消息。
  - 英文解释：HTTP requests are messages sent by the client to initiate an action on the server.
- 示例 | Example
  - 浏览器向服务器发送GET请求以获取网页内容。
- 💡实践提示 | Practice Tips
  - 了解请求的组成部分对于调试和构建Web应用至关重要。

### 请求起始行 (Request Start Line | Start line) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP请求的起始行包含三个元素：HTTP方法、请求目标和HTTP版本。
  - 英文解释：HTTP requests start-line contains of three elements: An HTTP method that describes the action to be performed. The request target. The HTTP version.
- 示例 | Example
  - `GET /background.png HTTP/1.0`：GET方法，请求目标`/background.png`，HTTP版本`HTTP/1.0`。
- 💡实践提示 | Practice Tips
  - 请求目标的形式多样，包括绝对路径、完整URL、授权组件或星号形式。

### HTTP方法 (HTTP Methods | HTTP Methods) 🟡 中级概念
- 定义 | Definition
  - 中文解释：HTTP方法描述了要执行的操作。
  - 英文解释：An HTTP method that describes the action to be performed.
- 示例 | Example
  - **GET**: 用于从指定URI检索信息，是安全、可重复的操作，无副作用。
  - **POST**: 请求目标资源根据其特定语义处理请求中包含的表示。常用于提交HTML表单数据、发布消息、创建新资源或向现有资源追加数据。
  - **PUT**: 请求服务器将消息体中包含的内容存储在给定URL指定的位置，例如创建或替换文件。
  - **HEAD**: 与GET相同，但服务器不得在响应中发送消息体，用于获取元数据。
  - **DELETE**: 请求源服务器删除目标资源与其当前功能之间的关联，类似于UNIX中的`rm`命令。
  - **CONNECT**: 请求接收方建立到目标源服务器的隧道，常用于通过代理创建端到端虚拟连接，然后使用TLS进行保护。
  - **OPTIONS**: 请求有关目标资源可用通信选项的信息，允许客户端确定资源选项或服务器功能。
  - **TRACE**: 请求远程、应用层循环回溯请求消息，通常用于开发期间的调试。
- 💡实践提示 | Practice Tips
  - 不同的HTTP方法有不同的语义和用途，选择正确的方法对于构建RESTful API至关重要。

### 请求头 (Request Headers | Headers) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP请求头遵循“不区分大小写的字符串 + 冒号（:） + 值”的基本结构，提供请求的额外上下文或添加服务器处理请求的额外逻辑。
  - 英文解释：HTTP headers in a request follow the basic structure of any HTTP header: a case-insensitive string followed by a colon (‘:’) and a value whose structure depends upon the header.
- 示例 | Example
  - **请求头 (Request headers)**：为请求提供额外上下文或添加服务器处理请求的额外逻辑（例如，条件请求）。
  - **表示头 (Representation headers)**：如果消息有消息体，则发送这些头，描述消息数据的原始形式和应用的任何编码。
- 💡实践提示 | Practice Tips
  - 请求头可以很长，但必须是单行。

### 请求体 (Request Body | Body) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP请求的最后一部分是请求体。并非所有请求都有请求体，例如GET或HEAD请求通常不需要。
  - 英文解释：The last part of a request is its body. Not all requests have one: for example, requests fetching resources (like GET or HEAD) usually don’t need any.
- 示例 | Example
  - POST请求通常在请求体中发送数据到服务器以更新数据，例如HTML表单数据。
- 💡实践提示 | Practice Tips
  - DELETE或OPTIONS请求也不需要请求体。

### HTTP响应 (HTTP Responses | HTTP Responses) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP响应是服务器发送给客户端以响应请求的消息。
  - 英文解释：HTTP responses are messages sent by the server to the client in response to a request.
- 示例 | Example
  - 服务器返回网页内容、API数据或错误信息。
- 💡实践提示 | Practice Tips
  - 响应的组成部分与请求类似，但起始行是状态行。

### 响应状态行 (Response Status Line | Status line) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP响应的起始行，称为状态行，包含协议版本、状态码和状态文本。
  - 英文解释：The start line of an HTTP response, called the status line, contains the protocol version, a status code, and a status text.
- 示例 | Example
  - `HTTP/1.1 404 Not Found`：协议版本`HTTP/1.1`，状态码`404`，状态文本`Not Found`。
- 💡实践提示 | Practice Tips
  - 状态文本是纯信息性的，使HTTP消息更具可读性。

### HTTP状态码 (HTTP Status Codes | HTTP Status Codes) 🟡 中级概念
- 定义 | Definition
  - 中文解释：状态码是一个三位数字，提供请求成功或失败等信息。
  - 英文解释：A status code beginning with 1, 2, 3, 4 or 5 that provides information such as the success or failure of the request.
- 示例 | Example
  - **1xx (Informational | 信息性)**: 请求已接收，继续处理。例如，`100 (Continue)`。
  - **2xx (Success | 成功)**: 操作已成功接收、理解和接受。例如，`200 (Ok)`。
    - GET: 资源已获取并在消息体中传输。
    - HEAD: 实体头在消息体中。
    - POST: 描述操作结果的资源在消息体中传输。
    - TRACE: 消息体包含服务器接收到的请求消息。
  - **3xx (Redirection | 重定向)**: 必须采取进一步操作才能完成请求。例如，`302 (Found)`。
  - **4xx (Client Error | 客户端错误)**: 请求包含错误的语法或无法完成。例如，`404 (Not Found)`。
  - **5xx (Server Error | 服务器错误)**: 服务器未能完成一个明显有效的请求。例如，`500 (Internal Server Error)`。
- 💡实践提示 | Practice Tips
  - 熟悉常见的状态码有助于快速诊断Web应用问题。

### 响应头 (Response Headers | Headers) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP响应头遵循与请求头相同的基本结构，提供关于消息的额外上下文或添加客户端应如何进行后续请求的额外逻辑。
  - 英文解释：The HTTP header format for responses follow the same basic structure, giving additional context about the message or adding extra logic to how the client should make subsequent requests.
- 示例 | Example
  - **响应头 (Response headers)**：包含服务器软件信息（如`Server`）、响应生成时间（如`Date`）、资源内容类型（如`Content-Type`）或缓存方式（如`Cache-Control`）。
  - **表示头 (Representation headers)**：描述消息数据的形式和应用的任何编码（如果消息有消息体）。
- 💡实践提示 | Practice Tips
  - 响应头对于客户端正确处理响应内容（如缓存、内容类型）至关重要。

### 响应体 (Response Body | Body) 🟢 基础概念
- 定义 | Definition
  - 中文解释：HTTP响应的最后一部分是响应体。通常是已知长度的单个文件（由`Content-Type`和`Content-Length`定义）或未知长度的单个文件（使用`Transfer-Encoding: chunked`编码）。
  - 英文解释：The last part of a response is the body. This is typically a single file of known length or a single file of unknown length.
- 示例 | Example
  - 状态码为`201 (Created)`或`204 (No Content)`的响应通常没有响应体。
- 💡实践提示 | Practice Tips
  - 响应体中包含实际的数据，如HTML文档、JSON数据或图片。

### 模块 (Modules | Modules) 🟢 基础概念
- 定义 | Definition
  - 中文解释：模块是包含代码和逻辑的独立文件，可以在其他解决方案中重用。Node.js通过`require()`函数加载内置模块。
  - 英文解释：A module contains code and logic that we can use in our own solutions. Node.js loads built-in modules using the global `require()` function.
- 示例 | Example
  - Node.js内置模块包括`fs` (文件系统)、`path` (路径) 和`readline` (行读取)。
- 💡实践提示 | Practice Tips
  - 模块化编程有助于代码的组织、复用和维护。

### 编写模块 (Writing Modules | Writing Modules) 🟡 中级概念
- 定义 | Definition
  - 中文解释：我们可以通过使用全局`module`对象创建自己的模块，这些模块位于单独的`.js`文件中，并具有隔离的作用域，变量不会成为全局变量。
  - 英文解释：We can create our own modules by making use of a global `module` object – which isn’t truly “global” in the same sense as “console”, but instead global to each of your modules, which are located in separate .js files.
- 示例 | Example
  - **`message.js` (模块文件)**:
    ```javascript
    // NOTE: Node.js wraps the contents of this file in a function:
    // (function (exports, require, module, __filename, __dirname) { ... });
    // so that we have access to the working file/directory names as well
    // as creating an isolated scope for the module, so that our
    // variables are not global.

    let localFunction = () => {
      // a function local to this module
    };

    let localMessage = '';

    module.exports.writeMessage = (msg) => {
      localMessage = msg;
    };

    module.exports.readMessage = () => {
      console.log(`${localMessage} from ${__filename}`);
    };
    ```
  - **`modEx1.js` (主文件)**:
    ```javascript
    let message = require('./modules/message');

    message.writeMessage('Hello World!');
    message.readMessage();
    ```
  - 执行`node modEx1.js`将输出`Hello World from ...`，其中`...`是`message.js`文件的绝对路径。
- 💡实践提示 | Practice Tips
  - `module.exports`对象用于存储希望通过`require()`函数调用访问的函数和数据。
  - Node.js会包装模块内容，提供`exports`, `require`, `module`, `__filename`, `__dirname`等变量，并创建模块的隔离作用域。

### NPM – Node包管理器 (NPM – Node Package Manager | NPM – Node Package Manager) 🟢 基础概念
- 定义 | Definition
  - 中文解释：NPM (Node Package Manager) 是Node生态系统的核心组成部分，允许我们安装和管理来自`npmjs.com`的第三方模块。
  - 英文解释：The Node Package Manager is a core piece of the module based Node ecosystem. The package manager allows us to install and manage 3rd party modules, available from `https://www.npmjs.com/` within our own applications.
- 示例 | Example
  - NPM由三个独立组件组成：网站、命令行界面 (CLI) 和注册表。
  - CLI随Node默认安装，用于下载和删除包。
- 💡实践提示 | Practice Tips
  - 所有本地安装的npm包都将安装在项目文件夹的`node_modules`文件夹中。

### 常用NPM命令 (Common NPM Commands | Common NPM Commands) 🟡 中级概念
- 定义 | Definition
  - 中文解释：NPM提供了许多命令来管理包，以下是一些常用命令。
  - 英文解释：NPM provides many commands to manage packages.
- 示例 | Example
  - **`npm install [Module Name]`**: 从npm仓库安装包，以便在应用程序中使用。例如：`let express = require("express");`
  - **`npm uninstall [module name]`**: 从`node_modules`文件夹中卸载模块。
  - **`npm init`**: 为新应用程序创建`package.json`文件。
  - **`npm prune`**: 检查`package.json`文件，删除项目中不需要的已安装npm模块。
  - **`npm list`**: 显示此应用程序使用的所有已安装包的列表。
- 💡实践提示 | Practice Tips
  - `npm i`是`npm install`的简写。

### 全局安装包 (Globally Installing Packages | Globally installing packages) 🟡 中级概念
- 定义 | Definition
  - 中文解释：全局安装包意味着将其作为计算机上的应用程序安装，可以从命令行运行，而不是在应用程序代码中使用。
  - 英文解释：Installing a package globally means you will install it like an application on your computer which you can run from the command line, not use it in your application code.
- 示例 | Example
  - `npm install bower -g`：全局安装`bower`包管理器。
  - 其他全局安装的工具包括`migrate` (数据库迁移脚本) 和`grunt-cli` (任务运行器)。
- 💡实践提示 | Practice Tips
  - 全局安装的包不会安装在`node_modules`文件夹中，而是安装在用户目录下的特定文件夹中。

### `package.json`文件详解 (`package.json` explained | `package.json` explained) 🟡 中级概念
- 定义 | Definition
  - 中文解释：`package.json`文件列出了应用程序所需的所有包及其版本，解决了团队协作中包依赖管理的问题。
  - 英文解释：The `package.json` file is a listing of all the packages your application requires and also which versions are required. It provides a simple way for newcomers to your project to get started easily and stay up to date when packages get updated.
- 示例 | Example
  - 使用`npm init`命令在项目文件夹中生成`package.json`文件。
  - 示例`package.json`内容：
    ```json
    {
      "name": "myserver",
      "version": "1.0.0",
      "description": "",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js"
      },
      "author": "",
      "license": "ISC"
    }
    ```
  - 安装包后，`package.json`中会添加`dependencies`字段，例如：
    ```json
    "dependencies": {
        "express": "^4.18.2"
    }
    ```
- 💡实践提示 | Practice Tips
  - `npm init`是一个交互式过程，会提示输入包名、版本、描述等信息，括号中的是默认值。
  - `package.json`就像应用程序所有依赖项的清单。

### `package-lock.json`文件 (`package-lock.json` file | `package-lock.json` file) 🟡 中级概念
- 定义 | Definition
  - 中文解释：`package-lock.json`文件的目的是确保在不同环境（如开发和生产环境）中安装相同的依赖项，并防止安装不同包版本导致的问题。
  - 英文解释：The purpose of package-lock.json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments. It also helps to prevent issues with installing different package versions, which can lead to conflicts and errors.
- 示例 | Example
  - 当运行`npm install`时，除了`node_modules`文件夹，还会生成`package-lock.json`。
- 💡实践提示 | Practice Tips
  - `package-lock.json`记录了安装时每个包的确切版本和依赖关系树，确保了构建的可重现性。

==============================================
https://webprogrammingtoolsandframeworks.sdds.ca/Web-Server-Introduction/simple-web-server-using-expressjs
==============================================

### Express.js (Express.js | Express.js) 🟢 基础概念
- 定义 | Definition
  - 中文解释：Express.js是一个极简且灵活的Node.js Web应用程序框架，为Web和移动应用程序提供了一套强大的功能。
  - 英文解释：Express.js is "a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
- 示例 | Example
  - 使用`npm i express`命令安装Express.js。
- 💡实践提示 | Practice Tips
  - Express.js是Node.js社区中非常流行的框架，用于快速轻松地构建灵活的Web应用程序。

### 项目结构 (Project Structure | Project Structure) 🟢 基础概念
- 定义 | Definition
  - 中文解释：使用Node.js和Express时，建议创建特定的文件夹结构来组织应用程序。
  - 英文解释：To get started working with Node.js and Express, we should create a new folder for our application.
- 示例 | Example
  - 典型的项目结构：
    ```
    /MyServer
      ↪ /public  // 存放静态资源，如CSS、图片
      ↪ /views   // 存放HTML模板文件
      ↪ server.js // 主服务器文件
      ↪ package.json // 包配置文件
      ↪ package-lock.json // 包锁定文件
      ↪ /node_modules // 安装的npm包
    ```
- 💡实践提示 | Practice Tips
  - 首先使用`npm init`在项目根目录创建`package.json`文件。

### 启动Express服务器 (Starting Express Server | Starting Express Server) 🟡 中级概念
- 定义 | Definition
  - 中文解释：在`server.js`文件中引入Express模块，获取`app`对象，并监听指定端口来启动服务器。
  - 英文解释：To begin using Express.js, we must first "require" it in our server.js file and execute the code to start our server.
- 示例 | Example
  - **`server.js` 启动代码**:
    ```javascript
    const express = require('express'); // "require" the Express module
    const app = express(); // obtain the "app" object
    const HTTP_PORT = process.env.PORT || 8080; // assign a port

    // start the server on the port and output a confirmation to the console
    app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
    ```
  - 使用`node --watch server.js`命令启动服务器，`--watch`标志会在文件更改时重启进程。
  - 访问`http://localhost:8080`，初始会看到`Cannot GET /`，因为尚未定义路由。
- 💡实践提示 | Practice Tips
  - `process.env.PORT || 8080`用于在部署到在线服务时使用环境变量指定的端口，否则使用8080端口。
  - `Ctrl+C`用于停止运行中的服务器。

### 简单GET路由 (Simple 'GET' Routes | Simple 'GET' Routes) 🟡 中级概念
- 定义 | Definition
  - 中文解释：使用`app.get()`方法定义服务器对GET请求的响应，指定目标路径和处理请求的回调函数。
  - 英文解释：To respond to a "GET" request, we must invoke a "GET" function and provide the target path as well as a "callback" function to handle the request.
- 示例 | Example
  - **响应根路径的GET请求**:
    ```javascript
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    ```
  - **响应`/about`路径的GET请求**:
    ```javascript
    app.get('/about', (req, res) => {
      res.send('About the Company');
    });
    ```
  - 回调函数接收`req` (请求对象) 和`res` (响应对象) 作为参数。
  - `res.send()`方法用于向客户端发送响应。
- 💡实践提示 | Practice Tips
  - `req`对象包含HTTP请求的查询字符串、参数、消息体、HTTP头等属性。
  - `res`对象表示Express应用程序发送的HTTP响应。

### 返回HTML文件 (Returning .html Files | Returning .html Files) 🟡 中级概念
- 定义 | Definition
  - 中文解释：使用`res.sendFile()`方法代替`res.send()`来返回HTML文件，需要提供文件的绝对路径。
  - 英文解释：We will be using the `sendFile()` method of the "res" object, instead of "send()", to return HTML files.
- 示例 | Example
  - **引入`path`模块**:
    ```javascript
    const path = require('path');
    ```
  - **发送HTML文件**:
    ```javascript
    res.sendFile(path.join(__dirname, '/views/someFile.html'));
    ```
  - `path.join(__dirname, '/views/someFile.html')`用于安全地将`__dirname`（当前文件所在目录的绝对路径）与文件本地路径连接起来，生成一个不依赖于特定机器的绝对路径。
- 💡实践提示 | Practice Tips
  - `__dirname`是一个Node.js全局变量，表示当前模块文件所在的目录名。
  - 将HTML文件放在`views`文件夹中是常见的做法。

### CSS与图片等静态资源 (CSS & Images | CSS & Images) 🟡 中级概念
- 定义 | Definition
  - 中文解释：使用`express.static()`中间件函数将特定文件夹标记为“静态”，以便自动处理对其中资源的请求。
  - 英文解释：Using Express, we can identify a specific folder as "static" and any valid requests for resources contained within that folder are automatically sent back to the client with a 200 status code.
- 示例 | Example
  - **项目结构中的静态资源**:
    ```
    /MyServer
      ↪ /public
        ↪ /css
          ↪ site.css
        ↪ /img
          ↪ banner.jpg
    ```
  - **HTML中链接静态资源**:
    ```html
    <link rel="stylesheet" href="/css/site.css" />
    <img src="/img/banner.jpg" alt="site banner" />
    ```
  - **在`server.js`中配置静态文件夹**:
    ```javascript
    app.use(express.static('public'));
    ```
  - `app.use()`用于注册中间件，`express.static('public')`将`public`目录设置为静态资源服务目录。
- 💡实践提示 | Practice Tips
  - 在HTML中引用静态资源时，路径不包含`/public`，因为Express会自动处理。
  - Express会首先检查静态文件夹中是否存在请求的资源，然后再检查其他路由。

### 公共托管 (Vercel) (Public Hosting (Vercel) | Public Hosting (Vercel)) 🔴 高级概念
- 定义 | Definition
  - 中文解释：Vercel是一个用于部署Web应用程序的平台，可以将Express服务器部署到线上。
  - 英文解释：Vercel is a platform for deploying web applications.
- 示例 | Example
  - 查阅“Getting Started with Vercel”文档，学习如何将服务器部署到线上。
- 💡实践提示 | Practice Tips
  - 部署到线上后，服务器将使用Vercel分配的`PORT`环境变量。

## 5. FAQ (常见问题)
- **Q: 为什么HTTP请求和响应的结构相似？**
  - A: 这种相似性是为了保持协议的简洁性和一致性，使得客户端和服务器能够以统一的方式解析和构建消息。
- **Q: `module.exports`和`exports`有什么区别？**
  - A: `exports`是`module.exports`的一个引用。通常建议使用`module.exports`来导出模块，因为它更直接，可以完全替换导出的对象。
- **Q: 为什么需要`package-lock.json`？**
  - A: `package-lock.json`确保了项目依赖的精确版本，避免了不同环境下因依赖版本不一致导致的问题，保证了构建的可重现性。

## 6. 实践示例 (Practice Examples)

### 6.1 Express.js基本服务器 (Basic Express.js Server)
- 目的说明 | Purpose explanation
  - 创建一个基本的Express服务器，响应根路径和`/about`路径的GET请求，并返回HTML文件。
- 预期输出 | Expected output
  - 访问`http://localhost:8080`显示`home.html`内容。
  - 访问`http://localhost:8080/about`显示`about.html`内容。
  - 静态资源（如CSS）能够正确加载。
- 关键步骤 | Key steps
  1. 创建项目文件夹`MyServer`。
  2. 在`MyServer`中运行`npm init`创建`package.json`。
  3. 安装Express：`npm i express`。
  4. 创建`public`和`views`文件夹。
  5. 在`views`中创建`home.html`和`about.html`。
  6. 在`public/css`中创建`site.css`。
  7. 创建`server.js`文件，并添加以下代码：

```javascript
// server.js
const express = require('express');
const path = require('path'); // 引入path模块
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// 配置静态文件服务
app.use(express.static('public'));

// 定义根路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

// 定义/about路由
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

// 启动服务器
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
```
  8. 在`views/home.html`中添加链接到`/about`和CSS。
  9. 在`views/about.html`中添加链接到`/`和CSS。
  10. 运行`node --watch server.js`启动服务器。

## 7. 学习建议 (Study Tips)
1. **动手实践**: 按照笔记中的示例代码，一步步搭建自己的Express服务器，加深理解。
2. **查阅官方文档**: 遇到不理解的概念或API，查阅Node.js和Express.js的官方文档。
3. **理解HTTP原理**: 深入理解HTTP请求和响应的生命周期，有助于更好地设计和调试Web应用。

## 8. 注意事项 (Notes) ⚠️
1. **路径问题**: 在Node.js中处理文件路径时，始终使用`path.join()`和`__dirname`来构建绝对路径，以确保跨平台兼容性。
2. **端口冲突**: 确保在本地运行服务器时，选择的端口没有被其他应用程序占用。
3. **依赖管理**: 始终使用`package.json`和`package-lock.json`来管理项目依赖，确保团队协作和部署的一致性。

## 9. 代码规范 (Code Standards) 💻
- 遵循JavaScript的ESLint或Prettier等代码风格指南。
- 变量命名使用驼峰式 (camelCase)。
- 常量使用大写字母和下划线 (UPPER_SNAKE_CASE)。
- 注释清晰明了，解释代码意图和复杂逻辑。

## 6.1 版本控制 (Version Control)
更新日期：2025-09-18
版本号：v1.0
更新内容：
- 添加了HTTP协议概述。
- 添加了Node.js模块与NPM包管理器。
- 添加了使用Express.js构建简单Web服务器。
- 按照`note_prompt.md`格式整理了全部内容。
