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


  //  this.users =  this.githubapiService.getbyUsername(userform.value.userName);
  //  console.log("ssdsdsd", this.users);



  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // this.users = this.githubapiService.getUsers(this.userform.value.userName);
  }



  submitform(userform: NgForm) {
    this.githubapiService.getUsers(userform.value.userName).subscribe(users => {
      this.userlist = users;
      console.log('ruserss -->', this.userlist);
      console.log('ruserss length -->', this.userlist.total_count);
      this.mArti =  users["items"];
      console.log('response is -->', this.mArti);
    });
    // this.githubapiService.getbyUsername().subscribe(data => {
    //   console.log('resp is', data);
    //   });
    // const searchings = userform.value.userName;
    // return this.http.get('https://api.github.com/users/' + searchings + '?per_page=10').subscribe(users => {
    //   console.log('resp is', users);
    //   });

  }

  openDetail(userform: NgForm){
    this.opendetails = !this.opendetails;
    this.githubapiService.getuserRepos(userform.value.userName).subscribe(users => {
    this.repodetails = users;
    });
  }

  namesort(){
    alert("ipe");
  }


}
