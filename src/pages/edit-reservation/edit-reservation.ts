import {Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import * as Constant from '../../app/constants';

/**
 * Generated class for the EditReservation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-edit-reservation',
    templateUrl: 'edit-reservation.html',
})
export class EditReservation {

    form = {
        name: "",
        date: "",
        count: 0
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
        this.form = navParams.get('reservation');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditReservation');
    }

    editReservation() {
        this.http.post(Constant.API_ENDPOINT + '/api/updateReservation', this.form).map(res => res.json()).subscribe(data => {
            let alert = this.alertCtrl.create({
                title: 'Reservation Status!',
                subTitle: 'Reservation Updated successfully',
                buttons: ['OK']
            });
            alert.present();
        });
    }
}
