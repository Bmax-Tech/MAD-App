import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Registration} from "../registration/registration";
import {Http} from "@angular/http";
import {HomePage} from "../home/home";
import * as Constant from '../../app/constants';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class Login {

    login = {
        username: "",
        password: ""
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }

    moveToRegistration() {
        this.navCtrl.push(Registration);
    }

    doLogin() {
        if (this.login.username == "" || this.login.password == "") {
            let alert = this.alertCtrl.create({
                title: 'Missing details!',
                subTitle: 'Please enter valid username and password',
                buttons: ['OK']
            });
            alert.present();
        } else {
            this.http.post(Constant.API_ENDPOINT + '/api/getUser', this.login).map(res => res.json()).subscribe(data => {
                console.log(data);
                if (data.length > 0) {
                    // found valid user
                    this.navCtrl.setRoot(HomePage);
                } else {
                    // user not found
                    let alert = this.alertCtrl.create({
                        title: 'User not Found!',
                        subTitle: 'Please verify username and password',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            });
        }
    }
}
