# Article Reader Application 📲

This project has been developed using React Native, incorporating clean architecture and atomic design principles to ensure maintainability and scalability. It integrates with the Algolia API to provide real-time information about mobile articles 📱. The app is structured into reusable components following atomic design, ensuring a modular and flexible approach to development while optimizing performance.

Author: Claudia Cortés

---

## How to Run the Project

> **Note:** During development, all dependencies and configurations were managed using Yarn.

### **Before Running the Project**

Environment variables are used to configure the application. For security reasons, the `.env` file is excluded from the repository. To set up the environment, create a `.env` file in the root folder and include the following variables:

```sh
API_URL=https://hn.algolia.com/api/v1/search_by_date?query=$SEARCH_TERM$
ENVIRONMENT=development
DEFAULT_SEARCH_TERM=mobile
DEFAULT_SYNC_INTERVAL=180000
```
Once the environment file is ready, proceed to the steps below

## Step 1: Start  Metro
```sh
yarn start
```

## Step 2: Build the Application

### Android

```sh
yarn android
```

### iOS

For iOS, install CocoaPods dependencies first:

```sh
cd ios && pod install 
 #or 
npx pod-install
```
then run 

```sh
yarn ios
```

## 3. Run Test:
Use the following command to execute tests:

```sh
yarn test
```
This will run all test suites, generate  a **`test code coverage report`**, and create UI snapshots.

> **Note**: Due to incomplete test coverage, exhaustive manual regression testing was performed.

## Demo 🚀
You can see a demo for [iOS](https://drive.google.com/drive/folders/15YRryfhsvUzEzZZp--rlP9EB_TRM8hb_?usp=sharing) and [Android](https://drive.google.com/drive/folders/11S1XmHfgAJl4K4vnS8eekAyWl3gpYFfc?usp=sharing). 

## Code Version Strategy :octocat: 📚

Git Flow was employed as a best programming practice for feature management, utilizing four entities: feature branches, the develop branch, bugfix branches, and the main branch.

- **Feature Branches:** Used for work in progress.
- **Develop Branch:** Pull requests were made here once the code was stable, and all integrations were tested. Each pull request included detailed descriptions and documentation for the new changes.
- **Bugfix Branches:** Created to address bugs. These fixes were also merged into the develop branch.
- **Main Branch:** Contained stable and final versions of the code after successful testing and review.

> **Note** When creating the pull request, the branches were not intentionally deleted in order to keep them as illustrative examples of the work done. This allows reviewers and collaborators to clearly observe the structure and flow of tasks, as well as the specific changes made in each branch before merging them

## UX/UI📍  
Drawing inspiration from common navigation models and incorporating data visualization techniques often found in popular news apps, we focused on creating a user-friendly and familiar experience.  

- **Navigation:** Tabs were initially displayed on the home screen but were later moved to a drawer to streamline navigation and avoid clutter.
- **Input Validations and Alerts:** The interface was designed with clear input validations, friendly messages, and intuitive empty states to enhance user understanding.
- **Feedback Mechanisms:** Alerts, toasts, and notifications were integrated to provide real-time feedback and keep users informed about important actions.

> **Note**:To accommodate a diverse audience, the app supports localization for both English and Spanish.


## Application Structure 🏗️
The app is structured into several key components, each responsible for a distinct part of the application's functionality:

- **Navigation:** Utilizes a main stack navigator with a drawer to manage settings and tabs efficiently. Future features like authentication will be handled by separate navigators.
- **Local Data Saving:** News articles are cached locally using  **local storage**, allowing offline access and reducing frequent network requests.
- **Localization:** Supports multiple languages by storing text in organized directories. Currently supports English and Spanish.
- **Notifications:** Alerts, toasts, and notifications keep users informed, providing a personalized and engaging experience.
- **Background Sync:** Fetches and refreshes news articles in the background to ensure users receive up-to-date content even when the app is not actively in use.

## Technologies Used 📱
- **React Native**
- **TypeScript**
- **Algolia API** (for fetching articles)
- **Push Notifications** (using `@notifee/react-native` )
- **Jest** (for unit testing)
- **React Navigation** (for screen navigation)

## OffLine Data Saving 📲  
The app implements offline functionality by caching news article information locally on the user's device. This ensures access to articles even without an internet connection, improving both user experience and performance.

## Known Issues
- Push notifications might not function correctly on simulators. Use a physical device for full functionality.
- Some libraries used in the project are not fully compatible with Jest, reducing automated test coverage.
- Test coverage and number of tests limited due to incompatibilities and time limitations 

## Future Enhancements
- Implement advanced filtering for notifications based on article tags.
- Add user authentication to save preferences and favorites across devices.
- Backend suport to add profile picture for each user and display them in home screen along with the articles
- Enhance UI/UX design for a smoother and more intuitive experience.
- Enhance dependency imports into modules
