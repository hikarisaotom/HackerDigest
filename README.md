# Article reader application 📲
This project has been developed using React Native, incorporating clean architecture and atomic design principles to ensure maintainability and scalability. It integrates with the Algolia API to provide real-time information about mobile articles 📱. The app is structured into reusable components following atomic design, ensuring a modular and flexible approach to development while optimizing performance.

Author: Claudia Cortés

# How to run the project

> **Note**: While development, all libraries and similar were handled using yarn 

## Step 1: To run  Metro
```sh
yarn start
```

## Step 2: Build apps

### Android

```sh
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies .

```sh
cd ios && pod install 
 #or 
npx pod-install
```
oncethe pods are installed run 
```sh
yarn ios
```

## Run Test:
Test run using yest, for running them use the command:
```sh
yarn test
```
this will run all test suites as well as generate a  **`test code coverage report`** as well as generating spanshots for ui screens tested
> **Note**: Test were not fully finished, this has impacted the test coverage  percentage of the application,  however, exhaustive maual testing was performed by performing regression tests. 

## Code Version Strategy :octocat: 📚

Git Flow was employed as a best programming practice for feature management, utilizing four entities: **`feature branches`**, the **`develop branch`**, **`bugfix branches`**, and the **`main branch`**. 
- Feature branches were used for work in progress.
- Once the code was stable, a **`pull request`** was made to the **`develop branch`**, where the integration of new features was tested. Rach pul request had a detailed description and documentation related to the new changes incomming. 
- When bug's were  finded, **`bugfix branches`** were created to solve and provide solutions to the errors. this were also merged into  the **`develop branch`**
- Finally, if the code was stable, a **`pull request`** was made to the **`main branch`**. The main branch always contains stable and final versions of the code.

## UX/UI📍  
Drawing inspiration from common navigation models and incorporating data visualization techniques often found in popular news app, we focused on creating a user-friendly and familiar experience. To avoid overwhelming the main screen with too many tabs, a simple flow was implemented. The settings, including the home screen where tabs were initially displayed, were moved to a drawer, streamlining the main navigation.  

Additionally, the interface was designed with clear input validations, friendly messages, and intuitive empty states to enhance user understanding of the app's status. Alerts were strategically placed to notify users promptly about important actions, enriching the overall experience.  

To accommodate a diverse audience, the app supports internalization with both English and Spanish languages. Several feedback methods were integrated to keep users informed: alerts for important decisions, toasts for actions related to articles, and notifications tailored to user preferences, ensuring a smooth and engaging user experience.

## Application Structure 🏗️
The app is structured into several key components, each responsible for a distinct part of the application's functionality:

- **Navigation**: The app provides support for multiple navigation flows. In this version, a main stack navigator is used, which includes a drawer to manage the settings and tabs efficiently. This setup allows for easy integration of future features, like authentication, which will be handled by a separate navigator.

- **Local Data Saving**: News article information is cached locally using local storage. This ensures that once data is synchronized, it is available for offline use, providing users with access to news articles even without an internet connection and improving performance by reducing the need for frequent network requests.

- **Localization**: The app supports multiple languages by implementing different directories for storing and managing text. This approach was designed with scalability in mind to support easy integration of additional languages in the future, currently supporting both English and Spanish.

- **Notifications**: Various feedback mechanisms are integrated to notify users. Alerts are used for important actions, toasts notify users of article-related actions, and notifications are sent based on user preferences, ensuring a smooth and personalized experience.

- **Background Information Fetching and Refreshing**: The app is designed to fetch and refresh news articles in the background, ensuring the content remains up-to-date and that users receive the latest information even when the app is not actively in use.

## Technologies Used 📱
- **React Native**
- **TypeScript**
- **Algolia API** (for fetching articles)
- **Push Notifications** (using `@notifee/react-native` )
- **Jest** (for unit testing)
- **React Navigation** (for screen navigation)


## Demo 🚀

## OffLine Data Saving 📲  
The app implements an offline functionality model where news article information and their related data are cached locally on the user's device using local storage. This approach ensures that once the information is synchronized, it is stored locally for future use in case of no internet connection. This not only provides users with access to the news articles even when offline.

## Known Issues
- Push notifications might not work properly on simulators/emulators. Test on a real device for full functionality.
- Low test coverage due to incompatibility with some libraries. 

## Future Enhancements
- Implement more advanced filtering for 
- notifications based on article tags.
- Add user authentication for saving preferences and favorites across devices.
- Enhance UI/UX design for a smoother experience.
