System.register("firebase/app", ["firebase/app"], function (exports_1, context_1) {
    "use strict";
    var app_1, firebaseConfig, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_1_1) {
                app_1 = app_1_1;
            }
        ],
        execute: function () {
            firebaseConfig = {
                apiKey: "AIzaSyBOCNtWoCqVeyXHlfWR9yYCREW0_-j57Ao",
                authDomain: "thing-about-link.firebaseapp.com",
                projectId: "thing-about-link",
                storageBucket: "thing-about-link.appspot.com",
                messagingSenderId: "131050257923",
                appId: "1:131050257923:web:36edba2739fdfa90add836",
                measurementId: "G-5JLRF789Y0"
            };
            exports_1("app", app = app_1.initializeApp(firebaseConfig));
        }
    };
});
System.register("firebase/db", ["firebase/firestore"], function (exports_2, context_2) {
    "use strict";
    var firestore_1, db;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (firestore_1_1) {
                firestore_1 = firestore_1_1;
            }
        ],
        execute: function () {
            exports_2("db", db = firestore_1.getFirestore());
        }
    };
});
System.register("index", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            console.log('START');
        }
    };
});
