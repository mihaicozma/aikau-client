model.jsonModel =
{
   services : [ "alfresco/services/CrudService" ],
   widgets : [
   {
      name : "alfresco/lists/AlfList",
      config :
      {
         loadDataPublishTopic : "ALF_CRUD_GET_ALL",
         loadDataPublishPayload :
         {
            url : "api/groups?sortBy=displayName&zone=APP.DEFAULT"
         },
         itemsProperty : "data",
         widgets : [
         {
            name : "alfresco/lists/views/AlfListView",
            config :
            {
               widgets : [
               {
                  name : "alfresco/lists/views/layouts/Row",
                  config :
                  {
                     widgets : [
                     {
                        name : "alfresco/lists/views/layouts/Cell",
                        config :
                        {
                           widgets : [
                           {
                              name : "alfresco/renderers/Property",
                              config :
                              {
                                 propertyToRender : "displayName"
                              }
                           } ]
                        }
                     } ]
                  }
               } ]
            }
         }

         ]
      }
   } ]
};