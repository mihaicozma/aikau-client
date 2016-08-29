model.jsonModel =
{
   services : [ "alfresco/services/CrudService",
         "alfresco/services/DialogService",
         "tutorial/UserAndGroupService"],
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
         },
         {
            name : "alfresco/buttons/AlfButton",
            config :
            {
               label : "Create New Group",
               publishTopic : "ALF_CREATE_FORM_DIALOG_REQUEST",
               publishPayload :
               {
                  dialogTitle : "Create Group",
                  dialogConfirmationButtonTitle : "Create",
                  dialogCancellationButtonTitle : "Cancel",
                  formSubmissionTopic: "TUTORIAL_CREATE_GROUP",
                  fixedWidth : true,
                  widgets : [
                        {
                           name : "alfresco/forms/controls/TextBox",
                           config :
                           {
                              fieldId : "ID",
                              label : "Identifier",
                              name : "groupId",
                              description : "Enter a unique identifier for the group. Only alphanumeric characters are allowed",
                              requirementConfig :
                              {
                                 initialValue : true
                              },
                              validationConfig : [
                              {
                                 validation : "regex",
                                 regex : "^[A-Za-z0-9]+$",
                                 errorMessage : "Alphanumeric characters only"
                              } ]
                           }
                        },
                        {
                           name : "alfresco/forms/controls/TextBox",
                           config :
                           {
                              fieldId : "DISPLAYNAME",
                              label : "Display name",
                              name : "displayName"
                           }
                        } ]
               }
            }
         } ]
};