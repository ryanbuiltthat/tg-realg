FooterLinks = new orion.collection('footerlinks', {
  singularName: 'footerlink', // The name of one of this items
  pluralName: 'footerlinks', // The name of more than one of this items
  link: {
    title: 'Footer Menu' 
  },
  tabular: {
    columns: [
      { data: "label", title: "Text"},
      { data: "url", title: "URL" },
    ]
  }
});
FooterLinks.attachSchema(new SimpleSchema({
  label: {
    type: String
  },
  url: {
    type: String
  },
  icon: {
    type: String
  },  
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
/**
 * Using dburles:collection-helpers we will add a helper to the footerlinks
 * collection to easily get the user
 */
FooterLinks.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});