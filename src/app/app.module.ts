import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {AddReservationPage} from "../pages/add-reservation-page/add-reservation-page";
import {HttpModule} from "@angular/http";
import {ViewReservations} from "../pages/view-reservations/view-reservations";
import {EditReservation} from "../pages/edit-reservation/edit-reservation";
import {Login} from "../pages/login/login";
import {Registration} from "../pages/registration/registration";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddReservationPage,
        ViewReservations,
        EditReservation,
        Login,
        Registration
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AddReservationPage,
        ViewReservations,
        EditReservation,
        Login,
        Registration
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
