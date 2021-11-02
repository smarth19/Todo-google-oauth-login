A ToDo Application with Google OAuth Login

** To setup API **

1. Go to https://console.cloud.google.com/
2. Create a new project and select it
3. Click "API and Services" on sidebar
4. Click "Credentials" tab on sidebar
5. Click "Configure Consent Screen"
6. Select External (user type)
7. Give the app name (could be anything)
8. select email
10. Add any email in developer info section.
11. Click Save and continue
12. Again Click Save and continue
13. Then in Test users Tab, add the email with which you'll login into app (This is mandatory as only test users can login into a test app)
14. Then Click Save and continue and click Back ti Dashboard from Summary Tab
15. Go to Credentials Tab > Click "Create Credentials" given on Top > "OAuth Client ID"
16. Application Type > Web Application
17. Add "http://localhost:3000" in both Authorised JavaScript origins and Authorised redirect URIs
18. Then Click Create, and your OAuth Client ID is created
19. Copy your Client ID
and Paste it in todo/.env/ inplace of XXXXXXXXXXXX (REACT_APP_GOOGLE_OAUTH = XXXXXXXXXXXX)
also Paste it in backend/.env inplace of XXXXXXXXXXXX (GOOGLE_OAUTH_CLIENT_ID = XXXXXXXXXXXX)

Now open a mongoD in windows powershell

** To Start Application **

For Client
Go to ./toDo in terminal and type "npm start" and enter

For Backend
Go to ./backend in another terminal instance and type "node server" or "nodemon server" and enter
