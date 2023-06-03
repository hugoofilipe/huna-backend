# huna-backend
This is an application to serve an API for emails and other stuff.

Production:
 - Is in api.huna.pt;
    - Sudomain for api created;
    - Created git folder there;
    - Create nodejs service on same folder;

Config:
- Need add two enviromental variables on CPANEL NODEJS
    - MAIL_USER
    - MAIL_PWD
- Need to add this on file .htaccess:
    - Header set Access-Control-Allow-Origin "*"
    - Header set Access-Control-Allow-Methods "GET,PUT,POST,DELETE"
    - Header set Access-Control-Allow-Headers "Content-Type, Authorization"

To run it:
 - node server.js

The main goal of this application is to:
- [not done yet] Share API to dealing with contact form by Huna. Receive detail of data and send it to email;
- [not done yet] Share API to serve links to cameras of Huna. This links came from mysqld database in webhs provider;
- [not done yet] Share API to serve POST request for backoffice builded on huna;
- [not done yet] Share API to receive data from  users traffic. Save thinks like username, time, etc.. ;

Nice to have:
- Put it in a locally container;
- Era fixe ter um swagger nisto para ver a API a responder e ver se está de pé;

Problems to solve:
- pôr isto a comunicar com a nova base de dados anaehugo_huna_bo
- expor a API para servir links
