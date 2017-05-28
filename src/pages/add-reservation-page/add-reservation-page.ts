import {Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import * as Constant from '../../app/constants';

/**
 * Generated class for the AddReservationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-add-reservation-page',
    templateUrl: 'add-reservation-page.html',
})
export class AddReservationPage {
    form = {
        name: "",
        date: "",
        count: 0,
        hotel_id: 0
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
        this.form.hotel_id = navParams.get('hotel_id');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddReservationPage');
    }

    addReservation() {
        this.http.post(Constant.API_ENDPOINT + '/api/makeReservations', this.form).map(res => res.json()).subscribe(data => {
            let alert = this.alertCtrl.create({
                title: 'Reservation Status!',
                subTitle: 'Reservation added successfully',
                buttons: ['OK']
            });
            alert.present();
            this.form = {
                name: "",
                date: "",
                count: 0,
                hotel_id: 0
            };
        });
    }

}
