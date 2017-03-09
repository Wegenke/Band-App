namespace bandApp.Controllers {

    export class HomeController {
      
    }

    export class SignInController{

        public user;
        public openDialog() {
            this.$mdDialog.show({
                controller: ModalController,
                controllerAs: 'modal',
                templateUrl: '/ngApp/views/logIn.html'
            })
            
        } 
        constructor(private $mdDialog: angular.material.IDialogService) { 
           
        }
    }
    
    export class ModalController {
        public closeDialog(){
            this.$mdDialog.hide();
        }
        constructor(private $mdDialog: angular.material.IDialogService) {
            
        }
    }

    export class CreateController {
    public events;
    public event = {};

    public save() {
        this.eventService.save(this.event).then(()=> {
        this.events = this.eventService.list(); // redisplay list
        this.event = {};  // clear form
        }).catch((err) => {
        console.error(err);
        })
    }

    public remove(eventId) {
        this.eventService.remove(eventId).then(() => {
        this.events = this.eventService.list(); // redisplay list
        }).catch((err) => {
        console.error(err);
        });
    }

    constructor(private eventService:bandApp.Services.EventService) {
        this.events = this.eventService.list();
    }
    }

    export class EditController {
        public event;

        public save() {
            this.eventService.save(this.event).then(()=> {
            this.$state.go('home'); // navigate back to home
            }).catch((err) => {
            console.error(err);
            })
        }

        constructor(
            private eventService:bandApp.Services.EventService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ) {
            let eventId = $stateParams['id'];
            this.event = this.eventService.get(eventId);
        }
    }

    export class AboutController {
    }

}
