import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import {AddReservationPage} from "../add-reservation-page/add-reservation-page";
import * as Constant from '../../app/constants';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items: Array<any>;
    searchInput: string;

    constructor(public navCtrl: NavController, public http: Http) {
        this.loadSearchData();
    }

    loadSearchData() {
        this.http.get(Constant.API_ENDPOINT + '/api/getHotels').map(res => res.json()).subscribe(data => {
            console.log(data);
            this.items = data;
        });
    }

    getItems(input) {
        this.http.post(Constant.API_ENDPOINT + '/api/searchHotels', {query: this.searchInput}).map(res => res.json()).subscribe(data => {
            this.items = data;
        });
    }

    addReservation(id) {
        this.navCtrl.push(AddReservationPage, {hotel_id: id});
    }
}
