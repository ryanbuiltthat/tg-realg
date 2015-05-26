/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Guarantees = new orion.collection('guarantees', {
  singularName: 'guarantee', // The name of one of this items
  pluralName: 'guarantees', // The name of more than one of this items
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: 'Guarantees' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('file', 'iconImage', 'Icon'),
      orion.attributeColumn('file', 'hero', 'Hero'),
      // orion.attributeColumn('froala', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At')
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Guarantees.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  dek: {
    type: String,
    label: "Sub-Heading",
  },
  /**
   * The file attribute is a custom orion attribute
   * This is where orion do the magic. Just set 
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  iconImage: orion.attribute('file', {
      label: 'Icon',
      optional: true
  }),
  hero: orion.attribute('file', {
      label: 'Hero',
      optional: true
  }),
  /**
   * Here its the same with image attribute.
   * summernote is a html editor.
   */
  body: orion.attribute('froala', {
      label: 'Full Text',
      optional: true
  }),
  /**
   * This attribute sets the user id of the user that created 
   * this guarantee automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the guarantees
 * collection to easily get the user
 */

// Guarantees.helpers({
//   getCreator: function () {
//     return Meteor.users.findOne({ _id: this.createdBy });
//   }
// });

