import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {ImagePicker} from "@ionic-native/image-picker";
import * as Constant from '../../app/constants';

/**
 * Generated class for the Registration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html',
})
export class Registration {
    base64Image: string;
    occupations: Array<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private imagePicker: ImagePicker) {
        this.loadOccupations();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Registration');
    }

    loadOccupations() {
        this.http.get(Constant.API_ENDPOINT + '/api/getOccupations').map(res => res.json()).subscribe(data => {
            console.log(data);
            this.occupations = data;
        });
    }

    accessGallery() {
        this.imagePicker.getPictures({
            maximumImagesCount: 1
        }).then((results) => {
            this.base64Image = "data:image/jpeg;base64," + results[0];
        }, (err) => {
        });
    }

}
