namespace bandApp.Services {
     
     export class EventService {
      private EventResource;

      public get(id) {
        return this.EventResource.get({id:id});
      }

      public list() {
        return this.EventResource.query();
      }

      public save(event) {
        return this.EventResource.save({id:event._id}, event).$promise;
      }

      public remove(eventId) {
        return this.EventResource.remove({id:eventId}).$promise;
      }

      constructor($resource:ng.resource.IResourceService) {
        this.EventResource = $resource('/api/events/:id');
      }
  }

  angular.module('events').service('eventService', EventService);
    
}