define([ "dojo/_base/declare", "alfresco/core/Core", "dojo/_base/lang",
      "alfresco/core/CoreXhr", "service/constants/Default" ], function(declare,
      Core, lang, CoreXhr, AlfConstants)
{

   return declare([ Core, CoreXhr ],
   {

      constructor : function tutorial_UserAndGroupService__constructor(args)
      {
         lang.mixin(this, args);
         this.alfSubscribe("TUTORIAL_CREATE_GROUP", lang.hitch(this,
               this.createGroup));
      },

      createGroup: function tutorial_UserAndGroupService__createGroup(payload) {
         this.serviceXhr({
           url: AlfConstants.PROXY_URI + "api/rootgroups/" + payload.groupId,
           method: "POST",
           data: {
             displayName: payload.displayName
           },
           successCallback: this.onSuccess,
           callbackScope: this
         });
       },
       onSuccess: function tutorial_UserAndGroupService__onSuccess(response, originalRequestConfig) {
          this.alfPublish("ALF_DOCLIST_RELOAD_DATA", {});
        }
   });
});