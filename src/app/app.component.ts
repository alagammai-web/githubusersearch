import {
  Component
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  GithubapiService
} from './services/githubapi.service';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Githubusers';
  users: any;
  userform: NgForm;
  sortedusers: any;
  mArti: any;
  userlist: any;
  repodetails: any;
  mName: string;
  opendetails = false;
  constructor(private githubapiService: GithubapiService, private http: HttpClient) {

  }




  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
   
  }



  submitform(userform: NgForm) {
    this.githubapiService.getUsers(userform.value.userName).subscribe(users => {
      this.userlist = users;
      console.log('ruserss -->', this.userlist);
      console.log('ruserss length -->', this.userlist.total_count);
      this.mArti =  users["items"];
      console.log('response is -->', this.mArti);
    });
  }

  openDetail(userform: NgForm){
    this.opendetails = !this.opendetails;
    this.githubapiService.getuserRepos(userform.value.userName).subscribe(users => {
    this.repodetails = users;
    });
  }




}
