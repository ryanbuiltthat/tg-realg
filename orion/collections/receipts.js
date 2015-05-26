/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Receipts = new orion.collection('receipts', {
  singularName: 'receipt', // The name of one of this items
  pluralName: 'receipts', // The name of more than one of this items
  // icon: 'database',
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: 'Receipts' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      {
        tmpl: Meteor.isClient && Template.viewReceiptBtn
      },
      { data: "customerName", title: "To" },
      { data: "customerEmail", title: "Email"},
      //{ data: "createdByName", title: "Creator"},
      //orion.attributeColumn('createdBy', 'createdBy', 'Sent By'),
      { 
        data: "createdAt",
        title: "Date",
        render: function(val, type, doc){
          if (val instanceof Date){
            return moment(val).calendar();
          }
        }
      },
      //orion.attributeColumn('createdAt', 'createdAt', 'Created At')
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Receipts.attachSchema(new SimpleSchema({
  customerName: {
    type: String
  },
  /**
   * The file attribute is a custom orion attribute
   * This is where orion do the magic. Just set 
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  // image: orion.attribute('file', {
  //     label: 'Image',
  //     optional: true
  // }),
  /**
   * Here its the same with image attribute.
   * summernote is a html editor.
   */
   customerEmail: {
    type: String
  },
  guaranteesSelected: {
      type: String,
      autoform:{
        type: "hidden",
        label: false
      },
      optional: true,
      //optional: true,
   },
   createdByName: {
      type: String,
      autoform:{
        type: "hidden",
        label: false,
        defaultValue: function(){
            var user = Meteor.users.findOne(Meteor.userId());
            return user.profile.name;
        }
      },
      optional: true,

   },
  // body: orion.attribute('summernote', {
  //     label: 'Body'
  // }),
  /**
   * This attribute sets the user id of the user that created 
   * this receipt automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the receipts
 * collection to easily get the user
 */

//"_id" : "DQwAsxR895APdWEKf"