##2014 AIM Faculty Academy: PhoneGap Workshop


Files and resources for my PhoneGap workshop at the 2014 AIM Faculty Academy

####Quick Links

This is the Infotec web application we'll be using as a reference for our mobile application:
https://event.crowdcompass.com/infotec/multi-level-list/ScheduleByTrack/1

- Slides: http://slides.com/dtauer/fa2014-phonegap
- CodePen: http://codepen.io/collection/CDdtc/

####Tools
- Notepad++ (windows) http://notepad-plus-plus.org/
- TextWrangler (mac) http://www.barebones.com/products/textwrangler/
- XAMPP (windows) https://www.apachefriends.org/index.html
- MAMP (mac) http://www.mamp.info/en/
- GitHub Application (windows) https://windows.github.com/
- GitHub Application (mac) https://mac.github.com/

####Tutorials
- HTML/CSS/JS: http://www.w3schools.com/
- HTML5 Rocks: http://www.html5rocks.com/en/tutorials/?page=1
- jQuery Mobile Tutorial: http://www.w3schools.com/jquerymobile/


####PhoneGap & PhoneGap Build
- PhoneGap Website: http://phonegap.com
- PhoneGap Build Website: http://build.phonegap.com
- PhoneGap Build Documentation: http://docs.build.phonegap.com/en_US/
- PhoneGap Starter Files: https://github.com/phonegap/phonegap-start

####Testing & Debugging
- PhoneGap Debugger: http://debug.phonegap.com/
- PhoneGap Developer App: http://app.phonegap.com/
- TestFlight: http://testflightapp.com
- ngrok: https://ngrok.com/


####CSS Frameworks
- Compare CSS Frameworks: http://usablica.github.io/front-end-frameworks/compare.html
- Twitter Bootstrap 3: http://getbootstrap.com
- Ratchet: http://goratchet.com/
- jQuery Mobile: http://jquerymobile.com
- Sencha Touch: http://www.sencha.com/products/touch/
- Kendo UI: http://www.kendoui.com/
- TopCoat: http://topcoat.io/
- TopCoat Touch: http://www.agingcoder.com/topcoat-touch/

####Full Workflow
#####GitHub
1. Create a GitHub Account (http://github.com)
2. Download/Install the GitHub Application for Mac/Windows
   - http://windows.github.com
   - http://mac.github.com

#####Development Server
1. Download/Install XAMPP (https://www.apachefriends.org/) or MAMP (http://www.mamp.info/)
2. After installation find the **htdocs** folder for the server.  This is where you'll save all your projects.
   - Default Windows Location: c:\xampp\htdoc
   - Default Mac Location: Applications/MAMP/htdocs
   - Note: During the installation, you can choose a different location if you don't have C drive access

#####Project Setup
Since the free version of PhoneGap Build requires you to use GitHub, the best thing to do when starting a new project is to first create a GitHub repository folder inside the htdocs folder. This way when you are ready to create the mobile application with PhoneGap Build, you can simply publish your code to GitHub, log into PhoneGap Build, and build the application.

1. Open the GitHub application and create a new local repository (i.e. *phonegap-test*)
2. Rather than use the default location, select your **htdocs** folder as the location. The GitHub application will create a folder in your htdocs directory with the name of the repository (i.e. *c:\xampp\htdocs\phonegap-test*).

You can now start developing your application.  Use any HTML/CSS/JavaScript libraries you'd like. You can download the PhoneGap starter project (https://github.com/phonegap/phonegap-start) and use that as a starting point.  Just delete the HTML code they have in the **<body>** tag and add your own.  You can start from scratch too. At a minimum, I recommend downloading the PhoneGap starter project and copying the **res** directory and the **config.xml** file into your project so you get the icons and configuration file.

#####Testing
Your primary way to test is in your web browser. Since you have a development server installed, you can access your application using http://localhost/phonegap-test/. Note: This URL will vary based on the folder name you choose.

To test you application on your mobile device, use the PhoneGap Developer App (http://app.phonegap.com). Follow the installation instructions on the PhoneGapp Developer App website. You will be installing the application on your desktop AND on your mobile device. Note: This testing option only works if your development computer and phone are both on the same WIFI network.

If your computer and mobile device are not on the same network, you can use ngrok (https://ngrok.com/) to make the PhoneGap Development Application work.

1. Download the PhoneGap Developer App for you mobile device from your app store (Android & iOS only).
2. Download and unzip the ngrok application (https://ngrok.com/)
3. Open a command prompt in the same directory as the ngrok.exe file you unzipped. To do this on windows hold the **shift** key and right-click in the directory and choose *Open Command Prompt*.  On Mac, open the Terminal application and drag the directory into the terminal window
4. In the command line type: **ngrok 80** and hit enter.

In the command window, you'll see messages from the ngrok server indicating it's online and it will give you a URL to access you computer (i.e. http://something.ngrok.com). You can browse this URL on your phone to view your project.  NOTE: make sure you include the folder where the project is located in the URL (i.e. http://something.ngrok.com/phonegap-test).

#####Publishing
When you want to publish the mobile application, first edit the config.xml file to edit the application name and change any of the other configuration options.  Next, you'll want to publish it to the GitHub repository:

1. Open the GitHub desktop application.
2. Click on your repository on the left.
3. Click on the *Uncommited Changes* section.
4. Add a summary of your changes and click *commit* button.
5. Lastly, click Publish or Sync to update the GitHub Server

Now that GitHub is updated, you need to create the application in PhoneGap Build and pull in the code from GitHub.

1. At http://build.phonegap.com, create an account by either creating an Adobe ID or logging in with GitHub. If you create an Adobe ID, you'll want to link your GitHub account in your PhoneGap Build user settings.
2. To create a new mobile application, click Create App and under the *Open Source* tab, select your GitHub repository.
3. Finally, click *Build Application* to compile the code and create the application.


In the case of iOS, the mobile application must be signed before it can be installed on a device.  Take a look at the getting started guides for each platform to learn about the signing/distribution process:
- http://docs.build.phonegap.com/en_US/introduction_supported_platforms.md.html#Supported%20Platforms
- http://docs.build.phonegap.com/en_US/signing_signing-ios.md.html#iOS%20Signing
- http://docs.build.phonegap.com/en_US/signing_signing-android.md.html#Android%20Signing

If you work for a school and are interested in Apple's University iOS Program, visit: https://developer.apple.com/support/ios/university.php















