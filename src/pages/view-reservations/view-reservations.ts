import {Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import {EditReservation} from "../edit-reservation/edit-reservation";
import {AddReservationPage} from "../add-reservation-page/add-reservation-page";
import * as Constant from '../../app/constants';

/**
 * Generated class for the ViewReservations page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-view-reservations',
    templateUrl: 'view-reservations.html',
})
export class ViewReservations {

    reservations: Array<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
        this.loadReservation();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ViewReservations');
    }

    loadReservation() {
        this.http.get(Constant.API_ENDPOINT + '/api/getReservations').map(res => res.json()).subscribe(data => {
            console.log(data);
            this.reservations = data;
        });
    }

    addReservation() {
        this.navCtrl.push(AddReservationPage);
    }

    removeReservation(reservation) {
        let confirm = this.alertCtrl.create({
            title: 'Delete Confirm ?',
            message: 'Do you want to delete this reservation (' + reservation.id + ') ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.http.post(Constant.API_ENDPOINT + '/api/deleteReservation', {id: reservation.id}).map(res => res.json()).subscribe(data => {
                            console.log(data);
                            this.loadReservation();
                        });
                    }
                }
            ]
        });
        confirm.present();
    }

    editReservation(data) {
        this.navCtrl.push(EditReservation, {
            reservation: data
        });
    }

}
