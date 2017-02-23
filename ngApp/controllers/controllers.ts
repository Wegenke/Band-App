namespace bandApp.Controllers {

    export class HomeController {
      
    }

    export class SignInController{

        public user;
        public openDialog() {
            this.$mdDialog.show({
                controller: ModalController,
                controllerAs: 'modal',
                templateUrl: '/ngApp/views/logIn.html',
                clickOutsideToClose: true
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

    export class AboutController {
    }

}
