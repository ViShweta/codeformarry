import { Component, OnInit } from '@angular/core';
import { LocalService } from '../localstorage.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  savesubject:any;
  data:any;
  constructor(
    private storage:LocalService,
    private actionSheetCtrl: ActionSheetController,
    private route:Router,
  ) { }

  ionViewWillEnter (){
    this.Viewall();
    
  }

  ngOnInit() {
  }

  Viewall(){
    this.savesubject = JSON.parse(this.storage.getData('addUser') as string);
    console.log('data:', this.savesubject);
    //  this.savesubject.forEach((element:any)=> {
    //   console.log(element)
      
    //  });
 
    
  }

  async presentActionSheet(data:any) {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Edit',
          
          handler:() =>{
            this.route.navigate(['/home'], {state: data});
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}


