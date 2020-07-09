# Enquiry
A react native app showcasing redux, react-natigation with axios.

### Steps to install
#### Clone the project
    git clone git@github.com:arjun-livquik/enquiry.git
    cd enquiry
 #### Install npm dependencies
If you yarn then run

    yarn install

else run

    npm install
    
    
#### Running on Android
Turn on the emulator or connect to a device and run

    npx react-native run-android
#### Running on iOS
Install the cocoapods

    cd ios
    pod install
    cd ..
Run on emulator using

    npx react-native run-ios

Run test using jest

    yarn test

#### Coding Standards.
* Flow has been added for static type checking in javascript. Please use // @flow in the beginning of every file and add the flow-types.
* Write unit test cases using jest. Examples in the __tests__ dir. Mocks in __mocks__ dir.
